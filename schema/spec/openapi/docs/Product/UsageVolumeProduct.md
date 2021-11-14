# Usage volume product Data Model

## Domain

The  schema is part of the  Domain

## Description

A bucket (called UsageVolumeProduct in the SID model) represents a quantity of usage, as 2 hours national calls or 50 sms for example. It could be either a quantity or an amount in a currency (i.e. It could represent a fixed number of SMS, MMS, minutes of calls, quantity of data, number of events as well as a specific amount in a given currency). It requires one or more network products from which usages will debit the bucket.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/UsageVolumeProduct.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the bucket

  - Optional


- `isShared` : True if the bucket is shared between several devices or users

  - Optional


- `name` : Bucket name

  - Optional


- `usageType` : Type of usage concerned by the bucket, such as voice, sms, data

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon