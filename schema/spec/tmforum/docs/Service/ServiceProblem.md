# Service problem Data Model

## Domain

The  schema is part of the  Domain

## Description

The problem information for Middle B which is abstracted in the service layer from the issued event information by First B

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceProblem.schema.json).

The Data model is defined as shown below:

- `affectedLocation` : A list of the locations affected by the problem. At least one of affectedResource, affectedService or affectedLocation should be present.

  - Optional


- `affectedNumberOfServices` : Number of affected services

  - Optional


- `affectedResource` : A list of the resources affected by the problem. At least one of affectedResource, affectedService or affectedLocation should be present.

  - Optional


- `affectedService` : List of affected services. At least one of affectedResource, affectedService or affectedLocation should be present.

  - Optional


- `category` : Classifier for the problem. Settable. For example, this is used for distinguish the category of problem originator in [role].[category] format. Example: serviceProvider.declarer, supplier.originated, system.originated

  - Optional


- `comment` : A list of comments or notes made on the problem

  - Optional


- `correlationId` : Additional identifier coming from an external system

  - Optional


- `description` : Free form text describing the Service Problem

  - Optional


- `extensionInfo` : A generic list of any type of elements. Used for vendor Extensions or loose element encapsulation from other namespaces

  - Optional


- `firstAlert` : Indicates what first alerted the system to the problem. It is not the root cause of the Service Problem. Examples: Threshold crossing alert

  - Optional


- `href` : Reference to the Service Problem

  - Optional


- `id` : Identifier of the service problem

  - Optional


- `impactImportanceFactor` : Impact Importance is characterized by an Impact Importance Factor: overall importance of the impact of all the affected services, e.g. 0 (zero impact) to 100 (worst impact). The Impact Importance is a calculated field which is set by the OSS determining the impact.

  - Optional


- `impactPatterns` : Define the patterns of impact (optional)- e.g. other service characteristics- Used when defining impact through another pattern than the predefined attributes.

  - Optional


- `originatingSystem` : Indicates where the problem was generated

  - Optional


- `parentProblem` : The parent problem to which this problem is attached.

  - Optional


- `priority` : An indication varying from 1 (highest) to 10 (lowest) of how important it is for the service provider to correct the Service Problem.

  - Optional


- `problemEscalation` : Indicates if this service problem has been escalated or not. Possible values are 0 to 10. A value of zero means no escalation. The meanings of values 1-10 are to be determined by the user of the interface, but they show increasing levels of escalation.

  - Optional


- `reason` : Free text or optionally structured text. It can be Unknown.

  - Optional


- `relatedEvent` : List of events associated to this problem

  - Optional


- `relatedObject` : List of objects associated to this problem

  - Optional


- `originatorParty` : Individual or organization that created the problem

  - Optional


- `responsibleParty` : Individual or organization responsible for handling this problem

  - Optional


- `relatedParty` : List of parties or party roles playing a role within the service problem

  - Optional


- `rootCauseResource` : Resource(s) that are associated to the underlying service problems that are the Root Cause of this one if any (used only if applicable).

  - Optional


- `rootCauseService` : Service(s) that are associated to the underlying service problems that are the Root Cause of this one if any (used only if applicable)

  - Optional


- `resolutionDate` : Time the problem was resolved

  - Optional


- `status` : The current status of the service problem. Possible values are Submitted, Rejected, Acknowledged, In Progress [Held, Pending], Resolved, Closed, and Cancelled.

  - Optional


- `statusChangeDate` : Time the problem was last status changed

  - Optional


- `statusChangeReason` : The reason of state change

  - Optional


- `timeChanged` : Time the problem was last changed

  - Optional


- `timeRaised` : Time the problem was raised

  - Optional


- `trackingRecord` : List of tracking records that allow the tracking of modifications on the problem.The tracking records should not be embedded in the problem to allow retrieving the problem without the tracking records

  - Optional


- `underlyingAlarm` : A list of alarms underlying this problem.

  - Optional


- `associatedSLAViolation` : A List of SLA violations associated with this problem.

  - Optional


- `associatedTroubleTicket` : A list of trouble tickets associated with this problem.

  - Optional


- `underlyingProblem` : A list of underlying problems. Relevant only if this problem is derived from other problems.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon