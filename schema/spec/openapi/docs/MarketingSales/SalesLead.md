# Sales lead Data Model

## Domain

The  schema is part of the  Domain

## Description

A Sales Lead is the identification of a person or organization that has an interest in the goods and/or services provided in the prospect of them becoming Customers with one or more Subscriptions.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/MarketingSales/SalesLead.schema.json).

The Data model is defined as shown below:

- `href` : Reference of the salesLead

  - Optional


- `id` : Unique identifier of the salesLead

  - Optional


- `name` : Name of the salesLead

  - Optional


- `description` : Unique description of the salesLead

  - Optional


- `statusChangeDate` : Date and time of the last update

  - Optional


- `creationDate` : Date and time of the salesLead creation

  - Optional


- `referredDate` : Date when the prospect information was received (for example, from a trade show).

  - Optional


- `statusChangeReason` : Reason why the status has changed

  - Optional


- `type` : Indicates the nature of the salesLead

  - Optional


- `rating` : Identifies the potential of a salesLead for becoming a sale. Usual ratings for qualified leads are: hot, warm, cold.

  - Optional


- `estimatedRevenue` : Estimation of the revenue if the salesLead turns into a sale.

  - Optional


- `validFor` : The period for which the salesLead is valid

  - Optional


- `marketingCampaign` : Campaign represents the carrier-initiated marketing activity which aims at the better recognition about its brand and offerings by the market.

  - Optional


- `marketSegment` : MarketSegment reference. A Market Segment is a grouping of Parties, GeographicAreas, SalesChannels, and so forth. MarketSegments are the target of MarketingCampaigns, ProductOfferings, ProductPromotions, ProductPlacements, and ProductPrograms from both internal and external (Competitors, and other Providers) perspective.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon