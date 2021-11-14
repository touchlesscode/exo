# Promotion pattern Data Model

## Domain

The  schema is part of the  Domain

## Description

Detailed pattern of the promotion.The pattern decides the conditions of promotion and the benefit of the promotion to be given to the eligible customer.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/PromotionPattern.schema.json).

The Data model is defined as shown below:

- `@baseType` : The base type for use in polymorphic collections

  - Optional


- `@schemaLocation` : A link to the schema describing a resource (for type extension).

  - Optional


- `@type` : The class type of the actual resource (for type extension).

  - Optional


- `description` : Description

  - Optional


- `id` : Unique identifier.

  - Mandatory


- `name` : Name

  - Mandatory


- `priority` : Priority. Smaller number means high.

  - Optional


- `relationTypeAmongGroup` : AND/OR ,The logical relation type amongst the promotion criteria group.

  - Optional


- `validFor` : The period  for which the promotion pattern  is valid.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon