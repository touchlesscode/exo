# Customer bill on demand Data Model

## Domain

The  schema is part of the  Domain

## Description

This resource is used to manage the creation request of a customer bill in real-time (on demand).

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/CustomerBillOnDemand.schema.json).

The Data model is defined as shown below:

- `id` : Explanation: Unique identifier of the customer bill on demand request given by the server

  - Optional


- `href` : Reference of the customer bill on demand request

  - Optional


- `name` : Friendly name to identify the customer bill on demand request

  - Optional


- `state` : State of the request to produce an off cycle bill: Possible values are: inProgress, rejected, done, terminatedWithError.

  - Optional


- `description` : Additional data describing the customer bill on demand request

  - Optional


- `lastUpdate` : The last date time when the customer bill on demand has been updated

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon