<?php

use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Type\ListType\ListType;
use Youshido\GraphQL\Execution\ResolveInfo;

require_once 'argsHelper.php';

class CampaignType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach (argsHelper::entityArgsHelper('Campaigns') as $field => $type) {
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
                    $args['ids'] = $value['parent_opportunity'];
                    return AccountType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        $config->addField('parent_opportunity', [
            'type' => new OpportunityType(),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['parent_opportunity'])) {
                    $args['ids'] = $value['parent_opportunity'];
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
            }
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
        $config->addField('notes', [
            'type' => new ListType(new NoteType()),
            'args' => argsHelper::entityArgsHelper('Notes'),
            'resolve' => function ($value, array $args, ResolveInfo $info) {
                if (!empty($value['notes'])) {
                    $args['ids'] = $value['notes'];
                    return NotesListType::resolve($value, $args, $info);
                } else {
                    return null;
                }
            },
        ]);
        if (file_exists(__DIR__ . '/../../../../../graphql/Schema/customCampaignType.php')) {
            require_once __DIR__ . '/../../../../../graphql/Schema/customCampaignType.php';
            if (method_exists(customCampaignType, getFields)) {
                $customFields = customCampaignType::getFields();
                foreach ($customFields as $field => $type) {
                    $config->addField($field, $type);
                }
            }
        }
    }
    private function retrieveCampaign($id, $info)
    {
        global $sugar_config, $current_user;
        $moduleBean = BeanFactory::getBean('Campaigns');
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
                $module_arr['contacts'] =  array();
                foreach ($moduleBean->get_linked_beans('contacts', 'Contact') as $contact) {
                    $module_arr['contacts'][] = $contact->id;
                }
            }
            if (isset($queryFields) && array_key_exists('accounts', $queryFields)) {
                $module_arr['accounts'] =  array();
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
            if (isset($queryFields) && array_key_exists('notes', $queryFields)) {
                $module_arr['notes'] =  array();
                foreach ($moduleBean->get_linked_beans('notes') as $note) {
                    $module_arr['notes'][] = $note->id;
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
                        $resultArray[] = self::retrieveCampaign($moduleBeanIdItem, $info);
                    }
                } elseif (!empty($moduleBeanId)) {
                    $resultArray[] = self::retrieveCampaign($moduleBeanId, $info);
                }
            }

            return $resultArray;
        } elseif (!empty($args['id'])) {
            return self::retrieveCampaign($args['id'], $info);
        }
    }

    public function getName()
    {
        return 'campaign';  // important to use the real name here, it will be used later in the Schema
    }
}