# Billing cycle specification ref Data Model

## Domain

The  schema is part of the  Domain

## Description

BillingCycleSpecification reference. A description of when to initiate a billing cycle and the various sub steps of a billing cycle.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BillingCycleSpecificationRef.schema.json).

The Data model is defined as shown below:

- `dateShift` : An offset of a billing/settlement date. The offset is expressed as number of days with regard to the start of the billing/settlement period.

  - Optional


- `frequency` : Frequency of the billing cycle (monthly for instance)

  - Optional


- `href` : Reference of the billing cycle specification

  - Optional


- `id` : Unique identifier of the billing cycle specification

  - Optional


- `name` : A short descriptive name

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon