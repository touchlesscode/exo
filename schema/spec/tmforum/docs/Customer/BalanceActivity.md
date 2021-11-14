# Balance activity Data Model

## Domain

The  schema is part of the  Domain

## Description

The BalanceActivity resource is a detailed description of a specific balance-related action that has happened over a given bucket balance. Typically a recharge/transfer/adjustment request creates one activity, but a request for an auto-topup operation actually triggers multiple periodic balance-related activities.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceActivity.schema.json).

The Data model is defined as shown below:

- `action` : A reference to the balance-related actions/activities

  - Mandatory


- `amount` : Amount (can be monetary or non-monetary) that was involved in the balance operation

  - Mandatory


- `amountAfter` : Remained amount in the bucket involved in the operation after it took place

  - Optional


- `amountBefore` : Remained amount in the bucket involved in the operation before it took place

  - Optional


- `bucketBalance` : A reference to the bucket involved in the balance-related operation

  - Mandatory


- `date` : Date when the balance related operation took place

  - Mandatory


- `partyAccount` : A reference to the account that owns the bucket impacted by the balance activity

  - Mandatory


- `product` : A reference to the product related to the bucket that is impacted by the balance activity

  - Mandatory


- `relatedParty` : Used to provide information about any other entity with relation to the balance activity

  - Optional


- `type` : A preconfigured value that describes a type of balance-related performed (topup, transfer, adjustment)

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon