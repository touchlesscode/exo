# Service level specification Data Model

## Domain

The  schema is part of the  Domain

## Description

A Service Level Specification represents a pre-defined or negotiated set of Service Level 
Objectives. In addition, certain consequences are associated with not meeting the Service Level 
Objectives. Service Level Agreements are expressed in terms of Service Level Specifications.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceLevelSpecification.schema.json).

The Data model is defined as shown below:

- `description` : A brief introduction of a service level specification.

  - Optional


- `href` : The hyperlink to access a service level specification.

  - Optional


- `id` : The identifier to a service level specification.

  - Optional


- `name` : The name of Service Level Specification

  - Optional


- `validFor` : A valid duration of a thing.

  - Optional


- `relatedServiceLevelObjective` : A list of objectives related to this service level specification

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon