# Service level objective Data Model

## Domain

The  schema is part of the  Domain

## Description

Service level objectives are defined in terms of parameters and metrics, thresholds, and tolerances 
associated with the parameters.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceLevelObjective.schema.json).

The Data model is defined as shown below:

- `conformanceComparator` : An operator that specifies whether a Service Level Objective is 
violated above or below the conformanceTarget.

  - Optional


- `conformancePeriod` : An interval of time during which the Conformance Target must be measured.

  - Optional


- `conformanceTarget` : A value used to determine if Service Level Objective is met. 
The data type should be adjusted case by case.

  - Optional


- `graceTimes` : The number of times an objective can remain un-updated without 
a violation of a Service Level Agreement in reference to a measurement period and/or Service Level Agreement reporting period.

  - Optional


- `href` : The hyperlink to access a service level objective.

  - Optional


- `id` : The identifier of a service level objectives.

  - Optional


- `name` : The name of the service level objectives.

  - Optional


- `thresholdTarget` : A value that used to specify when a warning should be used 
that indicates an objective is danger of not being met. Notice, the data type should be adjusted case by case.

  - Optional


- `tolerancePeriod` : A value that specifies the allowable time variation of a conformance

  - Optional


- `toleranceTarget` : A value that specifies the allowable variation of a conformance 
Target. The data type should be adjusted case by case.

  - Optional


- `validFor` : A valid duration of a thing.

  - Optional


- `serviceLevelSpecParameter` : A parameter for this objective

  - Optional


- `serviceLevelSpecConsequence` : A list of consequences for this objective.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon