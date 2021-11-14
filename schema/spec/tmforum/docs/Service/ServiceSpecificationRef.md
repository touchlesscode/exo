# Service specification ref Data Model

## Domain

The  schema is part of the  Domain

## Description

Service specification reference: ServiceSpecification(s) required to realize a ProductSpecification.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceSpecificationRef.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the service specification

  - Optional


- `href` : Reference of the serviceSpecification

  - Optional


- `name` : Name of the requiredServiceSpecification

  - Optional


- `version` : Service specification version

  - Optional


- `targetServiceSchema` : A target service schema reference (TargetServiceSchemaRef). The reference object to the schema and type of target service which is described by service specification.

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon