# Balance adjust Data Model

## Domain

The  schema is part of the  Domain

## Description

the BalanceAdjust resource is a detailed description of credit adjustment operation erformed on a given bucket (defined by a specific product or reference to a product (i.e.: a commercial id such as an msisidn) and a service type)

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceAdjust.schema.json).

The Data model is defined as shown below:

- `id` : Unique Identifier within the server for the balance adjustment operation request

  - Mandatory


- `href` : A resource URI pointing to the resource in the OB that stores the detailed information. This is typically the resource url to retrieve individual top-up operation details

  - Mandatory


- `type` : A preconfigured value that describes a TopUp type which determines the prepay balance bucket in which the top-up is done (national-voice, roaming-voice, promotional-voice, data, ....)

  - Optional


- `description` : Description of the recharge operation

  - Optional


- `reason` : Text describing the reason for the adjustment

  - Optional


- `requestor` : Identifier for the user/customer/entity that performs the top-up action. This can be used to indicate the identifier of an agent that performs the operation on behalf of a user via a customer service channel. Structure including at least attributes �role� and �name�.

  - Optional


- `amount` : Amount (can be monetary or non-monetary) to be recharged in the bucket. It could refer to positive (increment) or negative (decrement) values

  - Optional


- `requestedDate` : Date when the top-up request was received in the server

  - Mandatory


- `product` : A reference to the product related to the bucket that is impacted by the balance related operation

  - Mandatory


- `bucket` : A reference to the bucket impacted by the request. This is used in scenarios where the requestor knows beforehand the bucket that is going to be impacted instead of just referring to the commercial identifier of the impacted product and the type of bucket created under that product

  - Optional


- `partyAccount` : A reference to the account that owns the bucket impacted by the balance related operation

  - Optional


- `relatedParty` : Used to provide information about any other entity with relation to the operation

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon