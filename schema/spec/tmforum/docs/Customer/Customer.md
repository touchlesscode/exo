# Customer Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/Customer.schema.json).

The Data model is defined as shown below:

- `href` : Url used to reference the customer.

  - Optional


- `id` : Unique identifier for Customers

  - Optional


- `name` : A word, term, or phrase by which the Customer is known and distinguished from other Customers.

  - Optional


- `status` : Used to track the lifecycle status of the customer.

  - Optional


- `statusReason` : A string providing an explanation on the value of the status lifecycle. For instance if the status is Rejected, statusReason will provide the reason for rejection.

  - Optional


- `validFor` : The time period that the Customer is valid for.

  - Optional


- `engagedParty` : The party - an organization or an individual - that is engaged as a customer.

  - Mandatory


- `characteristic` : Describes the characteristic of a customer.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon