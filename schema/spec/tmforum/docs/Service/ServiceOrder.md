# Service order Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceOrder.schema.json).

The Data model is defined as shown below:

- `category` : Used to categorize the order, useful for the OM system, such as: Broadband, TVOption

  - Optional


- `completionDate` : Effective delivery date amended by the provider

  - Optional


- `description` : A free-text description of the service order

  - Optional


- `expectedCompletionDate` : Expected delivery date amended by the provider

  - Optional


- `externalId` : ID given by the consumer to facilitate searches

  - Optional


- `href` : Hyperlink to access the order

  - Optional


- `id` : ID created on repository side

  - Optional


- `note` : Extra-information about the order; e.g. useful to add extra delivery information that could be useful for a human process

  - Optional


- `notificationContact` : Contact attached to the order to send back information regarding this order

  - Optional


- `orderItem` : A list of service order items to be processed by this order

  - Optional


- `orderRelationship` : A list of service orders related to this order (e.g. prerequisite, dependent on)

  - Optional


- `priority` : Can be used by consumers to prioritize orders in a Service Order Management system

  - Optional


- `relatedParty` : A list of parties which are involved in this order and the role they are playing

  - Optional


- `requestedCompletionDate` : Requested delivery date from the requestors perspective

  - Optional


- `requestedStartDate` : Order start date wished by the requestor

  - Optional


- `startDate` : Date when the order was started for processing

  - Optional


- `state` : State of the order: described in the state-machine diagram

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon