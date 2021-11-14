# Search time slot Data Model

## Domain

The  schema is part of the  Domain

## Description

This task resource is used to retrieve available time slots. One of this available time slot is after used to create or reschedule an appointment

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/SearchTimeSlot.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the search time slot request

  - Optional


- `href` : Reference to access the search time slot resource

  - Optional


- `searchDate` : Date when the search time slot is performed

  - Optional


- `searchResult` : Result of the search time slot (success or fail for example)

  - Optional


- `relatedParty` : RelatedParty reference. A related party defines party or party role linked to a specific entity.

  - Optional


- `relatedPlace` : Related place defines (by reference or value) the place where the appointment will take place.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon