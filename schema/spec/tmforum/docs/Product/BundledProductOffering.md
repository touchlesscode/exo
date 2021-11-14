# Bundled product offering Data Model

## Domain

The  schema is part of the  Domain

## Description

A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/BundledProductOffering.schema.json).

The Data model is defined as shown below:

- `href` : Unique reference of the BundledProductOffering

  - Optional


- `id` : Unique identifier of the BundledProductOffering

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status

  - Optional


- `name` : Name of the BundledProductOffering

  - Optional


- `bundledProductOfferingOption` : A set of numbers that specifies the lower and upper limits for a ProductOffering that can be procured as part of the related BundledProductOffering. Values can range from 0 to unbounded.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon