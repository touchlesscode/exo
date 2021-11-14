# Association specification Data Model

## Domain

The  schema is part of the  Domain

## Description

AssociationSpecification is an association class that describes a type of relationship between two entities. This is a generic construct that may be used to describe relationship types and roles. The role and type of each entity in the relationship is given by an association role specification. Two role specifications are embedded in the association specification.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/AssociationSpecification.schema.json).

The Data model is defined as shown below:

- `description` : Description of the specification

  - Optional


- `href` : Hyperlink reference to this specification

  - Optional


- `id` : unique identifier of the association specification

  - Optional


- `lastUpdate` : The last modified date of this specification

  - Optional


- `lifecycleStatus` : Indicates the current lifecycle status

  - Optional


- `name` : Name given to this association specification

  - Optional


- `validFor` : The period for which this specification is valid

  - Optional


- `version` : Version of this association

  - Optional


- `constraint` : Constraints relating to this association

  - Optional


- `associationRoleSpec` : Role specifications for this association

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon