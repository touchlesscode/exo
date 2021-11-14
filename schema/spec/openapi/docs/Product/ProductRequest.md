# Product request Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductRequest.schema.json).

The Data model is defined as shown below:

- `description` : Is the description of the product. It could be copied from the description of the Product Offering.

  - Optional


- `href` : Reference of the product

  - Optional


- `id` : Unique identifier of the product

  - Optional


- `isBundle` : If true, the product is a ProductBundle which is an instantiation of a BundledProductOffering. If false, the product is a ProductComponent which is an instantiation of a SimpleProductOffering.

  - Optional


- `isCustomerVisible` : If true, the product is visible by the customer.

  - Optional


- `name` : Name of the product. It could be the same as the name of the product offering

  - Optional


- `orderDate` : Is the date when the product was ordered

  - Optional


- `productSerialNumber` : Is the serial number for the product. This is typically applicable to tangible products e.g. Broadband Router.

  - Optional


- `startDate` : Is the date from which the product starts

  - Optional


- `status` : Is the lifecycle status of the product.

  - Optional


- `terminationDate` : Is the date when the product was terminated

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon