# Resource spec characteristic Data Model

## Domain

The  schema is part of the  Domain

## Description

This class represents the key features of this service specification. For example, bandwidth is a characteristic of many different types of services; if bandwidth is a relevant characteristic (e.g., from the point-of-view of a Customer obtaining this Service via a Product) then bandwidth would be a ServiceSpecCharacteristic for that particular Service.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/ResourceSpecCharacteristic.schema.json).

The Data model is defined as shown below:

- `name` : A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications.

  - Optional


- `description` : A narrative that explains in detail what the serviceSpecCharacteristic is

  - Optional


- `valueType` : A kind of value that the characteristic can take on, such as numeric, text and so forth

  - Optional


- `configurable` : If true, the Boolean indicates that the serviceSpecCharacteristic is configurable

  - Optional


- `validFor` : The period for which the serviceSpecCharacteristic is valid

  - Optional


- `@valueSchemaLocation` : This (optional) field provides a link to the schema describing the value type.

  - Optional


- `minCardinality` : The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality.

  - Optional


- `maxCardinality` : The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality.

  - Optional


- `isUnique` : An indicator that specifies if a value is unique for the specification. Possible values are; &quot;unique while value is in effect&quot; and &quot;unique whether value is in effect or not&quot;

  - Optional


- `regex` : A rule or principle represented in regular expression used to derive the value of a characteristic value.

  - Optional


- `extensible` : An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for an Entity.

  - Optional


- `resourceSpecCharacteristicValue` : A list of resource spec characteristic values (ResourceSpecCharacteristicValue [*]). A ResourceSpecCharacteristicValue object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a ResourceSpecCharacteristic object. The values of the attributes in the ResourceSpecCharacteristicValue object describe the values of the attributes that a corresponding ResourceSpecCharacteristic object can take on.

  - Optional


- `resourceSpecCharRelationship` : A list of resource spec char relationships (ResourceSpecCharRelationship [*]). An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon