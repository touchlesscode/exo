# Contact Data Model

## Domain

The  schema is part of the  Domain

## Description

An individual or an organization used as a contact point for a given account and accessed via some contact medium.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/Contact.schema.json).

The Data model is defined as shown below:

- `contactName` : A displayable name for that contact

  - Optional


- `contactType` : Type of contact (primary, secondary...)

  - Mandatory


- `partyRoleType` : Identifies what kind of party role type is linked to the contact (a account manager...)

  - Optional


- `validFor` : Validity period of that contact

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon