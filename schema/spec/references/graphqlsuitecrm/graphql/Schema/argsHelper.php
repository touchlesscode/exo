<?php

use Youshido\GraphQL\Type\ListType\ListType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Type\TypeMap;

class argsHelper
{
    public function suitecrmToGraphqlTypeMapper($type)
    {
        switch ($type) {
            case 'datetime':
            case 'date':
            case 'char':
            case 'varchar':
            case 'tinyint':
            case 'bool':
            case 'double':
            case 'text':
            case 'int':
            case 'enum':
            case 'multienum':
            case 'relate':
            case 'currency':
                return new StringType();
            default:
                return new StringType();
        }
    }
    public function entityArgsHelper($entity, $mutation = false)
    {
        global $db, $dictionary, $beanList, $language, $sugar_config;
        $argsArray = [];
        $default_language = $sugar_config['default_language'];
        if (empty($language)) {
            $language = $default_language;
        }
        //make sure dictionary has all the available
        $object = BeanFactory::getObjectName($entity);
        VardefManager::loadVardef($entity, $object);
        // VardefManager::refreshVardefs($entity, $object);  //Commented as this clears the cache

        if (!empty($beanList[$entity]) && $entity != "Cases") {
            $entity = $beanList[$entity];
        } elseif ($entity == "Cases") {
            //Case is a special scenario, Cases is the entity, but aCase is the class and Case seems to be in the dictionary
            $entity = "Case";
        }
        $customOverrideFile = 'custom' . $entity . 'Type.php';
        if (file_exists(__DIR__ . '/../../../../../graphql/Schema/' . $customOverrideFile)) {
            require_once __DIR__ . '/../../../../../graphql/Schema/' . $customOverrideFile;
            if (method_exists($customOverrideFile, 'getFields')) {
                $customFields = $customOverrideFile::getFields();
                foreach ($customFields as $field => $type) {
                    $argsArray = array_merge($argsArray, [
                        $field => $type,
                    ]);
                }
            }
        }
        if (isset($dictionary[$entity])) {
            $moduleFields = $dictionary[$entity]['fields'];
        } else {
            $moduleFields = null;
        }
        if (is_array($moduleFields)) {
            foreach ($moduleFields as $key => $value) {
                if ($moduleFields[$key]['type'] != 'link') {
                    $fieldType = $moduleFields[$key]['type'];
                    $argsArray = array_merge($argsArray, [$key => self::suitecrmToGraphqlTypeMapper($fieldType)]);
                    if ($mutation == false) {
                        //Mutation doesn't allow this types as they are cannot be used to insert new data
                        if ($fieldType == 'date' || $fieldType == 'datetime' || $fieldType == 'datetimecombo') {
                            //If the field type is a date/datetime we add 2 more fields so we can search on that field using range
                            $fieldNameStartRange = "start_range_" . $key;
                            $fieldNameEndRange = "end_range_" . $key;
                            $dateFieldAtomVersion =  $key . "_atom";
                            $argsArray = array_merge($argsArray, [$fieldNameStartRange => self::suitecrmToGraphqlTypeMapper($fieldType)]);
                            $argsArray = array_merge($argsArray, [$fieldNameEndRange => self::suitecrmToGraphqlTypeMapper($fieldType)]);
                            $argsArray = array_merge($argsArray, [$dateFieldAtomVersion => self::suitecrmToGraphqlTypeMapper($fieldType)]);
                        } elseif ($fieldType == 'relate' && isset($moduleFields[$key]['module']) && $moduleFields[$key]['module'] == 'Users') {
                            //Fields of type Related will be added a new _details FIELD to the graphql query
                            // Which will allow to reference the related Module allowing queries like
                            // For example, a related field named related_user_field_c, will have a
                            // related_user_field_c_details which in turn will be linked to the User modules
                            // So it will be possible to query related_user_field_c_details{ user_name}
                            $fieldNamePlusDetails = $key . "_details";
                            $relatedFieldName = $moduleFields[$key]['id_name'];
                            $argsArray = array_merge($argsArray, [
                                $fieldNamePlusDetails =>
                                [
                                    'type' => new UserType(),
                                    'args' => argsHelper::entityArgsHelper('Users', true),
                                    'resolve' => function ($value, array $args, Youshido\GraphQL\Execution\ResolveInfo $info) use ($relatedFieldName) {
                                        if (!empty($relatedFieldName)) {
                                            $args['id'] = $value[$relatedFieldName];
                                            return UserType::resolve($value, $args, $info);
                                        } else {
                                            return null;
                                        }
                                    },
                                ],
                            ]);
                        } elseif ($fieldType == 'relate' && isset($moduleFields[$key]['module']) && $moduleFields[$key]['module'] == 'Contacts') {
                            $fieldNamePlusDetails = $key . "_details";
                            $relatedFieldName = $moduleFields[$key]['id_name'];
                            $argsArray = array_merge($argsArray, [
                                $fieldNamePlusDetails =>
                                [
                                    'type' => new ContactType(),
                                    'args' => argsHelper::entityArgsHelper('Contacts', true),
                                    'resolve' => function ($value, array $args, Youshido\GraphQL\Execution\ResolveInfo $info) use ($relatedFieldName) {
                                        if (!empty($relatedFieldName)) {
                                            $args['id'] = $value[$relatedFieldName];
                                            return ContactType::resolve($value, $args, $info);
                                        } else {
                                            return null;
                                        }
                                    },
                                ],
                            ]);
                        } elseif ($fieldType == 'relate' && isset($moduleFields[$key]['module']) && $moduleFields[$key]['module'] == 'Accounts') {
                            $fieldNamePlusDetails = $key . "_details";
                            $relatedFieldName = $moduleFields[$key]['id_name'];
                            $argsArray = array_merge($argsArray, [
                                $fieldNamePlusDetails =>
                                [
                                    'type' => new AccountType(),
                                    'args' => argsHelper::entityArgsHelper('Accounts', true),
                                    'resolve' => function ($value, array $args, Youshido\GraphQL\Execution\ResolveInfo $info) use ($relatedFieldName) {
                                        if (!empty($relatedFieldName)) {
                                            $args['id'] = $value[$relatedFieldName];
                                            return AccountType::resolve($value, $args, $info);
                                        } else {
                                            return null;
                                        }
                                    },
                                ],
                            ]);
                        } elseif ($fieldType == 'relate' && isset($moduleFields[$key]['module']) && $moduleFields[$key]['module'] == 'Opportunities') {
                            $fieldNamePlusDetails = $key . "_details";
                            $relatedFieldName = $moduleFields[$key]['id_name'];
                            $argsArray = array_merge($argsArray, [
                                $fieldNamePlusDetails =>
                                [
                                    'type' => new OpportunityType(),
                                    'args' => argsHelper::entityArgsHelper('Opportunities', true),
                                    'resolve' => function ($value, array $args, Youshido\GraphQL\Execution\ResolveInfo $info) use ($relatedFieldName) {
                                        if (!empty($relatedFieldName)) {
                                            $args['id'] = $value[$relatedFieldName];
                                            return OpportunityType::resolve($value, $args, $info);
                                        } else {
                                            return null;
                                        }
                                    },
                                ],
                            ]);
                        }
                    }
                }
            }
        }
        $argsArray = array_merge($argsArray, [
            //TODO: This variables should only be exposed on QUERY but not to MUTATION.
            'offset' => new StringType(TypeMap::TYPE_INT),
            'limit' => new StringType(TypeMap::TYPE_INT),
            'order' => new StringType(TypeMap::TYPE_STRING),
            'distinct' => new StringType(TypeMap::TYPE_STRING),
            'relate_to' => new StringType(TypeMap::TYPE_STRING),
            'relate_id' => new StringType(TypeMap::TYPE_STRING),
            'notifyonsave' => new StringType(TypeMap::TYPE_BOOLEAN),
        ]);
        //Some modules have more fields due to relations or special fields
        if ($entity == 'Contact' || $entity == 'Account' || $entity == 'Prospect' || $entity == 'Lead') {
            $argsArray = array_merge($argsArray, [
                'email1' => new StringType(TypeMap::TYPE_STRING),
                'ids' => new ListType(new StringType(TypeMap::TYPE_STRING)),
            ]);
        }
        if ($entity == 'Opportunity') {
            $argsArray = array_merge($argsArray, [
                'account_id' => new StringType(TypeMap::TYPE_STRING),
            ]);
        }
        if ($entity == 'Call' || $entity == 'Case' || $entity == 'Note' || $entity == 'Account' || $entity == 'Contact' || $entity == 'Lead' || $entity == 'Opportunitiy' || $entity == 'Meeting' || $entity == 'Task') {
            $argsArray = array_merge($argsArray, [
                'related_bean' => new StringType(TypeMap::TYPE_STRING),
                'related_id' => new StringType(TypeMap::TYPE_STRING),
            ]);
        }

        return $argsArray;
    }
}
