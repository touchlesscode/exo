# Bank account debit details Data Model

## Domain

The  schema is part of the  Domain

## Description

Detailed information for a bank account debit. Bear in mind that this could be extended to add any required authorization fields to allow recurring payments

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/BankAccountDebitDetails.schema.json).

The Data model is defined as shown below:

- `accountNumber` : Bank Account Number (this could refer to the IBAN or SWIFT number)

  - Optional


- `accountNumberType` : Type of account number (e.g.: IBAN, SWIFT, ...)

  - Optional


- `BIC` : Business Identifier Code/Swift code of the financial institution where the account is located

  - Optional


- `blank` : Display name of the bank

  - Optional


- `owner` : Owner of the bank account

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon