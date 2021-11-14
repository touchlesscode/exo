# Quote item Data Model

## Domain

The  schema is part of the  Domain

## Description

A quote items describe an action to be performed on a productOffering or a product in order to get pricing elements and condition.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/QuoteItem.schema.json).

The Data model is defined as shown below:

- `action` : Action to be performed on this quote item (add, modify, remove, etc.)

  - Optional


- `appointment` : A reference to appointment(s) associated with this quote item

  - Optional


- `attachment` : A reference to attachment(s) associated with this quote item

  - Optional


- `id` : Identifier of the quote item (generally it is a sequence number 01, 02, 03, ...)

  - Optional


- `note` : Free form text associated with the quote item

  - Optional


- `quantity` : Quantity asked for this quote item

  - Optional


- `quoteItem` : A structure to embedded quote item within quote item

  - Optional


- `quoteItemAuthorization` : Authorization related to this quote item

  - Optional


- `quoteItemPrice` : Price for this quote item

  - Optional


- `quoteItemRelationship` : A relationship from item within a quote

  - Optional


- `productOfferingQualificationItem` : A reference to a previously done POQ with item specified

  - Optional


- `relatedParty` : A reference to a party playing a role in this quote item

  - Optional


- `state` : State of the quote item : described in the state machine diagram

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon