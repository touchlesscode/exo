# Document Data Model

## Domain

The  schema is part of the  Domain

## Description

Document is a tangible output from an activity

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Document.schema.json).

The Data model is defined as shown below:

- `creationDate` : The date and time the document was created. A date and time formatted in compliance with the ISO8601 standard must be used.

  - Optional


- `description` : free-text description of the document

  - Optional


- `href` : The URI for the object itself.

  - Optional


- `id` : Identifier of an instance of the document. Required to be unique within the document type.  Used in URIs as the identifier for specific instances of a type.

  - Optional


- `lastUpdate` : The date and time the document was last modified. A date and time formatted in compliance with the ISO8601 standard must be used.

  - Optional


- `lifecycleState` : The life cycle state of the document.

  - Optional


- `name` : A string used to give a name to the document

  - Optional


- `documentType` : Name of the document type

  - Optional


- `version` : A particular form or variety of an artefact that is different from others or from the original. The form represents differences in properties that characterize an artefact, that are not enough to warrant creating a new artefact

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon