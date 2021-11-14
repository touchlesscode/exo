# Association Data Model

## Domain

The  schema is part of the  Domain

## Description

Association is the class that describe a relationship between two or more entity specifications based on a given association specification. The role and type of each endpoint in the relationship is given by an association role. The type of endpoints in the relationship should match the ones as defined in the corresponding association role specification. A relationship between entity specifications may be governed by conditions and rules which are addressed by constraint references in this resource. Constraints for a relationship may include new rules and conditions in addition to those defined for the corresponding association specification

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Association.schema.json).

The Data model is defined as shown below:

- `description` : Description of the association

  - Optional


- `href` : Hyperlink reference to this association

  - Optional


- `id` : unique identifier of the association

  - Optional


- `lastUpdate` : The last modified date of this association object

  - Optional


- `lifecycleStatus` : Indicates the current lifecycle status

  - Optional


- `name` : Name given to this association

  - Optional


- `validFor` : The period for which this association is valid

  - Optional


- `version` : Version of this REST resource

  - Optional


- `associationSpec` : The specification of this association

  - Optional


- `associationRole` : The role of this association

  - Optional


- `constraint` : Any constraints in this association

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon