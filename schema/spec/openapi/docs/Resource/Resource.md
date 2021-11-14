# Resource Data Model

## Domain

The  schema is part of the  Domain

## Description

Resource is an abstract entity that describes the common set of attributes shared by all concrete resources (e.g. TPE, EQUIPMENT) in the inventory.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/Resource.schema.json).

The Data model is defined as shown below:

- `category` : Category of the concrete resource. e.g Gold, Silver for MSISDN concrete resource

  - Optional


- `description` : free-text description of the resource

  - Optional


- `endDate` : A date time( DateTime). The date till the resource is effective

  - Optional


- `href` : The URI for the object itself.

  - Optional


- `id` : Identifier of an instance of the resource. Required to be unique within the resource type.  Used in URIs as the identifier for specific instances of a type.

  - Optional


- `lifecycleState` : The life cycle state of the resource.

  - Optional


- `name` : A string used to give a name to the resource

  - Optional


- `startDate` : A date time( DateTime). The date from which the resource is effective

  - Optional


- `version` : A field that identifies the specific version of an instance of a resource.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon