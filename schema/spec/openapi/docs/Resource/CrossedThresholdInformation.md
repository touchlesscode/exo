# Crossed threshold information Data Model

## Domain

The  schema is part of the  Domain

## Description

Identifies the details of the threshold that has been crossed.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/CrossedThresholdInformation.schema.json).

The Data model is defined as shown below:

- `direction` : Indicates the threshold crossing direction: up or down.

  - Optional


- `granularity` : Indicates the granularity at which the indicator is evaluated for threshold crossing

  - Optional


- `indicatorName` : Indicates the name of indicator which crossed the threshold.

  - Optional


- `indicatorUnit` : Indicates the unit of the measurement of the indicator corresponding to the threshold that has been crossed.

  - Optional


- `observedValue` : Indicates the value of the indicator which crossed the threshold.

  - Optional


- `thresholdCrossingDescription` : Indicates further information on the threshold crossing alarm.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon