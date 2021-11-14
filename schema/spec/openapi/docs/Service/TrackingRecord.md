# Tracking record Data Model

## Domain

The  schema is part of the  Domain

## Description

Tracking records allow the tracking of modifications on the problem. The tracking records should not be embedded in the problem to allow retrieving the problem without the tracking records

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/TrackingRecord.schema.json).

The Data model is defined as shown below:

- `description` : Describes the action being done, such as: ack, clear

  - Optional


- `extensionInfo` : A generic list of any type of elements. Used for vendor Extensions or loose element encapsulation from other namespaces

  - Optional


- `id` : Identifier of the TrackingRecord

  - Optional


- `systemId` : Describes the system Id from which the action was done

  - Optional


- `time` : Describes the time at which the action was done

  - Optional


- `user` : Describes the user doing the action

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon