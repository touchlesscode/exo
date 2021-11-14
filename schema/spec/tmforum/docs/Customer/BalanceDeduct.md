# Balance deduct Data Model

## Domain

The  schema is part of the  Domain

## Description

The Balance Deduct task resource is a detailed description of deduction operation. If balanceReserve Resource ID is contained in the deduct request message, the reserved balance will be performed deduct operation (if part of the reserved balance is deducted, the remain amount will be released); if balanceReserve Resource ID is not contained in the deduct request message, the balance will be deducted directly.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceDeduct.schema.json).

The Data model is defined as shown below:

- `confirmationDate` : Date when the deduction was confirmed in the server

  - Optional


- `description` : Description of the deduct  operation

  - Optional


- `href` : A resource URI pointing to the resource in the OB that stores the detailed information about a deduction

  - Optional


- `id` : Unique Identifier within the server for the deduction  operation request

  - Optional


- `requestedDate` : Date when the deduction request was received in the server

  - Optional


- `status` : Status of the deduction operation

  - Optional


- `deductType` : A preconfigured value that describes a deduct type which determines the prepay balance bucket in which the deduct is done

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon