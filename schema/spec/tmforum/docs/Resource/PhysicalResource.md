# Physical resource Data Model

## Domain

The  schema is part of the  Domain

## Description

Physical resource is a type of resource that describes the common set of attributes shared by all concrete physical resources (e.g. EQUIPMENT) in the inventory.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Resource/PhysicalResource.schema.json).

The Data model is defined as shown below:

- `manufactureDate` : This is a string attribute that defines the date of manufacture of this item in the fixed format &quot;dd/mm/yyyy&quot;. This is an optional attribute.

  - Optional


- `powerState` : This defines the current power status of the hardware item. Values include:

  0:  Unknown
  1:  Not Applicable
  2:  No Power Applied
  3: Full Power Applied
  4:  Power Save - Normal
  5:  Power Save - Degraded
  6:  Power Save - Standby
  7:  Power Save - Critical
  8:  Power Save - Low Power Mode
  9:  Power Save - Unknown
 10: Power Cycle
 11: Power Warning
 12: Power Off

  - Optional


- `serialNumber` : This is a string that represents a manufacturer-allocated number used to identify different instances of the same hardware item. The ModelNumber and PartNumber attributes are used to identify different types of hardware items. This is a REQUIRED attribute.

  - Optional


- `versionNumber` : This is a string that identifies the version of this object. This is an optional attribute.

  - Optional


- `category` : Category of the concrete resource. e.g Gold, Silver for MSISDN concrete resource

  - Optional


- `description` : free-text description of the resource

  - Optional


- `endDate` : A date time( DateTime). The date till the resource is effective

  - Optional


- `href` : The URI for the object itself.

  - Optional


- `id` : Identifier of an instance of the resource. Required to be unique within the resource type.  Used in URIs as the identifier for specific instances of a type.

  - Optional


- `lifecycleState` : The life cycle state of the resource.

  - Optional


- `name` : A string used to give a name to the resource

  - Optional


- `startDate` : A date time( DateTime). The date from which the resource is effective

  - Optional


- `version` : A field that identifies the specific version of an instance of a resource.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon