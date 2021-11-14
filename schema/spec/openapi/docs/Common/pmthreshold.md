# Pmthreshold Data Model

## Domain

The  schema is part of the  Domain

## Description

ThresholdRule A base entity for concrete definition of thresholds.This datatype  is  abstract

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/pmthreshold.json).

The Data model is defined as shown below:

- `performanceConsequence` : A threshold crossing or a threshold ceased to be crossing results in a Performance consequence.This element is generated from an attribute.This attribute  is  optional

  - Optional


- `id` : The entity instance identifier (EID).This element is generated from an attribute.This attribute  is  invariantThis attribute  is  optionalThis attribute  is  AVC disabled

  - Optional


- `description` : A narrative that explains in detail what the Performance threshold is.This element is generated from an attribute.This attribute  is  invariantThis attribute  is  optionalThis attribute  is  AVC disabled (NA)

  - Optional


- `name` : A word, term, or phrase by which a Performance threshold is known and distinguished from other thresholds.This element is generated from an attribute.This attribute  is  invariantThis attribute  is  mandatoryThis attribute  is  AVC disabled (NA)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon