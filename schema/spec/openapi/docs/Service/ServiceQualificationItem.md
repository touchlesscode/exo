# Service qualification item Data Model

## Domain

The  schema is part of the  Domain

## Description

A ServiceQualificationItem relates to a specific service being checked in a qualification operation.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceQualificationItem.schema.json).

The Data model is defined as shown below:

- `expectedActivationDate` : The date when the service is expected to be activated

  - Optional


- `id` : Id of the Service Qualification Item

  - Optional


- `qualificationResult` : Qualification result for serviceQualification item. It could be: - qualified (request service are available), - unqualified (requested not available and not alternate available), - alternate (requested not available but proposal available)

  - Optional


- `state` : State of the serviceQualification item (acknowledged, inProgress, terminatedWithError, done)

  - Optional


- `service` : Configure the service characteristics (only configurable characteristics and necessary only if a non default value is selected) and/or identify the service that needs to be modified/deleted.

  - Optional


- `qualificationRelationship` : Structure used to describe relationship between serviceQualification item from the same serviceQualification.

  - Optional


- `expectedServiceAvailabilityDate` : Date when the requester looks for service availability

  - Optional


- `expirationDate` : Date when the qualification item response expires

  - Optional


- `eligibilityUnavailabilityReason` : A list of eligibility unavailability reasons (EligibilityUnavailabilityReason [*]). Reason for eligibility result if the serviceQualification result is no (meaning the service is not available).

  - Optional


- `category` : The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.

  - Optional


- `qualificationItemRelationship` : A list of qualification item relationships used to describe relationship between serviceQualification item from the same serviceQualification.

  - Optional


- `terminationError` : If qualificationItem has not been done properly this lists the error(s) that caused termination of the qualification.

  - Optional


- `alternateServiceProposal` : Alternate service proposal is used when the requested service is not available with characteristic and date asked for. An alternate proposal could be a distinct service Spec close to requested one or same as requested but with a different availability date.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon