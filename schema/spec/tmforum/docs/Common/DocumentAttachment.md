# Document attachment Data Model

## Domain

The  schema is part of the  Domain

## Description

Attachment refers to extensions or additional parts that is or may be attached to something (agreements, contracts, appointments) to perform a particular function. They can be communication attachments, documents and other.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/DocumentAttachment.schema.json).

The Data model is defined as shown below:

- `description` : The description of the binary attachment

  - Optional


- `id` : Identifier of the binary attachment

  - Optional


- `mimeType` : mimeType of the Attachment, such as: application/pdf

  - Optional


- `name` : Name of the binary attachment

  - Optional


- `size` : The size of the document or attachment. If this component contains the embedded data then the size is the size of the embedded data; if it is a reference without the data then it is the size of the referenced document

  - Optional


- `sizeUnit` : The unit of measure for the size

  - Optional


- `attachmentType` : Identifies the sub-type of the instance of binary attachment

  - Optional


- `URL` : URL of the Attachment

  - Optional


- `validFor` : Validity period of the Attachment

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon