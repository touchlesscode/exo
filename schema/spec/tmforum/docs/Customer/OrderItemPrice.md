# Order item price Data Model

## Domain

The  schema is part of the  Domain

## Description

An amount, usually of money, that represents the actual price paid by the Customer for this item or this order

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/OrderItemPrice.schema.json).

The Data model is defined as shown below:

- `description` : A narrative that explains in detail the semantics of this order item price.

  - Optional


- `name` : Name of the order item price

  - Optional


- `priceType` : A category that describes the price, such as recurring, discount, allowance, penalty, and so forth

  - Mandatory


- `recurringChargePeriod` : Could be month, week...

  - Optional


- `unitOfMeasure` : Could be minutes, GB...

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon