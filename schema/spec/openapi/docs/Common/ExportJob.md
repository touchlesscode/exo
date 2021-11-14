# Export job Data Model

## Domain

The  schema is part of the  Domain

## Description

Represents a task used to export resources to a file

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/ExportJob.schema.json).

The Data model is defined as shown below:

- `completionDate` : Data at which the job was completed

  - Optional


- `contentType` : The format of the exported data

  - Optional


- `creationDate` : Date at which the job was created

  - Optional


- `errorLog` : Reason for failure

  - Optional


- `href` : Reference of the export job

  - Optional


- `id` : Identifier of the export job

  - Optional


- `path` : URL of the root resource acting as the source for streaming content to the file specified by the export job

  - Optional


- `query` : Used to scope the exported data

  - Optional


- `status` : Status of the export job (not started, running, succeeded, failed)

  - Optional


- `url` : URL of the file containing the data to be exported

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon