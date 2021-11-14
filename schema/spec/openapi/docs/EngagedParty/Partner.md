# Partner Data Model

## Domain

The  schema is part of the  Domain

## Description

The part played by a party in a given context.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/Partner.schema.json).

The Data model is defined as shown below:

- `href` : Url used to reference the partner.

  - Optional


- `id` : Unique identifier for Partners

  - Optional


- `name` : A word, term, or phrase by which the Partner is known and distinguished from other Partners.

  - Mandatory


- `status` : Used to track the lifecycle status of the partner.

  - Optional


- `statusReason` : A string providing an explanation on the value of the status lifecycle. For instance if the status is Rejected, statusReason will provide the reason for rejection.

  - Optional


- `validFor` : The time period that the Partner is valid for.

  - Optional


- `engagedParty` : The reference to the party engaged in this partnership.

  - Mandatory


- `characteristic` : Describes the characteristic of a partner.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon