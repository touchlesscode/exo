# Price alteration Data Model

## Domain

The  schema is part of the  Domain

## Description

Is an amount, usually of money, that modifies the price charged for an order item.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/PriceAlteration.schema.json).

The Data model is defined as shown below:

- `applicationDuration` : Duration during which the alteration applies on the order item price (for instance 2 months free of charge for the recurring charge)

  - Optional


- `description` : A narrative that explains in detail the semantics of this order item price alteration

  - Optional


- `name` : Name of the order item price alteration

  - Optional


- `priceType` : A category that describes the price such as recurring, one time and usage.

  - Mandatory


- `priority` : Priority level for applying this alteration among all the defined alterations on the order item price

  - Optional


- `recurringChargePeriod` : Could be month, week...

  - Optional


- `unitOfMeasure` : Could be minutes, GB...

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon