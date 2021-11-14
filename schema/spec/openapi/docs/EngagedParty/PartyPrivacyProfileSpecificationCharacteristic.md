# Party privacy profile specification characteristic Data Model

## Domain

The  schema is part of the  Domain

## Description

A characteristic of the party privacy profile, whose value(s) would be supplied at runtime. For example, email address

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/PartyPrivacyProfileSpecificationCharacteristic.schema.json).

The Data model is defined as shown below:

- `name` : Name of the characteristic

  - Optional


- `description` : Description of the characteristic

  - Optional


- `criticalityLevel` : Level of criticality for this characteristic of personal identifiable information (e.g. in terms of the damage if this item was breached), such as low, medium, high.

  - Optional


- `privacyUsagePurpose` : Defines the purpose authorized or refused for the characteristic (e.g. ADMIN, INFORMATION, MARKETING, RESEARCH).

  - Optional


- `privacyType` : Type of privacy (e.g. Internal Purpose, External Purpose, Internal Retention, External Retention)

  - Optional


- `allowedRole` : A list of roles in the organization who are allowed access to this characteristic

  - Optional


- `partyPrivacyProfileSpecCharacteristicValue` : List of values that can be assigned to this characteristic at runtime

  - Optional


- `validFor` : The period of time for which this characteristic specification is valid.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon