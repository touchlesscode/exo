# Service problem event record Data Model

## Domain

The  schema is part of the  Domain

## Description

A record of an event (related to a service problem) received from another system

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceProblemEventRecord.schema.json).

The Data model is defined as shown below:

- `eventTime` : Time at which the event occurred

  - Optional


- `eventType` : Type of the recorded event

  - Optional


- `href` : reference to this resource

  - Optional


- `id` : Identifier of the service problem event record.

  - Optional


- `recordTime` : Time at which the record was created

  - Optional


- `serviceProblem` : The service problem to which this record applies

  - Optional


- `notification` : A notification from the possible notifications for Service Problem (such as creation, status change, information required, change)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon