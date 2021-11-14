# Service Data Model

## Domain

The  schema is part of the  Domain

## Description

Service is a base class for defining the Service hierarchy. All Services are characterized as either being possibly visible and usable by a Customer or not. This gives rise to the two subclasses of Service: CustomerFacingService and ResourceFacingService.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/Service.schema.json).

The Data model is defined as shown below:

- `description` : Free-text description of the service

  - Optional


- `isServiceEnabled` : If FALSE, this particular Service has NOT been enabled for use

  - Optional


- `hasStarted` : If TRUE, this Service has already been started

  - Optional


- `startMode` : This attribute is an enumerated integer that indicates how the Service is started, such as: 0: Unknown; 1: Automatically by the managed environment; 2: Automatically by the owning device; 3: Manually by the Provider of the Service; 4: Manually by a Customer of the Provider; 5: Any of the above

  - Optional


- `isStateful` : If TRUE, this Service can be changed without affecting any other services

  - Optional


- `serviceDate` : Date when the service was created (whatever its status).

  - Optional


- `startDate` : Date when the service starts

  - Optional


- `endDate` : Date when the service ends

  - Optional


- `serviceOrder` : A list of service orders related to this service

  - Optional


- `note` : A list of notes made on this service

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon