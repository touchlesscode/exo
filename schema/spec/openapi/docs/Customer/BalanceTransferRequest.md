# Balance transfer request Data Model

## Domain

The  schema is part of the  Domain

## Description

The BalanceTransfer resource is a detailed description of credit transfer operation requested between two buckets (reference to products owned by customers and consuming credit when using a service).

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceTransferRequest.schema.json).

The Data model is defined as shown below:

- `bucket` : A reference to the bucket impacted by the request. This is used in scenarios where the requestor knows beforehand the bucket that is going to be impacted instead of just referring to the commercial identifier of the impacted product and the type of bucket created under that product

  - Optional


- `confirmationDate` : Date when the transfer was confirmed in the server

  - Mandatory


- `costOwner` : Indicates the entity responsible to assume the cost of the transfer operation

  - Optional


- `description` : Description of the transfer operation

  - Optional


- `href` : A resource URI pointing to the resource in the OB that stores the detailed information. This is typically the resource url to retrieve individual transfer operation details

  - Mandatory


- `id` : Unique Identifier within the server for the balance transfer operation request.

  - Mandatory


- `partyAccount` : A reference to the account that owns the bucket impacted by the balance related operation

  - Optional


- `reason` : Text describing the reason for the adjustment

  - Mandatory


- `receiver` : Identifier for the user/customer/entity that receives the transfer action when it is required to indicate additional customer hierarchy information regarding the entity receiving the balance transfer

  - Optional


- `relatedParty` : Used to provide information about any other entity with relation to the operation

  - Optional


- `requestedDate` : Date when the transfer request was received in the server

  - Mandatory


- `requestor` : Identifier for the user/customer/entity that performs the top-up action. This can be used to indicate the identifier of an agent that performs the operation on behalf of a user via a customer service channel. Structure including at least attributes �role� and �name�.

  - Optional


- `status` : Status of the top-up.

  - Mandatory


- `targetType` : Intended for scenarios where the transfer is done from one bucket type to another (from voice to data). A preconfigured value that describes a Transfer type which determines the prepay balance bucket in which the transfer is done

  - Optional


- `transferCost` : Associated cost to be charged for the transfer operation (can be monetary or non-monetary)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon