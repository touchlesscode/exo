# Alarm Data Model

## Domain

The  schema is part of the  Domain

## Description

This resource represents an alarm supporting the information model defined in ITU-T X.733.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/Alarm.schema.json).

The Data model is defined as shown below:

- `id` : Identifier of the alarm, determined by the alarm owning system

  - Optional


- `href` : A reference to the alarm.

  - Optional


- `@baseType` : The base type of this alarm.

  - Optional


- `@schemaLocation` : A reference to the schema describing this alarm.

  - Optional


- `@type` : The type for this alarm.

  - Optional


- `externalAlarmId` : An identifier of the alarm in the source system.

  - Optional


- `state` : Defines the alarm state during its life cycle

  - Optional


- `alarmType` : Categorize the alarm. Should be one of the values defined in X.733 8.1.1 or 3GPP TS 32.111-2 Annex A:
	Communications Alarm
	Processing Error Alarm
	Environmental Alarm
	Quality of Service Alarm
	Equipment Alarm
	Integrity Violation
	Operational Violation
	Physical Violation
	Security Service or Mechanism Violation
	Time Domain Violation

  - Optional


- `perceivedSeverity` : Lists the possible severities that can be allocated to an Alarm. The values are consistent with ITU-T Recommendation X.733.
Once an alarm has been cleared, its perceived severity is set to &#x27;cleared&#x27; and can no longer be set.

  - Optional


- `probableCause` : Provides the probable cause of the alarm. The values are consistent with ITU-T Recommendation X.733 or 3GPP TS 32.111-2 Annex B.

  - Optional


- `specificProblem` : Provides more specific information about the alarm.

  - Optional


- `alarmedObjectType` : The type (class) of the managed object associated with the event.

  - Optional


- `reportingSystemId` : Reporting system identity.

  - Optional


- `sourceSystemId` : Source system identity.

  - Optional


- `alarmDetails` : Contains further information on the alarm.

  - Optional


- `alarmRaisedTime` : Indicates the time (as a date + time) at which the alarm occurred at its source.

  - Optional


- `alarmChangedTime` : Indicates the last date and time when the alarm is changed on the alarm-owning system. Any change to the alarm whether coming from the alarmed resource, or triggered by a change from the client is changing this time.

  - Optional


- `alarmClearedTime` : Indicates the time (as a date + time) at which the alarm is cleared at the source. 

  - Optional


- `alarmReportingTime` : Indicates the time (as a date + time) at which the alarm was reported by the owning OSS. It might be different from the alarmRaisedTime. For instance, if the alarm list is maintained by an EMS, the alarmRaisedtime would be the time the alarm
  was detected by the NE, while the alarmReportingTime would be the time this alarm was stored in the alarm list of the EMS.

  - Optional


- `ackState` : Provides the Acknowledgement State of the alarm

  - Optional


- `ackSystemId` : Provides the name of the system that last changed the ackState of an alarm, i.e. acknowledged or unacknowledged the alarm.

  - Optional


- `ackUserId` : Provides the id of the user who has last changed the ack state of the alarm, i.e. acknowledged or unacknowledged the alarm.

  - Optional


- `alarmEscalation` : Indicates if this alarm has been escalated or not. 

  - Optional


- `clearSystemId` : Provides the id of the system where the user who invoked the alarmCleared operation is located. 

  - Optional


- `clearUserId` : Provides the id of the user who invoked the alarmCleared operation

  - Optional


- `isRootCause` : Indicates whether the alarm is a root cause alarm.. 

  - Optional


- `plannedOutageIndicator` : Indicates that the Managed Object (related to this alarm) is in planned outage (in planned maintenance, or out-of-service). 

  - Optional


- `proposedRepairedActions` : Indicates proposed repair actions, if known to the system emitting the alarm.

  - Optional


- `serviceAffecting` : Indicates whether the alarm affects service or not.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon