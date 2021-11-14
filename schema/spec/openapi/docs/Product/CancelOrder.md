# Cancel order Data Model

## Domain

The  schema is part of the  Domain

## Description

A Order cancel is a type of task which  can  be used to place a request to cancel an order

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/CancelOrder.schema.json).

The Data model is defined as shown below:

- `requestedCancellationDate` : Date when the submitter wants the order to be cancelled

  - Optional


- `href` : Hyperlink to access the cancellation request

  - Optional


- `id` : id of the cancellation request (this is not an order id)

  - Optional


- `effectiveCancellationDate` : Date when the order is cancelled.

  - Optional


- `cancellationReason` : Reason why the order is cancelled.

  - Optional


- `state` : Tracks the lifecycle status of the cancellation request, such as Acknowledged, Rejected, InProgress, Pending and so on.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon