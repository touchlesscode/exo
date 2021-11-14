# Applied customer billing rate Data Model

## Domain

The  schema is part of the  Domain

## Description

A customer bill displays applied billing rates created before or during the billing process.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/AppliedCustomerBillingRate.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the customer applied billing rate

  - Mandatory


- `href` : Explanation: Reference of the customer applied billing rate.

  - Optional


- `isBilled` : If isBilled = true then bill should be provided, if false then billingAccount should be provided

  - Optional


- `date` : Creation date of the applied billing rate

  - Optional


- `description` : Additional data to be displayed on the bill for this customer applied billing rate

  - Optional


- `name` : Name of the customer applied billing rate

  - Optional


- `periodCoverage` : periodCoverage for RecurringCharge (RC) indicating the RC coverage period dates for different purposes, such as RC proration, display on bill, GL reporting, etc. periodCoverage for OC start and end date will be the same

  - Optional


- `appliedBillingRateType` : Type of the applied billing rate : appliedBillingCharge (any kind of charge except taxation charges : recurringCharge, oneTimeCharge, usageCharge),  appliedBillingCredit (any kind of credit : rebate or productAlteration) or appliedPenaltyCharge (penalty charges such as late fees, payment rejection fees,...)

  - Optional


- `product` : Usually this information should be provided by the PRODUCT, which implies that there is a valid reference to product. In this case, this property should be empty. For all other situations, a text or structured info could be provided using this property. Regular modelling would suggest tu use the reforvalue pattern for this case. It is not choosen here because it would generate declarational dependencies which would be hard to maintain.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon