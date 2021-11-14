# Geographic sub address Data Model

## Domain

The  schema is part of the  Domain

## Description

Representation of a GeographicSubAddress 
It is used for addressing within a property in an urban area (country properties are often defined differently). It may refer to a building, a building cluster, or a floor of a multistory building.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/GeographicSubAddress.schema.json).

The Data model is defined as shown below:

- `buildingName` : allows for buildings that have well-known names

  - Optional


- `href` : Link to the subAddress

  - Optional


- `id` : Unique Identifier of the subAddress

  - Optional


- `levelNumber` : used where a level type may be repeated e.g. BASEMENT 1, BASEMENT 2

  - Optional


- `levelType` : describes level types within a building

  - Optional


- `name` : Name of the subAddress to identify it with a meaningful identification

  - Optional


- `privateStreetName` : private streets internal to a property (e.g. a university) may have internal names that are not recorded by the land title office.

  - Optional


- `privateStreetNumber` : private streets numbers internal to a private street

  - Optional


- `subUnitNumber` : the discriminator used for the subunit
often just a simple number e.g. FLAT 5, may also be a range

  - Optional


- `subUnitType` : the type of subunit
e.g.BERTH, FLAT, PIER, SUITE, SHOP, TOWER, UNIT, WHARF

  - Optional


- `subAddressType` : Type of subAddress : it can be a subunit or a private street

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon