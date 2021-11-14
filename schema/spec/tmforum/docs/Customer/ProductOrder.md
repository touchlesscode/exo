# Product order Data Model

## Domain

The  schema is part of the  Domain

## Description

A Product Order is a type of order which  can  be used to place an order between a customer and a service provider or between a service provider and a partner and vice versa,

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/ProductOrder.schema.json).

The Data model is defined as shown below:

- `agreement` : A reference to an agreement defined in the context of the product order

  - Optional


- `cancellationDate` : Date when the order is cancelled. This is used when order is cancelled. 

  - Optional


- `cancellationReason` : Reason why the order is cancelled. This is used when order is cancelled. 

  - Optional


- `category` : Used to categorize the order from a business perspective that can be useful for the OM system (e.g. &quot;enterprise&quot;, &quot;residential&quot;, ...)

  - Optional


- `completionDate` : Date when the order was completed

  - Optional


- `description` : Description of the product order

  - Optional


- `expectedCompletionDate` : Expected delivery date amended by the provider

  - Optional


- `externalId` : ID given by the consumer and only understandable by him (to facilitate his searches afterwards)

  - Optional


- `href` : Hyperlink to access the order

  - Optional


- `id` : ID created on repository side (OM system)

  - Optional


- `notificationContact` : Contact attached to the order to send back information regarding this order

  - Optional


- `orderDate` : Date when the order was created

  - Optional


- `priority` : A way that can be used by consumers to prioritize orders in OM system (from 0 to 4 : 0 is the highest priority, and 4 the lowest)

  - Optional


- `requestedCompletionDate` : Requested delivery date from the requestor perspective

  - Optional


- `requestedStartDate` : Order fulfillment start date wished by the requestor. This is used when, for any reason, requestor cannot allow seller to begin to operationally begin the fulfillment before a date. 

  - Optional


- `state` : Tracks the lifecycle status of the product order, such as Acknowledged, Rejected, InProgress, Pending and so on.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon