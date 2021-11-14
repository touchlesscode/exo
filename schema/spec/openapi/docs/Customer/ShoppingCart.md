# Shopping cart Data Model

## Domain

The  schema is part of the  Domain

## Description

Shopping Cart resource is used for the temporarily selection and reservation of product offerings in e-commerce, call center and retail purchase. Shopping cart supports purchase of both physical and digital goods and service (e.g. handset, telecom network service). Shopping Cart contain list of cart items, a reference to customer (partyRole) or contact medium in case customer not exist, and the total items price including promotions

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/ShoppingCart.schema.json).

The Data model is defined as shown below:

- `href` : Hyperlink to access the shopping cart

  - Optional


- `id` : Unique identifier created on provider side (e.g. Order Capture system)

  - Optional


- `validFor` : The period for which the shopping cart is valid (e.g. 90 if no activity or 7 days if cart is empty)

  - Optional


- `cartTotalPrice` : Total amount of the shopping cart, usually of money, that represents the actual price paid by the Customer for cart (considering only &quot;Active&quot; cart items)

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon