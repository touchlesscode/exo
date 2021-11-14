# Notification Data Model

## Domain

The  schema is part of the  Domain

## Description

The notification is sent to each listener who has subscribed to receive it.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Notification.schema.json).

The Data model is defined as shown below:

- `eventId` : Identifier of the event

  - Optional


- `eventTime` : Creation date of the event

  - Optional


- `eventType` : Type of event

  - Optional


- `fieldPath` : details which field is missing, its structure is quite similar to GET filter criteria

  - Optional


- `resourcePath` : To indicate which entity is concerned

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon