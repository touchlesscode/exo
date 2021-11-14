# Product offering qualification item Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/ProductOfferingQualificationItem.schema.json).

The Data model is defined as shown below:

- `expectedActivationDate` : Date when the requester look for productOfferingQualification activation

  - Optional


- `id` : Id of the productOfferingQualification item

  - Optional


- `action` : Can be &quot;add&quot; / &quot;modify&quot; / &quot;no_change&quot;/ &quot;delete&quot; - by default add is considered

  - Optional


- `qualificationItemResult` : Qualification result for this productOfferingQualification item. It could be:

 qualified (request productOffering or productSpecification are available), 
 unqualified (requested not available and not alternate available),
 alternate (requested not available but proposal available)


  - Optional


- `state` : State of the productOfferingQualification item defined in the state engine

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon