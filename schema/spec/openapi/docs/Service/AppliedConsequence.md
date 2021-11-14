# Applied consequence Data Model

## Domain

The  schema is part of the  Domain

## Description

An Applied Consequence defines the action (prescribed action or notification) to take when a 
MeasureThresholdRuleViolation occurs.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/AppliedConsequence.schema.json).

The Data model is defined as shown below:

- `appliedAction` : The action for a violated threshold. This could be a hyperlink to 
the action.

  - Optional


- `description` : A narrative that explains in detail what the consequence is.

  - Optional


- `name` : A word, term, or phrase by which Consequence is known and 
distinguished from other MetricDefMeasureConsequences.

  - Optional


- `repeatAction` : An indicator used to specify that a consequence should cease 
being applied if a value is in the same range as the previous value or continue being applied if a value is in the same range as the previous value.  
If the repeatAction is True, if the consequence is always applied as soon as the MetricMeasure value is in the range of values and if the repeatAction is False, the consequence is applied only if the previous MetricMeasure value was not in the same range.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon