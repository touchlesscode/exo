# Service order item relationship Data Model

## Domain

The  schema is part of the  Domain

## Description

Linked service order item to the one containing this attribute

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceOrderItemRelationship.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of a service order item

  - Mandatory


- `relationshipType` : The type of related order item, can be: dependency if the order item needs to be not started until another order item is complete

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon