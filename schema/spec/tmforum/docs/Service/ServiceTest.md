# Service test Data Model

## Domain

The  schema is part of the  Domain

## Description

A service test is an entity that exists for a controlled test invocation on a service. The service 
test is executed according to a schedule and contains service test configuration parameters that are to be 
applied at execution time, and service test measures that result.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceTest.schema.json).

The Data model is defined as shown below:

- `characteristic` : List of characteristics with values that define the test run

  - Optional


- `description` : Description of the service test

  - Optional


- `endDateTime` : The end date and time of the service test

  - Optional


- `href` : Hyperlink to access the service test

  - Optional


- `id` : The identifier of the service test

  - Optional


- `mode` : An indication of whether the service test is running in 
&quot;PROACTIVE&quot; or &quot;ONDEMAND&quot; mode

  - Optional


- `name` : The name of the service test

  - Optional


- `relatedService` : The actual service being tested

  - Optional


- `startDateTime` : The start date and time of the service test.

  - Optional


- `state` : The actual state the service test is in

  - Optional


- `testMeasure` : The results of the test in terms of the measured metrics

  - Optional


- `testSpecification` : The specification for this test

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon