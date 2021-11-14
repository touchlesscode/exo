<?php

use Youshido\GraphQL\Type\NonNullType;
use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\IdType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Type\Scalar\IntType;
use Youshido\GraphQL\Type\Scalar\DateTimeType;
use Youshido\GraphQL\Type\Scalar\DateType;
use Youshido\GraphQL\Type\ListType\ListType;

require_once 'argsHelper.php';

class AclRoleType extends AbstractObjectType   // extending abstract Object type
{

    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach ( argsHelper::entityArgsHelper('ACLRoles') as $field => $type){
            $config->addField($field, $type);
        }
        $config->addField('users', [
                    'type' => new UsersListType(),
                    'args'    => argsHelper::entityArgsHelper('Users', true),
                    'resolve' => function ($value, array $args, Youshido\GraphQL\Execution\ResolveInfo $info) {
                         if (!empty($value['users'])) {
                             $args['id']=$value['users'];
                             return UsersListType::resolve($value, $args, $info);
                         } else {
                             return null;
                         }
                    },
                ]);
    }
    private function retrieveAclRole($id, $info){
        global $sugar_config, $current_user, $beanList;
        $roleBean = BeanFactory::getBean('ACLRoles');
        $role = $roleBean->retrieve($id);
        if($info!=null){
            $getFieldASTList=$info->getFieldASTList();
            $queryFields=[];
            foreach ($getFieldASTList as $key => $value) {
                $queryFields[$value->getName()]="";
            }
        }
        $module_arr = array();
        if ($role->id && $role->ACLAccess('view')) {
            $all_fields = $role->column_fields;
            if(isset($queryFields) && array_key_exists('users',$queryFields)){
                $module_arr['users'] = array();
                foreach ($role->get_linked_beans('users', 'User') as $user) {
                    $module_arr['users'][] = $user->id;
                }
            }
            foreach ($all_fields as $field) {
                if (isset($role->$field) && !is_object($role->$field)) {
                    $role->$field = from_html($role->$field);
                    $role->$field = preg_replace("/\r\n/", "<BR>", $role->$field);
                    $role->$field = preg_replace("/\n/", "<BR>", $role->$field);
                    $module_arr[$field] = $role->$field;
                }
            }
            // $roles = ACLRole::getAclRoleRoleNames($id);
            // if(!empty($roles)){
            //     //LX: TODO - create a RoleType to correctly return data
            //     foreach ($roles as $key => $value) {
            //         $module_arr['roles']=$value;
            //     }
            // }else{
            //     $module_arr['roles']="";
            // }

            return $module_arr;

        }else{
            return null;
        }
    }

    public function resolve($value = null, $args = [], Youshido\GraphQL\Execution\ResolveInfo $info = null)  // implementing resolve function
    {
        if (isset($args['id']) && is_array($args['id'])) {
            foreach ($args as $key => $roleId) {
                if (isset($roleId) && is_array($roleId)) {
                    foreach ($roleId as $key => $roleIdItem) {
                        $resultArray[] = self::retrieveAclRole($roleIdItem,$info);
                    }
                } elseif (!empty($roleId)) {
                    $resultArray[] = self::retrieveAclRole($roleId,$info);
                }
            }
            return $resultArray;
        } elseif (!empty($args['id'])) {
            return self::retrieveAclRole($args['id'],$info);
        }
    }


    public function getName()
    {
        return "AclRole";  // important to use the real name here, it will be used later in the Schema
    }

}
