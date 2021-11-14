# E uicc usage analytics Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Analytics/eUICCUsageAnalytics.schema.json).

The Data model is defined as shown below:

- `customerStatusDate` : Date when status was set or changed last time

  - Optional


- `customerCreationDate` : Date when customer was created

  - Optional


- `customerBirthDate` : Date of birth

  - Optional


- `dataPeriodStart` : The statrt of the period for which the usage info  is collected

  - Optional


- `dataPeriodEnd` : The end of the period for which the usage info  is collected

  - Optional


- `activityMostRecentDate` : Most recent activity date indicating recency of information

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