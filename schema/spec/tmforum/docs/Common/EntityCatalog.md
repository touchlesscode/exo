# Entity catalog Data Model

## Domain

The  schema is part of the  Domain

## Description

The root entity for entity catalog management. An entity catalog can be defined as a collection of entity catalog items and arranging them in a particular manner based on the need.
In comparison to Product, Service and Resource catalogs, the entity catalog is intended for the purpose of providing any SID entity to consumers via a catalog, with its specification and policy providing governance over its content. Even Entity catalog may have an overlap with Product, Service or Resource catalog, it does not replace them. It is primarily intended to address those SID entities which may not be addressed by any of Product, Service or Resource catalog.
An entity catalog comprises of a list of RootEntities made available through EntityCatalogItems. This API addresses only RootEntity extended items as EntitySpecification. An entity catalog typically includes name, description and time period that it is valid for.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/EntityCatalog.schema.json).

The Data model is defined as shown below:

- `description` : Description of this catalog

  - Optional


- `href` : Unique reference of the catalog

  - Optional


- `id` : Unique identifier of the Catalog

  - Optional


- `lastUpdate` : Date and time of the last update

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status

  - Optional


- `name` : Name of the catalog

  - Optional


- `validFor` : The period for which the catalog is valid

  - Optional


- `relatedParty` : The parties who are involved or have an interest in this catalog

  - Optional


- `category` : The categories used in this catalog

  - Optional


- `version` : Catalog version

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon