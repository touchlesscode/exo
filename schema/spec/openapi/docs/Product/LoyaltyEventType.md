# Loyalty event type Data Model

## Domain

The  schema is part of the  Domain

## Description

An event type used to match filter incoming loyalty events.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/LoyaltyEventType.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier for the loyalty event type.

  - Optional


- `href` : A reference to the loyalty event type.

  - Optional


- `eventType` : The type of loyalty event expected to trigger the loyalty rule evaluation, e.g. a CustomerOrder or an Invoice. The eventType should be unique to prevent existing resources not being reused. An eventType that already exists will result in a 422 error.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon