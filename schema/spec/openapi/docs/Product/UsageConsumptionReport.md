# Usage consumption report Data Model

## Domain

The  schema is part of the  Domain

## Description

An usage consumption report enables to know at a given point the balances and the consumption counters related to various buckets (SMS, Voice, Data for example). It could be calculated for a device identified by a public key (msisdn number for a mobile device for example or PSTN or VOIP number for a fix device), for a subscribed offer or option or for an user.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/UsageConsumptionReport.schema.json).

The Data model is defined as shown below:

- `bucket` : Bucket(s) included in the offer or option subscribed.

  - Optional


- `description` : Free short text describing the usage consumption report content

  - Optional


- `effectiveDate` : Date and time when the usage consumption report was calculated and generated

  - Optional


- `href` : Hyperlink to access the usage consumption report. The report is calculated at the time of the request by the server. Generally, this report is not recorded by the server. If it is, an unique identifier of the usage consumption report is given by the server

  - Optional


- `id` : The report is calculated at the time of the request by the server. Generally, this report is not recorded by the server. If it is, an unique identifier of the usage consumption report is given by the server

  - Optional


- `name` : Usage consumption report name

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon