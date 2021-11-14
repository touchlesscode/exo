# Import job Data Model

## Domain

The  schema is part of the  Domain

## Description

Represents a task used to import resources from a file

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/ImportJob.schema.json).

The Data model is defined as shown below:

- `completionDate` : Date at which the job was completed

  - Optional


- `contentType` : Indicates the format of the imported data

  - Optional


- `creationDate` : Date at which the job was created

  - Optional


- `errorLog` : Reason for failure if status is failed

  - Optional


- `href` : Reference of the import job

  - Optional


- `id` : Identifier of the import job

  - Optional


- `path` : URL of the root resource where the content of the file specified by the import job must be applied

  - Optional


- `status` : Status of the import job (not started, running, succeeded, failed)

  - Optional


- `url` : URL of the file containing the data to be imported

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon