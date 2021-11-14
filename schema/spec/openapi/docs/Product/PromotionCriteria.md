# Promotion criteria Data Model

## Domain

The  schema is part of the  Domain

## Description

Criteria of the promotion.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/PromotionCriteria.schema.json).

The Data model is defined as shown below:

- `@baseType` : The base type for use in polymorphic collections

  - Optional


- `@schemaLocation` : A link to the schema describing a resource (for type extension).

  - Optional


- `@type` : The class type of the actual resource (for type extension).

  - Optional


- `criteriaOperator` : The logic expression including parameter and operator. includeing:=,&amp;gt;,&amp;lt;,&amp;gt;=,&amp;lt;=,&amp;lt;&amp;gt;

  - Mandatory


- `criteriaPara` : The parameter (factor) of the criteria.The basic factors are abstracted from these data sources.There are several detail parameters .

  - Mandatory


- `criteriaValue` : The value is filled for the comparison of the criteria.

  - Mandatory


- `id` : Unique identifier.

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon