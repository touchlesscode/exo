# Related product order item Data Model

## Domain

The  schema is part of the  Domain

## Description

RelatedProductOrderItem (ProductOrder item) .The product order item which triggered product creation/change/termination.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/RelatedProductOrderItem.schema.json).

The Data model is defined as shown below:

- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional


- `productOrderHref` : Reference of the related entity.

  - Optional


- `productOrderId` : Unique identifier of a related entity.

  - Mandatory


- `orderItemAction` : Action of the order item for this product

  - Optional


- `orderItemId` : Identifier of the order item where the product was managed

  - Mandatory


- `role` : role of the product order item for this product

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon