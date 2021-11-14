# Product specification Data Model

## Domain

The  schema is part of the  Domain

## Description

Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductSpecification.schema.json).

The Data model is defined as shown below:

- `brand` : The manufacturer or trademark of the specification

  - Optional


- `description` : A narrative that explains in detail what the product specification is

  - Optional


- `href` : Reference of the product specification

  - Optional


- `id` : Unique identifier of the product specification

  - Optional


- `isBundle` : isBundle determines whether a productSpecification represents a single productSpecification (false), or a bundle of productSpecification (true).

  - Optional


- `lastUpdate` : Date and time of the last update

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status

  - Optional


- `name` : Name of the product specification

  - Optional


- `productNumber` : An identification number assigned to uniquely identity the specification

  - Optional


- `validFor` : The period for which the product specification is valid

  - Optional


- `version` : Product specification version

  - Optional


- `relatedParty` : A related party defines party or party role linked to a specific entity.

  - Optional


- `productSpecCharacteristic` : A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process.

  - Optional


- `serviceSpecification` : ServiceSpecification(s) required to realize a ProductSpecification.

  - Optional


- `productSpecificationRelationship` : A migration, substitution, dependency or exclusivity relationship between/among product specifications.

  - Optional


- `resourceSpecification` : The ResourceSpecification is required to realize a ProductSpecification.

  - Optional


- `attachment` : Complements the description of an element (for instance a product) through video, pictures...

  - Optional


- `bundledProductSpecification` : A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification.

  - Optional


- `targetProductSchema` : A target product schema reference. The reference object to the schema and type of target product which is described by product specification.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon