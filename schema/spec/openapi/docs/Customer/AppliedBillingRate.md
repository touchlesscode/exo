# Applied billing rate Data Model

## Domain

The  schema is part of the  Domain

## Description

An applied billing rate presented on a bill. It is created before or during the billing process

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/AppliedBillingRate.schema.json).

The Data model is defined as shown below:

- `date` : Creation date of the applied billing charge

  - Optional


- `description` : Additional data to be displayed on the bill for this applied billing charge

  - Optional


- `href` : Reference of the applied billing charge

  - Optional


- `id` : Unique identifier of the applied billing charge

  - Optional


- `name` : Name of the applied billing rate

  - Optional


- `taxExcludedAmount` : Tax excluded amount to be charged on the bill (expresses in the given currency) for this applied billing rate

  - Optional


- `taxIncludedAmount` : All taxes included amount to be charged on the bill (expressed in the given currency) for this applied billing rate

  - Optional


- `rateType` : Type of the applied billing rate : appliedBillingCharge (any kind of charge except taxation charges : recurringCharge, oneTimeCharge, usageCharge),  appliedBillingCredit (any kind of credit : rebate or productAlteration) or appliedPenaltyCharge (penalty charges such as late fees, payment rejection fees,...)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon