<?php

use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Execution\ResolveInfo;
use Youshido\GraphQL\Type\ListType\ListType;

require_once 'argsHelper.php';

class NoteType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach (argsHelper::entityArgsHelper('Notes') as $field => $type) {
            $config->addField($field, $type);
        }
        $config->addField('created_user_details', [
            'type' => new UserType(),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['created_user_details'])) {
                    $args['id'] = $value['created_user_details'];
                    return UserType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('assigned_user_details', [
            'type' => new UserType(),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['assigned_user_details'])) {
                    $args['id'] = $value['assigned_user_details'];
                    return UserType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('modified_user_details', [
            'type' => new UserType(),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['modified_user_details'])) {
                    $args['id'] = $value['modified_user_details'];
                    return UserType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('contact_details', [
            'type' => new ContactType(),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['contact_details'])) {
                    $args['id'] = $value['contact_details'];
                    return ContactType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('parent_contact', [
            'type'     => new ContactType(),
            'args' => argsHelper::entityArgsHelper('Contacts'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['parent_contact'])) {
                    $args['id'] = $value['parent_contact'];
                    return ContactType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('parent_account', [
            'type' => new AccountType(),
            'args' => argsHelper::entityArgsHelper('Accounts'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['parent_account'])) {
                    $args['id'] = $value['parent_opportunity'];
                    return AccountType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('parent_opportunity', [
            'type' => new OpportunityType(),
            'args' => argsHelper::entityArgsHelper('Opportunities'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['parent_opportunity'])) {
                    $args['id'] = $value['parent_opportunity'];
                    return OpportunityType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('contacts', [
            'type' => new ContactsListType(),
            'args' => argsHelper::entityArgsHelper('Contacts'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['contacts'])) {
                    $args['ids'] = $value['contacts'];
                    return ContactsListType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('accounts', [
            'type' => new AccountsListType(),
            'args' => argsHelper::entityArgsHelper('Accounts'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['accounts'])) {
                    $args['ids'] = $value['accounts'];
                    return AccountsListType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('opportunities', [
            'type' => new OpportunitiesListType(),
            'args' => argsHelper::entityArgsHelper('Opportunities'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['opportunities'])) {
                    $args['ids'] = $value['opportunities'];
                    return OpportunitiesListType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('cases', [
            'type' => new CasesListType(),
            'args' => argsHelper::entityArgsHelper('Cases'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['cases'])) {
                    $args['ids'] = $value['cases'];
                    return CasesListType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        if (file_exists(__DIR__ . '/../../../../../graphql/Schema/customNoteType.php')) {
            require_once __DIR__ . '/../../../../../graphql/Schema/customNoteType.php';
            if (method_exists('customNoteType', 'getFields')) {
                $customFields = customNoteType::getFields();
                foreach ($customFields as $field => $type) {
                    $config->addField($field, $type);
                }
            }
        }
    }
    private function retrieveNote($id, $info)
    {
        global $sugar_config, $current_user;
        $moduleBean = \BeanFactory::getBean('Notes');
        $moduleBean = $moduleBean->retrieve($id);

        $module_arr = array();
        if ($moduleBean->id && $moduleBean->ACLAccess('view')) {
            $module_arr = \crmHelper::getDefaultFieldsValues($moduleBean);
            if ($info != null) {
                $getFieldASTList = $info->getFieldASTList();
                $queryFields = [];
                foreach ($getFieldASTList as $key => $value) {
                    $queryFields[$value->getName()] = "";
                }
            }
            $module_arr['created_user_details'] = $module_arr['created_by'];
            $module_arr['assigned_user_details'] = $module_arr['assigned_user_id'];
            $module_arr['modified_user_details'] = $module_arr['modified_user_id'];
            switch ($module_arr['parent_type']) {
                case 'Contacts':
                    $module_arr['parent_contact'] = $module_arr['parent_id'];
                    $module_arr['parent_account'] = '';
                    $module_arr['parent_opportunity'] = '';
                    $module_arr['parent_case'] = '';
                    $module_arr['parent_email'] = '';
                    break;
                case 'Accounts':
                    $module_arr['parent_account'] = $module_arr['parent_id'];
                    $module_arr['parent_contact'] = '';
                    $module_arr['parent_opportunity'] = '';
                    $module_arr['parent_case'] = '';
                    $module_arr['parent_email'] = '';
                    break;
                case 'Opportunities':
                    $module_arr['parent_opportunity'] = $module_arr['parent_id'];
                    $module_arr['parent_contact'] = '';
                    $module_arr['parent_account'] = '';
                    $module_arr['parent_case'] = '';
                    $module_arr['parent_email'] = '';
                    break;
                case 'Cases':
                    $module_arr['parent_opportunity'] = $module_arr['parent_id'];
                    $module_arr['parent_contact'] = '';
                    $module_arr['parent_account'] = '';
                    $module_arr['parent_case'] = $module_arr['parent_id'];
                    $module_arr['parent_email'] = '';
                    break;
                case 'Emails':
                    $module_arr['parent_opportunity'] = '';
                    $module_arr['parent_contact'] = '';
                    $module_arr['parent_account'] = '';
                    $module_arr['parent_case'] = '';
                    $module_arr['parent_email'] = $module_arr['parent_id'];
                    break;
                default:
                    $module_arr['parent_opportunity'] = '';
                    $module_arr['parent_contact'] = '';
                    $module_arr['parent_account'] = '';
                    $module_arr['parent_case'] = '';
                    $module_arr['parent_email'] = '';
                    break;
            }
            if (isset($queryFields) && array_key_exists('contacts', $queryFields)) {
                $module_arr['contacts'] =  array();
                foreach ($moduleBean->get_linked_beans('contacts', 'Contact') as $contact) {
                    $module_arr['contacts'][] = $contact->id;
                }
            }
            if (isset($queryFields) && array_key_exists('accounts', $queryFields)) {
                $module_arr['accounts'] = array();
                foreach ($moduleBean->get_linked_beans('accounts', 'Account') as $account) {
                    $module_arr['accounts'][] = $account->id;
                }
            }
            if (isset($queryFields) && array_key_exists('opportunities', $queryFields)) {
                $module_arr['opportunities'] =  array();
                foreach ($moduleBean->get_linked_beans('opportunities', 'Opportunity') as $opportunity) {
                    $module_arr['opportunities'][] = $opportunity->id;
                }
            }
            if (isset($queryFields) && array_key_exists('cases', $queryFields)) {
                $module_arr['cases'] =  array();
                foreach ($moduleBean->get_linked_beans('cases', 'aCase') as $case) {
                    $module_arr['cases'][] = $case->id;
                }
            }
            $module_arr['contact_details'] =  array();
            if (isset($queryFields) && array_key_exists('contact_details', $queryFields)) {
                $module_arr['contact_details'] = $moduleBean->contact_id;
            }
            if (file_exists(__DIR__ . '/../../../../../graphql/Schema/customNoteType.php')) {
                require_once __DIR__ . '/../../../../../graphql/Schema/customNoteType.php';
                if (method_exists('customNoteType', 'processFields')) {
                    $module_arr = customNoteType::processFields($moduleBean, $queryFields, $module_arr);
                }
            }
            return $module_arr;
        } else {
            return null;
        }
    }

    public function resolve($value = null, $args = [], $info = null)  // implementing resolve function
    {
        if (isset($args['id']) && is_array($args['id'])) {
            foreach ($args as $key => $moduleBeanId) {
                // error_log(__LINE__.print_r($args,1));
                if (isset($moduleBeanId) && is_array($moduleBeanId)) {
                    foreach ($moduleBeanId as $key => $moduleBeanIdItem) {
                        $resultArray[] = self::retrieveNote($moduleBeanIdItem, $info);
                    }
                } elseif (!empty($moduleBeanId)) {
                    $resultArray[] = self::retrieveNote($moduleBeanId, $info);
                }
            }

            return $resultArray;
        } elseif (!empty($args['id'])) {
            return self::retrieveNote($args['id'], $info);
        }
    }

    public function getName()
    {
        return 'note';  // important to use the real name here, it will be used later in the Schema
    }
}
