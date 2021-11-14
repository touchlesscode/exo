# Base service Data Model

## Domain

The  schema is part of the  Domain

## Description

In the context of a service order and depending on the action requested (add/modify/delete/noChange) this data structure captures the configuration to apply to an existing subscribed service or to a new one

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/BaseService.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the service

  - Optional


- `href` : Reference of the service

  - Optional


- `serviceType` : Business type of the service

  - Optional


- `name` : Name of the service

  - Optional


- `state` : The life cycle state of the service, such as: [feasibilityChecked], [designed]

  - Optional


- `category` : Is it a customer facing or resource facing service

  - Optional


- `serviceSpecification` : The specification from which this service was instantiated

  - Optional


- `serviceCharacteristic` : A list of characteristics that characterize this service (ServiceCharacteristic [*]) 

  - Optional


- `serviceRelationship` : A list of service relationships (ServiceRelationship [*]). Describes links with other service(s) in the inventory (useful for describing relies-on, relies-from between CFS for example).

  - Optional


- `supportingService` : A list of supporting services (SupportingService [*]). A collection of services that support this service (bundling, link CFS to RFS)

  - Optional


- `supportingResource` : A list of supporting resources (SupportingResource [*]).Note: only Service of type RFS can be associated with Resources

  - Optional


- `relatedParty` : A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity

  - Optional


- `place` : A list of places (Place [*]). Used to define a place useful for the service (for example a delivery geographical place)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon