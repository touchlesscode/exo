# Promotion Data Model

## Domain

The  schema is part of the  Domain

## Description

Promotion Resource is used to provide the additional discount, voucher, bonus or gift to the customer who meets the pre-defined criteria. Using promotion, the enterprise is able to attract the users and encourage more consumption, especially continuous purchases.   Normally Promotion is not regarded as one type of product or product offering. It is often applied when the customer buys the product offerings with the price or amount surpassing the certain limit.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/Promotion.schema.json).

The Data model is defined as shown below:

- `@baseType` : The base type for use in polymorphic collections

  - Optional


- `@schemaLocation` : A link to the schema describing a resource (for type extension).

  - Optional


- `@type` : The class type of the actual resource (for type extension).

  - Optional


- `description` : Description of Promotion

  - Optional


- `href` : Hyperlink to access the promotion.

  - Optional


- `id` : Unique identifier of Promotion.

  - Optional


- `lastUpdate` : Latest update date of Promotion

  - Optional


- `lifecycleStatus` : Status of Promotion, including draft/Test/WaitForApproval/Release/Suspend/Retirement.

  - Optional


- `name` : Name of Promotion.

  - Mandatory


- `type` : Type of promotion.The basic type is Award/Discount/Reduction. More types can be extended in future.

  - Optional


- `validFor` : The period for which the promotion is valid.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon