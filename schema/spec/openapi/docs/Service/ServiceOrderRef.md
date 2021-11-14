# Service order ref Data Model

## Domain

The  schema is part of the  Domain

## Description

Service Order reference. Useful to understand the which was the Service order through which the service was instantiated in the service inventory

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceOrderRef.schema.json).

The Data model is defined as shown below:

- `href` : Reference of the Service Order

  - Optional


- `id` : Unique identifier of the Service Order

  - Optional


- `serviceOrderItemId` : Unique identifier of the Service Order Item within a service order, not populated if this is a reference to a service order

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon