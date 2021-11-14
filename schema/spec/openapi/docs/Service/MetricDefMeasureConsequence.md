# Metric def measure consequence Data Model

## Domain

The  schema is part of the  Domain

## Description

A MetricDefMeasureConsequence defines the action (prescribed action or notification) to take when a 
MetricDefMeasureThresholdRule is crossed.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/MetricDefMeasureConsequence.schema.json).

The Data model is defined as shown below:

- `description` : A narrative that explains in detail what the consequence is.

  - Optional


- `name` : A word, term, or phrase by which a 
MetricDefMeasureConsequence is known and distinguished from other MetricDefMeasureConsequences.

  - Optional


- `prescribeAction` : Recommended remedy for a violated threshold. This could be 
the hyperlink to the action.

  - Optional


- `repeatAction` : An indicator used to specify that a consequence should cease 
being applied if a value is in the same range as the previous value or continue being applied if a value is in the same range as the previous value. 
If the repeatAction is True, if the consequence is always applied as soon as the MetricMeasure value is in the range of values and if the repeatAction is False, the consequence is applied only if the previous MetricMeasure value was not in the same range.

  - Optional


- `validFor` : A valid duration of a thing.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon