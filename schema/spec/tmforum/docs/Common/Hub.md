# Hub Data Model

## Domain

The  schema is part of the  Domain

## Description

A Hub is used to subscribe to an event notification

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Hub.schema.json).

The Data model is defined as shown below:

- `id` : The unique-id for your subscription - referenced when updating or deleting a subscription

  - Mandatory


- `callback` : The URI that will be POSTed to when a notification is triggered

  - Mandatory


- `query` : This is a query string used to filter notifications in the context of the notifier

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon