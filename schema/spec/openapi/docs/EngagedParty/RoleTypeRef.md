# Role type ref Data Model

## Domain

The  schema is part of the  Domain

## Description

RoleType reference.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/RoleTypeRef.schema.json).

The Data model is defined as shown below:

- `name` : The name of the role type. It uniquely identifies the role type within the partnership type.

  - Optional


- `partnershipHref` : Reference url of the partnership type containing the role type

  - Optional


- `partnershipId` : The identifier of the partnership type containing the role type

  - Optional


- `partnershipName` : The name of the partnership type defining this role type

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon