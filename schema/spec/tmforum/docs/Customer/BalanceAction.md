# Balance action Data Model

## Domain

The  schema is part of the  Domain

## Description

an abstract resource. example extensions are BalanceTopup, BalanceDeduct

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceAction.schema.json).

The Data model is defined as shown below:

- `requestedDate` : Date when the deduction request was received in the server

  - Optional


- `confirmationDate` : Date when the deduction was confirmed in the server

  - Optional


- `validFor` : Unique identifier for the balancereserve entity

  - Optional


- `status` : Status of the operation

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon