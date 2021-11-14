# Service catalog Data Model

## Domain

The  schema is part of the  Domain

## Description

The root entity for service catalog management.
A service catalog is a group of service specifications made available through service candidates that an organization provides to the consumers (internal consumers like its employees or B2B customers or B2C customers). 
A service catalog typically includes name, description and time period that is valid for. It will have a list of ServiceCandidate catalog items. A ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog.
A ServiceCandidate and its associated ServiceSpecification may be &quot;published&quot; - made visible -in any number of ServiceCatalogs, or in none.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceCatalog.schema.json).

The Data model is defined as shown below:

- `category` : List of service categories associated with this catalog

  - Optional


- `description` : Description of this catalog

  - Optional


- `href` : Unique reference of the service catalog

  - Optional


- `id` : Unique identifier of the ServiceCatalog

  - Optional


- `lastUpdate` : Date and time of the last update

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status

  - Optional


- `name` : Name of the service catalog

  - Optional


- `relatedParty` : List of parties or party roles related to this category

  - Optional


- `validFor` : The period for which the service catalog is valid

  - Optional


- `version` : ServiceCatalog version

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon