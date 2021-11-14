# Product offering Data Model

## Domain

The  schema is part of the  Domain

## Description

Represents entities that are orderable from the provider of the catalog, this resource includes pricing information.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductOffering.schema.json).

The Data model is defined as shown below:

- `description` : Description of the productOffering

  - Optional


- `href` : Reference of the ProductOffering

  - Optional


- `id` : Unique identifier of the productOffering

  - Optional


- `isBundle` : isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true).

  - Optional


- `isSellable` : A flag indicating if this product offer can be sold stand-alone for sale or not. If this flag is false it indicates that the offer can only be sold within a bundle.

  - Optional


- `lastUpdate` : Date and time of the last update

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status

  - Optional


- `name` : Name of the productOffering

  - Optional


- `statusReason` : A string providing a complementary information on the value of the lifecycle status attribute.

  - Optional


- `validFor` : The period for which the productOffering is valid

  - Optional


- `version` : ProductOffering version

  - Optional


- `place` : Place defines the places where the products are sold or delivered.

  - Optional


- `serviceLevelAgreement` : A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.

  - Optional


- `productSpecification` : A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.

  - Optional


- `channel` : The channel defines the channel for selling product offerings.

  - Optional


- `serviceCandidate` : ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog.

  - Optional


- `category` : The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.

  - Optional


- `resourceCandidate` : A resource candidate is an entity that makes a ResourceSpecification available to a catalog.

  - Optional


- `productOfferingTerm` : A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods.

  - Optional


- `productOfferingPrice` : An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time and may not represent the actual price paid by a customer.

  - Optional


- `agreement` : An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.

  - Optional


- `attachment` : Complements the description of an element (for instance a product) through video, pictures...

  - Optional


- `marketSegment` : provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.

  - Optional


- `bundledProductOffering` : A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering.

  - Optional


- `prodSpecCharValueUse` : A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic &#x27;Color&#x27; might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in &#x27;ProductSpecificationCharacteristicValueUse&#x27; is a strict subset of the list of values as defined in the corresponding product specification characteristics.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon