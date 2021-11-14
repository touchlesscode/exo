# Customer bill Data Model

## Domain

The  schema is part of the  Domain

## Description

The customer bill. Can be a regular recurring bill or an extra bill on demand by the customer or the csp.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/CustomerBill.schema.json).

The Data model is defined as shown below:

- `id` : Explanation: Unique identifier of he bill

  - Optional


- `href` : Bill unique reference

  - Optional


- `appliedPayment` : Applied payment is a payment associated with the bill. There may be a partial payment, then there should be several applied payments available. On the other hand, more than one bill could be payed by one payment. In general there is an n:m relation between payment and bill.

  - Optional


- `billDate` : Bill date, external customer view (in consequence: different to the production date of the bill)

  - Optional


- `billNo` : Bill reference known by the customer or the party and displayed on the bill. Could be different from the id

  - Optional


- `category` : Category of the bill produced : normal, duplicate, interim, last, trial customer or credit note for example

  - Optional


- `lastUpdate` : Date of bill last update

  - Optional


- `nextBillDate` : ). Approximate date of  the next bill production given for information (only used/meaningful for on cycle / regular bills)

  - Optional


- `paymentDueDate` : Date at which the amount due should have been paid

  - Optional


- `paymentMethod` : paymentMethod here is recognized to be not really necessary in a STANDARD. It could be obtained by a GET request on the billing account. Conclusion: paymentMethod is marked to DEPRECIATED and will be removed in one of the next versions.

  - Optional


- `runType` : onCycle (a bill can be created as a result of a cycle run) or offCycle (a bill can be created as a result of other events such as customer request or account close)

  - Optional


- `state` : Status of the bill

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon