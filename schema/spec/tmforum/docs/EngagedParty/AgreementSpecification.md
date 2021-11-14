# Agreement specification Data Model

## Domain

The  schema is part of the  Domain

## Description

A template of an agreement that can be used when establishing partnerships

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/AgreementSpecification.schema.json).

The Data model is defined as shown below:

- `description` : A narrative that explains in detail what the agreement specification is about

  - Optional


- `href` : Reference of the agreement specification

  - Optional


- `id` : Unique identifier of the agreement specification

  - Optional


- `isBundle` : If true, this agreement specification is a grouping of other agreement specifications. The list of bundled agreement specifications is provided by the specificationRelationship property

  - Optional


- `lastUpdate` : Date and time of the last update

  - Optional


- `lifecycleStatus` : Indicates the current lifecycle status

  - Optional


- `name` : Name of the agreement specification

  - Mandatory


- `validFor` : The period for which the agreement specification is valid

  - Optional


- `version` : Agreement specification version

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon