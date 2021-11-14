# Tax definition Data Model

## Domain

The  schema is part of the  Domain

## Description

Reference of a tax definition. A tax is levied by an authorized tax jurisdiction. There are many different types of tax (Federal Tax levied by the US Government, State Tax levied by the State of California,…).

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/TaxDefinition.schema.json).

The Data model is defined as shown below:

- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional


- `id` : Unique identifier of the tax.

  - Optional


- `name` : Tax name.

  - Optional


- `taxType` : Type of  the tax.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon