# Specification characteristic value Data Model

## Domain

The  schema is part of the  Domain

## Description

A number or text that can be assigned to a SpecificationCharacteristic

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/SpecificationCharacteristicValue.schema.json).

The Data model is defined as shown below:

- `isDefault` : If true, the Boolean Indicates if the value is the default value for a characteristic

  - Optional


- `rangeInterval` : An indicator that specifies the inclusion or exclusion of the valueFrom and valueTo attributes. If applicable, possible values are &quot;open&quot;, &quot;closed&quot;, &quot;closedBottom&quot; and &quot;closedTop&quot;.

  - Optional


- `regex` : A regular expression constraint for given value

  - Optional


- `unitOfMeasure` : unit of measure for the valueCould be minutes, GB, etc

  - Optional


- `validFor` : The period for which this object is valid

  - Optional


- `value` : the  value that the characteristic can take on.

  - Optional


- `valueFrom` : The low range value that a characteristic can take on

  - Optional


- `valueTo` : The upper range value that a characteristic can take on

  - Optional


- `valueType` : A kind of value that the characteristic value can take on, such as numeric, text and so forth

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon