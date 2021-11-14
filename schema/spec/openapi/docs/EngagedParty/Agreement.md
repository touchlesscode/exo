# Agreement Data Model

## Domain

The  schema is part of the  Domain

## Description

An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/Agreement.schema.json).

The Data model is defined as shown below:

- `agreementPeriod` : The time period during which the Agreement is in effect.

  - Optional


- `completionDate` : Date at which the agreement is completed

  - Optional


- `description` : Narrative that explains the agreement and details about the it , such as why the agreement is taking place.

  - Optional


- `documentNumber` : A reference number assigned to an Agreement that follows a prescribed numbering system.

  - Optional


- `href` : Unique url identifying the agreement as a resource

  - Optional


- `id` : Unique identifier for the agreement

  - Optional


- `initialDate` : Date at which the agreement was initialized

  - Optional


- `name` : A human-readable name for the agreement

  - Mandatory


- `statementOfIntent` : An overview and goals of the Agreement

  - Optional


- `status` : The current status of the agreement. Typical values are: in process, approved and rejected

  - Optional


- `agreementType` : The type of the agreement. For example commercial

  - Mandatory


- `version` : A string identifying the version of the agreement

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon