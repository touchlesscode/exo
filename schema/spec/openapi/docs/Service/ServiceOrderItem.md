# Service order item Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceOrderItem.schema.json).

The Data model is defined as shown below:

- `id` : Identifier of the individual line item

  - Mandatory


- `action` : The action to be carried out on the Service. Can be: add, modify, delete, noChange

  - Mandatory


- `state` : State of the order item: described in the state machine diagram. This is the requested state.

  - Optional


- `service` : The Service to be acted on by the order item

  - Optional


- `appointment` : An appointment that was set up with a related party for this order item

  - Optional


- `serviceOrderItemRelationship` : A list of order items related to this order item

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon