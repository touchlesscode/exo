# Category Data Model

## Domain

The  schema is part of the  Domain

## Description

The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/Category.schema.json).

The Data model is defined as shown below:

- `description` : Description of the category

  - Optional


- `href` : Reference of the category

  - Optional


- `id` : Unique identifier of the category

  - Optional


- `isRoot` : If true, this Boolean indicates that the category is a root of categories

  - Optional


- `lastUpdate` : Date and time of the last update

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status

  - Optional


- `name` : Name of the category

  - Optional


- `parentId` : Unique identifier of the parent category

  - Optional


- `productOffering` : A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information.

  - Optional


- `subCategory` : The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other (sub-)categories and/or product offerings.

  - Optional


- `validFor` : The period for which the category is valid

  - Optional


- `version` : Category version

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon