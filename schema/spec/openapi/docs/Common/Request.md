# Request Data Model

## Domain

The  schema is part of the  Domain

## Description

A response to a request

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/Request.schema.json).

The Data model is defined as shown below:

- `body` : The body of the request. For example for an HTTP request might contain content of a form .

  - Mandatory


- `header` : Items included in the header of the request. For example for an HTTP request might contain requested locale, basic authentication.

  - Mandatory


- `method` : The protocol of the request, e.g. http

  - Optional


- `to` : The target of the request, e.g. a URL for an HTTP request

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon