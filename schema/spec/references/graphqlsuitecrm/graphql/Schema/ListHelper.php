<?php
function ListHelper($module, $value = null, $args = [],  Youshido\GraphQL\Execution\ResolveInfo $info = null)
{
    global $sugar_config, $current_user;
    $moduleBean = BeanFactory::getBean($module);
    $searchParams = '';
    if ($info != null) {
        $getFieldASTList = $info->getFieldASTList();
        $queryFields = [];
        $queryFieldsArray = [];
        foreach ($getFieldASTList as $key => $value) {
            $queryFields[$value->getName()] = "";
            $queryFieldsArray[] = $value->getName();
        }
    }
    $arrayKeys = array_keys($args);
    $moduleFields = $moduleBean->field_name_map;
    //we hardcode the IDS field as available to this modules
    $moduleFields['ids'] = "enabled";
    $searchFields = array();
    foreach ($moduleFields as $key => $params) {
        if (in_array($key, $arrayKeys)) {
            if (is_array($args[$key]) || substr_count($args[$key], ",") > 0) {
                $guessOperator = "in";
                if (is_array($args[$key])) {
                    $findValues = $args[$key];
                    //IDS doesn't exist in the database so we actually do a IN where to the ID field
                    $key = 'id';
                } else {
                    $findValues = explode(",", $string = str_replace(' ', '', $args[$key]));
                }
            } else {
                if (substr_count($args[$key], '%') > 0) {
                    $guessOperator = "like";
                    $findValues = $args[$key];
                } else {
                    $guessOperator = "=";
                    $findValues = $args[$key];
                }
            }
            $searchFields[$key] = array('query_type' => 'default', 'value' => $findValues, 'operator' => $guessOperator);
        }
    }
    foreach ($args as $key => $value) {
        if (!empty($key) && 0 === strpos($key, 'end_range_')) {
            $searchFields[$key] = array('query_type' => 'default', 'value' => $value, 'enable_range_search' => true, 'is_date_field' => true);
        } elseif (!empty($key) &&  0 === strpos($key, 'start_range_')) {
            $searchFields[$key] = array('query_type' => 'default', 'value' => $value, 'enable_range_search' => true, 'is_date_field' => true);
        }
    }
    // Work around for email1 field, it cannot be used in the where clause as it an alias.
    if (!empty($searchFields["email1"]) && isset($moduleBean->field_defs['email1'])) {
        $searchFields["email_addresses.email_address"] = $searchFields["email1"];
        unset($searchFields["email1"]);
    }
    $where = searchHelper::generateSearchWhere($moduleBean, $searchFields);
    $offset = 0;
    if (!empty($args['offset'])) {
        $offset = $args['offset'];
    }
    $list = [];
    $aggregateList = [];
    if ($moduleBean->bean_implements('ACL') && ACLController::requireOwner($moduleBean->module_dir, 'list')) {
        global $current_user;
        $owner_where = $moduleBean->getOwnerWhere($current_user->id);

        //rrs - because $this->getOwnerWhere() can return '' we need to be sure to check for it and
        //handle it properly else you could get into a situation where you are create a where stmt like
        //WHERE .. AND ''
        if (!empty($owner_where)) {
            if (empty($where)) {
                $where = $owner_where;
            } else {
                $where .= ' AND ' . $owner_where;
            }
        }
    }
    $params = array();
    $params['include_custom_fields'] = true;
    if (!empty($args['distinct'])) {
        $orderBy = "";
    } elseif (!empty($args['order'])) {
        $orderBy = $args['order'];
    } else {
        $orderBy = "";
    }
    $query = $moduleBean->create_new_list_query($orderBy, implode(" AND ", $where), $queryFieldsArray, $params, $show_deleted = 0, '', false, null, $singleSelect = false);
    $resultArray = [];
    if (!empty($args['distinct'])) {
        $params["distinct"] = true;
        if (($key = array_search("__typename", $queryFieldsArray)) !== false) {
            unset($queryFieldsArray[$key]);
        }
        if (($key = array_search("id", $queryFieldsArray)) !== false) {
            unset($queryFieldsArray[$key]);
        }
        $query .= " GROUP BY " . implode(" , ", $queryFieldsArray);
        if (!empty($args['order'])) {
            $order_by = $moduleBean->process_order_by($args['order']);
            $query .= " ORDER BY " . $order_by;
        } else {
            $order_by = $moduleBean->process_order_by('name');
            $query .= " ORDER BY " . $order_by;
        }
    }
    if (!empty($args['limit'])) {
        $max = $args['limit'];
    } else {
        $args['limit'] = "";
        $max = -1;
    }
    if ($module == "ACLRoles") {
        //Otherwise fails when using a custom field in roles
        $GLOBALS['dictionary']['ACLRole']['custom_fields'] = false;
    }
    return $moduleBean->process_list_query($query, $offset, $args['limit'], $max, $where);
}