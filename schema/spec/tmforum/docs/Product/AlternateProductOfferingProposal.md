# Alternate product offering proposal Data Model

## Domain

The  schema is part of the  Domain

## Description

Alternate product Offering proposal is used when the requested product offering is not available with characteristic and date asked for. An alternate proposal could be a distinct product offering or product Spec close to requested one or same as requested but with a different activation date.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/AlternateProductOfferingProposal.schema.json).

The Data model is defined as shown below:

- `alternateActivationDate` : Alternate activation date in case seller is not able to meet requested expected activation date.

  - Optional


- `id` : Identifier of a alternate product offering proposal

  - Optional


- `alternateProduct` : Alternate product proposal

  - Optional


- `alternateProductOffering` : Alternate product offering proposal

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon