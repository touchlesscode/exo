# Partnership specification role ref Data Model

## Domain

The  schema is part of the  Domain

## Description

Reference to the RoleSpecification reference contained within a given partnership specification.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/PartnershipSpecificationRoleRef.schema.json).

The Data model is defined as shown below:

- `href` : The href of the containing partnership specification.

  - Optional


- `id` : The id of the containing partnership specification.

  - Optional


- `name` : The name of the partnership specification.

  - Optional


- `roleName` : The name of the role specification - which should be defined within the partnership specification

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon