# Product specification characteristic Data Model

## Domain

The  schema is part of the  Domain

## Description

A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductSpecificationCharacteristic.schema.json).

The Data model is defined as shown below:

- `configurable` : If true, the Boolean indicates that the ProductSpecificationCharacteristic is configurable

  - Optional


- `description` : A narrative that explains in detail what the ProductSpecificationCharacteristic is

  - Optional


- `extensible` : An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a product

  - Optional


- `isUnique` : An indicator that specifies if a value is unique for the specification. Possible values are; &quot;unique while value is in effect&quot; and &quot;unique whether value is in effect or not&quot;

  - Optional


- `maxCardinality` : The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality

  - Optional


- `minCardinality` : The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality

  - Optional


- `name` : Name of the ProductSpecificationCharacteristic

  - Optional


- `regex` : A rule or principle represented in regular expression used to derive the value of a characteristic value

  - Optional


- `valueType` : A kind of value that the characteristic can take on, such as numeric, text and so forth

  - Optional


- `productSpecCharacteristicValue` : A ProductSpecificationCharacteristicValue object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a ProductSpecificationCharacteristic object. The values of the attributes in the ProductSpecificationCharacteristicValue object describe the values of the attributes that a corresponding ProductSpecificationCharacteristic object can take on.

  - Optional


- `productSpecCharRelationship` : An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics.

  - Optional


- `validFor` : The period for which the ProductSpecificationCharacteristic is valid

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon