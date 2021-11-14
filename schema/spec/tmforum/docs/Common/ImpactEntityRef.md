# Impact entity ref Data Model

## Domain

The  schema is part of the  Domain

## Description

Defines the entities (product, service, resource, and other related objects) which will be impacted while the change 
request is executed.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/ImpactEntityRef.schema.json).

The Data model is defined as shown below:

- `description` : Description and analysis of the impact of the change request on the Product, Service or Resource.

  - Optional


- `href` : Hyperlink to access the impacted party, it could be a party reference or a party role reference.

  - Optional


- `id` : Identifier of impacted entity.

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon