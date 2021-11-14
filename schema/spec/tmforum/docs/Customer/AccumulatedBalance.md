# Accumulated balance Data Model

## Domain

The  schema is part of the  Domain

## Description

Represents and tracks the aggregated amount remained or owed in certain account which is owned by certain customer for a set of buckets.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/AccumulatedBalance.schema.json).

The Data model is defined as shown below:

- `bucket` : A reference to the buckets involved in the aggregation

  - Mandatory


- `description` : Text describing the contents of the aggregated balance

  - Optional


- `name` : Friendly name to identify the aggregated balance

  - Mandatory


- `partyAccount` : A reference to the account that owns the buckets aggregated

  - Optional


- `product` : A reference to the product whose consumption is managed by the bucket . This is an array to allow scenarios where a buckets are shared between different products

  - Mandatory


- `relatedParty` : Used to provide information about any other entity with relation to the balance, for instance to define customer hierarchy for the balance (e.g.: customerId, userId, )

  - Optional


- `totalBalance` : Aggregated for a set of prepay balance buckets associated to the product

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon