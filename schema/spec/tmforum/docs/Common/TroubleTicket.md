# Trouble ticket Data Model

## Domain

The  schema is part of the  Domain

## Description

A trouble ticket is a record of an issue that is created, tracked, and managed by a trouble ticket management system

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/TroubleTicket.schema.json).

The Data model is defined as shown below:

- `attachment` : File(s) attached to the trouble ticket. e.g. pictur of broken device, scaning of a bill or charge

  - Optional


- `channel` : The channel that origin the trouble ticket

  - Optional


- `creationDate` : The date on which the trouble ticket was created

  - Optional


- `description` : Description of the trouble or issue

  - Optional


- `expectedResolutionDate` : The expected resolution date determined by the trouble ticket system

  - Optional


- `externalId` : Additional identifier coming from an external system

  - Optional


- `href` : Hyperlink, a reference to the trouble ticket entity

  - Optional


- `id` : Unique identifier of the trouble ticket

  - Optional


- `lastUpdate` : The date and time that the trouble ticked was last updated

  - Optional


- `name` : Name of the trouble ticket, typically a short description provided by the user that create the ticket

  - Optional


- `note` : The note(s) that are associated to the ticket.

  - Optional


- `priority` : The priority of the trouble ticket and how quickly the issue should be resolved. Example: Critical, High, Medium, Low. The value is set by the ticket management system considering the severity, ticket type etc...

  - Optional


- `relatedEntity` : An entity that is related to the ticket such as a bill, a product, etc. The entity against which the ticket is associated.

  - Optional


- `relatedParty` : The related party(ies) that are associated to the ticket.

  - Optional


- `requestedResolutionDate` : The resolution date requested by the user

  - Optional


- `resolutionDate` : The date and time the trouble ticket was resolved

  - Optional


- `severity` : The severity of the issue. Indicate the implication of the issue on the expected functionality e.g. of a system, application, service etc.. 
Severity values can be for example : Critical, Major, Minor

  - Optional


- `status` : The current status of the trouble ticket

  - Optional


- `statusChange` : The status change history that are associated to the ticket.Populated by the server

  - Optional


- `statusChangeDate` : The date and time the status changed.

  - Optional


- `statusChangeReason` : The reason for changing the status

  - Optional


- `troubleTicketRelationship` : A list of trouble ticket relationships (TroubleTicketRelationship [*]). Represents a relationship between trouble tickets

  - Optional


- `ticketType` : represent a business type of the trouble ticket e.g. incident, complain, request

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon