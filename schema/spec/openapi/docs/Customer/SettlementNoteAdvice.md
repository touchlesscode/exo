# Settlement note advice Data Model

## Domain

The  schema is part of the  Domain

## Description

The settlement is about transferring money receiving by a CSP to a partner. The settlement is notified to the partner with a settlement note advice containing details in settlement lines.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/SettlementNoteAdvice.schema.json).

The Data model is defined as shown below:

- `currencyCode` : A string used as a code for specifying the currency associated to the given amounts. The ISO4217 norm uses 3 letters to define the currency (for example USD for US dollar or EUR for Euro).

  - Optional


- `date` : Creation date of the settlement note advice

  - Optional


- `description` : A free description text

  - Optional


- `href` : Reference of the settlement note advice

  - Optional


- `id` : A unique identifier for the settlement note advice

  - Optional


- `issuerTaxRegistration` : Tax registration number of the issuer

  - Optional


- `paymentDueDate` : Date at which the due amount should have been paid to the partner

  - Optional


- `receiverTaxRegistration` : Tax registration number of the receiver

  - Optional


- `taxDate` : Date of the tax

  - Optional


- `taxExcludedAmount` : All taxes excluded amount (expressed in the given currency)

  - Optional


- `taxIncludedAmount` : All taxes included amount (expressed in the given currency)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon