# Service offering qualification ref Data Model

## Domain

The  schema is part of the  Domain

## Description

It could be a serviceQualification or a productOfferingQualification that has been executed previously and captured in the productOrder to provide eligibility information

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceOfferingQualificationRef.schema.json).

The Data model is defined as shown below:

- `href` : href of the qualification

  - Optional


- `id` : Identifier of a pre-existing qualification

  - Optional


- `qualificationItemId` : Id of an item of a qualification

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon