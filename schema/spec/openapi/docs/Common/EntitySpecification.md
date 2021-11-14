# Entity specification Data Model

## Domain

The  schema is part of the  Domain

## Description

EntitySpecification is a class that offers characteristics to describe a type of entity. Entities are generic constructs that may be used to describe bespoke business entities that are not effectively covered by the existing SID model.
Functionally, the entity specification acts as a template by which entities may be instantiated and described. By sharing the same specification, these entities would therefore share the same set of characteristics.
Note: The ‘configurable’ attribute on the specCharacteristics determines if an entity instantiated from the entity specification can override the value of the attribute. When set to false, the entity instance may not define a value that differs from the value in the specification.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/EntitySpecification.schema.json).

The Data model is defined as shown below:

- `description` : Description of this REST resource

  - Optional


- `href` : Hyperlink reference to this REST resource

  - Optional


- `id` : Unique identifier of this REST resource

  - Optional


- `lastUpdate` : Date and time of the last update of this REST resource

  - Optional


- `lifecycleStatus` : Used to indicate the current lifecycle status of this catalog item

  - Optional


- `name` : Name given to this REST resource

  - Optional


- `validFor` : The period for which this REST resource is valid

  - Optional


- `version` : Entity specification version

  - Optional


- `attachment` : Attachments that may be of relevance to this specification, such as picture, document, media

  - Optional


- `entitySchema` : Pointer to a schema that defines the entity

  - Optional


- `specCharacteristic` : List of characteristics that the entity can take

  - Optional


- `relatedParty` : Parties who manage or otherwise have an interest in this entity specification

  - Optional


- `entitySpecRelationship` : Relationship to another entity specification, might be dependency, substitution, etc.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon