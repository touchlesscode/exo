# Party privacy profile specification Data Model

## Domain

The  schema is part of the  Domain

## Description

Party Privacy Profile Specification serves as a template for creating Privacy Profiles. The specification defines characteristics for the profile. For example there might be a profile specification for residential customers, and a different specification for partners.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/EngagedParty/PartyPrivacyProfileSpecification.schema.json).

The Data model is defined as shown below:

- `description` : Description of the specification

  - Optional


- `applicableRole` : A list of roles to which this specification can apply. For example: Shop Agent, Call Center Agent.

  - Optional


- `href` : URI reference of the specification allowing navigation to the resource

  - Optional


- `id` : Unique identifier of the specification

  - Optional


- `lastUpdate` : Date and time when the specification was last updated

  - Optional


- `status` : Lifecycle status of the specification (e.g. In Design, Active, Rejected, Retired)

  - Optional


- `name` : Name of the specification

  - Optional


- `partyPrivacyProfileSpecCharacteristic` : List of characteristics of the specification, whose values would typically be supplied when the profile is instantiated

  - Optional


- `relatedParty` : List of parties or party roles involved in the definition or management of the specification

  - Optional


- `validFor` : The period of time for which the specification is valid

  - Optional


- `version` : The version of the specification, in case it is desired to maintain multiple versions of profile specifications

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon