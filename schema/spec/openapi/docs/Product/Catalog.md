# Catalog Data Model

## Domain

The  schema is part of the  Domain

## Description

A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/Catalog.schema.json).

The Data model is defined as shown below:

- `href` : Unique reference of the catalog

  - Optional


- `id` : Unique identifier of the Catalog

  - Optional


- `description` : Description of this catalog

  - Optional


- `lastUpdate` : Date and time of the last update

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status

  - Optional


- `name` : Name of the catalog

  - Optional


- `catalogType` : Indicates if the catalog is a product, service or resource catalog

  - Optional


- `validFor` : The period for which the catalog is valid

  - Optional


- `version` : Catalog version

  - Optional


- `relatedParty` : List of parties involved in this catalog

  - Optional


- `category` : List of root categories contained in this catalog

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon