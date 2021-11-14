# Association role specification Data Model

## Domain

The  schema is part of the  Domain

## Description

This embedded object represents the role and type of each entity involved in a relationship.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/AssociationRoleSpecification.schema.json).

The Data model is defined as shown below:

- `aggregation` : A flag indicates that if this role is an aggregation or a simple relationship

  - Optional


- `defaultQuantity` : Default quantity of the association role

  - Optional


- `entityType` : The target (root) entity type associated with this role

  - Optional


- `isNavigable` : A flag indicating if access from the other end of association is allowed or not

  - Optional


- `isSource` : A flag indicating if the participant involved in a uni-directional relationship is the source or not. This flag is true If the association is bi-directional

  - Optional


- `maxQuantity` : Maximum allowed quantity of the association role

  - Optional


- `minQuantity` : Minimum allowed quantity of the association role

  - Optional


- `role` : The association role of this relationship participant

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon