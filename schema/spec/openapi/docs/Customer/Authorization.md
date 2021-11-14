# Authorization Data Model

## Domain

The  schema is part of the  Domain

## Description

If special discount or special product offering price or specific condition need an approval for ISP sale representative it is described here.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/Authorization.schema.json).

The Data model is defined as shown below:

- `givenDate` : Date when the authorization (approved or declined) was done

  - Optional


- `name` : Name of the required authorization

  - Optional


- `requestedDate` : Date when the authorization is requested for

  - Optional


- `signatureRepresentation` : To describe a digital or manual signature

  - Optional


- `state` : State of the authorization, such as: approved or declined

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon