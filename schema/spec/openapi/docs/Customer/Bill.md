# Bill Data Model

## Domain

The  schema is part of the  Domain

## Description

The Bill entity is used to model a bill (aka an invoice). It represents a total amount due for all products during the billing period and all significant date.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/Bill.schema.json).

The Data model is defined as shown below:

- `amountDue` : Amount due for this bill expressed in the given currency

  - Optional


- `billDate` : Bill date

  - Optional


- `billingPeriod` : Billing period of the bill (used for onCycle bill only)

  - Optional


- `billNo` : Bill reference known by the customer or the party and displayed on the bill. Could be different from the id.

  - Optional


- `category` : Category of the bill produced : normal, duplicate, interim, last, trial customer or credit note

  - Optional


- `href` : Bill unique reference

  - Optional


- `id` : Bill unique identifier

  - Optional


- `lastUpdate` : Date of bill last update

  - Optional


- `nextBillDate` : Approximate date of  the next bill production given for information (only used for onCycle bill)

  - Optional


- `paymentDueDate` : Date at which the amount due should have been paid

  - Optional


- `remainingAmount` : Remaining amount to be paid for this bill expressed in the given currency

  - Optional


- `runType` : onCycle (a bill can be created as a result of a cycle run) or offCycle (a bill can be created as a result of other events such as customer request or account close)

  - Optional


- `state` : State that a bill could take during its lifecycle : New, Validated, On Hold, Sent, Partially paid or Settled

  - Optional


- `taxExcludedAmount` : Total tax excluded amount expressed in the given currency

  - Optional


- `taxIncludedAmount` : Total tax included amount expressed in the given

  - Optional


- `billDocument` : Document(s) associated to the bill

  - Optional


- `paymentItem` : Payment items already lettered on this bill.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon