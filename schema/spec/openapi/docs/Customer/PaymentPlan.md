# Payment plan Data Model

## Domain

The  schema is part of the  Domain

## Description

Defines a plan for payment (when a party wants to spread his payments)

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/PaymentPlan.schema.json).

The Data model is defined as shown below:

- `numberOfPayments` : Number of payments used to spread the global payment

  - Optional


- `paymentFrequency` : Frequency of the payments, such as monthly and bimonthly

  - Optional


- `priority` : Priority of the payment plan

  - Optional


- `status` : Status of the payment plan (effective, ineffective)

  - Optional


- `totalAmount` : Amount paid

  - Optional


- `planType` : Type of payment plan

  - Optional


- `validFor` : Validity period of the payment plan

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon