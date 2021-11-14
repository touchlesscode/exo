# Product offering price Data Model

## Domain

The  schema is part of the  Domain

## Description

Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (productOfferPriceAlteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductOfferingPrice.schema.json).

The Data model is defined as shown below:

- `id` : unique id of this resource

  - Optional


- `href` : Reference of the ProductOfferingPrice

  - Optional


- `name` : Name of the productOfferingPrice

  - Optional


- `description` : Description of the productOfferingPrice

  - Optional


- `version` : ProductOffering version

  - Optional


- `validFor` : The period for which the productOfferingPrice is valid

  - Optional


- `priceType` : A category that describes the price, such as recurring, discount, allowance, penalty, and so forth.

  - Optional


- `unitOfMeasure` : A number and unit representing how many (for instance 1 dozen) of an ProductOffering is available at the offered price. Its meaning depends on the priceType. It could be a price, a rate, or a discount.

  - Optional


- `recurringChargePeriodType` : The period to repeat the application of the price
Could be month, week...

  - Optional


- `recurringChargePeriodLength` : the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable

  - Optional


- `@type` : The class type of this Product offering

  - Optional


- `@baseType` : the immediate base class type of this product offering

  - Optional


- `@schemaLocation` : hyperlink reference to the schema describing this resource

  - Optional


- `lastUpdate` : the last update time of this ProductOfferingPrice

  - Optional


- `isBundle` : A flag indicating if this ProductOfferingPrice is composite (bundle) or not

  - Optional


- `lifecycleStatus` : the lifecycle status of this ProductOfferingPrice

  - Optional


- `price` : The amount of money that characterizes the price.

  - Optional


- `percentage` : Percentage to apply for ProductOfferPriceAlteration (Discount)

  - Optional


- `bundledPopRelationship` : this object represents a bundle relationship from a bundle product offering price (parent) to a simple product offering price (child). A simple product offering price may participate in more than one bundle relationship.

  - Optional


- `popRelationship` : Product Offering Prices related to this Product Offering Price, for example a price alteration such as allowance or discount

  - Optional


- `prodSpecCharValueUse` : A use of the ProductSpecificationCharacteristicValue by a ProductOfferingPrice to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering and ProcuctOfferingPrice level. The list of values in ProductSpecificationCharacteristicValueUse is a strict subset of the list of values as defined in the corresponding product specification characteristics.

  - Optional


- `productOfferingTerm` : A list of conditions under which a ProductOfferingPrice is made available to Customers. For instance, a Product Offering Price can be offered with multiple commitment periods.

  - Optional


- `place` : Place defines the places where the products are sold or delivered.

  - Optional


- `constraint` : The Constraint resource represents a policy/rule applied to ProductOfferingPrice.

  - Optional


- `pricingLogicAlgorithm` : The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled behavior in SID). Some of the parameters of the interface definition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth).

  - Optional


- `tax` : An amount of money levied on the price of a Product by a legislative body.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon