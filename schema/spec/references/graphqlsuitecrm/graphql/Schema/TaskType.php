<?php

use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Type\ListType\ListType;
use Youshido\GraphQL\Execution\ResolveInfo;

require_once 'argsHelper.php';

class TaskType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach (argsHelper::entityArgsHelper('Tasks') as $field => $type) {
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
        $config->addField('parent_contact', [
            'type'     => new ContactType(),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['parent_contact'])) {
                    $args['ids'] = $value['parent_contact'];
                    return ContactType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('parent_account', [
            'type' => new AccountType(),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['parent_account'])) {
                    $args['ids'] = $value['parent_account'];
                    return AccountType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('related_contacts', [
            'type' => new ContactsListType(),
            'args' => argsHelper::entityArgsHelper('Contacts'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['related_contacts'])) {
                    $args['ids'] = $value['related_contacts'];
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
                    $args['ids'] = $value['related_accounts'];
                    return AccountsListType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        if (file_exists(__DIR__ . '/../../../../../graphql/Schema/customTaskType.php')) {
            require_once __DIR__ . '/../../../../../graphql/Schema/customTaskType.php';
            if (method_exists('customTaskType', 'getFields')) {
                $customFields = customTaskType::getFields();
                foreach ($customFields as $field => $type) {
                    $config->addField($field, $type);
                }
            }
        }
    }
    private function retrieveTask($id, $info)
    {
        global $sugar_config, $current_user;
        $moduleBean = BeanFactory::getBean('Tasks');
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
                    break;
                case 'Accounts':
                    $module_arr['parent_account'] = $module_arr['parent_id'];
                    $module_arr['parent_contact'] = '';
                    $module_arr['parent_opportunity'] = '';
                    break;
                case 'Opportunities':
                    $module_arr['parent_opportunity'] = $module_arr['parent_id'];
                    $module_arr['parent_contact'] = '';
                    $module_arr['parent_account'] = '';
                    break;
                default:
                    $module_arr['parent_opportunity'] = '';
                    $module_arr['parent_contact'] = '';
                    $module_arr['parent_account'] = '';
                    break;
            }
            if (isset($queryFields) && array_key_exists('contacts', $queryFields)) {
                $module_arr['related_contacts'] =  array();
                foreach ($moduleBean->get_linked_beans('contacts', 'Contact') as $contact) {
                    $module_arr['related_contacts'][] = $contact->id;
                }
            }
            if (isset($queryFields) && array_key_exists('accounts', $queryFields)) {
                $module_arr['related_accounts'] =  array();
                foreach ($moduleBean->get_linked_beans('accounts', 'Account') as $account) {
                    $module_arr['related_accounts'][] = $account->id;
                }
            }
            if (isset($queryFields) && array_key_exists('opportunities', $queryFields)) {
                $module_arr['related_opportunities'] =  array();
                foreach ($moduleBean->get_linked_beans('opportunities', 'Opportunity') as $opportunity) {
                    $module_arr['related_opportunities'][] = $opportunity->id;
                }
            }
            if (file_exists(__DIR__ . '/../../../../../graphql/Schema/customTaskType.php')) {
                require_once __DIR__ . '/../../../../../graphql/Schema/customTaskType.php';
                if (method_exists('customTaskType', 'processFields')) {
                    $module_arr = customTaskType::processFields($moduleBean, $queryFields, $module_arr);
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
                if (isset($moduleBeanId) && is_array($moduleBeanId)) {
                    foreach ($moduleBeanId as $key => $moduleBeanIdItem) {
                        $resultArray[] = self::retrieveTask($moduleBeanIdItem, $info);
                    }
                } elseif (!empty($moduleBeanId)) {
                    $resultArray[] = self::retrieveTask($moduleBeanId, $info);
                }
            }

            return $resultArray;
        } elseif (!empty($args['id'])) {
            return self::retrieveTask($args['id'], $info);
        }
    }

    public function getName()
    {
        return 'task';  // important to use the real name here, it will be used later in the Schema
    }
}
