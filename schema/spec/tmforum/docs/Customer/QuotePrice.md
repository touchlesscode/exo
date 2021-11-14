# Quote price Data Model

## Domain

The  schema is part of the  Domain

## Description

Description of price and discount awarded

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/QuotePrice.schema.json).

The Data model is defined as shown below:

- `description` : Description of the quote/quote item price

  - Optional


- `name` : Name of the quote /quote item price

  - Optional


- `productOfferingPrice` : An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time.

  - Optional


- `priceType` : indicate if the price is for recurrent or no-recurrent charge

  - Optional


- `recurringChargePeriod` : Used for recurring charge to indicate period (month, week, etc..)

  - Optional


- `unitOfMeasure` : Unit of Measure if price depending on it (Gb, SMS volume, etc..)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon