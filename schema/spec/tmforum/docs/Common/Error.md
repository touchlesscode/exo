# Error Data Model

## Domain

The  schema is part of the  Domain

## Description

Used when an API throws an Error, typically with a HTTP error response-code (3xx, 4xx, 5xx)

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Error.schema.json).

The Data model is defined as shown below:

- `code` : Application relevant detail, defined in the API or a common list

  - Mandatory


- `reason` : Explanation of the reason for the error which can be shown to a client user

  - Mandatory


- `message` : More details and corrective actions related to the error which can be shown to a client user

  - Optional


- `status` : HTTP Error code extension

  - Optional


- `referenceError` : URI of documentation describing the error

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon