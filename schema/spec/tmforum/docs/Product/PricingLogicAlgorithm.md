# Pricing logic algorithm Data Model

## Domain

The  schema is part of the  Domain

## Description

The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled bahavior in SID). Some of the parameters of the interface definiition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth)

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/PricingLogicAlgorithm.schema.json).

The Data model is defined as shown below:

- `description` : Description of the PricingLogicAlgorithm

  - Optional


- `href` : hyperlink reference of this PricingLogicAlgorithm

  - Optional


- `id` : unique id of the PricingLogicAlgorithm

  - Optional


- `name` : Name given to the PricingLogicAlgorithm

  - Optional


- `plaSpecId` : id of corresponding PricingLogicAlgorithm specification

  - Optional


- `validFor` : The period for which the PricingLogicAlgorithm is valid

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon