# Loyalty action Data Model

## Domain

The  schema is part of the  Domain

## Description

Contains information on a loyalty action that should be applied should certain conditions be met for a loyalty rule and program.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/LoyaltyAction.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier for the loyalty event type.

  - Optional


- `href` : A reference to the loyalty event type.

  - Optional


- `actionType` : The type of loyalty action.

  - Optional


- `actionAttributes` : Additional attributes required to perform the action. These attributes will depend on the type of the loyalty action. For example, if it is a LoyaltyEarn action, there will be a “quantity” attribute value pair indicating how many points should be earned.

  - Optional


- `body` : The body if the request that is made when this action i executed. The body is assumed to be of type text/json. Any tokens denoted with {} will be replaced by attributes present in: Member profile, actionAttributes or event attributes in the loyalty event request.

  - Optional


- `headers` : The HTTP headers that is added to the action call.

  - Optional


- `version` : A string that identifies the version of the loyalty action.

  - Optional


- `commonName` : A user-friendly identifier of the loyalty execution point.

  - Optional


- `description` : A free-form description of the loyalty execution point.

  - Optional


- `action` : The HTTP operation to be used when calling the endpoint

  - Optional


- `endpoint` : The endpoint to call to trigger a BusinessInteraction, CustomerOrder or LoyaltyEarn.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon