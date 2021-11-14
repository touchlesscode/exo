# Service test specification Data Model

## Domain

The  schema is part of the  Domain

## Description

The service test specification describes the service test in terms of parameters to be configured and 
measures to be taken.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceTestSpecification.schema.json).

The Data model is defined as shown below:

- `description` : Description of a service test specification.

  - Optional


- `href` : Hyperlink to access a service test specification.

  - Optional


- `id` : Identifier of a service test specification.

  - Optional


- `version` : Version of a service test specification 

  - Optional


- `name` : Name of a service test specification.

  - Optional


- `validFor` : The period of time for which this specification is valid

  - Optional


- `testMeasureDefinition` : A list of definitions for the measurements for the test defined by this specification

  - Optional


- `relatedServiceSpecification` : The related service specification.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon