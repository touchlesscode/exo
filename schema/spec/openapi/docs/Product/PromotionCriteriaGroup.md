# Promotion criteria group Data Model

## Domain

The  schema is part of the  Domain

## Description

The group of the criteria of the promotion. The logical relationship between different groups is decided by the relationTypeInGroup.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/PromotionCriteriaGroup.schema.json).

The Data model is defined as shown below:

- `@baseType` : The base type for use in polymorphic collections

  - Optional


- `@schemaLocation` : A link to the schema describing a resource (for type extension).

  - Optional


- `@type` : The class type of the actual resource (for type extension).

  - Optional


- `groupName` : Name of the group.

  - Mandatory


- `id` : Unique Identifier

  - Mandatory


- `relationTypeInGroup` : AND/OR,The logical relation type amongst the various criteria inside a promotion criteria group.

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon