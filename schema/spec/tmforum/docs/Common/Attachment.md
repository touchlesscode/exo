# Attachment Data Model

## Domain

The  schema is part of the  Domain

## Description

Complements the description of an element (for instance a product) through video, pictures...

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Attachment.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier for this particular attachment

  - Optional


- `href` : URI for this Attachment

  - Optional


- `name` : The name of the attachment

  - Optional


- `description` : A narrative text describing the content of the attachment

  - Optional


- `attachmentType` : Attachment type such as video, picture

  - Optional


- `url` : Uniform Resource Locator, is a web page address (a subset of URI)

  - Optional


- `mimeType` : Attachment mime type such as extension file for video, picture and document

  - Optional


- `content` : The actual contents of the attachment object, if embedded, encoded as base64

  - Optional


- `size` : The size of the attachment.

  - Optional


- `validFor` : The period of time for which the attachment is valid

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon