<?php

use Youshido\GraphQL\Type\Object\AbstractObjectType;

class AccountInputType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach (argsHelper::entityArgsHelper('Accounts', true) as $field => $type) {
            $config->addField($field, $type);
        }
        $config->addField('created_user_details', new UserType(), [
                 'resolve' => function ($contact) {
                     return UserType::resolve(null, ['id' => $contact['created_user_details']], null);
                 },
         ]);
        $config->addField('assigned_user_details', new UserType(), [
                  'resolve' => function ($contact) {
                      return UserType::resolve(null, ['id' => $contact['assigned_user_details']], null);
                  },
          ]);
        $config->addField('modified_user_details', new UserType(), [
                  'resolve' => function ($contact) {
                      return UserType::resolve(null, ['id' => $contact['modified_user_details']], null);
                  },
          ]);
    }

    public function resolve($value = null, $args = [], $type = null)  // implementing resolve function
    {
        //We use the crm Helper to create/save the Bean
        return crmHelper::saveBean("Accounts","Account",$args);

    }
    public function getName()
    {
        return 'Account';  // important to use the real name here, it will be used later in the Schema
    }
    public function getOutputType()
    {
        return 'Account';  // important to use the real name here, it will be used later in the Schema
    }
}
