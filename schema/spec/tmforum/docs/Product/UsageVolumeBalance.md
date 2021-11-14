# Usage volume balance Data Model

## Domain

The  schema is part of the  Domain

## Description

The balance (called UsageVolumeBalance in the SID model) defines the remaining allowed product usage quantity in terms of volume, time, currency or events. It corresponds to the initial allowed usage quantity minus the usage consumed on the bucket.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/UsageVolumeBalance.schema.json).

The Data model is defined as shown below:

- `remainingValue` : Numeric remaining value for the bucket given in the unit (for example 1.9). This numeric value could be used for calculation for example

  - Optional


- `remainingValueName` : Remaining value in a formatted string for the bucket given in the balance unit (for example 1.9 Gb). This formatted string could be used for display needs for example

  - Optional


- `validFor` : Balance period between a start date time and an end date time. For prepaid bucket, the period of the balance is between the  effective date of the usage consumption report generation and the end date of the bucket. For postpaid bucket, the period of the balance is between the effective date of the usage consumption report generation and the next bill date.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon