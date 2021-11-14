[![Latest Stable Version](https://poser.pugx.org/lionixevolve/graphqlsuitecrm/v/stable)](https://packagist.org/packages/lionixevolve/graphqlsuitecrm)  [![Total Downloads](https://poser.pugx.org/lionixevolve/graphqlsuitecrm/downloads)](https://packagist.org/packages/lionixevolve/graphqlsuitecrm) [![Latest Unstable Version](https://poser.pugx.org/lionixevolve/graphqlsuitecrm/v/unstable)](https://packagist.org/packages/lionixevolve/graphqlsuitecrm) [![License](https://poser.pugx.org/lionixevolve/graphqlsuitecrm/license)](https://packagist.org/packages/lionixevolve/graphqlsuitecrm)


# ~~UPCOMING NEW VERSION~~ SuiteCRM 8 will have GraphQL natively so only bugfixes and minor features!
Current code works well with SuiteCRM rest API. .

But I am already developing next version based on a much stronger PHP-GraphQL library webonyx/graphql.
It is coming along nicely, has better performance, and I am using 100% V8 API endpoints (oauth-tokens instead of cookies).

# GraphQLSuiteCRM

Use GraphQL instead of REST API to access SuiteCRM data. Production ready. Supports custom modules and custom REST endpoints with or without authentication.
Can be integrated with SuiteCRM v8 API to be used with its native authentication.

## What it does
This package allows to use GraphQL with SuiteCRM (8.x / 10.x) /SugarCRM (6.5) instead of the Rest API which is not truly REST.

Upong installation a graphql endpoint will be created `vendor/lionixevolve/graphqlsuitecrm/rest.php/graphql` and you can hit it with queries if you are authenticated on SuiteCRM (using cookies)


There are more undocumented functions in the endpoint, like getting dropdown values.TODO: Document this

Once you send a query to rest.php/graphql it uses a PHP SuiteCRM Graphql schema based on  Youshido/GraphQL library to process your query.

This GraphQL library uses SuiteCRM/SugarCRM beans for almost all the actions, so every logic hook you created or workflow, should work as planned.

## Set up

`composer require lionixevolve/graphqlsuitecrm`

This will install the plugin in the vendor folder with all the requirements.

PHP extension php-intl its a requirement, for ubuntu install as `sudo apt-get install php-intl`

## Testing and Usage

GraphiQL is included in the package, to start using it open the web broser in 
`http://localhost/vendor/lionixevolve/graphqlsuitecrm/graphql/GraphiQL/`  (adjust localhost to the suitecrm instance location)
Use the included GraphiQL to try this
```
{
  accounts(limit:2) {
    name
  }
}

```
it will get you the accounts module with the name of each one. Limited to 2. You can also use the `offset:2` to paginate.


An advance example - retrieving all the cases by status.
Also you can see some schema changes for the assigned_user/created_by users field that let you retrieve further information about the user.

```

 query cases( $status: String, $limit: String, $offset: String){
                                            cases( status: $status, offset:$offset, limit: $limit, order:"case_number" ){
                                                id
                                                case_number
                                                date_entered
                                                description
                                                status
                                                assigned_user_details{
                                                    id
                                                    first_name
                                                    last_name
                                                    user_name
                                                }
                                                created_user_details {
                                                    id
                                                    first_name
                                                    last_name
                                                    user_name
                                                }
                                                accounts {
                                                    name
                                                    id
                                                    contacts{
                                                        id
                                                    }
                                                }
                                            }
                                        }
```

As you can see related modules are also retrieved using the plural word of the relation. Accounts/Opportunities, etc.


### Extending/Customizing Suitecrm Graphql Schema  

The library will load custom files from the `graphql` folder.

Two main files are loaded
1. `graphql/CustomSuiteCRMSchema.php`
2. `graphql/CustomRest.php`

the #1 will extend the included schema, for custom modules or even non-suitecrm related queries.
the #2 will allow you to create your own REST endpoint calls, we use this for report generation where graphql resultset is not very efficient. (like using aggrid compatible resultset)

A full example of how to extend is below.

#### Extending the Schema - 
Here I am creating support for prospectlist which is not included (yet) in the main library.

This is extracted from a working setup

```
<?php
//`graphql/CustomSuiteCRMSchema.php`
require_once 'Schema/ProspectlistListType.php';
require_once 'Schema/ProspectlistprospectInputType.php';
require_once 'Schema/ProspectlistType.php';
require_once 'Schema/customAccountType.php';
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Type\Scalar\StringType;

class CustomSuiteCRMSchema
{
    public function buildSchema($config)
    {
        $config->getQuery()->addFields([
            'prospectlists' => [
                'type' => new ProspectlistListType(),
                'args' => argsHelper::entityArgsHelper('ProspectLists'),
                'resolve' => function ($value, array $args, ResolveInfo $info) {
                    return $info->getReturnType()->resolve($value, $args, $info);
                },
            ],
        ]);
        $config->getMutation()->addFields([
            'assignProspectlistprospect' => [
                'type' => new ProspectlistprospectInputType(),
                'args' => ['beanid' => new StringType(), 'beanname' => new StringType(), 'prospectlistid' => new StringType()],
                'resolve' => function ($value, $args, $type) {
                    $result = ProspectlistprospectInputType::resolve($value, $args, $type);
                    return ["id" => $result];
                },
            ],
        ]);
    }

}
```

```
<?php
//Schema/ProspectlistsType.php
use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Execution\ResolveInfo;

class ProspectlistType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach (argsHelper::entityArgsHelper('ProspectLists') as $field => $type) {
                $config->addField($field, $type);
        }
        
        $config->addField('related_contacts',[
                    'type' => new ContactsListType(),
                    'args' => argsHelper::entityArgsHelper('Contacts'),
                    'resolve' => function ($value, array $args, ResolveInfo $info) {
                         if (!empty($value['related_contacts'])) {
                             $args['ids']=$value['related_contacts'];
                             return ContactsListType::resolve($value, $args, $info);
                         } else {
                             return null;
                         }
                    },
                ]);
        $config->addField('related_accounts', [
                    'type' => new AccountsListType(),
                    'args' => argsHelper::entityArgsHelper('Accounts'),
                    'resolve' => function ($value, array $args, ResolveInfo $info) {
                         if (!empty($value['related_accounts'])) {
                              $args['ids']=$value['related_accounts'];
                             return AccountsListType::resolve($value, $args, $info);
                         } else {
                             return null;
                         }
                    },
                ]);
    }
    private function retrieveProspectlist($id, $info)
    {
        global $sugar_config, $current_user;
        $prospectlistBean = BeanFactory::getBean('ProspectLists');
        $bean = $prospectlistBean->retrieve($id);
        if($info!=null){
            $getFieldASTList=$info->getFieldASTList();
            $queryFields=[];
            foreach ($getFieldASTList as $key => $value) {
                $queryFields[$value->getName()]="";
            }
        }

        $module_arr = array();
        if ($bean->id && $bean->ACLAccess('view')) {
            $all_fields = $bean->column_fields;
            foreach ($all_fields as $field) {
                if (isset($bean->$field) && !is_object($bean->$field)) {
                    $bean->$field = from_html($bean->$field);
                    $bean->$field = preg_replace("/\r\n/", '<BR>', $bean->$field);
                    $bean->$field = preg_replace("/\n/", '<BR>', $bean->$field);
                    $module_arr[$field] = $bean->$field;
                }
            }
            $module_arr['created_user_details'] = $module_arr['created_by'];
            $module_arr['assigned_user_details'] = $module_arr['assigned_user_id'];
            $module_arr['modified_user_details'] = $module_arr['modified_user_id'];
            
            foreach ($bean->get_linked_beans('contacts', 'Contact') as $contact) {
                $module_arr['related_contacts'][] = $contact->id;
            }
            foreach ($bean->get_linked_beans('accounts', 'Account') as $account) {
                $module_arr['related_accounts'][] = $account->id;
            }
            foreach ($bean->get_linked_beans('opportunities', 'Opportunity') as $opportunity) {
                $module_arr['related_opportunities'][] = $opportunity->id;
            }
            return $module_arr;
        } else {
            error_log(__METHOD__.'----'.__LINE__.'----'.'error resolving CallType');
            return;
        }
    }

    public function resolve($value = null, $args = [], $info = null )  // implementing resolve function
    {
        if (isset($args['id']) && is_array($args['id'])) {
            foreach ($args as $key => $nodeId) {
                if (isset($nodeId) && is_array($nodeId)) {
                    foreach ($nodeId as $key => $nodeIdItem) {
                        $resultArray[] = self::retrieveProspectlist($nodeIdItem, $info );
                    }
                } elseif (!empty($nodeId)) {
                    $resultArray[] = self::retrieveProspectlist($nodeId, $info );
                }
            }

            return $resultArray;
        } elseif (!empty($args['id'])) {
            return self::retrieveProspectlist($args['id'],$info);
        }
    }

    public function getName()
    {
        return 'ProspectList'; 
    }
}

```

```
<?php
// schema/ProspectlistListType.php

use Youshido\GraphQL\Type\ListType\AbstractListType;


if (!defined('sugarEntry')) {
    define('sugarEntry', true);
}
require_once 'modules/Prospects/Prospect.php';
require_once 'modules/ProspectLists/ProspectList.php';

class ProspectlistListType extends AbstractListType
{
    public function getItemType()
    {
        return new ProspectlistType();
    }

    public function build($config)
    {
        // $config
        // ->addArgument('limit', TypeMap::TYPE_INT)
        // ->addArgument('offset', TypeMap::TYPE_INT);
    }
    public function endswith($string, $test)
    {
        $strlen = strlen($string);
        $testlen = strlen($test);
        if ($testlen > $strlen) {
            return false;
        }
        return substr_compare($string, $test, $strlen - $testlen, $testlen) === 0;
    }
    public function resolve($value = null, $args = [], $info = null)
    {
        global $current_user;
        require_once 'vendor/lionixevolve/graphqlsuitecrm/graphql/Schema/ListHelper.php';
        $list=ListHelper('ProspectLists',$value  , $args , $info );
        $resultArray = [];

        if (is_array($list['list']) && !empty($list['list'])) {

            if ($list['list'][0]->ACLAccess('list')) {
                foreach ($list['list'] as $item) {
                    $resultArray[] = ProspectlistType::resolve(null, ['id' => $item->id], $info);
                }
            } else {
                //no access given
                error_log('no access');
            }
            return empty($resultArray)? null :$resultArray;
        } else {
            return null;
        }
    }
   
}

```
With these 2 files you will  have QUERY support for ProspectLists (mutation os prospectlist itself is missing in this example)

Prospectlists is useful for segmenting audience, contacts, accounts and leads so the following mutation will relate the Bean and the prospect.

```
<?php
//schema/ProspectlistprospectInputType.php
use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\StringType;

class ProspectlistprospectInputType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        $config->addField('id', new StringType());
    }

    public static function guidv4() //Helper function to imitate mysql GUID
        {
            if (function_exists('com_create_guid') === true)
                return trim(com_create_guid(), '{}');

            $data = openssl_random_pseudo_bytes(16);
            $data[6] = chr(ord($data[6]) & 0x0f | 0x40); // set version to 0100
            $data[8] = chr(ord($data[8]) & 0x3f | 0x80); // set bits 6-7 to 10
            return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
        }
    public function resolve($value = null, $args = [], $type = null)  // implementing resolve function
    {
        //We use the crm Helper to create/save the Bean
        global $db;
        if(!empty($args['beanid']) && !empty($args['prospectlistid']) && !empty($args['beanname']) 
        && ($args['beanname'] =='Accounts' || $args['beanname'] =="Contacts"||$args['beanname']== "Prospects" )
        ){
            $insertQuery="
            INSERT INTO prospect_lists_prospects
            (id, prospect_list_id, related_id, related_type, date_modified)
            VALUES('?', '?', '?', '?', now());
            ";
            $uuid=\ProspectlistprospectInputType::guidv4();
            $resultByStatus = $db->pQuery($insertQuery,  [$uuid, $args['prospectlistid'],$args['beanid'],$args['beanname']]);
            if($resultByStatus=="1"){
                return $uuid;
            }else{
                return null;
            }
        }else{
            return null;
        }
         
    }

    public function getName()
    {
        return 'Prospectlistprospect';
    }
    public function getOutputType()
    {
        return new StringType();  
    }
}

```

#### Customizing the Rest endpoint

* You can extend the rest (made with Slim) requests when the file `graphql/CustomRest.php` exists on your root suitecrm/lionixcrm folder

```
$app->post('/newPost', function (\Psr\Http\Message\ServerRequestInterface $request, \Psr\Http\Message\ResponseInterface $response){
return $response->withJson(["result"=>"empty - not even tried"]);
}
```
#### CORS
If you need support for CORS you may use the `graphql/CustomRest.php` and include the following snippet
```

$app->add(new \Eko3alpha\Slim\Middleware\CorsMiddleware([
    'http://www.example.com' => ['GET', 'POST','PUT', 'DELETE','OPTIONS'],
    'https://www.example2.com' => ['GET', 'POST'],
]));

```
The CORS middleware will take care of allowing the specified hosts to access the API and return valid headers.

### GraphiQL
You can use the included GraphiQL here:
`vendor/lionixevolve/graphqlsuitecrm/graphql/GraphiQL/`

### Known Issues
- there is currently an issue with the schema inspector Issue#2
- Is currently  checking ACL edit when saving the bean,  

### TODO
- Add missing modules (Quotes/Invoices/ProspectLists/etc) 
- Migrate to the more active webonyx graphqlphp 
