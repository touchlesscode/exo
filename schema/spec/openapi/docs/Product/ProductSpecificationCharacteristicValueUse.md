# Product specification characteristic value use Data Model

## Domain

The  schema is part of the  Domain

## Description

A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic &#x27;Color&#x27; might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in &#x27;ProductSpecificationCharacteristicValueUse&#x27; is a strict subset of the list of values as defined in the corresponding product specification characteristics.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductSpecificationCharacteristicValueUse.schema.json).

The Data model is defined as shown below:

- `name` : Name of the associated productSpecificationCharacteristic

  - Optional


- `description` : A narrative that explains in detail what the productSpecificationCharacteristic is

  - Optional


- `valueType` : A kind of value that the characteristic can take on, such as numeric, text and so forth

  - Optional


- `minCardinality` : The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality.

  - Optional


- `maxCardinality` : The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality.

  - Optional


- `validFor` : The period for which the productSpecificationCharacteristic is valid

  - Optional


- `productSpecCharacteristicValue` : A number or text that can be assigned to a ProductSpecificationCharacteristic.

  - Optional


- `productSpecification` : A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon