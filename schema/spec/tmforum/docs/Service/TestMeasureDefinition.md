# Test measure definition Data Model

## Domain

The  schema is part of the  Domain

## Description

A TestMeasureDefinition specifies a measure of a specific aspect of a product, service, or resource test, such as lost packets or connectivity status

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/TestMeasureDefinition.schema.json).

The Data model is defined as shown below:

- `captureFrequency` : The frequency of capture for the metric. Note: This may be replaced by a set of entities similar to the Performance Monitoring

  - Optional


- `captureMethod` : The method used to capture the Metric. Note: This may be replaced by a set of entities similar to the Performance Monitoring

  - Optional


- `capturePeriod` : A period of the capture

  - Optional


- `metricDescription` : Brief description of the metric

  - Optional


- `metricHref` : Hyperlink to access a metric for detail information

  - Optional


- `metricName` : The name of a metric that in the test measure

  - Optional


- `name` : The name of the TestMeasureDefinition

  - Optional


- `unitOfMeasure` : Name of a service test specification

  - Optional


- `validFor` : The time period for which this definition is valid

  - Optional


- `valueType` : A kind of value that the Metric value can take on, such as numeric, text, and so forth

  - Optional


- `thresholdRule` : The rule(s) associated with the measure threshold

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon