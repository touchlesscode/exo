# Individual Data Model

## Domain

The  schema is part of the  Domain

## Description

Individual represents a single human being (a man, woman or child). The individual can be a customer, an employee or any other person that the organization needs to store information about.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/Individual.schema.json).

The Data model is defined as shown below:

- `gender` : Gender

  - Optional


- `placeOfBirth` : Reference to the place where the individual was born

  - Optional


- `countryOfBirth` : Country where the individual was born

  - Optional


- `nationality` : Nationality

  - Optional


- `maritalStatus` : Marital status (married, divorced, widow ...)

  - Optional


- `birthDate` : Birth date

  - Optional


- `deathDate` : Date of death

  - Optional


- `title` : Useful for titles (aristocratic, social,...) Pr, Dr, Sir, ...

  - Optional


- `aristocraticTitle` : e.g. Baron, Graf, Earl,…

  - Optional


- `generation` : e.g.. Sr, Jr, III (the third),…

  - Optional


- `givenName` : First name of the individual

  - Optional


- `preferredGivenName` : Contains the chosen name by which the individual prefers to be addressed. Note: This name may be a name other than a given name, such as a nickname

  - Optional


- `familyNamePrefix` : Family name prefix

  - Optional


- `familyName` : Contains the non-chosen or inherited name. Also known as last name in the Western context

  - Optional


- `legalName` : Legal name or birth name (name one has for official purposes)

  - Optional


- `middleName` : Middles name or initial

  - Optional


- `fullName` : Full name flatten (first, middle, and last names)

  - Optional


- `formattedName` : A fully formatted name in one string with all of its pieces in their proper place and all of the necessary punctuation. Useful for specific contexts (Chinese, Japanese, Korean,…)

  - Optional


- `location` : Temporary current location od the individual (may be used if the individual has approved its sharing)

  - Optional


- `status` : Status of the individual

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon