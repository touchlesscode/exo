# Order line item analytics Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Analytics/OrderLineItemAnalytics.schema.json).

The Data model is defined as shown below:

- `orderTime` : time the order was placed

  - Optional


- `totalQuantity` : A line item might include several items of the same type, e.g. 5 iPhone X

  - Optional


- `statusSubmittedQuantity` : The number of items in this line item in submitted status

  - Optional


- `statusProvisionedQuantity` : The number of items in this line item in provisioned status

  - Optional


- `statusActivatedQuantity` : The number of items in this line item in activated status

  - Optional


- `statusDeliveredQuantity` : The number of items in this line item in delivered status

  - Optional


- `statusReturnedQuantity` : The number of items in this line item in returned status

  - Optional


- `statusCanceledQuantity` : The number of items in this line item in cancelled status

  - Optional


- `statusFailureQuantity` : The number of items in this line item in failure status

  - Optional


- `statusUpdateTime` : when the status was last updated

  - Optional


- `priceChargeTotalAmt` : Offering Recurrent amount

  - Optional


- `priceChargeTotalOcAmt` : Offering One time amount

  - Optional


- `dataCreationTimestamp` : Time stamp for data creation (e.g. system dump creation, event generation…)

  - Optional


- `runTimestamp` : Time stamp for data upload run

  - Optional


- `validFromTimestamp` : Time stamp for business validity of entity record

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon