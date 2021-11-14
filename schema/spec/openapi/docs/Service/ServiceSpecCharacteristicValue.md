# Service spec characteristic value Data Model

## Domain

The  schema is part of the  Domain

## Description

A ServiceSpecCharacteristicValue object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a ServiceSpecCharacteristic object. The values of the attributes in the ServiceSpecCharacteristicValue object describe the values of the attributes that a corresponding ServiceSpecCharacteristic object can take on.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceSpecCharacteristicValue.schema.json).

The Data model is defined as shown below:

- `valueType` : A kind of value that the characteristic can take on, such as numeric, text, and so forth

  - Optional


- `isDefault` : Indicates if the value is the default value for a characteristic

  - Optional


- `value` : A discrete value that the characteristic can take on, or the actual value of the characteristic

  - Optional


- `unitOfMeasure` : A length, surface, volume, dry measure, liquid measure, money, weight, time, and the like. In general, a determinate quantity or magnitude of the kind designated, taken as a standard of comparison for others of the same kind, in assigning to them numerical values, as 1 foot, 1 yard, 1 mile, 1 square foot.

  - Optional


- `validFor` : The period of time for which a value is applicable

  - Optional


- `valueFrom` : The low range value that a characteristic can take on

  - Optional


- `valueTo` : The upper range value that a characteristic can take on

  - Optional


- `rangeInterval` : An indicator that specifies the inclusion or exclusion of the valueFrom and valueTo attributes. If applicable, possible values are &quot;open&quot;, &quot;closed&quot;, &quot;closedBottom&quot; and &quot;closedTop&quot;.

  - Optional


- `regex` : A regular expression constraint for given value

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon