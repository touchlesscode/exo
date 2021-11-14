# Account balance ref Data Model

## Domain

The  schema is part of the  Domain

## Description

Balances linked to the account

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/AccountBalanceRef.schema.json).

The Data model is defined as shown below:

- `amount` : Balance amount

  - Optional


- `status` : The condition of the account balance, such as due, paid, in arrears.

  - Optional


- `balanceType` : Type of the balance : deposit balance, disputed balance, loyalty balance, receivable balance...

  - Optional


- `@referredType` : The actual type of the target instance when needed for disambiguation.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon