# Party or party role ref Data Model

## Domain

The  schema is part of the  Domain

## Description

Party reference. A party represents an organization or an individual.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/PartyOrPartyRoleRef.schema.json).

The Data model is defined as shown below:

- `description` : Text describing the referred party

  - Optional


- `href` : Reference of the referred party (such as a partner or any other party role).

  - Optional


- `id` : Unique identifier of the referred party

  - Optional


- `name` : Name of the referred party (such as a partner or any other party role)

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon