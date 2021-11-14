# Task flow Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/TaskFlow.schema.json).

The Data model is defined as shown below:

- `channel` : A list of channel(s) where this taskFlow is executed

  - Optional


- `characteristic` : A list of characteristic(s) associated to this taskFlow

  - Optional


- `completionMethod` : TaskFlow completion method.

  - Optional


- `href` : Reference of the taskFlow

  - Optional


- `id` : Identifier of the taskFlow

  - Optional


- `isMandatory` : Indicate mandatory TaskFlow.

  - Optional


- `priority` : TaskFlow priority.

  - Optional


- `relatedEntity` : A list of related entity(ies) to this taskFlow

  - Optional


- `relatedParty` : A list of related party(ies) to this task

  - Optional


- `state` : State of the taskFlow: described in the state machine diagram.

  - Optional


- `taskFlowRelationship` : A list of taskFlows related to this taskFlow

  - Optional


- `taskFlowSpecification` : Specification of the taskFlow.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon