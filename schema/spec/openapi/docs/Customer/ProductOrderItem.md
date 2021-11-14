# Product order item Data Model

## Domain

The  schema is part of the  Domain

## Description

An identified part of the order. A product order is decomposed into one or more order items.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/ProductOrderItem.schema.json).

The Data model is defined as shown below:

- `id` : Identifier of the line item (generally it is a sequence number 01, 02, 03, ...)

  - Optional


- `quantity` : Quantity ordered

  - Optional


- `action` : The action to be carried out on the Product. Can be: add, modify, delete, noChange

  - Optional


- `state` : State of the order item : described in the state machine diagram

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon