# Balance topup body Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceTopupBody.schema.json).

The Data model is defined as shown below:

- `amount` : Amount (can be monetary or non-monetary) to be recharged in the bucket

  - Mandatory


- `channel` : Indicator for the channel used to request the top-up operation. Structure including at least attribute �name�

  - Mandatory


- `product` : A reference to the product related to the bucket that is impacted by the balance related operation

  - Optional


- `type` : A preconfigured value that describes a TopUp type which determines the prepay balance bucket in which the top-up is done (national-voice, roaming-voice, promotional-voice, data, ....)

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon