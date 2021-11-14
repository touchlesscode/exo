# Resource order Data Model

## Domain

The  schema is part of the  Domain

## Description

A Resource Order is a request to provision a set of Resources (logical and physical) triggered by the request to provision a Service through a Service Order

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/ResourceOrder.schema.json).

The Data model is defined as shown below:

- `category` : Used to categorize the order from a business perspective that can be useful for the OM system.

  - Optional


- `completionDate` : Date when the order was completed

  - Optional


- `correlationId` : ID given by the consumer and only understandable by him (to facilitate his searches afterwards)

  - Optional


- `description` : free-text description of the Resource Order

  - Optional


- `href` : Hyperlink to access the order

  - Optional


- `id` : Identifier of an instance of the Resource Order. Required to be unique within the resource type.  Used in URIs as the identifier for specific instances of a type.

  - Optional


- `name` : A string used to give a name to the Resource Order

  - Optional


- `orderDate` : Date when the order was created

  - Optional


- `priority` : A way that can be used by consumers to prioritize orders in OM system (from 0 to 4 : 0 is the highest priority, and 4 the lowest)

  - Optional


- `requestedCompletionDate` : Requested delivery date from the requestor perspective

  - Optional


- `requestedStartDate` : Order start date wished by the requestor

  - Optional


- `state` : The life cycle state of the resource.

  - Optional


- `orderType` : Name of the Resource Order type

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon