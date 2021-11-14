# Association role Data Model

## Domain

The  schema is part of the  Domain

## Description

This embedded object represents the role and type of each entity involved in a relationship.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/AssociationRole.schema.json).

The Data model is defined as shown below:

- `href` : Hyperlink reference to the endpoint plays this association role

  - Optional


- `id` : The identifier of the endpoint plays this role

  - Optional


- `isSource` : A flag indicating if the participant involved in a uni-directional relationship is the source or not. this flag is true If the association is bi-directional (both end points are navigable)

  - Optional


- `name` : Name of the endpoint which plays this association role

  - Optional


- `role` : The association role of this relationship participant as defined in the associationRoleSpecification

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon