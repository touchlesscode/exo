# Partnership Data Model

## Domain

The  schema is part of the  Domain

## Description

A partnership represents a formalized collaboration between various parties, each party playing a role in the partnership. The parties playing a role in the partnership represented by the Partner entity. The structure of a partnership is specified by a PartnershipSpecification which contain all the information for the setup of the partnership, including the list of identified roles and the agreement that should apply.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/Partnership.schema.json).

The Data model is defined as shown below:

- `description` : An explanatory text regarding this partnership

  - Optional


- `href` : The reference url for this partnership

  - Optional


- `id` : The identifier of the partnership

  - Optional


- `name` : An identifying name for the partnership.

  - Mandatory


- `specification` : The specification of this partnership.

  - Mandatory


- `partner` : The list of partners of the partnership, where a partner represents a party playing a given role. Hence a partner structure includes primarily a reference to the engaged party and a role name matching necessarily the name of one of the role specifications defined in the specification of the partnership.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon