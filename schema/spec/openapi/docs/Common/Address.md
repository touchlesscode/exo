# Address Data Model

## Domain

The  schema is part of the  Domain

## Description

Structured textual way of describing how to find a Property in an urban area (country properties are often
defined differently).
Note : Address corresponds to SID UrbanPropertyAddress

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Address.schema.json).

The Data model is defined as shown below:

- `city` : City that the address is in

  - Optional


- `country` : Country that the address is in

  - Optional


- `locality` : &quot;An area of defined or undefined boundaries within a local authority or other legislatively defined area, usually rural or semi rural in nature.&quot; [ANZLIC-STREET], or a suburb &quot;a bounded locality within a city, town or shire principally of urban character &quot; [ANZLICSTREET]

  - Optional


- `postcode` : descriptor for a postal delivery area, used to speed and simplify the delivery of mail (also know as zipcode)

  - Optional


- `stateOrProvince` : the State or Province that the address is in

  - Optional


- `streetName` : Name of the street or other street type

  - Optional


- `streetNr` : Number identifying a specific property on a public street. It may be combined with streetNrLast for ranged addresses

  - Optional


- `streetNrLast` : Last number in a range of street numbers allocated to a property

  - Optional


- `streetNrLastSuffix` : Last street number suffix for a ranged address

  - Optional


- `streetNrSuffix` : the first street number suffix

  - Optional


- `streetSuffix` : A modifier denoting a relative direction

  - Optional


- `streetType` : alley, avenue, boulevard, brae, crescent, drive, highway, lane, terrace, parade, place, tarn, way, wharf 

  - Optional


- `subAddress` : Within a property in an urban area, may refer to a building, building cluster, or a floor of a multistory building

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon