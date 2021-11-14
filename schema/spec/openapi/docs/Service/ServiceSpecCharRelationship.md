# Service spec char relationship Data Model

## Domain

The  schema is part of the  Domain

## Description

An aggregation, migration, substitution, dependency or exclusivity relationship between/among serviceSpecCharacteristics.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceSpecCharRelationship.schema.json).

The Data model is defined as shown below:

- `relationshipType` : Type of relationship such as aggregation, migration, substitution, dependency, exclusivity

  - Optional


- `role` : The association role for this service specification

  - Optional


- `id` : Unique identifier of the target specification

  - Optional


- `href` : Hyperlink reference to the target specification

  - Optional


- `name` : Name of the target  characteristic

  - Optional


- `validFor` : The period for which the serviceSpecCharRelationship is valid

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon