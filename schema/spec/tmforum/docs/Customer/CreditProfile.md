# Credit profile Data Model

## Domain

The  schema is part of the  Domain

## Description

Credit profile for the party (containing credit scoring, ...). By default only the current credit profile  is retrieved. It can be used as a list to give the party credit profiles history, the first one in the list will be the current one.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/CreditProfile.schema.json).

The Data model is defined as shown below:

- `creditProfileDate` : The date the profile was established

  - Optional


- `creditRiskRating` : This is an integer whose value is used to rate the risk

  - Optional


- `creditScore` : A measure of a person or organizations creditworthiness calculated on the basis of a combination of factors such as their income and credit history

  - Optional


- `validFor` : The period for which the profile is valid

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon