# Usage consumption report request Data Model

## Domain

The  schema is part of the  Domain

## Description

An UsageConsumptionReportRequest allows to manage the calculation request of an usage consumption report

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/UsageConsumptionReportRequest.schema.json).

The Data model is defined as shown below:

- `bucket` : Reference of the buckets for which the usage consumption report is requested

  - Optional


- `creationDate` : Date and time of the request creation

  - Optional


- `href` : Reference of the usage consumption report request

  - Optional


- `id` : Unique identifier of the usage consumption report request given by the server

  - Optional


- `lastUpdate` : Date when the status was last changed

  - Optional


- `product` : Network product reference for which the usage consumption report is requested

  - Optional


- `relatedParty` : Reference and role of the related parties for which the usage consumption report is requested

  - Optional


- `status` : Status of the usage consumption report request (InProgress or done)

  - Optional


- `usageConsumptionReport` : References of the usage consumption report (given when it has been calculated and the status of the request is done)

  - Optional


- `validPeriod` : Validity period

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon