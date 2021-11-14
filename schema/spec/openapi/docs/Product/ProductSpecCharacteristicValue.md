# Product spec characteristic value Data Model

## Domain

The  schema is part of the  Domain

## Description

A number or text that can be assigned to a ProductSpecCharacteristic.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductSpecCharacteristicValue.schema.json).

The Data model is defined as shown below:

- `default` : Indicates if the value is the default value for a characteristic

  - Optional


- `unitOfMeasure` : Could be minutes, GB...

  - Optional


- `validFor` : The period of time for which a value is applicable

  - Optional


- `value` : A discrete value that the characteristic can take on

  - Optional


- `valueFrom` : The low range value that a characteristic can take on

  - Optional


- `valueTo` : The upper range value that a characteristic can take on

  - Optional


- `valueType` : A kind of value that the characteristic can take on, such as numeric, text, and so forth

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon