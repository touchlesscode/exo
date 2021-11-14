# Service level spec parameter Data Model

## Domain

The  schema is part of the  Domain

## Description

Service Level Specification parameters can be one of two types. A Key Quality Indicator (KQI) 
provides a measurement of a specific aspect of the performance of a Product (i.e., Product 
Specification, Product Offering, or Product) or a Service (i.e., Service Specification or Service).

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ServiceLevelSpecParameter.schema.json).

The Data model is defined as shown below:

- `name` : The name of the parameter

  - Optional


- `serviceParmCategory` : A string that specifies whether the Service Level Specification Parameter is technology specific, service specific, or technology/service independent

  - Optional


- `serviceParmPerspective` : A string that specifies whether the Service Level Specification Parameter represents a single user instance parameter or a parameter that represents an aggregation

  - Optional


- `transformationAlgorithmOfKQI` : The description of a logical step-by-step procedure used to calculate the value of a KQI

  - Optional


- `parameterType` : Types of Service Level Specification parameters are KQI or KPI

  - Optional


- `validFor` : A valid duration of a thing

  - Optional


- `relatedEntity` : A list of entities related to this parameter

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon