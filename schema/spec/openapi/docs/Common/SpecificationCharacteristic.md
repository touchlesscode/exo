# Specification characteristic Data Model

## Domain

The  schema is part of the  Domain

## Description

A characteristic quality or distinctive feature of a Specification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/SpecificationCharacteristic.schema.json).

The Data model is defined as shown below:

- `configurable` : If true, the Boolean indicates that the SpecificationCharacteristic is configurable

  - Optional


- `description` : A narrative that explains in detail what the SpecificationCharacteristic is

  - Optional


- `name` : Name of the SpecificationCharacteristic

  - Optional


- `validFor` : The period for which the productSpecificationCharacteristic is valid

  - Optional


- `valueType` : A kind of value that the characteristic can take on, such as numeric, text and so forth

  - Optional


- `specCharacteristicValue` : The value or values that this characteristic can take on

  - Optional


- `specCharRelationship` : Relationship to other characteristics, such as dependency (the value that this characteristic can take may be limited by the value of the related characteristic)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon