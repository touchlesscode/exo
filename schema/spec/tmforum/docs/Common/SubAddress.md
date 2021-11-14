# Sub address Data Model

## Domain

The  schema is part of the  Domain

## Description

Representation of a SubAddress 
It is used for addressing within a property in an urban area (country properties are often defined differently). It may refer to a building, a building cluster, or a floor of a multistory building.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/SubAddress.schema.json).

The Data model is defined as shown below:

- `buildingName` : Allows for buildings that have well-known names

  - Optional


- `id` : Unique ID for this SubAddress

  - Optional


- `levelNumber` : Used where a level type may be repeated e.g. BASEMENT 1, BASEMENT 2

  - Optional


- `levelType` : Describes level types within a building

  - Optional


- `name` : Name of the subAddress to identify it with a meaningful identification

  - Optional


- `privateStreetName` : Private streets internal to a property (e.g. a university) may have internal names that are not recorded by the land title office.

  - Optional


- `privateStreetNumber` : Private streets numbers internal to a private street

  - Optional


- `subUnitNumber` : The discriminator of the subunit, often just a simple number e.g. FLAT 5, may also be a range

  - Optional


- `subUnitType` : The type of subunit, such as BERTH, FLAT, PIER, SUITE, SHOP, TOWER, UNIT, WHARF

  - Optional


- `subAddressType` : The type of subaddress : it can be a subunit or a private street

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon