# Problem group Data Model

## Domain

The  schema is part of the  Domain

## Description

Task resource that requests Service Problems to be grouped together into a parent and set of children

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/ProblemGroup.schema.json).

The Data model is defined as shown below:

- `href` : Reference to this task resource

  - Optional


- `id` : Unique identifier of this task resource

  - Optional


- `childProblem` : List of problems to be grouped under a parent problem

  - Optional


- `parentProblem` : The parent problem to which the problems are to be grouped

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon