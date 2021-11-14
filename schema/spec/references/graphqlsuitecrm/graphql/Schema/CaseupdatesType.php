<?php

use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Type\ListType\ListType;
use Youshido\GraphQL\Execution\ResolveInfo;

require_once 'argsHelper.php';

class CaseupdatesType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach (argsHelper::entityArgsHelper('AOP_Case_Updates') as $field => $type) {
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
        $config->addField('contacts', [
            'type' => new ContactsListType(),
            'args' => argsHelper::entityArgsHelper('Contacts'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['contacts'])) {
                    return ContactsListType::resolve($value, ['id' => $value['contacts']], $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('account_details', [
            'type' => new AccountType(),
            'args' => argsHelper::entityArgsHelper('Accounts'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['account_details'])) {
                    return AccountType::resolve($value, ['id' => $value['account_details']], $info);
                } else {
                    return null;
                }
            },
        ]);
    }
    private function retrieveCaseupdates($id, $info)
    {
        global $sugar_config, $current_user;
        $moduleBean = \BeanFactory::getBean('AOP_Case_Updates');
        $moduleBean = $moduleBean->retrieve($id);
        $module_arr = array();
        if ($moduleBean->id && $moduleBean->ACLAccess('view')) {
            $module_arr = crmHelper::getDefaultFieldsValues($moduleBean);
            if ($info != null) {
                $getFieldASTList = $info->getFieldASTList();
                $queryFields = [];
                foreach ($getFieldASTList as $key => $value) {
                    $queryFields[$value->getName()] = "";
                }
            }
            if (isset($queryFields) && array_key_exists('created_user_details', $queryFields)) {
                $module_arr['created_user_details'] = $module_arr['created_by'];
            }

            if (isset($queryFields) && array_key_exists('assigned_user_details', $queryFields)) {
                $module_arr['assigned_user_details'] = $module_arr['assigned_user_id'];
            }

            if (isset($queryFields) && array_key_exists('modified_user_details', $queryFields)) {
                $module_arr['modified_user_details'] = $module_arr['modified_user_id'];
            }


            if (isset($queryFields) && array_key_exists('contacts', $queryFields)) {
                $module_arr['contacts'] =  array();
                foreach ($moduleBean->get_linked_beans('contacts', 'Contact') as $contact) {
                    $module_arr['contacts'][] = $contact->id;
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
                        $resultArray[] = self::retrieveCaseupdates($moduleBeanIdItem, $info);
                    }
                } elseif (!empty($moduleBeanId)) {
                    $resultArray[] = self::retrieveCaseupdates($moduleBeanId, $info);
                }
            }

            return $resultArray;
        } elseif (!empty($args['id'])) {
            return self::retrieveCaseupdates($args['id'], $info);
        }
    }

    public function getName()
    {
        return 'aop_case_updates';  // important to use the real name here, it will be used later in the Schema
    }
}