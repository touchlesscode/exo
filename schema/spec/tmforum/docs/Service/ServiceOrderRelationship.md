# Service order relationship Data Model

## Domain

The  schema is part of the  Domain

## Description

Linked service order to the one containing this attribute

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceOrderRelationship.schema.json).

The Data model is defined as shown below:

- `@referredType` : The entity type of the related order

  - Optional


- `href` : A hyperlink to the related order

  - Optional


- `id` : The id of the related order

  - Mandatory


- `relationshipType` : The type of related order, such as: [dependency] if the order needs to be [not started] until another order item is complete (a service order in this case) or [cross-ref] to keep track of the source order (a productOrder)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon