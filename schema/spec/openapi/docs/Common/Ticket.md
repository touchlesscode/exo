# Ticket Data Model

## Domain

The  schema is part of the  Domain

## Description

A trouble ticket represents a record used for reporting and managing the resolution of resource problems

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Ticket.schema.json).

The Data model is defined as shown below:

- `correlationId` : Additional identifier coming from an external system

  - Optional


- `creationDate` : The date on which the trouble was discovered

  - Optional


- `description` : Description of the trouble

  - Optional


- `href` : Reference of the trouble ticket

  - Optional


- `id` : Unique identifier of the trouble ticket

  - Optional


- `resolutionDate` : The date on which the service was brought back to its original condition

  - Optional


- `severity` : The severity of the trouble. It can be for example : minor, major, critical

  - Optional


- `status` : The current status of the Trouble Ticket

  - Optional


- `statusChangeDate` : The date of state change

  - Optional


- `statusChangeReason` : The reason of state change

  - Optional


- `subStatus` : The current sub status of the Trouble Ticket

  - Optional


- `targetResolutionDate` : Foreseen trouble resolution date

  - Optional


- `ticketType` : Type of trouble ticket

  - Optional


- `relatedObject` : Any object(s) associated with this trouble ticket

  - Optional


- `note` : Any note(s) associated with this trouble ticket

  - Optional


- `relatedParty` : Any Party/Parties associated with this trouble ticket

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon