# Product offering qualification Data Model

## Domain

The  schema is part of the  Domain

## Description

ProductOfferingQualification is used to perform a commercial eligibility. It allows to retrieve a list of productOffering that are commercially available in the context of the interaction (defined be place, channel, party, product).

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductOfferingQualification.schema.json).

The Data model is defined as shown below:

- `channel` : Channel used for the qualification

  - Optional


- `description` : Description of the productOfferingQualification

  - Optional


- `effectiveQualificationDate` : Effective date to productOfferingQualification completion

  - Optional


- `expectedPOQCompletionDate` : Date when the requester expect to provide an answer for the qualification request

  - Optional


- `expirationDate` : Date the qualification response expires

  - Optional


- `href` : Hyperlink to access the productOfferingQualification

  - Optional


- `id` : Unique identifier of the productOfferingQualification resource

  - Optional


- `instantSyncQualification` : An indicator which when the value is &quot;true&quot; means that requester expects to get qualifcation result immediately in the response. If the indicator is true then the response code of 200 indicates the operation is successful otherwise a task is created with a response 201.

  - Optional


- `note` : Free form text associated with the qualification request

  - Optional


- `productOfferingQualificationDate` : Date when the productOfferingQualification has been submitted

  - Optional


- `productOfferingQualificationItem` : Qualification item for a product or a category

  - Optional


- `provideAlternative` : An indicator which when the value is &quot;true&quot; means that alternative solutions should be provided

  - Optional


- `provideOnlyAvailable` : An indicator which when the value is &quot;true&quot; means that only available product offering must be listed in the response

  - Optional


- `provideUnavailabilityReason` : An indicator which when the value is &quot;true&quot; means that unavailability reason are expected for non available product offering

  - Optional


- `qualificationResult` : Result of the qualification (example: green, yellow, red)

  - Optional


- `relatedParty` : Party playing a role for this qualification (as requester for example)

  - Optional


- `requestedPOQCompletionDate` : Deadline date when the requester expected a qualification answer

  - Optional


- `state` : State of the productOfferingQualification defined in the state engine

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon