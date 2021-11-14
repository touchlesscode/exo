# Quote Data Model

## Domain

The  schema is part of the  Domain

## Description

Quote can be used to negotiate service and product acquisition or modification between a customer and a service provider. Quote contain list of quote items, a reference to customer (partyRole), a list of productOffering and attached prices and conditions.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/Quote.schema.json).

The Data model is defined as shown below:

- `agreement` : A reference to an agreement defining the context of the quote

  - Optional


- `billingAccount` : A reference to a billing account to provide quote context information 

  - Optional


- `category` : Used to categorize the quote from a business perspective that can be useful for the CRM system (e.g. &quot;enterprise&quot;, &quot;residential&quot;, ...)

  - Optional


- `contactMedium` : Information contact related to the quote requester

  - Optional


- `description` : Description of the quote

  - Optional


- `effectiveQuoteCompletionDate` : Date when the quote has been completed

  - Optional


- `expectedFulfillmentStartDate` : this is the date wished by the requester to have the requested quote item delivered

  - Optional


- `expectedQuoteCompletionDate` : This is expected date - from quote supplier - to be able to send back  a response for this quote

  - Optional


- `externalId` : ID given by the consumer and only understandable by him (to facilitate his searches afterwards)

  - Optional


- `href` : Hyperlink to access the quote

  - Optional


- `id` : Unique identifier - attributed by quoting system

  - Optional


- `instantSyncQuote` : An indicator which when the value is &quot;true&quot; means that requester expects to get quoting result immediately in the response. If the indicator is true then the response code of 200 indicates the operation is successful otherwise a task is created with a response 201. 

  - Optional


- `note` : Free form text associated with the quote

  - Optional


- `authorization` : An authorization provided for the quote

  - Optional


- `quoteDate` : Date and time when the quote was created

  - Optional


- `quoteItem` : An item of the quote - it is used to descirbe an operation on a product to be quoted

  - Mandatory


- `quoteTotalPrice` : Quote total price

  - Optional


- `relatedParty` : A reference to a party playing a role in this quote (customer, seller, requester, etc.)

  - Optional


- `productOfferingQualification` : A reference to a previously done product offering qualification

  - Optional


- `requestedQuoteCompletionDate` : This is requested date - from quote requester - to get a complete response for this quote

  - Optional


- `state` : State of the quote : described in the state-machine diagram

  - Optional


- `validFor` : Quote validity period

  - Optional


- `version` : Quote version - if the customer rejected the quote but  negotiations still open a new version of the quote is managed

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon