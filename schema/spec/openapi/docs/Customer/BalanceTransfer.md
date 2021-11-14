# Balance transfer Data Model

## Domain

The  schema is part of the  Domain

## Description

The BalanceTransfer resource is a detailed description of credit transfer operation requested between two buckets (reference to products owned by customers and consuming credit when using a service).

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceTransfer.schema.json).

The Data model is defined as shown below:

- `id` : Unique Identifier within the server for the balance transfer operation request.

  - Mandatory


- `href` : A resource URI pointing to the resource in the OB that stores the detailed information. This is typically the resource url to retrieve individual transfer operation details

  - Mandatory


- `type` : A preconfigured value that describes a Transfer type which determines the prepay balance bucket in which the transfer is done (national-voice, roaming-voice, promotional-voice, data, ....)

  - Mandatory


- `description` : Description of the transfer operation

  - Optional


- `reason` : Text describing the reason for the adjustment

  - Mandatory


- `channel` : Indicator for the channel used to request the transfer operation. Structure including at least attribute name

  - Mandatory


- `requestor` : Identifier for the user/customer/entity that performs the transfer action.This can be used to indicate the identifier of an agent that performs the operation on behalf of a user via a customer service channel Structure including at least attributes “role” and “name”

  - Optional


- `targetId` : Identifier for the entity that receives the transfer (reference to a product via a commercial identifier such as an msisidn that relates to an internal product id)

  - Mandatory


- `targetType` : Intended for scenarios where the transfer is done from one bucket type to another (from voice to data). A preconfigured value that describes a Transfer type which determines the prepay balance bucket in which the transfer is done

  - Optional


- `receiver` : Identifier for the user/customer/entity that receives the transfer action when it is required to indicate additional customer hierarchy information regarding the entity receiving the balance transfer Structure including at least attributes “role” and “name”

  - Optional


- `amount` : Amount (can be monetary or non-monetary) to be transferred

  - Mandatory


- `transferCost` : Associated cost to be charged for the transfer operation (can be monetary or non-monetary)

  - Optional


- `product` : A reference to the product related to the bucket that is impacted by the balance related operation

  - Mandatory


- `sourceBucketBalance` : A reference to the source bucketBalance from which the funds are being transferred 

  - Optional


- `targetBucketBalance` : A reference to the target bucketBalance to which the funds are being transferred 

  - Optional


- `partyAccount` : A reference to the account that owns the bucket impacted by the balance transfer request

  - Optional


- `relatedParty` : Used to provide information about any other entity with relation to the balance transfer

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon