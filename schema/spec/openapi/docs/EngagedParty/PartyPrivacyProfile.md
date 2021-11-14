# Party privacy profile Data Model

## Domain

The  schema is part of the  Domain

## Description

A Party Privacy Profile represents the set of Privacy settings defined for a Party

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/PartyPrivacyProfile.schema.json).

The Data model is defined as shown below:

- `applicableForParty` : The party to whom the privacy profile applies. Could be a minor where the agreeing party is a parent, an organization where the agreeing party is authorized to make such agreements, or some individual for whom the agreeing party has authorization (e.g. power of attorney). If empty, the agreeing party is the party to whom the profile applies.

  - Optional


- `agreedByParty` : The party who agreed to the privacy profile. Not necessarily the party to whom the profile applies.

  - Mandatory


- `agreement` : An agreement under which the privacy profile was produced.

  - Optional


- `creationDate` : The date on which the PartyPrivacyProfile was created

  - Optional


- `description` : Description of the privacy profile

  - Optional


- `href` : URI reference of the privacy profile allowing navigation to the resource

  - Optional


- `id` : Unique identifier of the privacy profile

  - Optional


- `name` : Name of the privacy profile

  - Optional


- `partyPrivacyProfileCharacteristic` : List of characteristics of the privacy profile

  - Optional


- `partyPrivacyProfileSpecification` : The specification from which this profile was instantiated

  - Optional


- `status` : The status of this profile (such as agreed, created, terminated, etc.)

  - Optional


- `validFor` : The period of time for which this profile is valid, depending on regulations or business consideration the profile may expire and need to be renegotiated.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon