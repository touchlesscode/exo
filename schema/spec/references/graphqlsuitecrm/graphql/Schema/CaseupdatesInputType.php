<?php

use Youshido\GraphQL\Type\Object\AbstractObjectType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Type\ListType\ListType;
require_once 'argsHelper.php';

class CaseupdatesInputType extends AbstractObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        foreach (argsHelper::entityArgsHelper('AOP_Case_Updates', true) as $field => $type) {
            $config->addField($field, $type);
        }
    }

    public function resolve($value = null, $args = [], $type = null)  // implementing resolve function
    {
        //We use the crm Helper to create/save the Bean
        return crmHelper::saveBean('AopCaseUpdates', 'AOP_Case_Updates', $args);
    }

    public function getName()
    {
        return 'AOP_Case_Updates';  // important to use the real name here, it will be used later in the Schema
    }
    public function getOutputType()
    {
        return 'AOP_Case_Updates';  // important to use the real name here, it will be used later in the Schema
    }
}
