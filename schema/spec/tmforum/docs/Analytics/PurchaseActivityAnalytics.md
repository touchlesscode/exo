# Purchase activity analytics Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Analytics/PurchaseActivityAnalytics.schema.json).

The Data model is defined as shown below:

- `purchaseTime` : time the purchase occurred

  - Optional


- `rentalExpiryDate` : date of rental expiring

  - Optional


- `purchaseFinalAmount` : Amount of purchase that was invoiced (including tax)

  - Optional


- `purchaseDiscountAmount` : Amount of discount (from catalogue price)

  - Optional


- `purchaseCataloguePrice` : The catalogue price (excluding Tax)

  - Optional


- `purchaseTaxAmount` : Amount of tax included in the final amount

  - Optional


- `dataCreationTimestamp` : Time stamp for data creation (e.g. system dump creation, event generation…)

  - Optional


- `runTimestamp` : Time stamp for data upload run

  - Optional


- `validFromTimestamp` : Time stamp for business validity of entity record

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon