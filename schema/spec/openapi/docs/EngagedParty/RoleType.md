# Role type Data Model

## Domain

The  schema is part of the  Domain

## Description

A RoleType represents the type of a PartyRole, defined in the context of a given type of partnership, such as Buyer, Seller.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/RoleType.schema.json).

The Data model is defined as shown below:

- `description` : An explanatory text documenting the role type

  - Optional


- `name` : The name of the role type.

  - Mandatory


- `requiresBilling` : Indicates whether billing operations will be associated to parties playing the role

  - Optional


- `requiresSettlement` : Indicates whether settlement operations will be associated to parties playing the role

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon