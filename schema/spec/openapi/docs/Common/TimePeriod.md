# Time period Data Model

## Domain

The  schema is part of the  Domain

## Description

A period of time, either as a deadline (endDateTime only) a startDateTime only, or both

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/TimePeriod.schema.json).

The Data model is defined as shown below:

- `startDateTime` : Start of the time period, using IETC-RFC-3339 format. If you define a start, you must also define an end

  - Optional


- `endDateTime` : End of the time period, using IETC-RFC-3339 format

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon