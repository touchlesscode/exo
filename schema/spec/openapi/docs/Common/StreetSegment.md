# Street segment Data Model

## Domain

The  schema is part of the  Domain

## Description

StreetSegment corresponds to a part of a street referenced by a number or a set of number. Sometimes a suffix is added.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/StreetSegment.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the Street Segment

  - Optional


- `number` : number identifying a specific property on a public street. It may be combined with streetNrLast for ranged addresses

  - Optional


- `numberLast` : the last number in a range of street numbers allocated to a property

  - Optional


- `numberLastSuffix` : the last street number suffix for a ranged address

  - Optional


- `numberSuffix` : the first street number suffix

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon