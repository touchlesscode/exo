# Payment method Data Model

## Domain

The  schema is part of the  Domain

## Description

Defines a specific method of payment (e.g. direct debit with all details associated)

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/PaymentMethod.schema.json).

The Data model is defined as shown below:

- `description` : Text describing the contents of the payment method

  - Optional


- `href` : A resource URI pointing to the resource in the server that stores the detailed information. This is typically the resource url to retrieve individual details for the specific payment method

  - Optional


- `id` : Unique Identifier within the server for the payment method.

  - Optional


- `name` : Friendly name assigned to the payment method

  - Optional


- `preferred` : If the method is the preferred one by the owner. Typically used when querying for the payment methods of a specific customer or account

  - Optional


- `validFor` : Date interval in which the payment method is valid

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon