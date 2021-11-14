# Rated product usage Data Model

## Domain

The  schema is part of the  Domain

## Description

An occurrence of employing a product for its intended purpose with all rating details

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/RatedProductUsage.schema.json).

The Data model is defined as shown below:

- `bucketValueConvertedInAmount` : Monetary value of bucket

  - Optional


- `currencyCode` : A string used as a code for specifying the currency associated to the given amounts. The ISO4217 norm uses 3 letters to define the currency (for example USD for US dollar or EUR for Euro)

  - Optional


- `isBilled` : Boolean indicating if usage have been billed or not

  - Optional


- `isTaxExempt` : Indicates if the rated amount is exempt of tax

  - Optional


- `offerTariffType` : Type of tariff applied

  - Optional


- `productRef` : Reference of product specification

  - Optional


- `ratingAmountType` : Type of amount

  - Optional


- `ratingDate` : Date of usage rating

  - Optional


- `taxExcludedRatingAmount` : All taxes excluded rated amount

  - Optional


- `taxIncludedRatingAmount` : All taxes included rated amount

  - Optional


- `taxRate` : Tax rate

  - Optional


- `usageRatingTag` : Tag value: [usage]: the usage is always rated outside a usage bundle
[included usage]: the usage is rated inside a usage bundle
[non included usage]: the usage bundle is exhausted. The usage is rated outside the usage bundle

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon