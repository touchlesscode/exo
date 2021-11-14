# Loyalty balance Data Model

## Domain

The  schema is part of the  Domain

## Description

A loyalty balance, containing a balance unit and value.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/LoyaltyBalance.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier for the loyalty balance.

  - Optional


- `href` : A reference to the loyalty member’s loyalty balance.

  - Optional


- `quantity` : Unit and value of the balance.

  - Optional


- `loyaltyProgramMember` : Reference to the loyaltyProgramMember to whom the loyaltyAccount belongs.

  - Optional


- `validFor` : The validity period in which loyalty can be burned using the account.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon