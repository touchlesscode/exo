# Bucket balance Data Model

## Domain

The  schema is part of the  Domain

## Description

Represents and tracks the amount remained or owed for a certain type of service by certain customer

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BucketBalance.schema.json).

The Data model is defined as shown below:

- `type` : Type of prepay balance bucket (e.g.: promotion, deposit, bonus, data, voice, or any other service type)

  - Optional


- `description` : Text describing the contents of the balance managed by the bucket

  - Optional


- `href` : A resource URI pointing to the resource in the OB that stores the detailed information for the bucket

  - Mandatory


- `id` : Unique Identifier within the server for the bucket

  - Mandatory


- `name` : Friendly name to identify the bucket

  - Optional


- `partyAccount` : A reference to the account that owns the bucket

  - Optional


- `product` : A reference to the product whose consumption is managed by the bucket. This is an array to allow scenarios where a given bucket is shared between different products.

  - Mandatory


- `realizingResource` : A reference to the resource that realizes a product. This is an array to allow scenarios where a given bucket is shared between different resources.

  - Optional


- `relatedParty` : Used to provide information about any other entity with relation to the balance, for instance to define customer hierarchy for the balance (e.g.: customerId, userId, )

  - Optional


- `amount` : Amount remained in the bucket

  - Optional


- `reservedAmount` : Indicate the reserved amount on the bucket

  - Optional


- `status` : Status for the balance (active, expired, suspended)

  - Mandatory


- `validFor` : The period for which the balance in the bucket is valid

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon