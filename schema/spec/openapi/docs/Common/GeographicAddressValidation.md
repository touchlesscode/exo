# Geographic address validation Data Model

## Domain

The  schema is part of the  Domain

## Description

This resource is used to manage address validation request and response

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/GeographicAddressValidation.schema.json).

The Data model is defined as shown below:

- `href` : An URI used to access to the address validation resource

  - Optional


- `id` : Unique identifier of the Address Validation

  - Optional


- `provideAlternative` : Indicator provided by the requester to specify if alternate addresses must be provided in case of partial or fail result.

  - Optional


- `validationDate` : Date when the address validation is performed

  - Optional


- `validationResult` : Result of the address validation (success, partial, fails)

  - Optional


- `submittedGeographicAddress` : the address as submitted to validation

  - Optional


- `validGeographicAddress` : the correct form of the validated address in case of validation success

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon