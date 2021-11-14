# Price Data Model

## Domain

The  schema is part of the  Domain

## Description

Provides all amounts (tax included, duty free, tax rate), used currency and percentage to apply for Price Alteration.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/Price.schema.json).

The Data model is defined as shown below:

- `dutyFreeAmount` : All taxes excluded amount (expressed in the given currency)

  - Optional


- `percentage` : Percentage to apply for ProdOfferPriceAlteration

  - Optional


- `taxIncludedAmount` : All taxes included amount (expressed in the given currency)

  - Optional


- `taxRate` : Tax rate

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon