# Balance adjustment body Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceAdjustmentBody.schema.json).

The Data model is defined as shown below:

- `amount` : Amount (can be monetary or non-monetary) to be recharged in the bucket. It could refer to positive (increment) or negative (decrement) values

  - Mandatory


- `product` : A reference to the product related to the bucket that is impacted by the balance related operation

  - Optional


- `reason` : Text describing the reason for the adjustment

  - Mandatory


- `type` : A preconfigured value that describes a TopUp type which determines the prepay balance bucket in which the top-up is done (national-voice, roaming-voice, promotional-voice, data, ....)

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon