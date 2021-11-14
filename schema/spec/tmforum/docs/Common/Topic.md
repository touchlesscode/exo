# Topic Data Model

## Domain

The  schema is part of the  Domain

## Description

Is a event channel provided by the Event Streaming API

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Topic.schema.json).

The Data model is defined as shown below:

- `id` : The identifier of the notification.

  - Optional


- `name` : use to identify grouping of events, per domain, per event types, per access control-right and so on.

  - Optional


- `href` : Reference of the related entity.

  - Optional


- `headerQuery` : is the filter that will be applied on the Event header properties.

  - Optional


- `contentQuery` : is the filter that will be applied on the content of the Event.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon