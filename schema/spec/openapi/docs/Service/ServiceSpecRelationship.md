# Service spec relationship Data Model

## Domain

The  schema is part of the  Domain

## Description

A migration, substitution, dependency or exclusivity relationship between/among service specifications.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceSpecRelationship.schema.json).

The Data model is defined as shown below:

- `relationshipType` : Type of relationship such as migration, substitution, dependency, exclusivity

  - Optional


- `role` : The association role for this service specification

  - Optional


- `id` : Unique identifier of the target serviceSpecification

  - Optional


- `href` : Reference of the target serviceSpecification

  - Optional


- `name` : The name given to the target service specification instance

  - Optional


- `validFor` : The period for which the serviceSpecRelationship is valid

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon