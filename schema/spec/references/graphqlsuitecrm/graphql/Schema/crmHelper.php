<?php
class crmHelper
{
    /* This saveBean is an adapted copy of the set_entry sugar rest/soap service
     */
    public function saveBean($module_name, $class_name, $name_value_list)
    {

        session_start();
        global $beanList, $beanFiles, $current_user;
        if (isset($_SESSION['user_id']) && $_SESSION['user_id'] != $current_user->id) {
            $current_user = new User();
            $current_user->retrieve($_SESSION['user_id']);
        }
        $seed = new $class_name();

        // $name_value_list=$args;
        foreach ($name_value_list as $name => $value) {
            if (is_array($value) && $value['name'] == 'id') {
                $seed->retrieve($value['value']);
                break;
            } elseif ($name === 'id') {
                $seed->retrieve($value);
            }
        }
        $seed->notifyonsave = false;
        foreach ($name_value_list as $name => $value) {
            if ($module_name == 'Users' && !empty($seed->id) && ($seed->id != $current_user->id) && $name == 'user_hash') {
                continue;
            }
            if (!empty($seed->field_name_map[$name]['sensitive'])) {
                continue;
            }
            if ($name == "related_bean") {
                $seed->new_rel_relname = $value;
            }
            if ($name == "related_beans") {
                $related_beans = $value;
            }
            if ($name == "related_id") {
                $seed->new_rel_id = $value;
            }
            if ($name == "relate_id") {
                $_REQUEST['relate_id'] = $value;
            }
            if ($name == "relate_to") {
                $_REQUEST['relate_to'] = $value;
            }
            if (!is_array($value)) {
                $seed->$name = $value;
            } elseif ($name != "related_beans") {
                $seed->$value['name'] = $value['value'];
            }
        }
        if ($seed->ACLAccess('Save')) {
            $seed->not_use_rel_in_req = true;

            if ($seed->deleted == 1) {
                $seed->mark_deleted($seed->id);
            }
            if (empty($seed->id)) {
                $seed->id = create_guid();
                $seed->new_with_id = true;
            }
            if (isset($related_beans)) {
                foreach ($related_beans as $key => $value) {
                    if ($class_name == "Call" && isset($value['module']) && strtolower($value['module']) == "notes") {
                        $note = new Note();
                        $note->retrieve($value['id']);
                        if (!empty($note->id)) {
                            $note->load_relationship('calls');
                            if (isset($value['deleted'])) {
                                $note->calls->delete($seed->id);
                            } else {
                                $note->calls->add($seed->id);
                            }
                        }
                    } else {
                        $relatedModule = strtolower($value['module']);
                        $seed->load_relationship($relatedModule);
                        if (isset($value['deleted'])) {
                            $seed->$relatedModule->delete($value['id']);
                        } else {
                            $seed->$relatedModule->add($value['id']);
                        }
                    }
                }
            }
            $seed->save($seed->notifyonsave);
            return array('id' => $seed->id);
        } else {
            error_log(__METHOD__ . " ERROR SAVING - NO ACCESS");
            return "ERROR SAVING";
        }
    }

    public function getDefaultFieldsValues($moduleBean)
    {
        global $current_user;
        $all_fields = $moduleBean->column_fields;

        foreach ($all_fields as $field) {
            if (isset($moduleBean->$field) && !is_object($moduleBean->$field)) {
                if (($moduleBean->field_name_map[$field]['type'] == "datetime") || $moduleBean->field_name_map[$field]['type'] == "datetimecombo"  || $moduleBean->field_name_map[$field]['type'] == "date") {
                    $module_arr[$field] = $moduleBean->$field;
                    date_default_timezone_set('UTC');
                    $dateField = new \DateTime($moduleBean->fetched_row[$field]);
                    $dateFieldName = $field . "_atom";
                    if ($moduleBean->fetched_row[$field] == "") {
                        $module_arr[$dateFieldName] = "";
                    } else {
                        $module_arr[$dateFieldName] = $dateField->format(DATE_ATOM);
                    }
                } else {
                    //from_html is a SuiteCRM function
                    $moduleBean->$field = from_html($moduleBean->$field);
                    $moduleBean->$field = preg_replace("/\r\n/", '<BR>', $moduleBean->$field);
                    $moduleBean->$field = preg_replace("/\n/", '<BR>', $moduleBean->$field);
                    $module_arr[$field] = $moduleBean->$field;
                }
            }
        }
        return $module_arr;
    }
}
