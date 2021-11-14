# Settlement note item Data Model

## Domain

The  schema is part of the  Domain

## Description

Concerns a product identified by its catalogue reference. It could also follow a period delimited by a start and an end date.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/SettlementNoteItem.schema.json).

The Data model is defined as shown below:

- `itemId` : Unique identifier of the settlement note item

  - Optional


- `itemLabel` : A free description text for the settlement note item

  - Optional


- `itemNumber` : Unique number assigned to the settlement note item

  - Optional


- `quantity` : Quantity

  - Optional


- `taxExcludedAmount` : Tax excluded amount equal to quantity * taxExcludedUnitPrice

  - Optional


- `taxExcludedUnitPrice` : Tax excluded unit price to be applied on the given quantity

  - Optional


- `taxIncludedAmount` : All taxes included amount equal to taxExcludedAmount + taxAmount

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon