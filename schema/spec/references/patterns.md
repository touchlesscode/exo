/
# API Design Patterns And Use Cases


This document lists various useful patterns for API design. We encourage API developers to consider the following patterns as a guide while designing APIs for services.

### Document Semantics, Formatting, and Naming

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

The words "REST" and "RESTful" MUST be written as presented here, representing the acronym as all upper-case letters. This is also true of "JSON," "XML," and other acronyms.

Machine-readable text, such as URLs, HTTP verbs, and source code, are represented using a fixed-width font.

URIs containing variable blocks are pecified according to [URI Template RFC 6570](https://tools.ietf.org/html/rfc6570). For example, a URL containing a variable called account_id would be shown as https://paypal.com/accounts/{account_id}/.

HTTP headers are written in camelCase + hyphenated syntax, e.g. Foo-Request-Id.


### Contributors

[Sanjay Dalal](https://www.linkedin.com/in/sanjaydalal) (former member: PayPal API Platform), [Jason Harmon](https://es.linkedin.com/in/jasonhnaustin) (former member: PayPal API Platform), [Jayadeba Jena](https://www.linkedin.com/in/jayadeba-jena-1a6a0020) (PayPal API Platform), [Nikhil Kolekar](https://www.linkedin.com/in/nikhil-kolekar-28627a2/) (PayPal API Platform), [Gagan Maheshwari](https://www.linkedin.com/in/gaganmaheshwari) (former member: PayPal API Platform), [George Petkov](https://www.linkedin.com/in/gbpetkov) (former member: PayPal API Platform) and Andrew Todd (PayPal Credit).

# Table Of Contents

* [Create Resource](#create-resource)
* [Collection Resource](#collection-resource)
   * [Time Selection](#time)
   * [Sorting](#sorting)
   * [Pagination](#pagination)
   * [Query Parameters](#query)
		* [Response Properties](#response-properties)
		* [Page Navigation](#page-navigation)
* [Read Single Resource](#read-resource)
* [Delete Single Resource](#delete-resource)
* [Update Single Resource](#update-resource)
	* [Partially Update Single Resource](#partial-update-resource)
	* [JSON Pointer Expression](#json-pointer-expression)
* [Projected Response](#projected-response)
* [Sub-resource Collection](#sub-resource-collection)
* [Sub-resource Singleton](#sub-resource-singleton)
* [Idempotency](#idempotency)
* [Asynchronous Operations](#asynchronous-operations)
* [Controller Resources](#controller-resource)
    * [Complex Operation - Sub-resource](#complex-operation-sub-resource) 
    * [Complex Operation - Composite](#complex-operation-composite) 
    * [Complex Operation - Transient](#complex-operation-transient) 
    * [Complex Operation - Search](#complex-operation-search) 
* [Resource-Oriented Alternative](#controller-alternative)
* [File Upload](#file-uploads)
	* [Standalone Operation](#fileuploads-two-step)
	* [As Attachment](#fileuploads-one-step)
* [HATEOAS Use Cases](#hateoas-use-cases)
    * [Navigating A Collection](#collection-links)
    * [Error Resolution](#error-links)
    * [Service Controlled Flow](#service-controlled-flow)
    * [Asynchronous Operations](#asynchronous-operations)
    * [Saving Bandwidth](#saving-bandwidth)
* [Bulk Operations](#bulk-operations)
    * [Request Format](#bulk-request-format)
    * [Response Format](#bulk-response)
    * [Replace and Update Operation](#bulk-other)
    * [HTTP Status Codes and Error Handling](#bulk-status-code) 
* [Other Patterns](#other)



<h2 id="create-resource">Create Resource</h2>

For creating a new resource, use `POST` method. The request body for `POST` may be somewhat different than for `GET`/`PUT` response/request (typically fewer fields as the server will generate some values). In most cases, the service produces an identifier for the resource. In cases where identifier is supplied by the API consumer, use [Create New Resource - Client Supplied ID](#create-resource-id)

Once the `POST` has successfully completed, a new resource will be created. Hypermedia links provide an easy way to get the URL of the newly created resource, using the `rel`: `self`, in addition to other links for operations that are allowed on the newly created resource. You may provide complete representation of the resource or partial with just HATEOAS links to retrieve the complete representation.

#### URI Template

```	
	POST /{version}/{namespace}/{resource}
```

#### Example Request

Note that server-generated values are not provided in the request.

```
POST /v1/vault/credit-cards
{
    "payer_id": "user12345",
    "type": "visa",
    "number": "4417119669820331",
    "expire_month": "11",
    "expire_year": "2018",
    "first_name": "Betsy",
    "last_name": "Buyer",
    "billing_address": {
        "line1": "111 First Street",
        "city": "Saratoga",
        "country_code": "US",
        "state": "CA",
        "postal_code": "95070"
    }
}
```

#### Example Response

On successful execution, the method returns with status code `201`.

```
201 Created
{
    "id": "CARD-1MD19612EW4364010KGFNJQI",
    "valid_until": "2016-05-07T00:00:00Z",
    "state": "ok",
    "payer_id": "user12345",
    "type": "visa",
    "number": "xxxxxxxxxxxx0331",
    "expire_month": "11",
    "expire_year": "2018",
    "first_name": "Betsy",
    "last_name": "Buyer",
    "links": [
        {
            "href": "https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-1MD19612EW4364010KGFNJQI",
            "rel": "self",
            "method": "GET"
        },
        {
            "href": "https://api.sandbox.paypal.com/v1/vault/credit-cards/CARD-1MD19612EW4364010KGFNJQI",
            "rel": "delete",
            "method": "DELETE"
        }
    ]
}
```

<h4 id="create-resource-id">Create New Resource - Consumer Supplied Identifier</h4>

When an API consumer provides the resource identifier, `PUT` method SHOULD be utilized, as the operation is idempotent, even during creation.

The same interaction as [Create Resource](#create-resource) is used here. `201` + response body on resource creation, and `204` + no response body when an existing resource is updated.


<h2 id="collection-resource">Collection Resource</h2>

A collection resource should return a list of representation of all of the given resources (instances), including any related metadata. An array of resources should be in the `items` field. Consistent naming of collection resource fields allow API clients to create generic handling for using the provided data across various resource collections.

The `GET` verb should not affect the system, and should not change response on subsequent requests (unless the underlying data changes), i.e. it should be `idempotent`. Exceptions to 'changing the system' are typically instrumentation/logging-related.

The list of data is presumed to be filtered based on the privileges available to the API client. In other words, it should not be a list of all resources in the domain. It should only be resources for which the client has authorization to view within its current context.

Providing a summarized, or minimized version of the data representation can reduce the bandwidth footprint, in cases where individual resources contain a large object.

If the service allows partial retrieval of the set, the following patterns MUST be followed.

<h4 id="time">Time Selection</h4>

Query parameters with regard to time range could be used to select a subset of items in the following manner:

* `start_time` or `{property_name}_after`: A timestamp (in either Unix time or [ISO-8601][5] format) indicating the start of a temporal range. `start_time` may be used when there is only one unambiguous time dimension; otherwise, the property name should be used (e.g., `processed_after`, `updated_after`). The property SHOULD map to a time field in the representation.
* `end_time` or `{property_name}_before`: A timestamp (in either Unix time or [ISO-8601][5] format) indicating the end of a temporal range. `end_time` may be used when there is only one unambiguous time dimension; otherwise, the property name should be used (e.g., `processed_before`, `updated_before`). The property SHOULD map to a time field in the representation.

<h4 id="sorting">Sorting</h4>

Results could be ordered according to sorting related instructions given by the client. This includes sorting by a specific field's value and sorting order as described in the query parameters below.

* `sort_by`: A dimension by which items should be sorted; the dimensions SHOULD be an attribute in the item's representation; the default (ascending or descending) is left to the implementation and MUST be specified in the documentation.
* `sort_order`: The order, one of `asc` or `desc`, indicating ascending or descending order.


<h4 id="pagination">Pagination</h4>

Any resource that could return a large, potentially unbounded list of resources in its `GET` response SHOULD implement pagination using the patterns described here.

Sample URI path: `/accounts?page_size={page_size}&page={page}`

Clients MUST assume no inherent ordering of results unless a default sort order has been specified for this collection. It is RECOMMENDED that service implementers specify a default sort order whenever it would be useful.

<h5 id="query">Query Parameters</h5>

* `page_size`: A non-negative, non-zero integer indicating the maximum number of results to return at one time. This parameter:
    * MUST be optional for the client to provide.
    * MUST have a default value, for when the client does not provide a value.
* `page`: A non-zero integer representing the page of the results. This parameter:
    * MUST be optional for the client to provide.
    * MUST have a default value of 1 for when the client does not provide a value.
    * MUST respond to a semantically invalid page count, such as zero, with the HTTP status code `400 Bad Request`.
    * If a page number is too large--for instance, if there are only 50 results, but the client requests `page_size=100&page=3`--the resource MUST respond with the HTTP status code `200 OK` and an empty result list.
* `page_token`: In certain cases such as querying on a large data set, in order to optimize the query execution while paginating, querying and retrieving the data based on result set of previous page migh be appropriate. Such a `page_token` could be an encrypted value of primary keys to navigate next and previous page along with the directions. 
* `total_required`: A boolean indicating total number of items (`total_items`) and pages (`total_pages`) are expected to be returned in the response. This parameter:
    * SHOULD be optional for the client to provide.
    * SHOULD have a default value of `false`.
    * MAY be used by the client in the very first request. The client MAY then cache the values returned in the response to help build subsequent requests.
    * SHOULD only be implemented when it will improve API performance and/or it is necessary for front-end pagination display.

<h5 id="response-properties">Response Properties</h5>

JSON response to a request of this type SHOULD be an object containing the following properties:

* `items` MUST be an array containing the current page of the result list.
* Unless there are performance or implementation limitations:
    * `total_items` SHOULD be used to indicate the total number of items in the full result list, not just this page.
        * If `total_required` has been implemented by an API, then the value SHOULD only be returned when `total_required` is set to `true`.
        * If `total_required` has not been implemented by an API, then the value MAY be returned in every response if necessary, useful, and performant.
        * If present, this parameter MUST be a non-negative integer.
        * Clients MUST NOT assume that the value of `total_items` is constant. The value MAY change from one request to the next.
    * `total_pages` SHOULD be used to indicate how many pages are available, in total.
        * If `total_required` has been implemented by an API, then the value SHOULD only be returned when `total_required` is set to `true`.
        * If `total_required` has not been implemented by an API, then the value MAY be returned in every response if necessary, useful, and performant.
        * If present, this parameter MUST be a non-negative, non-zero integer.
        * Clients MUST NOT assume that the value of `total_pages` is constant. The value MAY change from one request to the next.
* `links` SHOULD be an array containing one or more [HATEOAS](index.md#hypermedia) link relations that are relevant for traversing the result list. 

<h5 id="page-navigation">Page Navigation</h5>

|Relationship | Description|
|---------|------------|
|`self`  | Refers to the current page of the result list.|
|`first` | Refers to the first page of the result list. If you are using `page_token`, you may not return this link.|
|`last` | Refers to the last page of the result list. Returning of this link is optional. You need to return this link only if `total_required` is specified as a query parameter. If you are using `page_token`, you may not return this link. |
|`next` | Refers to the next page of the result list.|
|`prev` | Refers to the previous page of the result list.|


This is a **sample JSON schema** that returns a collection of resources with pagination:

```
{  
    "id": "plan_list:v1",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "Resource representing a list of billing plans with basic information.",
    "name": "plan_list Resource",
    "type": "object",
    "required": true,
    "properties": {
      "plans": {
        "type": "array",
        "description": "Array of billing plans.",
        "items": {
          "type": "object",
          "description": "Billing plan details.",
          "$ref": "plan.json"
        }
      }, 
      "total_items": {
        "type": "string",
        "readonly": true,
        "description": "Total number of items."
      },  
      "total_pages": {
        "type": "string",
        "readonly": true,
        "description": "Total number of pages."
      },
      "links": {
          "type": "array",
          "items": {
              "$ref": "http://json-schema.org/draft-04/hyper-schema#"
          }
      }  
    },
    "links": [
      {
        "href": "https://api.foo.com/v1/payments/billing-plans?page_size={page_size}&page={page}&status={status}",
        "rel": "self"
      },
      {
         "rel": "first",
         "href": "https://api.foo.com/v1/payments/billing-plans?page_size={page_size}&page={page}&start={start_id}&status={status}"
      },
      {
         "rel": "next",
         "href": "https://api.foo.com/v1/payments/billing-plans?page_size={page_size}&page={page+1}&status={status}"
      },
      {
         "rel": "prev",
         "href": "https://api.foo.com/v1/payments/billing-plans?page_size={page_size}&page={page-1}&status={status}"
      },
      {
         "rel": "last",
         "href": "https://api.foo.com/v1/payments/billing-plans?page_size={page_size}&page={last}&status={status}"
      }
   ]
}
```


This is a **sample JSON response** that returns a collection of resources with pagination:

```
{
  "total_items": "166",
  "total_pages": "83",
  "plans": [
    {
      "id": "P-6EM196669U062173D7QCVDRA",
      "state": "ACTIVE",
      "name": "Testing1-Regular3",
      "description": "Create Plan for Regular",
      "type": "FIXED",
      "create_time": "2014-08-22T04:41:52.836Z",
      "update_time": "2014-08-22T04:41:53.169Z",
      "links": [
        {
            "href": "https://api.foo.com/v1/payments/billing-plans/P-6EM196669U062173D7QCVDRA",
            "rel": "self"
        }
      ]
    },
    {
      "id": "P-83567698LH138572V7QCVZJY",
      "state": "ACTIVE",
      "name": "Testing1-Regular4",
      "description": "Create Plan for Regular",
      "type": "INFINITE",
      "create_time": "2014-08-22T04:41:55.623Z",
      "update_time": "2014-08-22T04:41:56.055Z",
      "links": [
        {
            "href": "https://api.foo.com/v1/payments/billing-plans/P-83567698LH138572V7QCVZJY",
            "rel": "self"
        }
      ]
    }
  ],
  "links": [
    {
      "href": "https://api.foo.com/v1/payments/billing-plans?page_size=2&page=3&status=active",
      "rel": "self"
    },
    {
      "href": "https://api.foo.com/v1/payments/billing-plans?page_size=2&page=1&first=3&status=active",
      "rel": "first"
    },
    {
      "href": "https://api.foo.com/v1/payments/billing-plans?page_size=2&page=2&status=active",
      "rel": "prev"
    },
    {
      "href": "https://api.foo.com/v1/payments/billing-plans?page_size=2&page=4&status=active",
      "rel": "next"
    },
    {
      "href": "https://api.foo.com/v1/payments/billing-plans?page_size=2&page=82&status=active",
      "rel": "last"
    }
  ]
}
```



<h2 id="read-resource">Read Single Resource</h2>

A single resource is typically derived from the parent collection of resources, often more detailed than an item in the represenation of a collection resource.

Executing `GET` should never affect the system, and should not change response on subsequent requests, i.e. it should be `idempotent`.

All identifiers for sensitive data should be non-sequential, and preferably non-numeric. In scenarios where this data might be used as a subordinate to other data, immutable string identifiers should be utilized for easier readability and debugging (i.e. `NAME_OF_VALUE` vs 1421321).

#### URI Template
```
	GET /{version}/{namespace}/{resource}/{resource-id}
```

#### Example Request
```
	GET /v1/vault/customers/CUSTOMER-66W27667YB813414MKQ4AKDY
```

##### Example Response
```
{
	 "merchant_customer_id": "merchant-1",
    "merchant_id": "target",
    "create_time": "2014-10-10T16:10:55Z",
    "update_time": "2014-10-10T16:10:55Z",
    "first_name": "Kartik",
    "last_name": "Hattangadi"
}
```

#### HTTP Status

If the provided resource identifier is not found, the response `404 Not Found` HTTP status should be returned (even with ’soft deleted’ records in data sources). Otherwise, `200 OK` HTTP status should be utilized when data is found.


<h2 id="delete-resource">Delete Single Resource</h2>

In order to enable retries (e.g., poor connectivity), `DELETE` is treated as `idempotent`, so it should always respond with a `204 No Content` HTTP status. `404 Not Found` HTTP status should not be utilized here, as on a second retry a client might mistakenly think the resource never existed at all. `GET` can be utilized to verify the resources exists prior to `DELETE`.

For a number of reasons, some data exposed as a resource MAY disappear: because it has been specifically deleted, because it expired, because of a policy (e.g., only transactions less than 2 years old are available), etc. Services MAY return a `410 Gone` error to a request related to a resource that no longer exists. However, there may be significant costs associated with doing so. Service designers are advised to weigh in those costs and ways to reduce them (e.g., using resource identifiers that can be validated without access to a data store), and MAY return a `404 Not Found` instead if those costs are prohibitive.


#### URI Template
```
	DELETE /{version}/{namespace}/{resource}/{resource-id}
```

#### Example Request
```
	DELETE /v1/vault/customers/CUSTOMER-66W27667YB813414MKQ4AKDY
	204 No Content
```	

<h2 id="update-resource">Update Single Resource</h2>

To perform an update to an entire resource, `PUT` method MUST be utilized. The same response body supplied in the resource's `GET` should be provided in the resource's `PUT` request body.

If the update is successful, a `204 No Content` HTTP status code (with no response body) is appropriate. Where there is a justifying use case (typically to optimize some client interaction), a `200 OK` HTTP status code with a response body can be utilized.

While the entire resource's representation must be supplied with the `PUT` method, the APIs validation logic can enforce constraints regarding fields that are allowed to be updated. These fields can be specified as [`readOnly`](index.md#json-schema) in the JSON schema. Fields in the request body can be optional or ignored during deserialization, such as `create_time` or other system-calculated values. Typical error handling, utilizing the `400 Bad Request` status code, should be applied in cases where the client attempts to update fields which are not allowed or if the resource is in a non-updateable state. 

See [Sample Input Validation Error Response](index.md#sampleresponse-multi) for examples of error handling.

#### URI Template
```
PUT /{version}/{namespace}/{resource}/{resource-id}
```	

#### Example Request
```
PUT /v1/vault/customers/CUSTOMER-66W27667YB813414MKQ4AKDY
{
	"merchant_customer_id": "merchant-1",
    "merchant_id": "target",
    "create_time": "2014-10-10T16:10:55Z",
    "update_time": "2014-10-10T16:10:55Z",
    "first_name": "Kartik",
    "last_name": "Hattangadi"
}
```
	
#### HTTP Status

Any failed request validation responds `400 Bad Request` HTTP status. If clients attempt to modify read-only fields, this is also a `400 Bad Request`.

If there are business rules (more than simple data-type or length constraints), it is best to provide a specific
error code and message (in addition to the `400`) for that validation.

For situations which require interaction with APIs or processes outside of the current request, the `422` status code is appropriate. 

After successful update, `PUT` operations should respond with `204 No Content` status, with no response body.


<h2 id="partial-update-resource">Partially Update Single Resource</h2>


Often, previously created resources need to be updated based on customer or facilitator-initiated interactions (like adding items to a cart). In such cases, APIs SHOULD provide an [RFC 6902][6] JSON Patch compatible solution. JSON patches use the HTTP `PATCH` method defined in [RFC 5789](http://tools.ietf.org/html/rfc5789) to enable partial updates to resources.

A JSON patch expresses a sequence of operations to apply to a target JSON document. The operations defined by the JSON patch specification include `add`, `remove`, `replace`, `move`, `copy`, and `test`. To support partial updates to resources, APIs SHOULD support `add`, `remove` and `replace`
operations. Support for the other operations (move, copy, and test) is left to the individual API owner based onneeds.

Below is a sample `PATCH` request to do partial updates to a resource:

```
PATCH /v1/namespace/resources/:id HTTP/1.1
Host: api.foo.com
Content-Length: 326
Content-Type: application/json-patch+json
If-Match: "etag-value"
[
    {
        "op": "remove",
        "path": "/a/b/c"
    },
    {
        "op": "add",
        "path": "/a/b/c",
        "value": [ "foo", "bar" ]
    },
    {
        "op": "replace",
        "path": "/a/b/c",
        "value": 42
    }
]
```

The value of `path` is a string containing a [RFC 6901][3] JSON Pointer] that references a location within the target document where the operation is performed. For example, the value `/a/b/c` refers to the element `c` in the sample JSON below:

```
{
    "a": {
        "b": {
            "c": "",
            "d": ""
        },
        "e": ""
    }
}
```

#### `path` Parameter

When JSON Pointer is used with arrays, concurrency protection is best implemented with ETags. 

In many cases, ETags are not an option:

* It is expensive to calculate ETags because the API collates data from multiple data sources or has very large response objects.
* The response data are frequently modified.

<h4 id="json-pointer-expression">JSON Pointer Expression</h4>

In cases where ETags are not available to provide concurrency protection when updating arrays, PayPal has created an extension to RFC 6901 which provides expressions of the following form.

`"path": "/object-name/@filter-expression/attribute-name"`

* `object-name` is the name of the collection.The symbol “@” refers to the current object. It also signals the beginning of a filter-expression.
* The `filter-expression` SHOULD only contain the following operators: a comparison operator (`==` for equality) or a Logical AND (`&&`) operator or both. For example:`”/address/@id==123/street_name”, “address/@id==123 && primary==true”` are valid filter expressions.
* The right hand side operand for the operator “==” MUST have a value that matches the type of the left hand side operand. For example: `“addresss/@integer_id == 123”,”/address/@string_name == ‘james’”,”/address/@boolean_primary == true”,/address/@decimal_number == 12.1` are valid expressions.
* If the right hand operand of "==" is a string then it SHOULD NOT contain any of the following escape sequences: a Line Continuation or a Unicode Escape Sequence.
* attribute-name is the name of the attribute to which a `PATCH` operation is applied if the filter condition is met.

<h5 id="patch_array_examples">PATCH Array Examples</h5>

**Example1:** 

`"op": "replace","path": “/address/@id==12345/primary”,"value": true`<br>

This would set the array element "primary" to true if the the element "id" has a value "12345".<br />

**Example2:** 

`"op": "replace","path": “/address/@country_code==’GB’ && type==’office’/active”,"value": true`<br /> 

This would set the array element "active" to true if the the element "country_code" equals to "GB" and type equals to "office".

 
<h4 id="other-considerations">Other Implementation Considerations For PATCH</h4>

It is not necessary that an API support the updating of all attributes via a `PATCH` operation. An API implementer SHOULD make an informed decision to support `PATCH` updates only for a subset of attributes through a specific resource operation.

<h4 id="patch-responses">Responses to a PATCH request</h4>

* Note that the operations are applied sequentially in the order they appear in the payload. If the update is successful, a `204 No Content` HTTP status code (with no response body) is appropriate. Where there is a justifying use case (typically to optimize some client interaction) and the request has the header `Prefer:return=representation`, a `200 OK` HTTP status code with a response body can be utilized.

* Responses body with `200 OK` SHOULD return the entire resource representation unless the client uses the fields parameter to reduce the response size.
* If a `PATCH` request results in a new resource state that is invalid, the API SHOULD return a `400 Bad Request` or `422 Unprocessable Entity`.
 
See [Sample Input Validation Error Response](index.md#sampleresponse-multi) for examples of error handling.


<h4 id="patch_examples">PATCH Examples</h4>

`PATCH` examples for modifying objects can be found in [RFC 6902][6].

<h2 id="projected-response">Projected Response</h2>


An API typically responds with full representation of a resource after processing requests for methods such as `GET`. For efficiency, the client can ask the service to return partial representation using [`Prefer: return=minimal`](index.md#http-standard-headers) HTTP header. Here, The determination of what constitutes an appropriate "minimal" response is solely at the discretion of the service. 

To request partial representation with specific field(s), a client can use the `fields` query parameter. For selecting multiple fields, a comma-separated list of fields SHOULD be used.

The following example shows the use of the fields parameter with users API.

**Request:** HTTP `GET` without `fields` parameter


```
GET https://api.foo.com/v1/users/bob
Authorization: Bearer your_auth_token
```

**Response**: The complete resource representation is returned in the response.

```
{
    "uid": "dbrown",
    "given_name": "David",
    "sn": "Brown",
    "location": "Austin",
    "department": "RISK",
    "title": "Manager",
    "manager": "ipivin",
    "email": "dbrown@foo.com",
    "employeeId": "234167"
}
```

### Projected response to GET with the `fields` query parameter.

**Request:**

```

GET https://api.foo.com/v1/users/bob?fields=department,title,location
Authorization: Bearer your_auth_token
```

The response has only fields specified by the `fields` query parameter as well as mandatory fields.

**Response:**

```
200 OK

{
    "uid": "dbrown",
    "department": "RISK",
    "title": "Manager",
    "location": "Austin"
}
```

You could use the same pattern for Collection Resource as well as following.

```
GET https://api.foo.com/v1/users?fields=department,title,location
```

The response will have entries with the fields specified in request as well as mandatory fields.



<h2 id="sub-resource-collection">Sub-Resource Collection</h2>

Sometimes, multiple identifiers are required ('composite keys', in the database lexicon) to identify a given resource. In these scenarios, all behaviors of a [Collection Resource](#collection-resource) are implemented, as a subordinate of another resource. It is always implied that the `resource-id` in the URL must be the parent of the sub-resources.

#### Cautions
* The need to maintain multiple identifiers can create a burden on client developers.
  * Look for opportunities to promote resources with unique identifiers (i.e. there is no need to identify the parent resource) to a first-level resource.
* Caution should be used in identifying the name of the sub-resource, as to not interfere with the identifier naming conventions of the base resource. In other words, `/{version}/{namespace}/{resource}/{resource-id}/{sub-resource-id}` is not appropriate, as the `sub-resource-id` has ambiguous meaning.
* Two levels is a practical limit for resource identifiers
  * API client usability suffers, as the need for clients to maintain state about identifier hierarchy increases complexity.
  * Server developers must validate each level of identifiers in order to verify that they are allowed access, and that they relate to each other, thus increasing risk and complexity.

Note these templates/examples are brief: for more detail on the Collection Resource style, [see above](#collection-resource). Although this section explains the sub-resource collection, all interactions should be the same, simply with the addition of a parent identifier.

#### URI Templates
	POST /{version}/{namespace}/{resource}/{resource-id}/{sub-resource}
	GET /{version}/{namespace}/{resource}/{resource-id}/{sub-resource}
	GET /{version}/{namespace}/{resource}/{resource-id}/{sub-resource}/{sub-resource-id}
	PUT /{version}/{namespace}/{resource}/{resource-id}/{sub-resource}/{sub-resource-id}
	DELETE /{version}/{namespace}/{resource}/{resource-id}/{sub-resource}/{sub-resource-id}

#### Examples
	GET /v1/notifications/webhooks/{webhook-id}/event-types
	POST /v1/factory/widgets/PART-4312/sub-assemblies
	GET /v1/factory/widgets/PART-4312/sub-assemblies/INNER-COG
	PUT /v1/factory/widgets/PART-4312/sub-assemblies/INNER-COG
	DELETE /v1/factory/widgets/PART-4312/sub-assemblies/INNER-COG
	
	
<h2 id="singleton">Sub-Resource Singleton</h2>

When a sub-resource has a one-to-one relationship with the parent resource, it could be modeled as a singleton sub-resource. This approach is usually used as a means to reduce the size of a resource, when use cases support segmenting a large resource into smaller resources.  

For a singleton sub-resource, the name should be a singular noun. As often as possible, that single resource should always be present (i.e. does not respond with `404`).

The sub-resource should be owned by the parent resource; otherwise this sub-resource should probably be promoted to its own collection resource, and relationships represented with sub-resource collections in the other direction. Sub-resource singletons should not duplicate a resource from another collection.

If the singleton sub-resource needs to be created, `PUT` should be used, as the operation is idempotent, on creation or update. `PATCH` can be used for partial updates, but should not be available on creation (in part because it is not idempotent).

This should not be used as a mechanism to update single or subsets of fields with `PUT`. The resource should remain intact, and `PATCH` should be utilized for partial update. Creating sub-resource singletons for each use case of updates is not a scalable design approach, as many endpoints could result long-term.

#### URI Template
	GET/PUT /{version}/{namespace}/{resource}/{resource-id}/{sub-resource}

#### Examples
	GET /v1/customers/devices/DEV-FDU233FDSE213f)/vendor-information
	



<h2 id="idempotency">Idempotency</h2>

_Idempotency_ is an important aspect of building a fault-tolerant API. Idempotent APIs enable clients to safely retry an operation without worrying about the side-effects that the operation can cause. For example, a client can safely retry an idempotent request in the event of a request failing due to a network connection error.

Per [HTTP Specification](https://tools.ietf.org/html/rfc2616#section-9.1.2), a method is idempotent if the side-effects of more than one identical requests are the same as those for a single request. Methods `GET`, `HEAD`, `PUT` and `DELETE` (additionally, `TRACE` and `OPTIONS`) are defined idempotent.

`POST` operations by definition are neither safe nor idempotent.

All service implementations MUST ensure that safe and idempotent behaviour of HTTP methods is implemented as per HTTP specifications. Services that require idempotency for `POST` operations MUST be implemented as per the following guidelines.

<h4 id="post-idempotency">Idempotency For POST Requests</h4>

`POST` operations by definition are not idempotent which means that executing `POST` more than once with the same input creates as many resources. To avoid creation of duplicate resources, an API SHOULD implement the protocol defined in the section below. This guarantees that only one record is created for the same input payload.

For many use cases that require idempotency for `POST` requests, creation of a duplicate record is a severe problem. For example, duplicate records for the use cases that create or execute a payment on an account are not allowed by definition.

To track an idempotent request, a unique `idempotency key` is used and sent in every request. Define a header and use its value as `idempotency key` for every request.

_**For the very first request from the client**:_

**On the client side**:

The API client sends a new `POST` request with the `Foo-Request-Id` header that contains the `idempotency key`.

```
POST /v1/payments/referenced-payouts-items HTTP/1.1
Host: api.foo.com
Content-Type: application/json
Authorization: Bearer oauth2_token
Foo-Request-Id: 123e4567-e89b-12d3-a456-426655440000

{
	"reference_id": "4766687568468",
	"reference_type": "egflf465vbk7468mvnb"
}
```

**On the server side**:

If the call is successful and leads to a resource creation, the service MUST return a `201` response to indicate both success and a change of state.

Sample response:

```
HTTP/1.1 201 CREATED
Content-Type: application/json

{

  "item_id": "CDZEC5MJ8R5HY",
  "links": [{
      "href": "https://api.foo.com/v1/payments/referenced-payouts-items/CDZEC5MJ8R5HY",
      "rel": "self",
      "method": "GET"
  }]
}
```

The service MAY send back the `idempotency key` as part of `Foo-Request-Id` header in the response.


_**For subsequent requests from the client with same input payload**:_


**On the client side**:

The API client sends a `POST` request with the same `idempotency key` and input body as before.

```
POST /v1/payments/referenced-payouts-items HTTP/1.1
Host: api.foo.com
Content-Type: application/json
Authorization: Bearer oauth2_token
Foo-Request-Id: 123e4567-e89b-12d3-a456-426655440000


{
	"reference_id": "4766687568468",
	"reference_type": "egflf465vbk7468mvnb"
}
```

**On the server side**:

The server, after checking that the call is identical to the first execution, MUST return a `200` response with a representation of the resource to indicate that the request has already been processed successfully.

Sample response:

```
HTTP/1.1 200 OK
Content-Type: application/json

{
	"item_id": "CDZEC5MJ8R5HY",
	"processing_state": {
		"status": "PROCESSING"
	},
	"reference_id": "4766687568468",
	"reference_type": "egflf465vbk7468mvnb",
	"payout_amount": {
		"currency_code": "USD",
		"value": "2.0"
	},
	"payout_destination": "9C8SEAESMWFKA",
	"payout_transaction_id": "35257aef-54f7-43cf-a258-3b45caf3293",
	"links": [{
				"href": "https://api.foo.com/v1/payments/referenced-payouts-items/CDZEC5MJ8R5HY",
				"rel": "self",
				"method": "GET"
			}]
}
```



<h5 id="idempotency-key">Uniqueness of Idempotency Key</h5>

The `idempotency key` that is supplied as part of every `POST` request MUST be unique and can not be reused with another request with a different input payload. See error scenarios described below to understand the server behavior for repeating `idempotency` keys in requests.

How to make the key unique is up to the client and it's agreed protocol with the server. It is recommended that [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) or a similar random identifier be used as the idempotency key. It is also recommended that the server implements the idempotency keys to be time-based and, thus, be able to purge or delete a key upon its expiry.

<h5 id="error-scenarios">Error Scenarios</h5>

* If the `Foo-Request-Id` header is missing for an idempotent request, the service MUST reply with a `400` error with a `link` pointing to the public documentation about this pattern.
* If there is an attempt to reuse an `idempotency` key with a different request payload, the service MUST reply with a `422` error with a `link` pointing to the public documentation about this pattern.
* For other errors, the service MUST return the appropriate error message.



<h2 id="asynchronous-operations">Asynchronous Operations</h2>

Certain types of operations might require processing of the request in an asynchronous manner (e.g. validating a bank account, processing an image, etc.) in order to avoid long delays on the client side and prevent long-standing open client connections waiting for the operations to complete. For such use cases, APIs MUST employ the following pattern:

**_For `POST` requests_:**

* Return the `202 Accepted` HTTP response code.
* In the response body, include one or more URIs as hypermedia links, which could include:
    * The final URI of the resource where it will be available in future if the ID and path are already known. Clients can then make an HTTP `GET` request to that URI in order to obtain the completed resource. Until the resource is ready, the final URI SHOULD return the HTTP status code `404 Not Found`.
    
    `{ "rel": "self", "href": "/v1/namespace/resources/{resource_id}", "method": "GET" }`
    
    * A temporary request queue URI where the status of the operation may be obtained via some temporary identifier. Clients SHOULD make an HTTP `GET` request to obtain the status of the operation which MAY include such information as completion state, ETA, and final URI once it is completed.
    
    `{ "rel": "self", "href": "/v1/queue/requests/{request_id}, "method": "GET" }"`
    

**_For `PUT`/`PATCH`/`DELETE`/`GET` requests_:**

Like `POST`, you can support PUT/`PATCH`/`DELETE`/`GET` to be asynchronous. The behaviour would be as follows:

* Return the `202 Accepted` HTTP response code.
* In the response body, include one or more URIs as hypermedia links, which could include:
	* A temporary request queue URI where the status of the operation may be obtained via some temporary identifier. Clients SHOULD make an HTTP `GET` request to obtain the status of the operation which MAY include such information as completion state, ETA, and final URI once it is completed.
       
    `{ "rel": "self", "href": "/v1/queue/requests/{request_id}, "method": "GET" }"`


**_APIs that support both synchronous and asynchronous processing for an URI_:**

APIs that support both synchronous and asynchronous operations for a particular URI and an HTTP method combination, MUST recognize the [`Prefer`](index.md#http-standard-headers) header and exhibit following behavior:

* If the request contains a `Prefer=respond-async` header, the service MUST switch the processing to asynchronous mode. 
* If the request doesn't contain a `Prefer=respond-async` header, the service MUST process the request synchronously.

It is desirable that all APIs that implement asynchronous processing, also support [webhooks](https://en.wikipedia.org/wiki/Webhook) as a mechanism of pushing the processing status to the client.


<h2 id="controller-resource">Controller Resources</h2>

Controller (aka Procedural) resources challenge the fundamental notion or concept of [resource](index.md#resource) orientation where resources usually represent mapping to a conceptual set of entities or things in a domain system. However, often API developers come across a situation where they are unable to model a service executing a business process or a part of a business process as a pure RESTful service. Some examples of use cases for controller resources are:

* When it is required to execute a processing function on the server from a set of inputs (client provided input or based on data from the server's information store or from an external information store).
* When it is required to combine one or more operations and execute them in an [atomic](https://en.wikipedia.org/wiki/Atomicity_(database_systems)) fashion (aka a composite controller operation).
* When you want to hide a multi-step business process operation from a client to avoid unnecessary coupling between a client and server.

#### Risks

* Design scalability
	* When overused, the number of URIs can grow very quickly, as all permutations of root-level action can increase rapidly over time. This can also produce configuration complexity for routing/externalization.
	* The URI cannot be extended past the action, which precludes any possibility of sub-resources.
* Testability: highly compromised in comparison to [Collection Resource](#collection-resource)-oriented designs (due the lack of corresponding `GET`/read operations).
* History: the ability to retrieve history for the given actions is forced to live in another resource (e.g. `/action-resource-history`), or not at all.

#### Benefits

* Avoids corrupting collection resource model with transient data (e.g. comments on state changes etc).
* Usability improvement: there are cases where a complex operation simplifies client interaction, where the client does not benefit from resource retrieval.


For further reading on `controller` concepts, please refer to section 2.6 of the [RESTful Web Services Cookbook][4].


Below are the set of guidelines for modelling controller resources.


#### Naming Of A Controller Resource

Because a controller operation represents an action or a processing function in the server, it is more intuitive to express it using an English verb, i.e. the action itself as the resource name. Verbs such as 'activate', 'cancel', 'validate', 'accept', and 'deny' are usual suspects. 

There are many styles that you can use to define a controller resource. You can use one of the following styles when defining a controller resource.

* If the controller action is not associated with any resource context, you can express it as an independent resource at the namespace level (`/v1/credit/assess-eligibility`). This is typically only applicable for creating a variety of resources in an optimized operation. It is usually an anti-pattern. 
* If the controller action is always in the context of a parent resource, then it should be expressed as a sub-resource (using a `/`) of the parent resource (e.g. `v1/identity/external-profiles/{id}/confirm`).
* When an action is in the context of a collection resource, express it as an independent resource at the namespace level. The controller resource name in such cases SHOULD be composed of the action (an English verb) that the controller represent and  the name of the collection resource. For example, if you want to express a search operation for deposits, the controller resource SHOULD read as `v1/customer/search-deposits`. 

**Note:** A controller action is a terminal resource. A sub-resource for a controller resource is thus invalid. For the same reason, you SHOULD never define a sub-resource to a controller resource. It is also important to scope a controller to the minimum possible level of nesting in order to avoid resource pollution as such resources are use case or action centric.


#### HTTP Methods For Controller Resources

In general, for most cases the HTTP `POST` method SHOULD be used as the default method for executing a controller operation. 

In scenarios where it is desired that the response of a controller operation be cache-able, `GET` SHOULD be used to execute the controller. For example,you can use a `GET` operation (`GET /calculate-shortest-path?from=x &to=y`) to calculate the shortest path between two nodes (origin and destination). The result of the `GET` operation is a collection of routes and their maps so you would like to cache the map for future use (`GET /retrieve`).

#### HTTP Status Codes For Controller Resources

In general, the following response codes can be used for a controller operation.

`200`- This is the default status code for any controller operation. The response MUST contain a body that describes the result of a controller operation.

`201`- If the controller operation leads to creation of a resource. If a composite controller is used to create one or more resources and it is not possible to expresss them as a composite record, you MAY instead use `200` as response code.

`204`- If the server declines to return anything as part of a controller action (Most of the out-of-band actions fall in this category. e.g. `v1/users/{id}/notify`).

For errors, appropriate `4XX` or `5XX` error codes MAY be returned.


Following sections provide some examples for modeling of controller resources to carry out various kinds of complex operations.

<h4 id="complex-operation-sub-resource">Complex Operation - Sub-Resource</h4>

*NOTE: Use with caution*

*For associated risks, see [Controller Resource](#controller-resource) above*

There are often situations in which a canonical resource needs to impart certain actions or state changes which are not appropriate in a `PUT` or `PATCH`. These URIs look like other Sub-Resources, but imply action.

A good use for this pattern is when a particular state change requires a "comment" (e.g. cancellation "reason"). Adding this comment, or other data such as location, would make the  `GET`/`PUT` unnecessarily include those extra fields on every request/response. This action may change the status of the given resource implicitly.

Additionally, when a resource identifier is required for an action, it's best to keep it in the URL. Some actions are business processes which are not innately a resource (and in some cases might not even change resource state). 

The response is typically `200 OK` and the resource itself, if there are changes expected in the resource the consumer needs to capture. However, if no resource state change occurs, `204 No Content` and no response body could also be considered appropriate.

##### URI Template
	POST /{version}/{namespace}/{resource}/{resource-id}/{complex-operation}

###### Example Request
```
POST /v1/payments/billing-agreements/I-0LN988D3JACS/suspend
{
    "note": "Suspending the agreement."
}
```

###### Example Response
```
204 No Content
```  
  
However, when state changes are imparted in this manner, it does not mean that all state changes for the given resource should use a complex operation. Simple state transitions (i.e. changes to a `status` field) should still utilize `PUT`/`PATCH`. It is completely appropriate to mix patterns using `PUT`/`PATCH` on a [Collection Resource](#collection-resource) + Complex Operation, as to minimize the number of operations.

###### Example Request (for mixed use of `PUT`)
```
PATCH /v1/payments/billing-agreements/I-0LN988D3JACS
[
    {
        "op": "replace",
        "path": "/",
        "value": {
            "description": "New Description",
            "shipping_address": {
                "line1": "2065 Hamilton Ave",
                "city": "San Jose",
                "state": "CA",
                "postal_code": "95125",
                "country_code": "US"
            }
        }
    }
]
```

Keep in mind that if there is any need to see the history of these actions, a [Sub-resource Collection](#sub-resource-collection) is appropriate to show all of the prior executions of this action. In that case, the verb should be [_reified_](http://en.wikipedia.org/wiki/Reification_(computer_science)'), or changed to a plural noun (e.g. 'execute' would become 'executions').

<h4 id="complex-operation-composite">Complex Operation - Composite</h4>

This type of complex operation creates/updates/deletes multiple resources in one operation. This serves as both a performance and usability optimization, as well as adding better atomicity when values in the request might affect multiple resources at the same time. 

Note in the sample below, the capture and the payment are both potentially affected by refund. A `PUT` or `PATCH` operation on the capture resource would have unintended side effects on the payment resource. To encapsulate both of these changes, the 'refund' action is used.

##### URI Template
    POST /{version}/{namespace}/{action}

##### Example Request
```
POST /v1/payments/captures/{capture-id}/refund
```
##### Example Response
```
{
    "id": "0P209507D6694645N",
    "create_time": "2013-05-06T22:11:51Z",
    "update_time": "2013-05-06T22:11:51Z",
    "state": "completed",
    "amount": {
        "total": "110.54",
        "currency": "USD"
    },
    "capture_id": "8F148933LY9388354",
    "parent_payment": "PAY-8PT597110X687430LKGECATA",
    "links": [
        {
            "href": "https://api.foo.com/v1/payments/refund/0P209507D6694645N",
            "rel": "self",
            "method": "GET"
        },
        {
            "href": "https://api.foo.com/v1/payments/payment/PAY-8PT597110X687430LKGECATA",
            "rel": "parent_payment",
            "method": "GET"
        },
        {
            "href": "https://api.foo.com/v1/payments/capture/8F148933LY9388354",
            "rel": "capture",
            "method": "GET"
        }
    ]
}
```

<h4 id="complex-operation-transient">Complex Operation - Transient</h4>

This type of complex operation does not maintain state for the client, and creates no resources. This is about as RPC as it gets; other alternatives should be considered first. 

This is not usually utilized in sub-resources, as a sub-resource action would typically affect the parent resource.

HTTP status `200 OK` is always appropriate. Response body
contains calculated values, which could potentially change if run again.

As with all actions, [resource-oriented alternatives](##controller-alternative) should be considered first.

##### URI Template
    POST /{version}/{namespace}/{action}
##### Example Request
	POST /v1/risk/evaluate-payment
	{
		"code": "h43j5k6iop"
	}
###### Example Response
	200 OK
	{
		"status": "VALID"
	}

<h4 id="complex-operation-search">Complex Operation - Search</h4>

When [Collection Resources](#collection-resource) are used, it is best to use query parameters on the collection to filter the set. However, there are some situations that demand a very complex search syntax, where query parameter filtering on a collection might present usability problems, or run up against theoretical query parameter length limitations.

In these situations, `POST` can be utilized with a request object to specify the search parameters. 

##### Pagination

Assuming pagination will be required with large response quantities, it is important to remember that the consumer will need to use `POST` on each subsequent page. As such, it's important to maintain paging in the query parameters (one of the rare exceptions where `POST` body + query parameters are utilized). 

Paging query parameters should follow the same conventions as in [Collection Resources](#pagination).

This allows for hypermedia links to provide `next`, `previous`, `first`, `last` page relationships with paging specified in the URL.

##### URI Template
	POST /{version}/{namespace}/{search-resource}
	
##### Example Request
	POST /v1/factory/widgets-search
	{
		"created_before":"1975-05-13",
		"status": "ACTIVE",
		"vendor": "Parts Inc."
	}
##### Example Response
	200 OK
	{
		"items": [
			<<lots of part objects here>>
		]
		"links": [
                {
                    "href": "https://api.sandbox.factory.io/v1/factory/widgets-search?page=2&page_size=10",
                    "rel": "next",
                    "method": "POST"
                },
				{
                    "href": "https://api.sandbox.factory.io/v1/factory/widgets-search?page=124&page_size=10",
                    "rel": "last",
                    "method": "POST"
                },
		]
	}

<h2 id="controller-alternative">Resource-Oriented Alternative</h2>

A better pattern is to create a [Collection Resource](#collection-resource) of actions and provide a history of those actions taken in `GET /{actions}`. This allows for future expansion of use cases around a resource model, instead of a single action-oriented, RPC-style URL. 

Additionally, for various use cases, filtering the resource collection of historical actions is usually desirable. This also feeds well into [event sourcing](http://martinfowler.com/eaaDev/EventSourcing.html) concepts, where the history of a given event can drive further functionality.



<h2 id="file-uploads">File Upload</h2>

Certains types of API operations require uploading a file (e.g. jpeg, png, pdf) as part of the API call. Services for such use cases, MUST not support or allow encoding the file content within a JSON body using `Base64` encoding.

For uploading a file, one of the following options SHOULD be used.

<h4 id="fileuploads-two-step">Standalone Operation</h4>

Services supporting such an operation SHOULD provide a separate dedicated URI for uploading and retrieving the files. Clients of such services upload the files using the file upload URI and retrieve the file metadata as part of the response to an upload operation.    

Format of the file upload request SHOULD conform to `multipart/form-data` content type ([RFC 2388](https://www.ietf.org/rfc/rfc2388.txt)).

**Example of a** `multipart/form-data` **request**:

_The client first uploads the file using a file-upload URI provided by the service._


```

POST /v1/identity/limit-resolution-files

Content-Type: multipart/form-data; boundary=--foo_bar_baz
Authorization: Bearer YOUR_ACCESS_TOKEN_HERE
MIME-Version: 1.0

--foo_bar_baz
Content-Type: text/plain
Content-Disposition: form-data; name="title"

Identity Document
--foo_bar_baz
Content-Type: image/jpeg
Content-Disposition: form-data; filename="passport.jpg"; name="artifact"

...(binary bytes of the image)...
--foo_bar_baz--
```

**Sample file upload response:**

_If the file upload is successful, the server responds with the metadata of the uploaded file._ 

```
{
    "id": "file_egflf465vbk7468mvnb",
    "created_at": 748557607545,
    "size" : 3457689458369,
    "url" : "https://api.foo.com/v1/files/file_egflf465vbk7468mvnb"
    "type" : "image/jpeg" 
}      
```

The client can use the uploaded file's URI (received in the above response) for any subsequent operation that requires the uploaded file as shown below.

**Example Request**

```
POST /v1/identity/limits-resolutions
Host: api.foo.com
Content-Type: application/json
Authorization: Bearer oauth2_token

{
    ...
    "identity_document_reference" : "https://api.foo.com/v1/files/file_egflf465vbk7468mvnb"

}
```


<h4 id="fileuploads-one-step">As Attachment</h4>

This option SHOULD be used if you have to combine the uploading of a file with an API request body or parameters in one API request (e.g. for the purpose of optimization or to process both the file upload and request data in an atomic manner).

For such use cases, the request SHOULD either use content-type `multipart/mixed` or `multipart/related` ([RFC 2387](https://tools.ietf.org/html/rfc2387)). Following is an example of such a request.

**Example of a** `multipart/related` **request**:

_The first part in the below multipart request is the request metadata, while the second part contains the binary file content_

```
POST /v1/identity/limits-resolutions
Host: api.foo.com
Content-Type: multipart/related; boundary=--foo_bar_baz
Authorization: Bearer oauth2_token

--foo_bar_baz
Content-Type: application/json; charset=UTF-8

{
  ...
}

--foo_bar_baz
Content-Type: image/jpeg

[JPEG_DATA]
--foo_bar_baz--

```


<h1 id="hateoas-use-cases">HATEOAS Use Cases</h1>

This section describes various use cases where HATEOAS could be used. 

As a guiding principle, every API SHOULD strive for a single entry point. Any response from this entry point will have [HATEOAS](index.md#hateoas) links using which the client can navigate to all other methods on the same resource or releated resources and sub-resources. Following are different patterns for defining such an API entry point. 

<h4>Pattern 1: API with a top level entry point</h4>

For most APIs, there's a natural top level object or a collection which can be the resources addressed by the entry point. For example, the API defined in the previous section has a collection resource `/users` which can be the entry point URI.

<h4>Pattern 2: Entry point for complex controller style operations</h4>

A complex multi step operation always has a logical entry point. For example, you want to build an API for a credit application process that involves multiple steps- a create application step, consumer consent step (to sign, agree to terms and conditions), an approval step- the last step of a successful credit application.

* `/apply-credit` is the API's entry point. All other steps would be guided by the application create step in the from of links based on the captured data. For example a successful create application step would return the link to the next state of the application process `apply.sign`.
* An unsuccessful (application with incorrect data) MAY return only a link to send only the incorrect/missing data (e.g `PATCH` link). 


<h4>Pattern 3: API without a top level entry point</h4>

Consider an API that provides a set of independent controller style utility methods. For example, you want to build an identity API that provides the following utility methods.

   * generate OTP (one time password)
   * encrypt payload using a particular algorithm
   * decrypt the payload, link tokens

For such cases, the API MAY provide a separate resource `/actions` to return links to all resources that can be served by this API.

`GET /actions` in the above example would return links to other api methods (`/generate-otp`,`/encrypt`,`/decrypt`,`/link-tokens`).


<h2 id="collection-links">Navigating A Collection</h2>


For collection resources, a service MAY automatically provide paginated collection. Client can also specify its pagination preferences, if the query resultset is quite large. In such cases, the resultset is returned as a paginated collection with appropriate pagination related links. Client utilizes these links to navigate through the resultset back-and-forth. For more details on this linking pattern, please refer to [Pagination and HATEOAS links](#page-navigation).


<h2 id="error-links">Error Resolution</h2>

There are often use cases where an API wants to provide additional context in case of error along with other error details (HTTP status code and error messages. See [Error Standards](errors.md#errors) for more). An API could return additional resource links to provide more hints on the error in order to resolve it.

Consider an example from the `/users` API where the user wants to update his address details.

**Request**:

```

PATCH /v1/users/ALT-JFWXHGUV7VI

{
    "address": {
        ...
    }
}

```

The service, however, finds that the user account is currently not active. So it responds with an error that update of this account is not possible given the current state. It also returns an HATEOAS link in the response to activate the user account.

**Response**:

```
HTTP/1.1 422 Unprocessable Entity
{  
    "name":"INVALID_OPERATION",
    "debug_id":"123456789",
    "message":"update to an inactive account is not supported",
    "links": [
        {
            "href": "https://api.foo.com/v1/customer/partner-referrals/ALT-JFWXHGUV7VI/activate",
            "rel": "activate",
            "method": "POST"
        }
    ]
}

```

The client can now prompt the user to first activate his account and then change his address details.

<h2 id="service-controlled-flow">Service-controlled Flow</h2>

In a complex business operation that has one or more sub business operations and business rules govern the state transitions at run-time, using HATEOAS links to describe or emit the allowed state transitions prevents clients from embedding the service-specific business logic into their code. Loose coupling or no coupling with server's business logic enables better evolvability for both client and server.

For example, an order can be cancelled when it is in a PENDING state. The order cannot be cancelled once it moves to a COMPLETED state. Following example shows how a service can use HATEOAS links to guide clients about next possible step(s) in business process.

<h3>Example: Pending Order</h3>

Order is in PENDING state so the services returns the `cancel` HATEOAS link.

###### Request

```
GET v1/checkout/orders/52181732T9513405D HTTP/1.1
Host: api.foo.com
Content-Type: application/json
Authorization: Bearer oauth2_token
```

###### Response

```
HTTP/1.1 200 OK
Content-Type: application/json
{
    "payment_details":{
        ...
    },
    "status":"PENDING",
    "links":[
        {
            "rel": "self",
            "href": "https://api.foo.com/v1/checkout/orders/19S86694A9334040A",
            "method": "GET"
        },
        {
            "rel": "cancel",
            "href": "https://api.foo.com/v1/checkout/orders/19S86694A9334040A/cancel",
            "method": "POST"
        }
     ]
}
```

<h3>Example: Completed Order</h3>

Order is in COMPLETED state so the services does not return the `cancel` link anymore.

###### Request

```
GET v1/checkout/orders/52181732T9513405D HTTP/1.1
Host: api.foo.com
Content-Type: application/json
Authorization: Bearer oauth2_token
```

###### Response

```
HTTP/1.1 200 OK
Content-Type: application/json
{
    "payment_details":{
        ...
    },
    "status":"COMPLETED",
    "links":[
        {
            "rel": "self",
            "href": "https://api.foo.com/v1/checkout/orders/19S86694A9334040A",
            "method": "GET"
        }
     ]
}
```     
     
Note: The service MAY decide to support cancellation of orders (for orders with COMPLETED status) in some countries in future but that does not require the client to change anything in its code. All that a client knows or has coded when it first integrated with the service is the request body that is required to `cancel` an order.



<h2 id="hateoas-asynchronous-operations">Asynchronous Operations</h2>

When an operation is carried out asynchronously, it is important to provide relevant links to client so that the client can find out more details about the operation such as finding out status or perform get, update and delete operations. Please refer to [Asynchronous Operations](#asynchronous-operations) to find how the HATEOAS links could be used in response of an asynchronous operation.


<h2 id="saving-bandwidth">Saving Bandwidth</h2>

Some services always return very large response because of the nature of the domain they address. APIs of such services are sometimes referred as `Composite` APIs (they accumulate data from various sources or an aggregate of more than one services). For such APIs, sending the entire response drastically impacts performance of the API consumer, API server and the underlying network. In such cases, the client can ask the service to return partial representation using [`Prefer: return=minimal`](index.md#http-standard-headers) HTTP header. A service could send response with relevant HATEOAS links with minimal data to improve the performance. 




<h1 id="bulk-operations">Bulk Operations</h1>

This section describes guidelines for handling bulk calls in APIs. There are two different methods that you could use for bulk processing.

* **Homogeneous:** operation involves request and response payload representing collection of resources of the same type. Same operation is applied on all items in the collection.

* **Heterogeneous:** operation involves a request and response payloads that contain one or more requests and reponse payloads respectively. Each nested request and response represents an operation on a specific type of resource. However, the container request and response have one or more operations operating on one or more types of resources. It is recommended to use a public domain standard such as *[OData Batch Specification] [1]* in such cases.

This section only addresses bulk processing of payloads using the homogenous method.



<h2 id="bulk-request-format">Request Format</h2>

Each bulk request is a single HTTP request to one target API endpoint. This example illustrates a bulk add operation. 

**Example Request:**

```
POST /v1/devices/cards HTTP/1.1
Host: api.foo.com
Content-Length: total_content_length

{
	...

  	"items": [
	{
		"account_number": "2097094104180012037",
		"address_id": "466354",
		"phone_id": "0",
		"first_name": "M",
		"last_name": "Shriver",
		"primary_card_holder": false
	},
 	{
		"account_number": "2097094104180012047",
		"address_id": "466354",
		"phone_id": "0",
		"first_name": "M",
		"last_name": "Shriver",
		"primary_card_holder": false
	},
 	{
		"account_number": "2097094104180012023",
		"address_id": "466354",
		"phone_id": "0",
		"first_name": "M",
		"last_name": "Shriver",
		"primary_card_holder": false
	}
	]
}
```


<h2 id="bulk-response">Response Format</h2>

The response usually contains the status of each item. Failure of an individual item is described using *[Error Handling Guidelines](index.md#sampleresponse-bulk)* for an individual item. Given below is such an example.

**Example Response:**

```
HTTP/1.1 200 OK

{
  ...
  
  "batch_result":[
	{
		… <Success_body>
	},
	{ 
  		"name": "VALIDATION_ERROR",
   		"details": [
   		    {
   		        "field": "#/credit_card/expire_month",
   		        "issue": "Required field is missing",
   		        "location": "body"
   		    }
   		],
   		"debug_id": "123456789",
   		"message": "Invalid data provided",
   		"information_link": "http://developer.foo.com/apidoc/blah#VALIDATION_ERROR"
	},

	{ 
   		"name": "VALIDATION_ERROR",
   		"details": [
   		    {
       	                "field":"#/credit_card/currency",
                        "value":"XYZ",
                        "issue":"Currency code is invalid",
                        "location":"body"
                    }
   		],
   		"debug_id": "123456789",
   		"message": "Invalid data provided",
   		"information_link": "http://developer.foo.com/apidoc/blah#VALIDATION_ERROR"
	}
 ]
}
```

If the API supports atomic semantics to processing requests, there would be a single response code for the entire request with one or more errors as applicable.


**Example Response:**

**Note**: 

```
HTTP/1.1 400 Bad Request

{ 
   "name": "VALIDATION_ERROR",
   "details": [
      {
         "field": "#/credit_card/currency",
         "value": "XYZ",
         "issue": "Currency code is invalid",
         "location": "body"
      }
   ],
   "debug_id": "123456789",
   "message": "Invalid data provided",
   "information_link": "http://developer.foo.com/apidoc/blah#VALIDATION_ERROR"
}
]
```

<h2 id="bulk-other">Replace And Update</h2>

Similar to bulk add, a service can support bulk update operation (replace using HTTP `PUT` or partial update using `PATCH`). This is possible provided the bulk add request also creates a first-class resource (e.g. a batch resource) that is uniquely identifiable using an id and returned to the client. The subsequent update operations could then use this id and perform updates on constituent elements of the batch as if an update is performed on a single resource. 

For bulk replace and update operations, every effort should be made to make the execution atomic (all or nothing semantics). When it is not possible to make it so, the response should be similar to the partial response of bulk add operation described in the previous section. 


<h2 id="bulk-status-code">HTTP Status Codes And Error Handling</h2>

Tne following guidelines describe HTTP status code and error handling for bulk operations.

* If atomicity is supported (all or nothing), use the regular REST API standards for error handling as there would be only one response code.
* To support partial failures, you MUST return `200 OK` as the overall bulk processing status with individual status of each bulk item. In case of an error while processing a bulk item, the error description MUST follow the Error Handling Guidelines.
* If asynchronous processing is supported, the API MUST return `202 Accepted` with a status URI for the client to monitor the request. The client may choose to ignore the status URI if it has registered itself with the API server for notification via webhooks.

<h2 id="bulk-correlation">Response-Request Correlation in Error Scenarios</h2>


For a failed item, you MAY use the *[JSON Pointer Expressions](#json-pointer-expression)* in the error response for that item using the `field` attribute of [`error.json`][2]. The caller can then map a response item's processing state to the exact request item in the original bulk request. Given below is an error response sample using the JSON Pointer Expressions.

**Error Response Sample:**

```

HTTP/1.1 200 OK

[
{
	… <Success_body>
},

{ 
   "name": "VALIDATION_ERROR",
   "details": [
      {
         "field": "/items/@account_number=='2097094104180012047'/address_id",
         "issue": "Invalid Address Id for the account",
         "location": "body"
      }
   ],
   "debug_id": "123456789",
   "message": "Invalid data provided",
   "information_link": "http://developer.foo.com/apidoc/blah#VALIDATION_ERROR"
},

{ 
   "name": "VALIDATION_ERROR",
   "details": [   
   {
       "field": "/items/@account_number=='2097094104180012023'/phone_id",
       "value": "XYZ",
       "issue": "Phone Id is invalid",
       "location": "body"
   }
   ],
   "debug_id": "123456789",
   "message": "Invalid data provided",
   "information_link": "http://developer.foo.com/apidoc/blah#VALIDATION_ERROR"
}
]

```

The alternative is to create a response that contains the processing status of each item **in the same order** as it was received in the original request. The failed item would be represented using `error.json` with appropriate value in the `field` attribute.

**Error Response Sample:**

```

HTTP/1.1 200 OK

[
{
	… <Success_body>
},

{ 
   "name": "VALIDATION_ERROR",
   "details": [
      {
         "field": "/items/0/address_id",
         "issue": "Invalid Address Id for the account",
         "location": "body"
      }
   ],
   "debug_id": "123456789",
   "message": "Invalid data provided",
   "information_link": "http://developer.foo.com/apidoc/blah#VALIDATION_ERROR"
},

{ 
   "name": "VALIDATION_ERROR",
   "details": [   
   {
       "field": "/items/2/phone_id",
       "value": "XYZ",
       "issue": "Phone Id is invalid",
       "location": "body"
   }
   ],
   "debug_id": "123456789",
   "message": "Invalid data provided",
   "information_link": "http://developer.foo.com/apidoc/blah#VALIDATION_ERROR"
}
]

```




<h3 id="other">Other Patterns</h3>

Designers of new services SHOULD refer to the [_RESTful Web Services Cookbook_][4] at Safari Books Online for other useful patterns.



[1]: http://www.odata.org/documentation/odata-version-3-0/batch-processing/ "OData Batch Specification"
[2]: v1/schema/json/draft-04/error.json "error.json"
[3]: https://tools.ietf.org/html/rfc6901 "JSON Pointer"
[4]: http://techbus.safaribooksonline.com/book/web-development/web-services/9780596809140 "RESTful Web Services Cookbook"
[5]: https://www.w3.org/TR/NOTE-datetime "ISO 8601 Date and Time Formats"
[6]: http://tools.ietf.org/html/rfc6902 "RFC 6902"
