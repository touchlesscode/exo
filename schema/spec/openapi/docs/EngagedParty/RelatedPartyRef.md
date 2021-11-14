# Related party ref Data Model

## Domain

The  schema is part of the  Domain

## Description

RelatedParty reference. A related party defines party or party role linked to a specific entity.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/RelatedPartyRef.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of a related party

  - Optional


- `href` : Reference of the related party, could be a party reference or a party role reference

  - Optional


- `name` : Name of the related party

  - Optional


- `role` : Role of the related party.

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon