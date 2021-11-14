# Switch xdr analytics Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Analytics/SwitchXDRAnalytics.schema.json).

The Data model is defined as shown below:

- `eventStartTime` : Call start charging time
For SMS - START_TIME = SMS TRANSFER TIME

  - Optional


- `eventEndTime` : Call end charging time

  - Optional


- `eventAnswerTime` : Call answer time.
For SMS - ANSWER_TIME = SMS DELIVERY TIME

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