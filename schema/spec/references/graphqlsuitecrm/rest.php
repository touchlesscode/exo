<?php
if (!defined('sugarEntry')) {
    define('sugarEntry', true);
}
require '../../autoload.php';
require_once 'graphql/Schema/searchHelper.php';
require_once 'graphql/Schema/argsHelper.php';
//SuiteCRM files require other files from their relative path so we need to make sure we move from here
chdir('../../../');
define("DIR", dirname(__FILE__));
define("CRM_DIR", dirname(__FILE__) . "/../../../");
set_include_path(DIR . '/' . PATH_SEPARATOR  . get_include_path());
require_once('data/SugarBean.php');
require_once('include/entryPoint.php');
require_once('config.php');
require_once('include/utils.php');
require_once('include/TimeDate.php');
require_once('modules/ACLRoles/ACLRole.php');
require_once('include/SugarLogger/LoggerManager.php');
require_once('modules/Opportunities/Opportunity.php');
require_once('modules/Contacts/Contact.php');
require_once('modules/Accounts/Account.php');
require_once('modules/Calls/Call.php');
require_once('modules/Leads/Lead.php');
require_once('modules/AOS_Contracts/AOS_Contracts.php');
require_once('modules/AOS_Invoices/AOS_Invoices.php');
require_once('modules/Prospects/Prospect.php');
require_once('modules/ProspectLists/ProspectList.php');
require_once('modules/Cases/Case.php');
require_once('modules/Meetings/Meeting.php');
require_once('modules/Tasks/Task.php');
require_once('modules/Documents/Document.php');
require_once('modules/Notes/Note.php');
require_once('include/formbase.php');

use Youshido\GraphQL\Execution\Processor;
use Youshido\GraphQL\Schema;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Slim\Http\UploadedFile as UploadedFile;

$config = [];
$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;
$config['determineRouteBeforeAppMiddleware'] = true;
$app  = new \Slim\App(["settings" => $config]);
// initialize app
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
        ->withHeader('Access-Control-Allow-Origin', '*')
        ->withHeader('Access-Control-Allow-Headers', 'Cache-Control, X-Requested-With, Content-Type, Accept, Origin, Authorization')
        ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});
//This is dependency injection using Slim DIC -
$container = $app->getContainer();
$container['logger'] = function ($c) {
    $logger = new \Monolog\Logger('rest.php-logger');
    $file_handler = new \Monolog\Handler\StreamHandler("rest.log");
    $logger->pushHandler($file_handler);
    return $logger;
};

$app->add(function ($request, $response, $next) {
    if (empty($request->getAttribute('route'))) {
        // return next Action when route not found
        return $next($request, $response);
    }
    if ($request->getAttribute('route')->getArgument('auth', true)) {
        session_start();
        if (isset($_SESSION['authenticated_user_id'])) {
            //Somehow and sometimes current_user is not set, this breaks some functionality
            //We copy this idea from
            // https://github.com/salesagility/SuiteCRM/blob/932b87108edc154dd3c9c86b57ceaa24acd40835/modules/jjwg_Address_Cache/jjwg_Address_Cache.php
            if (empty($GLOBALS['current_user']->id) && !empty($_SESSION['authenticated_user_id'])) {
                $GLOBALS['current_user'] = new User();
                $GLOBALS['current_user']->retrieve($_SESSION['authenticated_user_id']);
            }
            if (empty($GLOBALS['current_language'])) {
                $GLOBALS['current_language'] = $sugar_config['default_language'];
            }
            $GLOBALS['app_list_strings'] = return_app_list_strings_language($GLOBALS['current_language']);
            return $next($request, $response);
        } else {
            return $response->withJson(['result' => 'error', 'message' => 'not authenticated'], 403);
        }
    }
    return $next($request, $response);
});

$app->post('/graphql', function (Request $request, Response $response) {
    global $app_strings, $sugar_config, $app_list_strings, $sugar_config;
    $default_language = $sugar_config['default_language'];
    $app_list_strings = return_app_list_strings_language($default_language);
    require_once DIR . '/graphql/Schema/SuiteCRMSchema.php';
    require_once DIR . '/graphql/schema-bootstrap.php';
    $schema = new SuiteCRMSchema();
    $processor = new Processor($schema);
    $parsedBody = $request->getParsedBody();
    $parsedVariables = isset($parsedBody['variables']) ? $parsedBody['variables'] : "";
    $parsedBody = $parsedBody['query'];
    $processor->processPayload($parsedBody, $parsedVariables);
    return $response->withJson($processor->getResponseData());
});

$app->get('/ping', function ($request, $response) {
    $reponseJson = $response->withJson(array("method" => "ping", "result" => "pong"));
    return $reponseJson;
})->setArgument('auth', false);

$app->post('/sendEmail', function (Request $request, Response $response) {
    $parsedBody     = $request->getParsedBody();
    $message        = $parsedBody->message;
    $recipient      = $parsedBody->recipient;
    $template       = $parsedBody->template;
    $subject        = $parsedBody->subject;
    $attachments   = $parsedBody->attachments;

    if (empty($message) || empty($recipient) || empty($template)) {
        return json_encode("Invalid parameters");
    }
    global $current_user, $db;
    require_once("include/SugarPHPMailer.php");
    $query                  = "select id, name from email_templates where name ='" . $template . "';"; // where name like '%a2%' limit 1";
    $results                = $db->query($query);
    $current_emailtemplate  = new EmailTemplate();
    $idTemplate             =   '';
    while ($row = $db->fetchByAssoc($results)) {
        $idTemplate = $row['id'];
    }
    $current_emailtemplate->retrieve($idTemplate);
    //escape email template contents.
    $current_emailtemplate->subject = from_html($current_emailtemplate->subject);
    $current_emailtemplate->body_html = from_html($current_emailtemplate->body_html);
    $current_emailtemplate->body = from_html($current_emailtemplate->body);
    $mail = new SugarPHPMailer();
    $mail->Mailer = "smtp"; //make configurable
    $mail->IsHTML(true);
    // Set the different fields for the attachments
    foreach ($attachments as $key => $attachement) {
        $file_name  = $attachement->name;
        $location  = __DIR__ . "/upload/{$attachement->id}";
        $mime_type  = $attachment->$attachement->mimeType;
        // Add attachment to email
        $mail->AddAttachment($location, $file_name, 'base64', $mime_type);
    }


    $email_body = $current_emailtemplate->body_html;
    $email_body = str_replace('{{message}}', $message, $email_body);
    $current_emailtemplate->body_html = $email_body;

    $mail->ClearAllRecipients();
    $mail->ClearReplyTos();
    $mail->setMailerForSystem();
    /** [IC] jeggers: 8/6/2008 */
    $sugarEmailAddress = new SugarEmailAddress();
    /** end [IC] */
    $mail->AddAddress($recipient);
    $emailObj = new Email();
    $defaults = $emailObj->getSystemDefaultEmail();
    $mail->From = $defaults['email'];
    $mail->Sender = $defaults['email'];
    $mail->FromName = $defaults['name'];

    if ($subject == 'From Template') {
        $mail->Subject =  $current_emailtemplate->subject;
    } else {
        $mail->Subject = $subject;
    }
    //check if this template is meant to be used as "text only"
    $text_only = false;
    if (isset($current_emailtemplate->text_only) && $current_emailtemplate->text_only) {
        $text_only = true;
    }
    //if this template is textonly, then just send text body.
    if ($text_only) {
        $this->description_html = '';
        $mail->IsHTML(false);
    }
    $mail->Body = $current_emailtemplate->body_html;

    $mail->prepForOutbound();
    $success = $mail->Send();
    if (!$success) {
        error_log("Email failed to send. " . $mail->ErrorInfo);
        error_log($subject);
        error_log($message);
        error_log($recipient);
        error_log($template);
        echo json_encode($mail->ErrorInfo);
    }
    $reponseJson = $response->withJson(array("result" => "success"));
    return $reponseJson;
});
$app->post('/webtocontactopportunity', function (Request $request, Response $response) {
    $parsedBody     = $request->getParsedBody();

    $first_name        = $parsedBody['contact_first_name'];
    $last_name        = $parsedBody['contact_last_name'];
    $phone_mobile        = $parsedBody['contact_phone_mobile'];
    $email        = $parsedBody['contact_email1'];
    $opportunity_name        = $parsedBody['opportunity_name'];
    $campaign_id        = $parsedBody['campaign_id'];
    $assigned_user_id        = $parsedBody['assigned_user_id'];

    if (empty($last_name)) {
        return $response->withJson(['result' => 'error', 'message' => 'Last Name missing'], 400);
    } elseif (empty($campaign_id)) {
        return $response->withJson(['result' => 'error', 'message' => 'Campaign Id missing'], 400);
    } elseif (empty($email) && empty($phone_mobile)) {
        return $response->withJson(['result' => 'error', 'message' => 'Missing contact information - at least a phone (contact_phone_mobile) or an email (contact_email1) should be provided'], 400);
    }

    global $current_user, $db, $dictionary, $moduleList, $beanList, $beanFiles, $app_list_strings, $sugar_config;
    $GLOBALS['app_list_strings'] = return_app_list_strings_language($GLOBALS['current_language']);
    $default_language = $sugar_config['default_language'];

    $current_user->id = "bot";
    $co = new Contact();
    $op = new Opportunity();
    if (empty($language)) {
        $language = $default_language;
    }
    $entities = ["Contacts", "Opportunities"];
    $moduleFields = array();
    foreach ($entities as $entity) {
        $object = BeanFactory::getObjectName($entity);
        VardefManager::refreshVardefs($entity, $object);
        if (!empty($beanList[$entity]) && $entity != "Cases") {
            $entity = $beanList[$entity];
        } elseif ($entity == "Cases") {
            //Case is a special scenario, Cases is the entity, but aCase is the class and Case seems to be in the dictionary
            $entity = "Case";
        }
        if (isset($dictionary[$entity])) {
            $moduleFields[$entity] = $dictionary[$entity]['fields'];
        } else {
            $moduleFields = null;
        }
    }
    foreach ($parsedBody as $parameter => $value) {
        if (substr_count($parameter, 'contact_') > 0) {
            $tentativeVariableName = str_replace('contact_', '', $parameter);
            if (isset($moduleFields['Contact'][$tentativeVariableName])) {
                $co->{$tentativeVariableName} = $value;
            }
        }
        if (substr_count($parameter, 'opportunity_') > 0) {
            $tentativeVariableName = str_replace('opportunity_', '', $parameter);
            if (isset($moduleFields['Opportunity'][$tentativeVariableName])) {
                $op->{$tentativeVariableName} = $value;
            }
        }
    }
    $co->last_name =  $last_name;
    $co->email1 =  $email;
    $op->name = $op->name ? $op->name : "Web Opportunity";
    $op->campaign_id = $campaign_id;
    $co->campaign_id = $campaign_id;
    $op->assigned_user_id =  $assigned_user_id ? $assigned_user_id : "bot";
    $co->assigned_user_id =  $assigned_user_id ? $assigned_user_id : "bot";
    $co->save();
    foreach ($co->get_linked_beans('accounts') as $account) {
        $account_id = $account->id;
    }
    if (!empty($account_id)) {
        $op->account_id = $account_id;
    }
    $op->contact_id = $co->id;
    //Only for LionixCRM - suitecrm/sugarcrm will not mind having this set unless is a new field on your installation
    $op->maincontact_c = $co->id;
    $op->sales_stage = "Prospecting";
    $op->save();
    $co = $co->retrieve($co->id);
    $co->opportunity_id = $op->id;
    $co->save();
    if (isset($co->id) && isset($op->id)) {
        return $response->withJson(array("result" => "success"), 200);
    } else {
        file_put_contents($_SERVER["DOCUMENT_ROOT"] . "/lx.log", PHP_EOL . date_format(date_create(), "Y-m-d H:i:s ")  . __FILE__ . ":" . __LINE__ . " -- " . print_r("Opportunity or Contact could not be saved - Dumping request for analysis", 1) . PHP_EOL, FILE_APPEND);
        file_put_contents($_SERVER["DOCUMENT_ROOT"] . "/lx.log", PHP_EOL . date_format(date_create(), "Y-m-d H:i:s ")  . __FILE__ . ":" . __LINE__ . " -- " . print_r($parsedBody, 1) . PHP_EOL, FILE_APPEND);
        return $response->withJson(array("result" => "error", "message" => "Unknown error"), 400);
    }
})->setArgument('auth', false);;

$app->post('/upload/attachment', function (Request $request, Response $response) {
    global $sugar_config, $current_user;
    function createSuiteCrmDocument($data, $parentType, $parentId)
    {
        // Try to upload file
        try {
            // Success!
            $document = new Document();
            //         $document->id = "testing-a-lot";
            //         $document->new_with_id = true;
            $document->document_name = $data['name'];
            $document->filename = $data['name'];
            $document->category_id = 'Sales';
            $document->status_id = 'Active';
            $document->assigned_user_id = $user_id;
            $document->save();
            // $contents = file_get_contents("upload://{$data['name']}");

            $revision = new DocumentRevision();
            //         $revision->id = "testing-a-lot-rev";
            //         $revision->new_with_id = true;
            $revision->document_id = $document->id;
            //$revision->file = base64_encode($contents);
            $revision->filename = $document->filename;
            $revision->revision = 1;
            $revision->doc_type = 'Sugar';
            $revision->change_log = 'Document Created';
            $revision->file_mime_type = $data['mime'];
            $revision->file_ext = $data['extension'];
            $revision->save();

            $document->load_relationship(strtolower($parentType));
            if (strtolower($parentType) == "contacts") {
                $document->parent_type = ucwords(strtolower($parentType));
                $document->contact_id = $parentId;
                $document->parent_id = $parentId;
            }
            $document->contacts->add($parentId);
            $document->save();

            $data['document_id'] = $document->id;
            $data['revision_id'] = $revision->id;
            $data['document_file'] = "index.php?entryPoint=download&type=Documents&id={$revision->id}";
            return $data;
        } catch (\Exception $e) {
            // Fail!
            $errors = "Cannot create Document ";
            return $errors;
        }
    }

    function createSuiteCrmNote($data, $parentType, $parentId)
    {
        // Try to upload file
        try {
            // Success!
            $note = new Note();
            //         $note->id = "testing-a-lot";
            //         $note->new_with_id = true;
            $note->name = $data['name'];
            $note->filename = $data['name'];
            $note->file_mime_type = $data['mime'];
            $note->assigned_user_id = $user_id;
            $note->parent_type = $parentType;
            $note->parent_id = $parentId;
            if (strtolower($parentType) == 'contacts') {
                $note->contact_id = $parentId;
            }
            $note->save();
            // $contents = file_get_contents("upload://{$data['name']}");
            $data['note_id'] = $note->id;
            $data['note_file'] = "index.php?entryPoint=download&type=Notes&id={$note->id}";
            return $data;
        } catch (\Exception $e) {
            // Fail!
            $errors = "Cannot create Document ";
            return $errors;
        }
    }

    $parsedBody = $request->getParsedBody();
    if (empty($parsedBody['parent_id'])) {
        $reponseJson = $response->withJson(array("result" => "error", "result" => 'Missing parameters'), 403);
        return $reponseJson;
    } else {
        $parentId = $parsedBody['parent_id'];
        $parentType = $parsedBody['parent_type'];
    }
    // Simple validation (max file size 12MB and only two allowed mime types)
    $validator = new FileUpload\Validator\Simple('12M');

    // Simple path resolver, where uploads will be put
    $pathresolver = new FileUpload\PathResolver\Simple(CRM_DIR . "/" . $sugar_config['upload_dir']);

    // The machine's filesystem
    $filesystem = new FileUpload\FileSystem\Simple();

    // FileUploader itself
    $fileupload = new FileUpload\FileUpload($_FILES['upload_files'], $_SERVER);

    // Adding it all together. Note that you can use multiple validators or none at all
    $fileupload->setPathResolver($pathresolver);
    $fileupload->setFileSystem($filesystem);
    $fileupload->addValidator($validator);

    // Doing the deed
    list($files, $headers) = $fileupload->processAll();

    $fileSucceed = false;
    foreach ($files as $key => $fileItem) {
        # code...
        if ($fileItem->completed) {
            $data = array(
                'name'       => $fileItem->getFilename(),
                'mime'       => $fileItem->getMimeType(),
            );
            $result = createSuiteCrmNote($data, $parentType, $parentId);
            $from_path = $fileItem->getPathname();
            $to_path = CRM_DIR . "/" . $sugar_config['upload_dir'] . "/" . $result['note_id'];
            copy($from_path, $to_path) && unlink($from_path);
            $fileSucceed = true;
        }
    }
    if ($fileSucceed) {
        return $response->withJson(['files' => $files], 200);
    }
    return $response->withJson(['error' => 'Something happened when uploading files', 'files' => $files], 400);
});

$app->get('/accounts[/{id}]', function (Request $request, Response $response, $args) {
    global $sugar_config, $current_user;
    $accountBean = BeanFactory::getBean('Accounts');
    if (isset($id)) {
        $account = $accountBean->retrieve($args['id']);
        $module_arr = array();
        if ($account->id && $account->ACLAccess('view')) {
            $all_fields = $account->column_fields;
            foreach ($all_fields as $field) {
                if (isset($account->$field) && !is_object($account->$field)) {
                    $account->$field = from_html($account->$field);
                    $account->$field = preg_replace("/\r\n/", "<BR>", $account->$field);
                    $account->$field = preg_replace("/\n/", "<BR>", $account->$field);
                    $module_arr['accounts'][$field] = $account->$field;
                }
            }
            return $response->withJson($module_arr);
        } else {
            return $response->withJson(['result' => 'error', 'message' => 'You shall not pass!'], 403);
        }
    } else {
        $list = $accountBean->get_list();
        $resultArray = [];
        if (is_array($list) && !empty($list)) {
            foreach ($list['list'] as $account) {
                if ($account->ACLAccess('list')) {
                    if ($account->id && $account->ACLAccess('view')) {
                        $all_fields = $account->column_fields;
                        foreach ($all_fields as $field) {
                            if (isset($account->$field) && !is_object($account->$field)) {
                                $account->$field = from_html($account->$field);
                                $account->$field = preg_replace("/\r\n/", "<BR>", $account->$field);
                                $account->$field = preg_replace("/\n/", "<BR>", $account->$field);
                                $module_arr['accounts'][$field] = $account->$field;
                            }
                        }
                        $resultArray[] = $module_arr;
                    }
                } else {
                    return $response->withJson(['result' => 'error', 'message' => 'You shall not pass!'], 403);
                }
            }
            return $response->withJson($module_arr);
        }
    }
});



$app->get('/suitecrm/dropdown/{name}[/{type}]', function (Request $request, Response $response, $args) {
    global $sugar_config, $current_user;
    $suitecrm_list = $GLOBALS['app_list_strings'][$args['name']];
    $list = array();
    //$list[]=array(''=>''); //when empty value is needed
    foreach ($suitecrm_list as $value => $name) {
        //$list[] = array('value' => $value, 'name' => $name, 'default' => $default, 'selected' => $selected); //this  is the below format example
        switch ($args['type']) {
            case 'native':
                $list[] = array('value' => $value, 'name' => $name);
                break;
            case 'formio':
                $list[] = array('label' => $value, 'value' => $name);
                break;
            default:
                $list[] = array('id' => $value, 'name' => $name);
                break;
        }
    }
    return $response->withJson($list);
});

$app->get('/suitecrm/applist(/:name)', function (Request $request, Response $response, $args) {
    global $sugar_config, $current_user;
    $suitecrm_list = $GLOBALS['app_list_strings'][$name];
    return $response->withJson($suitecrm_list);
});

$app->post('/whoami', function (Request $request, Response $response) {
    global $sugar_config, $current_user;
    //We retrieve the current user in order to get
    // all the fields we have to serialize
    $userBean = BeanFactory::getBean('Users');
    $user = $userBean->retrieve($current_user->id);
    $all_fields = $user->column_fields;
    $roles = ACLRole::getUserRoleNames($current_user->id);
    if (!empty($roles)) {
        $module_arr['user']['roles'] = $roles;
    }
    $timezone = TimeDate::userTimezone($user);
    $module_arr['user']['language'] = $GLOBALS['current_language'];
    $module_arr['user']['timezone'] = $timezone;

    foreach ($all_fields as $field) {
        if (isset($current_user->$field) && !is_object($current_user->$field)) {
            if (is_string($current_user->$field)) {
                $current_user->$field = from_html($current_user->$field);
                $current_user->$field = preg_replace("/\r\n/", "<BR>", $current_user->$field);
                $current_user->$field = preg_replace("/\n/", "<BR>", $current_user->$field);
            }
            if (
                isset($translate)
                && !empty($current_user->$field) && isset($current_user->field_defs[$field]['options'])
                && $current_user->field_defs[$field]['options'] != 'date_range_search_dom'
                && $current_user->field_defs[$field]['options'] != 'numeric_range_search_dom'
            ) {
                $displayFieldValue = $GLOBALS['app_list_strings'][$current_user->field_defs[$field]['options']][$current_user->$field];
                $field_hidden = $field . "_hidden";
                $current_user->$field_hidden = $current_user->$field;

                $current_user->$field = $displayFieldValue;
            }
            if (isset($field_hidden)) {
                $module_arr['user'][$field_hidden] = $current_user->$field_hidden;
                unset($field_hidden);
            }
            $module_arr['user'][$field] = $current_user->$field;
        }
    }
    //Override User Hash - we don't need it
    $module_arr['user']['user_hash'] = 'youShallNotPass';
    return $response->withJson($module_arr);
})->setArgument('auth', true);



function validateDate($date, $format = 'Y-m-d H:i:s')
{
    $d = DateTime::createFromFormat($format, $date);
    return $d && $d->format($format) == $date;
}

if (file_exists(__DIR__ . '/../../../graphql/CustomRest.php')) {
    include_once(__DIR__ . '/../../../graphql/CustomRest.php');
}
$app->run();
