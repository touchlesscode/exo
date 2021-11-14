# Balance reserve Data Model

## Domain

The  schema is part of the  Domain

## Description

The Balance Reserve Operation resource is a detailed description of a balance reserve operation requested over a subscription

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceReserve.schema.json).

The Data model is defined as shown below:

- `description` : Description of the reserve operation

  - Optional


- `href` : A resource URI pointing to the resource in the OB that stores the detailed information about a reserve

  - Optional


- `id` : Unique Identifier within the server for the reserve operation request

  - Optional


- `isAutoDeduct` : Indicates if the reserved balance is auto deducted after a time period

  - Optional


- `partyAccount` : A reference to the account that owns the bucket impacted by the balance related operation

  - Optional


- `product` : A reference to the product related to the bucket that is impacted by the balance related operation

  - Optional


- `relatedParty` : Used to provide information about any other entity with relation to the operation

  - Optional


- `amount` : Amount (can be monetary or non-monetary) to be reserved in the bucket

  - Optional


- `requestor` : Identifier for the user/customer/entity that performs the top-up action. This can be used to indicate the identifier of an agent that performs the operation on behalf of a user via a customer service channel. Structure including at least attributes �role� and �name�.

  - Optional


- `bucket` : A reference to the bucket impacted by the request. This is used in scenarios where the requestor knows beforehand the bucket that is going to be impacted instead of just referring to the commercial identifier of the impacted product and the type of bucket created under that product

  - Optional


- `reserveType` : A preconfigured value that describes a reserve type which determines the prepay balance bucket in which the reserve is done

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon