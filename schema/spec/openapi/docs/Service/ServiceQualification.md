# Service qualification Data Model

## Domain

The  schema is part of the  Domain

## Description

ServiceQualification is used to perform a technical eligibility. It allows to retrieve a list of services that are technically available in the context of the interaction (place, party, service characteristics, ...).

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceQualification.schema.json).

The Data model is defined as shown below:

- `description` : Description of the serviceQualification

  - Optional


- `effectiveQualificationDate` : Effective date to serviceQualification completion

  - Optional


- `estimatedResponseDate` : Date when the requester expect to provide an answer for the qualification request.

  - Optional


- `expectedQualificationDate` : A date (DateTime). Deadline date when the requester expected a qualification answer.

  - Optional


- `expirationDate` : Date when the qualification response expires

  - Optional


- `href` : Hyperlink to access the serviceQualification

  - Optional


- `id` : Unique identifier of the serviceQualification resource

  - Optional


- `provideAlternative` : When the value is TRUE means that alternative solutions should be provided

  - Optional


- `provideOnlyAvailable` : When the value is TRUE means that only available service must be listed in the response

  - Optional


- `provideUnavailabilityReason` : When the value is TRUE means that unavailability reason are expected for non available service.

  - Optional


- `serviceQualificationDate` : Date when the serviceQualification was submitted

  - Optional


- `state` : State of the serviceQualification (acknowledged, inProgress, terminatedWithError, done)

  - Optional


- `serviceQualificationItem` : A list of service qualification items.

  - Optional


- `relatedParty` : A list of related party references, defines party or party role linked to this request.

  - Optional


- `externalId` : Identifier provided by the requester

  - Optional


- `qualificationResult` : Qualification result for this serviceQualification. It could be:  qualified (all qualification item are qualified), alternate (At least one item alternate and no item with  unqualified), unqualified (At least one item unqualified)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon