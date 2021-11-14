# Service candidate Data Model

## Domain

The  schema is part of the  Domain

## Description

ServiceCandidate is an entity that makes a service specification available to a catalog. A
ServiceCandidate and its associated service specification may be published - made visible - in any number of service catalogs, or in none. One service specification can be composed of other service specifications.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceCandidate.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of this REST resource

  - Optional


- `href` : Hyperlink reference to this REST resource

  - Optional


- `name` : Name given to this REST resource

  - Optional


- `description` : Description of this REST resource

  - Optional


- `version` : the version of service candidate

  - Optional


- `validFor` : The period for which this REST resource is valid

  - Optional


- `lastUpdate` : Date and time of the last update of this REST resource

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status of the service candidate.

  - Optional


- `category` : List of categories for this candidate

  - Optional


- `serviceSpecification` : The service specification implied by this candidate

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon