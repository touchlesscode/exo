# Billing cycle specification Data Model

## Domain

The  schema is part of the  Domain

## Description

A detailed description of when to initiate a billing cycle and the various sub steps of a billing cycle.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BillingCycleSpecification.schema.json).

The Data model is defined as shown below:

- `billingDateShift` : An offset of a billing/settlement date. The offset is expressed as number of days with regard to the start of the billing/settlement period.

  - Optional


- `billingPeriod` : A billing time period. It can be recurring, for example: week, month, quarter of year, year .

  - Optional


- `chargeDateOffset` : An offset of a date through which charges previously received by the billing system will appear on the bill. The offset is expressed as number of days with regard to the start of the BillingPeriod.

  - Optional


- `creditDateOffset` : An offset of a date through which credits previously received by the billing system will appear on the bill. The offset is expressed as number of days with regard to the start of the BillingPeriod.

  - Optional


- `description` : An explanation regarding this billing cycle specification

  - Optional


- `frequency` : Frequency of the billing cycle (monthly for instance)

  - Optional


- `href` : Reference of the billing cycle specification

  - Optional


- `id` : Unique identifier of the billing cycle specification

  - Optional


- `mailingDateOffset` : An offset of a customer bill mailing date. The offset is expressed as number of days with regard to the start of the BillingPeriod.

  - Optional


- `name` : A short descriptive name

  - Mandatory


- `paymentDueDateOffset` : An offset of a payment due date. The offset is expressed as number of days with regard to the start of the BillingPeriod.

  - Optional


- `validFor` : The period for which the billing specification cycle is valid

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon