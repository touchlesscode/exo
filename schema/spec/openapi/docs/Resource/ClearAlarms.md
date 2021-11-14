# Clear alarms Data Model

## Domain

The  schema is part of the  Domain

## Description

Task resource for clear alarms operation

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/ClearAlarms.schema.json).

The Data model is defined as shown below:

- `id` : The identifier of the task

  - Optional


- `href` : A reference to the task

  - Optional


- `state` : Current state of the operation task

  - Optional


- `clearSystemId` : Name of the clearing system

  - Optional


- `clearUserId` : Name of the clearing user

  - Optional


- `alarmClearedTime` : Time of the alarm clearing

  - Optional


- `alarmPattern` : Alarm patterns to match target alarms. An alarm will match if all of the sttributes in any of the patterns compare equal to those attributes of the alarm.

  - Optional


- `clearedAlarm` : The successfully cleared alarms

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon