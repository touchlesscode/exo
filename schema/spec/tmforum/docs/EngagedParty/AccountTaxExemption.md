# Account tax exemption Data Model

## Domain

The  schema is part of the  Domain

## Description

Proof of freedom from taxes imposed by a taxing jurisdiction

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/AccountTaxExemption.schema.json).

The Data model is defined as shown below:

- `certificateNumber` : Identifier of a document that shows proof of exemption from taxes for the taxing jurisdiction

  - Optional


- `issuingJurisdiction` : Name of the taxing jurisdiction for which taxes are exempt

  - Mandatory


- `reason` : Reason of the tax exemption

  - Optional


- `validFor` : Period for which the exemption is valid

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon