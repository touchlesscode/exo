<?php

use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\ListType\ListType;

require_once 'argsHelper.php';

class OpportunityInputType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach (argsHelper::entityArgsHelper('Opportunities', true) as $field => $type) {
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
        $config->addField('related_beans', new ListType(new RelatedBeanInputType()));
    }

    public function resolve($value = null, $args = [], $type = null)  // implementing resolve function
    {
        //We use the crm Helper to create/save the Bean
        return crmHelper::saveBean("Opportunities","Opportunity",$args);
    }
    public function getName()
    {
        return 'Opportunity';  // important to use the real name here, it will be used later in the Schema
    }
    public function getOutputType()
    {
        return 'Opportunity';  // important to use the real name here, it will be used later in the Schema
    }
}
