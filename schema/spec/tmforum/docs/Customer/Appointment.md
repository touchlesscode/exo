# Appointment Data Model

## Domain

The  schema is part of the  Domain

## Description

An Appointment is an arrangement to do something or meet someone at a particular time, at a place (for face to face appointment) or in a contact medium (for phone appointment).

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/Appointment.schema.json).

The Data model is defined as shown below:

- `calendarEvent` : A calendar event reference (CalendarEventRef). The appointment is associated with a calendar event (an happening at a point of time) associated to a calendar entry.

  - Optional


- `category` : Business category : intervention for example or to be more precise after SalesIntervention, orderDeliveryIntervention,...

  - Optional


- `creationDate` : Appointment creation date

  - Optional


- `description` : Short free text describing the appointment

  - Optional


- `externalId` : External reference known by the customer

  - Optional


- `href` : Unique URI used to access to the appointment resource

  - Optional


- `id` : Unique identifier of the appointment

  - Optional


- `lastUpdate` : Date of last appointment update

  - Optional


- `relatedPlace` : Related place defines (by reference or value) the place where the appointment will take place.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon