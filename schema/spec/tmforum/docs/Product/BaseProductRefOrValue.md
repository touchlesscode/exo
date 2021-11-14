# Base product ref or value Data Model

## Domain

The  schema is part of the  Domain

## Description

In the context of a product order or a product offering qualification, this data structure captures the product information useful to order or qualified  an existing subscribed product or to a new one. This is a subset of relevant product attributes for ordering and qualification

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/BaseProductRefOrValue.schema.json).

The Data model is defined as shown below:

- `href` : Reference of the product

  - Optional


- `id` : Unique identifier of the product

  - Optional


- `isRef` : indicate if ref pattern is used

  - Optional


- `name` : This is the name of the product.

  - Optional


- `isBundle` : If true, the product is a ProductBundle which is an instantiation of a BundledProductOffering. If false, the product is a ProductComponent which is an instantiation of a SimpleProductOffering.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon