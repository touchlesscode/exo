# Promotion action Data Model

## Domain

The  schema is part of the  Domain

## Description

Action of the promotion.When the customer meets the conditions in the promotion pattern, the customer can be given the benefits in the action.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/PromotionAction.schema.json).

The Data model is defined as shown below:

- `@baseType` : The base type for use in polymorphic collections

  - Optional


- `@schemaLocation` : A link to the schema describing a resource (for type extension).

  - Optional


- `@type` : The class type of the actual resource (for type extension).

  - Optional


- `actionObjectId` : It refers to the object (entity) ID which is impacted by the promotion action. When the Promotion -&amp;gt; type is 1: Award, the actionObjectId is the sub-account ID; When the Promotion -&amp;gt; type is 2: Discount, it is the offering ID; When the Promotion -&amp;gt; type is 3: reduction, it is the offering ID.

  - Mandatory


- `actionType` : When the Promotion -&amp;gt; type is 1: Award, the action type can be one of the following:voice (minute),data (MB),data (GB),SMS,bonus point,physical gift,voucher,promotion code,an existing offering,currency. More types of action can be extended in future.

  - Mandatory


- `actionValue` : When the Promotion -&amp;gt; type is 1: Award, it means the amount or value of the awards decided by actionType, such as:Amount of gift,Amount of bonus,Value of discount; When the Promotion -&amp;gt; type is 2: Discount, it means the value of the discount; When the Promotion -&amp;gt; type is 3: reduction, it means the value of the reduced money .

  - Mandatory


- `id` : Unique identifier.

  - Mandatory






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon