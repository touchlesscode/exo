# Resource order item Data Model

## Domain

The  schema is part of the  Domain

## Description

An identified part of the order. A resource order is decomposed into one or more order items.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/ResourceOrderItem.schema.json).

The Data model is defined as shown below:

- `action` : Can be &quot;add&quot; / &quot;modify&quot; / &quot;no_change&quot;/ &quot;delete&quot;

  - Optional


- `id` : Identifier of the line item (generally it is a sequence number 01, 02, 03, ...)

  - Optional


- `quantity` : Quantity ordered

  - Optional


- `state` : State of the order item : described in the state machine diagram

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon