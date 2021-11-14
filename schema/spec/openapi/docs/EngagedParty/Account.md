# Account Data Model

## Domain

The  schema is part of the  Domain

## Description

Generic Account structure used to define commonalities between sub concepts of PartyAccount and Financial Account.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/Account.schema.json).

The Data model is defined as shown below:

- `creditLimit` : The maximum amount of money that may be charged on an account

  - Optional


- `description` : Detailed description of the party account

  - Optional


- `href` : Unique reference of the account

  - Optional


- `id` : Unique identifier of the account

  - Optional


- `lastModified` : Date of last modification of the account

  - Optional


- `name` : Name of the account

  - Mandatory


- `state` : Contains the lifecycle state such as: Active, Closed, Suspended and so on.

  - Optional


- `accountType` : A categorization of an account, such as individual, joint, and so forth, whose instances share some of the same characteristics. Note: for flexibility we use a String here but an implementation may use an enumeration with a limited list of valid values.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon