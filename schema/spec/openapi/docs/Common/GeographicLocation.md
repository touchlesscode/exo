# Geographic location Data Model

## Domain

The  schema is part of the  Domain

## Description

A GeographicLocation is a pure-virtual super-class to the GeoJSON-aligned geometries of Point (addresses and locations), MultiPoint, LineString (streets, highways and boundaries), MultiLineString and Polygon (countries, provinces, tracts of land). Use the @type attribute to specify which of these is being specified by the geometry attribute.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/GeographicLocation.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier of the geographic location

  - Optional


- `href` : An URI used to access to the geographic location resource

  - Optional


- `@type` : The name of the GeoJSON structure used in the geometry attribute

  - Mandatory


- `bbox` : A bounding box array that contains the geometry. The axes order follows the axes order of the geometry

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon