# Entity category Data Model

## Domain

The  schema is part of the  Domain

## Description

The (entity) category resource is used to group entity catalog items in logical containers. Categories can contain other categories.
Resource IDs for categories are strings and are defined by the catalog application.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/EntityCategory.schema.json).

The Data model is defined as shown below:

- `description` : Description of the category

  - Optional


- `href` : Hyperlink reference to the category

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


- `validFor` : The period for which the category is valid

  - Optional


- `childCategory` : The child category(ies) if any, contained in this category

  - Optional


- `entityCatalogItem` : The catalog items referred to by this category

  - Optional


- `version` : Category version

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon