# Individual identification Data Model

## Domain

The  schema is part of the  Domain

## Description

Represents our registration of information used as proof of identity by an individual (passport, national identity card, drivers license, social security number, birth certificate)

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/IndividualIdentification.schema.json).

The Data model is defined as shown below:

- `identificationId` : Identifier

  - Optional


- `issuingAuthority` : Authority which has issued the identifier, such as: social security, town hall

  - Optional


- `issuingDate` : Date at which the identifier was issued

  - Optional


- `identificationType` : Identification type (passport, national identity card, drivers license, social security number, birth certificate)

  - Optional


- `validFor` : The period for which the identification information is valid.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon