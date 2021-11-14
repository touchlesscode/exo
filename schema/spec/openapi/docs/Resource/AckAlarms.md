# Ack alarms Data Model

## Domain

The  schema is part of the  Domain

## Description

Task resource for the acknowledge alarms operation

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/AckAlarms.schema.json).

The Data model is defined as shown below:

- `id` : The identifier of the task

  - Optional


- `href` : A reference to the task

  - Optional


- `state` : Current state of the operation task

  - Optional


- `ackSystemId` : Name of the acknowledging system

  - Optional


- `ackUserId` : Name of the acknowledging user

  - Optional


- `ackTime` : Time of the acknowledgement

  - Optional


- `alarmPattern` : Alarm patterns to match target alarms. An alarm will match if all of the sttributes in any of the patterns compare equal to those attributes of the alarm.

  - Optional


- `ackedAlarm` : The successfully acknowledged alarms

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon