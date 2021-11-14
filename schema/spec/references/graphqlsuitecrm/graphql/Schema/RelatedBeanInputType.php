<?php
use Youshido\GraphQL\Type\InputObject\AbstractInputObjectType;
use Youshido\GraphQL\Type\Scalar\StringType;
use Youshido\GraphQL\Execution\ResolveInfo;

require_once 'argsHelper.php';

class RelatedBeanInputType extends AbstractInputObjectType   // extending abstract Object type
{
    public function build($config)  // implementing an abstract function where you build your type
    {
        $config->addField('module', new StringType());
        $config->addField('id', new StringType());
        $config->addField('deleted', new StringType());
    }
    public function resolve($value = null, $args = [], $type = null)  // implementing resolve function
    {
        //We use the crm Helper to create/save the Bean
        // return crmHelper::saveBean('Calls', 'Call', $args);
    }
    public function getName()
    {
        return 'RelatedBeanInputType';  // important to use the real name here, it will be used later in the Schema
    }
    // public function getOutputType()
    // {
    //     return new StringType();  // important to use the real name here, it will be used later in the Schema
    // }
}
