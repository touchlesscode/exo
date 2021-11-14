# Entity catalog item Data Model

## Domain

The  schema is part of the  Domain

## Description

An EntityCatalogItem is an entity that allows any ProductOffering, ServiceCandidate, ResourceCandidate, or even any object inheriting from RootEntity, to be available to a catalog. The CatalogSpecification and Policy of the catalog governs the content of the EntityCatalogItem. This API addresses only EntitySpecification items extended from RootEntity as EntityCatalogItem.
The EntityCatalogItem resource (JSON format) represents a set of characteristics that define the values given by the EntityCatalogItem.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/EntityCatalogItem.schema.json).

The Data model is defined as shown below:

- `description` : Description of this REST resource

  - Optional


- `href` : Hyperlink reference to this REST resource

  - Optional


- `id` : Unique identifier of this REST resource

  - Optional


- `lastUpdate` : Date and time of the last update of this REST resource

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status of this catalog item

  - Optional


- `name` : Name given to this REST resource

  - Optional


- `validFor` : The period for which this REST resource is valid

  - Optional


- `version` : EntityCatalogItem version

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon