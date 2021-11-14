# Party role ref Data Model

## Domain

The  schema is part of the  Domain

## Description

Party role reference. A party role represents the part played by a party in a given context.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/PartyRoleRef.schema.json).

The Data model is defined as shown below:

- `href` : Reference of the product

  - Optional


- `id` : Unique identifier of the product

  - Optional


- `name` : The name of the referred party role.

  - Optional


- `partyId` : The identifier of the engaged party that is linked to the PartyRole object.

  - Optional


- `partyName` : The name of the engaged party that is linked to the PartyRole object.

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon