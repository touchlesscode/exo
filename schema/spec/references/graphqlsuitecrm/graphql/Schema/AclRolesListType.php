<?php
// namespace SuiteCRM\Schema;

use Youshido\GraphQL\Type\NonNullType;
use Youshido\GraphQL\Type\ListType\AbstractListType;
use Youshido\GraphQL\Type\TypeMap ;
use Youshido\GraphQL\Execution\ResolveInfo;
require_once 'AclRoleType.php';

if (!defined('sugarEntry')) {
    define('sugarEntry', true);
}

class AclRolesListType extends AbstractListType
{
    public function getItemType()
    {
        return new AclRoleType();
    }

    public function resolve($value = null, $args = [], Youshido\GraphQL\Execution\ResolveInfo $info = null)
    {
        require_once 'ListHelper.php';
        $list=ListHelper('ACLRoles', $value, $args, $info);
        $resultArray = [];
        if (is_array($list['list']) && !empty($list['list'])) {
            if ($list['list'][0]->ACLAccess('list')) {
                foreach ($list['list'] as $item) {
                    $resultArray[] = AclRoleType::resolve(null, ['id' => $item->id], $info);
                }
            } else {
                //no access
                error_log('no access');
            }
            return empty($resultArray)? null :$resultArray;
        } else {
            return null;
        }
    }
}
