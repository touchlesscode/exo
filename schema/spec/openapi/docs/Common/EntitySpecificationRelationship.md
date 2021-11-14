# Entity specification relationship Data Model

## Domain

The  schema is part of the  Domain

## Description

A migration, substitution, dependency or exclusivity relationship between/among entity specifications.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/EntitySpecificationRelationship.schema.json).

The Data model is defined as shown below:

- `href` : Reference of the target EntitySpecification

  - Optional


- `id` : Unique identifier of target EntitySpecification

  - Optional


- `name` : The name given to the target entity specification instance

  - Optional


- `role` : The association role for this entity specification

  - Optional


- `relationshipType` : Type of relationship such as migration, substitution, dependency, exclusivity

  - Optional


- `validFor` : The period for which the entitySpecRelationship is valid

  - Optional


- `associationSpec` : A specification for an association used by this relationship

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon