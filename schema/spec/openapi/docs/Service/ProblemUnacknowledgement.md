# Problem unacknowledgement Data Model

## Domain

The  schema is part of the  Domain

## Description

Task resource that requests unacknowledgement of problems, rolling back the status of the problems from Acknowledged to Submitted.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ProblemUnacknowledgement.schema.json).

The Data model is defined as shown below:

- `href` : Reference to this task resource

  - Optional


- `id` : Unique identifier of this task resource

  - Optional


- `problem` : The problems to be unacknowledged, relevant in the input to this task

  - Optional


- `unackProblem` : The problems that were unacknowledged, populated in the output to this task

  - Optional


- `trackingRecord` : A record of the action taken in this acknowledgement

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon