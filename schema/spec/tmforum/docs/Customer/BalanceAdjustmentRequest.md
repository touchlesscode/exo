# Balance adjustment request Data Model

## Domain

The  schema is part of the  Domain

## Description

the BalanceAdjustment resource is a detailed description of credit adjustment operation erformed on a given bucket (defined by a specific product or reference to a product (i.e.: a commercial id such as an msisidn) and a service type)

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceAdjustmentRequest.schema.json).

The Data model is defined as shown below:

- `bucket` : A reference to the bucket impacted by the request. This is used in scenarios where the requestor knows beforehand the bucket that is going to be impacted instead of just referring to the commercial identifier of the impacted product and the type of bucket created under that product

  - Optional


- `description` : Description of the recharge operation

  - Optional


- `href` : A resource URI pointing to the resource in the OB that stores the detailed information. This is typically the resource url to retrieve individual top-up operation details

  - Mandatory


- `id` : Unique Identifier within the server for the balance adjustment operation request

  - Mandatory


- `partyAccount` : A reference to the account that owns the bucket impacted by the balance related operation

  - Optional


- `relatedParty` : Used to provide information about any other entity with relation to the operation

  - Optional


- `requestedDate` : Date when the top-up request was received in the server

  - Mandatory


- `requestor` : Identifier for the user/customer/entity that performs the top-up action. This can be used to indicate the identifier of an agent that performs the operation on behalf of a user via a customer service channel. Structure including at least attributes �role� and �name�.

  - Optional


- `validFor` : The period defined for the adjusted amount to be part of the prepay balance. This could be used to define expiration times to remove balance not consumed.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon