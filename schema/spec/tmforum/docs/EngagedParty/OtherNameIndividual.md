# Other name individual Data Model

## Domain

The  schema is part of the  Domain

## Description

Keeps track of other names, for example the old name of a woman before marriage or an artist name.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/OtherNameIndividual.schema.json).

The Data model is defined as shown below:

- `title` : Use for titles (aristrocatic, social, ...): Pr, Dr, Sir,....

  - Optional


- `aristocraticTitle` : e.g. Baron, Graf, Earl,…

  - Optional


- `generation` : e.g. Sr, Jr…

  - Optional


- `givenName` : First name

  - Optional


- `preferredGivenName` : Contains the chosen name by which the person prefers to be addressed. Note: This name may be a name other than a given name, such as a nickname

  - Optional


- `familyNamePrefix` : Family name prefix

  - Optional


- `familyName` : Contains the non-chosen or inherited name. Also known as last name in the Western context

  - Optional


- `legalName` : Legal name or birth name (name one has for official purposes)

  - Optional


- `middleName` : Middle name or initial

  - Optional


- `fullName` : Full name flatten (first, middle, and last names)

  - Optional


- `formattedName` : . A fully formatted name in one string with all of its pieces in their proper place and all of the necessary punctuation. Useful for specific contexts (Chinese, Japanese, Korean,…)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon