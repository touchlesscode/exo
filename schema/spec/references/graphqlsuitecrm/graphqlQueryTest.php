<?php

// namespace SuiteCRM;

use Youshido\GraphQL\Execution\Processor;
use Youshido\GraphQL\Schema\Schema;

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/graphql/Schema/SuiteCRMSchema.php';       // including PostType definition
require_once __DIR__.'/graphql/schema-bootstrap.php';
$schema = new SuiteCRMSchema();

$processor = new Processor($schema);
$payload = '{
 quotes {
  id
  name
  total_amt
  billing_account_id
  opportunity_id
  opportunity_details{
    name
  }
  billing_account_details{
    id
    name
    contacts {
      first_name
    }
  }

}
}';
//
$payload = '
query  {
 accounts (name: "%UNI%" ids: ["000554-exactus","005895-exactus"]) {
   name
   id
   account_id_c
  contacts (last_name:"ND"){
   last_name
 }
   }
 }


';
$payload = '
mutation {
  createContact(
    first_name:"z1-name"
    last_name:"z1-lastname"
    lastname2_c:"z1-lastname2"
    related_beans:[ {module:"accounts", id:"95599"} ]
  ) {
    id
  }
}
';
// $payload = '{ accounts {name contacts { first_name  calls { name } }  } contacts ( first_name: "dai") { first_name last_name  } }';
$payload = 'query {

    calls (limit: 10){
                               id
                               name
                               contacts(limit: 200){ id first_name last_name}
                             }

}

';
// $payload = ' {  q: contacts (first_name: "dai") { first_name created_by created_user_details {roles  first_name  last_name email1} modified_user_details{ email1} assigned_user_details { first_name roles   email1 } }}';
// $payload='query { calls {parent_id parent_type parent_contact{first_name}}}';
// $payload='
// {llamadas: calls (name:"**") {name, id,  related_contacts {first_name }}
//  contactos: contacts(first_name:"dai") {id, first_name} }
// mutation {createCall(id: "95cb03ac-8d6c-8768-8c1e-573e0ec2f889", name: "*** LALA", related_bean: "Contacts", related_id: "f1cb3797-cd6c-3d4c-8190-573a4c34d77b")}';
// $payload='{"query":"{\n  calls ( start_range_date_entered: \"2015-04-01\", end_range_date_entered: \"2015-06-01\") {\n  \tname\n    date_entered\n\t}\n}","variables":""}';
// $payload='{ accounts { name } }';
// $payload='{contacts ( first_name:"", last_name:"", lastname2_c:"", cedula_c:"119200330310"){                id                cedula_c                extranjero_c                cliente_c                first_name                last_name                lastname2_c                email1                sex_c                phone_mobile                phone_work                phone_home                birthdate }            }';


$processor->processPayload($payload);
echo json_encode($processor->getResponseData())."\n";
