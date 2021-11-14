# Change request Data Model

## Domain

The  schema is part of the  Domain

## Description

Change Request is a type of request which can be used for the management and control of Change Management 
process between a customer and a service provider or between a service provider and a partner and vice versa.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/ChangeRequest.schema.json).

The Data model is defined as shown below:

- `actualEndTime` : Date and time when the change implementation actually finished

  - Optional


- `actualStartTime` : Date and time when the change implementation actually started

  - Optional


- `budget` : The budget reserved for the change

  - Optional


- `channel` : A channel represents the way the Change Request was created

  - Optional


- `completionDate` : Date and time when the change request is confirmed to be completed

  - Optional


- `currency` : The used currency related with cost

  - Optional


- `description` : Description of the change request

  - Optional


- `externalId` : ID given by the requestor to facilitate the relationship set up and subsequent searches

  - Optional


- `href` : Hyperlink to access a change request

  - Optional


- `id` : Identifier of a Change Request. It is created on repository side (a Change Management system)

  - Optional


- `impact` : Indicates the impact of this change

  - Optional


- `plannedEndTime` : Date and time when the change implementation is planned to be finished

  - Optional


- `plannedStartTime` : Date and time when the change implementation is planned to be started

  - Optional


- `priority` : Used by consumers to prioritize a change request in Change Management system

  - Optional


- `requestDate` : Date and time when the change request is raised

  - Optional


- `requestType` : Indicates the type of the change request

  - Optional


- `risk` : The risk to implement this change request

  - Optional


- `riskMitigationPlan` : The risk mitigation plan

  - Optional


- `riskValue` : The additional cost if the risk will happen

  - Optional


- `scheduledDate` : Date and time that the schedule is made

  - Optional


- `status` : Status of the change request and its sub-state

  - Optional


- `attachment` : The attachments of the communication message (when it is email type)

  - Optional


- `relatedParty` : The parties involved in the change request

  - Optional


- `location` : The place at which the change request occurred

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon