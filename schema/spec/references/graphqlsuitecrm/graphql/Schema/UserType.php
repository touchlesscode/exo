<?php

use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Type\ListType\ListType;
use Youshido\GraphQL\Execution\ResolveInfo;

require_once 'argsHelper.php';

class UserType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach (argsHelper::entityArgsHelper('Users', true) as $field => $type) {
            $config->addField($field, $type);
        }
        $config->addField('session_id', new StringType());
        $config->addField('roles', new StringType());
        $config->addField('related_roles', [
            'type' => new ListType(new AclRoleType()),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['related_roles'])) {
                    $args['id'] = $value['related_roles'];
                    return AclRoleType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        if (file_exists(__DIR__ . '/../../../../../graphql/Schema/customUserType.php')) {
            require_once __DIR__ . '/../../../../../graphql/Schema/customUserType.php';
            if (method_exists('customUserType', 'getFields')) {
                $customFields = customUserType::getFields();
                foreach ($customFields as $field => $type) {
                    $config->addField($field, $type);
                }
            }
        }
    }
    private function retrieveUser($id, $info)
    {
        global $db, $sugar_config, $current_user;
        $moduleBean = BeanFactory::getBean('Users');
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
            $roles = ACLRole::getUserRoleNames($id);
            if (!empty($roles)) {
                //LX: TODO - create a RoleType to correctly return data
                foreach ($roles as $key => $value) {
                    $module_arr['roles'] = $value;
                }
            }

            $sql = "
            SELECT r.id
            FROM users u
            INNER JOIN acl_roles_users ur ON u.id = ur.user_id
            INNER JOIN acl_roles r ON ur.role_id = r.id
            WHERE u.deleted = 0
                AND ur.deleted = 0
                AND r.deleted = 0
                AND u.id = '{$id}';
            ";
            $result = $db->query($sql);
            if (isset($queryFields) && array_key_exists('related_roles', $queryFields)) {
                $module_arr['related_roles'] =  array();
                while (($row = $db->fetchByAssoc($result)) != null) {
                    $module_arr['related_roles'][] = $row['id'];
                }
            }
            if (file_exists(__DIR__ . '/../../../../../graphql/Schema/customUserType.php')) {
                require_once __DIR__ . '/../../../../../graphql/Schema/customUserType.php';
                if (method_exists('customUserType', 'processFields')) {
                    $module_arr = customUserType::processFields($moduleBean, $queryFields, $module_arr);
                }
            }


            // $m1 = 'Users';
            // $m2 = 'ACLRoles';
            // lxlog(getRelationshipByModules($m1, $m2));
            return $module_arr;
        } else {
            return null;
        }
    }

    public function resolve($value = null, $args = [], $info = null)  // implementing resolve function
    {
        if (!empty($args['whoami'])) {
            global $current_user;
            if ($_SESSION['authenticated_user_id']) {
                $moduleBean = self::retrieveUser($_SESSION['authenticated_user_id'], $info);
                $moduleBean['session_id'] = session_id();
                return $moduleBean;
            } else {
                return null;
            }
        }
        if (isset($args['id']) && is_array($args['id'])) {
            foreach ($args as $key => $moduleBeanId) {
                if (isset($moduleBeanId) && is_array($moduleBeanId)) {
                    foreach ($moduleBeanId as $key => $moduleBeanIdItem) {
                        $resultArray[] = self::retrieveUser($moduleBeanIdItem, $info);
                    }
                } elseif (!empty($moduleBeanId)) {
                    $resultArray[] = self::retrieveUser($moduleBeanId, $info);
                }
            }
            return $resultArray;
        } elseif (!empty($args['id'])) {
            return self::retrieveUser($args['id'], $info);
        }
    }

    public function getName()
    {
        return 'user';  // important to use the real name here, it will be used later in the Schema
    }
    public function getOutputType()
    {
        return 'user';  // important to use the real name here, it will be used later in the Schema
    }
}
