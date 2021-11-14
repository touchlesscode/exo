# Organization Data Model

## Domain

The  schema is part of the  Domain

## Description

Organization represents a group of people identified by shared interests or purpose. Examples include business, department and enterprise. Because of the complex nature of many businesses, both organizations and organization units are represented by the same data.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/Organization.schema.json).

The Data model is defined as shown below:

- `isLegalEntity` : If value is true, the organization is a legal entity known by a national referential.

  - Optional


- `isHeadOffice` : If value is true, the organization is the head office

  - Optional


- `organizationType` : Type of Organization (company, department...)

  - Optional


- `tradingName` : Name that the organization (unit) trades under

  - Optional


- `name` : Organization name (department name for example)

  - Optional


- `nameType` : Type of the name : Co, Inc, Ltd,…

  - Optional


- `status` : Status of the organization

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon