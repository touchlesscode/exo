# Monitor Data Model

## Domain

The  schema is part of the  Domain

## Description

Monitoring of resources

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Monitor.schema.json).

The Data model is defined as shown below:

- `href` : reference to this monitor

  - Optional


- `id` : Identifier of an instance of the monitor. Required to be unique within the resource type.  Used in URIs as the identifier for specific instances of a type

  - Optional


- `request` : Represents the request

  - Optional


- `response` : Represents the response

  - Optional


- `sourceHref` : The monitored resource href

  - Optional


- `state` : The Monitor state of the resource.  InProgress, InError, Completed

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon