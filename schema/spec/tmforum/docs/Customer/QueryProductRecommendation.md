# Query product recommendation Data Model

## Domain

The  schema is part of the  Domain

## Description

Recommendation API is used to recommend offering quickly based on the history and real-time context of customer. It is a real-time and personalized recommendation API. It is usually provided by e-commerce or BSS, CRM system in omni-channel.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/QueryProductRecommendation.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the queryProductRecommendation

  - Optional


- `instantSyncRecommendation` : An indicator which when the value is &quot;true&quot; means that requester expects to get recommendation result in the response

  - Optional


- `href` : Hypertext Reference of the queryProductRecommendation

  - Optional


- `name` : Name of the queryProductRecommendation

  - Optional


- `recommendationType` : The type of the queryProductRecommendation

  - Optional


- `validFor` : The period in which the queryProductRecommendation is valid

  - Optional


- `place` : The place which the queryProductRecommendation is related to

  - Optional


- `state` : State of the queryProductRecommendation defined in the state engine

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon