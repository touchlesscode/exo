# Product specification characteristic relationship Data Model

## Domain

The  schema is part of the  Domain

## Description

An aggregation, migration, substitution, dependency or exclusivity relationship between/among productSpecificationCharacteristics.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductSpecificationCharacteristicRelationship.schema.json).

The Data model is defined as shown below:

- `id` : the identifier of the associated product specification

  - Optional


- `href` : Hyperlink reference to the target product specification

  - Optional


- `charSpecSeq` : The order in which a CharacteristicSpecification appears within another CharacteristicSpecification that defines a grouping of CharacteristicSpecifications.

For example, a grouping may represent the name of an individual. The given name is first, the middle name is second, and the last name is third.

  - Optional


- `name` : Name of the target product specification characteristic

  - Optional


- `relationshipType` : Type of relationship such as aggregation, migration, substitution, dependency, exclusivity

  - Optional


- `validFor` : The period for which the productSpecificationCharacteristicRelationship is valid

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon