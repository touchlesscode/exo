# Consumption summary Data Model

## Domain

The  schema is part of the  Domain

## Description

The consumption counters (called ConsumptionSummary in the SID model) detail for example the different kind of consumption done on the bucket.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ConsumptionSummary.schema.json).

The Data model is defined as shown below:

- `consumptionPeriod` : Consumption counter period between a start date time and an end date time. For prepaid bucket, the period of counters is between the start date of the bucket and the effective date of the usage consumption report generation. For postpaid bucket, the period of counters is between the last bill date and the effective date of the usage consumption report generation.

  - Optional


- `counterType` : Type of the consumption counter. We can give for example a counter of the used value for a bucket (counterType=used for example) or the value of the consumption done out of the bucket(s) (counterType=outOfBucket for example)

  - Optional


- `level` : Counter level. The counter can be given globally for the bucket or detailed by user or by network product for example in case of shared bucket

  - Optional


- `product` : Public identifier associated to the product for which the consumption counter is detailed. If the level of the counter is global (i.e. concerning all the network products), the list of them is not specified. It can be found through the network products listed in the bucket sub-resource

  - Optional


- `user` : Reference of the user for which the consumption counter is detailed. If the level of the counter is global (i.e. concerning all the users), the list of them is not specified. It can be found through the users listed in the network products of the bucket sub-resource

  - Optional


- `value` : Numeric value of the bucket counter in a given unit

  - Optional


- `valueName` : Value of the counter in a formatted string used for display needs for example

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon