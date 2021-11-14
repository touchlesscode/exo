# Bill cycle Data Model

## Domain

The  schema is part of the  Domain

## Description

A detailed description of a billing cycle and the various sub steps of a billing cycle.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BillCycle.schema.json).

The Data model is defined as shown below:

- `billingDate` : The billing/settlement date.

  - Optional


- `billingPeriod` : A billing time period. It is e.g. the concrete expressed month. Example: &#x27;March&#x27;.

  - Optional


- `chargeDate` : Date through when a payment method (e.g. credit card,...) will be activated.

  - Optional


- `creditDate` : Date through which credits previously received by the billing system are displeyed on the bill.

  - Optional


- `description` : An explanation regarding this billing cycle. If necessary.

  - Optional


- `href` : Reference of the billing cycle

  - Optional


- `id` : Unique identifier of the billing cycle.

  - Optional


- `mailingDate` : Customer bill mailing date.

  - Optional


- `name` : A short descriptive name of the actual billing cycle

  - Optional


- `paymentDueDate` : Date, when the payment is due.

  - Optional


- `validFor` : The period for which the billing cycle is valid (expressed in a formal formatted way)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon