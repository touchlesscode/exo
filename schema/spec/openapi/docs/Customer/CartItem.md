# Cart item Data Model

## Domain

The  schema is part of the  Domain

## Description

An identified part of the shopping cart. A shopping cart  is decomposed into one or more shopping cart item. Cart item represents a product offering or bundled product offering that user wish to purchase, as well as the pricing of the product offering, reference to product in case of configured characteristic or installation address. Cart items can be related to other cart item to related bundled offerings or reference cart Items to a shipping options

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/CartItem.schema.json).

The Data model is defined as shown below:

- `action` : The action to be carried out on the Product. Can be: add, modify, delete, noChange

  - Optional


- `id` : Identifier of the cart item (generally it is a sequence number 01, 02, 03, ...) in the shopping cart

  - Optional


- `quantity` : Quantity of cart items

  - Optional


- `status` : status of cart item. e.g &quot;active&quot; , &quot;savedForLater&quot;.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon