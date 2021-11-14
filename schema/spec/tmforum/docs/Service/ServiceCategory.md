# Service category Data Model

## Domain

The  schema is part of the  Domain

## Description

The (service) category resource is used to group service candidates in logical containers. Categories can contain other categories.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceCategory.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the category

  - Optional


- `href` : Reference of the category

  - Optional


- `name` : Name of the category

  - Optional


- `description` : Description of the category

  - Optional


- `version` : ServiceCategory version

  - Optional


- `validFor` : The period for which the category is valid

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status

  - Optional


- `lastUpdate` : Date and time of the last update

  - Optional


- `parentId` : Unique identifier of the parent category

  - Optional


- `isRoot` : If true, this Boolean indicates that the category is a root of categories

  - Optional


- `serviceCandidate` : List of service candidates associated with this category

  - Optional


- `category` : List of child categories in the tree for in this category

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon