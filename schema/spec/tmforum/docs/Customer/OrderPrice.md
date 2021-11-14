# Order price Data Model

## Domain

The  schema is part of the  Domain

## Description

An amount, usually of money, that represents the actual price paid by the Customer for this item or this order

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/OrderPrice.schema.json).

The Data model is defined as shown below:

- `description` : A narrative that explains in detail the semantics of this order item price.

  - Optional


- `name` : A short descriptive name such as &quot;Subscription price&quot;.

  - Optional


- `productOfferingPrice` : An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time.

  - Optional


- `priceType` : A category that describes the price, such as recurring, discount, allowance, penalty, and so forth

  - Optional


- `recurringChargePeriod` : Could be month, week...

  - Optional


- `unitOfMeasure` : Could be minutes, GB...

  - Optional


- `billingAccount` : A reference to a billing account used for paid the order price charge

  - Optional


- `price` : a structure used to define price amount

  - Optional


- `priceAlteration` : a strucuture used to describe a price alteration

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon