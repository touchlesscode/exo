# Test measure Data Model

## Domain

The  schema is part of the  Domain

## Description

A TestMeasure specifies a measure of a specific aspect of a product, service, or resource test, such as lost packets or connectivity status

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/TestMeasure.schema.json).

The Data model is defined as shown below:

- `accuracy` : The number of digits of accuracy captured for associated Metrics

  - Optional


- `captureDateTime` : The date and time that the metric was captured

  - Optional


- `captureMethod` : The method used to capture the Metrics (This may be replaced by a set of entities similar to the Performance Monitoring Ref)

  - Optional


- `metricDescription` : Brief description of the metric

  - Optional


- `metricHref` : Hyperlink to access a metric for detail information

  - Optional


- `metricName` : The name of the metric

  - Optional


- `ruleViolation` : A list of rules that were violated in this test measure

  - Optional


- `unitOfMeasure` : The unit of measure for the metric values, such as meters, cubic yards, kilograms [ISO 1000].

  - Optional


- `value` : The value of Metric in the test. This also could be a document to record all values captured during the service test

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon