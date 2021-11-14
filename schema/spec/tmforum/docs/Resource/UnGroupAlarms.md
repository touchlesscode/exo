# Un group alarms Data Model

## Domain

The  schema is part of the  Domain

## Description

Task resource for ungroup alarms operation

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/UnGroupAlarms.schema.json).

The Data model is defined as shown below:

- `id` : The identifier of the task

  - Optional


- `href` : A reference to the task

  - Optional


- `state` : Current state of the operation task

  - Optional


- `sourceSystemId` : Source system identifier

  - Optional


- `alarmChangedTime` : Time of the uncorrelation

  - Optional


- `parentAlarm` : Root cause alarm

  - Optional


- `correlatedAlarm` : Correlated alarms

  - Optional


- `unGroupedAlarm` : The successfully uncorrelated alarms

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon