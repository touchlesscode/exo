# Partnership specification Data Model

## Domain

The  schema is part of the  Domain

## Description

A partnership specification contains all the information for the setup of a partnership of a given kind. This includes the list of identified role types for the partnership with the corresponding agreement specifications.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/PartnershipSpecification.schema.json).

The Data model is defined as shown below:

- `description` : An explanatory text regarding this partnership specification

  - Optional


- `href` : The reference url for this partnership specification

  - Optional


- `id` : The identifier of the partnership specification

  - Optional


- `name` : An identifying name for the partnership specification.

  - Mandatory


- `roleSpecification` : The list of roles specifications a engaged party will be able to play for this kind of partnership

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon