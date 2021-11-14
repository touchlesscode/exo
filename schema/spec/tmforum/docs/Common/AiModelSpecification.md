# Ai model specification Data Model

## Domain

The  schema is part of the  Domain

## Description

AiModelSpecification is a class that offers characteristics to describe a type of service.
Functionally, it acts as a template by which Services may be instantiated. By sharing the same  specification, these services would therefore share the same set of characteristics.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/AiModelSpecification.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the service specification

  - Optional


- `href` : Reference of the service specification

  - Optional


- `name` : Name of the service specification

  - Optional


- `description` : A narrative that explains in detail what the service specification is

  - Optional


- `version` : AiModelSpecification version

  - Optional


- `validFor` : The period for which the service specification is valid

  - Optional


- `lastUpdate` : Date and time of the last update of the service specification

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status of the service specification

  - Optional


- `isBundle` : isBundle determines whether a ServiceSpecification represents a single ServiceSpecification (false), or a bundle of ServiceSpecification (true).

  - Optional


- `resourceSpecification` : A list of resource specification references (ResourceSpecificationRef [*]). The ResourceSpecification is required for a service specification with type ResourceFacingServiceSpecification (RFSS).

  - Optional


- `attachment` : A list of attachments (Attachment [*]). Complements the description of the specification through video, pictures...

  - Optional


- `aiModelSpecCharacteristic` : A list of service spec characteristics (ServiceSpecCharacteristic [*]). This class represents the key features of this service specification.

  - Optional


- `relatedParty` : A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity.

  - Optional


- `aiModelSpecRelationship` : A list of service specifications related to this specification, e.g. migration, substitution, dependency or exclusivity relationship

  - Optional


- `aiModelSpecification` : A list of service level specifications related to this service specification, and which will need to be satisifiable for corresponding service instances; e.g. Gold, Platinum

  - Optional


- `targetServiceSchema` : A target service schema reference (TargetServiceSchemaRef). The reference object to the schema and type of target service which is described by service specification.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon