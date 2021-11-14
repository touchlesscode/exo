# Payment method ref or value Data Model

## Domain

The  schema is part of the  Domain

## Description

link to the resource that holds information about the payment mean used to complete the operation

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/PaymentMethodRefOrValue.schema.json).

The Data model is defined as shown below:

- `details` : The list of parameters depends on the type of payment method

  - Optional


- `href` : A resource URI pointing to the resource in the OB that stores the channel information

  - Mandatory


- `id` : Unique identifier for the channel entity

  - Mandatory


- `name` : Name of the channel

  - Optional


- `type` : Type of payment method (bankcard, voucher, �)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon