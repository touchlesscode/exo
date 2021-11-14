Agile CRM REST API
=================

[Agile CRM] (https://www.agilecrm.com/) is a new breed CRM software with sales and marketing automation.

Table of contents
=================

**[Rest API implementation](#)**
  * [Java API](https://github.com/agilecrm/java-api)
  * [Python API](https://github.com/agilecrm/python-api)
  * [PHP API](https://github.com/agilecrm/php-api)
  * [.NET C# API](https://github.com/agilecrm/c-sharp-api)
  * [Node.js API](https://github.com/agilecrm/nodejs)
  * [Ruby on Rails API](https://github.com/agilecrm/ruby-on-rails)

**[Things to know](#things-to-know)**
  * [Authentication](#authentication-)
  * [API key](#api-key)
  * [Endpoints](#endpoints)

**[Contacts](#1-contacts---companies-api)**
  * [Contact & companie fields](#1-contacts---companies-api)
  * [Properties JSON](#properties-json)
  * [Contact JSON example](#contact-json-example)
  * [Properties JSON Complete Example](#properties-json-complete-example)
  * [Contact APIs](#11-listing-contacts-)
    * [1 Listing contacts](#11-listing-contacts-)
    * [2 Get contact by ID](#12-get-contact-by-id)
    * [3 Creating a contact](#13-creating-a-contact)
    * [4 Updating contact](#14-update-properties-of-a-contact-by-id-partial-update)
    * [5 Update lead score by ID](#15-update-lead-score-by-id)
    * [6 Update star value by ID](#16-update-star-value-by-id)
    * [7 Update tags value by ID](#17-update-tags-value-by-id)
    * [8 Delete tags value by ID](#18-delete-tags-value-by-id)
    * [9 Delete single contact](#110-delete-single-contact)
    * [10 Search contact by email](#1101-search-contact-by-email)
      * [10.A Search contact by email](#1101-search-contact-by-email)
      * [10.B Search contact by email](#1102-search-contact-by-email)
    * [11 Search contacts/companies](#111-search-contactscompanies)
    * [12 Adding tags to a contact based on email](#112-adding-tags-to-a-contact-based-on-email)
    * [13 Delete tags to a contact based on email](#113-delete-tags-to-a-contact-based-on-email)
    * [14 Add score to a contact using email ID](#114-add-score-to-a-contact-using-email-id)
    * [15 Get tasks related to contact](#115-get-tasks-related-to-contact)
    * [16 Updating contact properties](#116-updating-contact-properties)
    * [17 Change contact owner](#117-change-contact-owner)
    * [18 Add contact to a campaign](#118-add-contact-to-a-campaign)
    * [19 Remove contact from a campaign](#119-remove-contact-from-a-campaign)
    * [20 Get contact by phone number](#120-get-contact-by-phone-number)
    * [21 Get contacts by dynamic filter](#121-get-contacts-by-dynamic-filter)
      * [21.A Get contacts by tag filter](#devapifiltersfilterdynamic-filter)
      * [21.B Get contacts by custom field](#devapifiltersfilterdynamic-filter-1)
  * [Company APIs](#21-creating-a-company)
    * [1 Creating a company](#21-creating-a-company)
    * [2 Updating a company](#22-updating-a-company)
    * [3 Get list of companies](#23-get-list-of-companies)
    * [4 Get company by id](#24-get-company-by-id)
    * [5 Delete single company](#25-delete-single-company)
 
**[Deals](#3-deals-api)**
  * [Deal fields](#3-deals-api)
  * [Deal JSON Example](#deal-json-example)
  * [Deal APIs](#21-listing-deals)
    * [1 Listing deals](#31-listing-deals)
    * [2 Get deal by its ID](#32-get-deal-by-its-id)
    * [3 Create deal](#33-create-deal)
    * [4 Partial update](#34-update-deal-partial-update)
    * [5 Create deal to a contact using email ID](#35-create-deal-to-a-contact-using-email-id)
    * [6 Delete deal](#36-delete-deal)
    * [7 Bulk delete](#37-bulk-delete)
    * [8 Get deals from default track grouped by milestones](#38-get-deals-from-default-track-grouped-by-milestones)
    * [9 Get deals for a particular drack (grouped by milestone)](#39-get-deals-for-a-particular-track-grouped-by-milestone)
    * [10 Get deals from particular track](#310-get-deals-from-particular-track)
    * [11 Get deals related to specific contact](#311-get-deals-related-to-specific-contact)
    * [12 Get deals of current user (my deals)](#312-get-deals-of-current-user-my-deals)
    * [13 Remove contacts of a deal](#313-remove-contacts-of-a-deal)

**[Notes](#4-notes-api)**
  * [Note fields](#3-notes-api)
  * [Note APIs](#21-listing-deals)
    * [1 Create a note and relate that to contacts](#41-create-a-note-and-relate-that-to-contacts-)
    * [2 Add note to a contact using email ID](#42-add-note-to-a-contact-using-email-id)
    * [3 Gets notes related to specific contact](#43-gets-notes-related-to-specific-contact-)
    * [4 Delete a specific note from specific contact](#44-delete-a-specific-note-from-specific-contact-)
    * [5 Create note to a deal](#45-create-note-to-a-deal)
    * [6 Update note to a deal](#46-update-note-to-a-deal)
    * [7 Gets notes related to specific deal](#47-gets-notes-related-to-specific-deal-)
    * [8 Delete notes from specific deal](#48-delete-notes-from-specific-deal-)

**[Tasks](#5-tasks-api)**
  * [Task fields](#5-tasks-api)
  * [Task APIs](#51-get-the-list-of-pending-tasks)
    * [1 Get the list of pending tasks depending on the number of pending days](#51-get-the-list-of-pending-tasks-depending-on-the-number-of-pending-days)
    * [2 Get the list of tasks based on given filters](#52-get-the-list-of-tasks-based-on-given-filters)
    * [3 Get the task based on ID](#53-get-the-task-based-on-id)
    * [4 Create a task](#54-create-a-task)
    * [5 Create a task based on Contact email](#55-create-a-task-based-on-contact-email)
    * [6 Update a task (Partial update)](#56-update-a-task-partial-update)
    * [7 Delete a task based on ID](#57-delete-a-task-based-on-id)

**[Events](#6-events-api)**
  * [Event fields](#6-events-api)
  * [Event APIs](#61-get-list-of-events)
    * [1 Get list of events](#61-get-list-of-events)
    * [2 Get events related to contact](#62-get-events-related-to-contact)
    * [3 Create event](#63-create-event)
    * [4 Update event](#64-update-event)
    * [5 Delete an event](#65-delete-an-event)

**[Track / Milestones](#7-track--milestones-api)**
  * [Track fields](#7-track--milestones-api)
  * [Track / Milestones APIs](#71-get-all-the-tracks)
    * [1 Get all the tracks](#71-get-all-the-tracks)
    * [2 Create a track](#72-create-a-track)
    * [3 Update a track](#73-update-a-track)
    * [4 Delete a Track](#74-delete-a-track)

**[Campaigns](#8-list-of-campaigns)**
  * [List of campaigns](#8-list-of-campaigns)

**[Video references](#9-youtube-links-for-rest-apis)**
  * [Create contact test](#create-contact)
  * [Update contact test](#update-contact)
  * [Update tag by ID test](#update-tag-by-id)
  * [Create deal test](#create-deal)
  * [Get list of contacts example 1](#get-list-of-contact-example-1)
  * [Get list of contacts example 2](#get-list-of-contact-example-2)


Things to know:
---------------

###Authentication :
This is an HTTPS-only API. Authentications are performed based on the email address of the user and the respective API Key.

The Email and API key should pass basic HTTP Authentication. For this, use email address as the username and the respective API Key as the password)

###API Key
- You may access the API Key from Admin Settings -> API & Analytics -> API Key
- Use the first one (API Key for REST client) for all the REST API calls.

![Finding API Key, domain and email] (https://raw.githubusercontent.com/agilecrm/rest-api/master/api/AgileCRMapi.png)

###Endpoints:
All API requests should be made to: https://{domain}.agilecrm.com/dev/

Note: All data is case-sensitive. Emails, names and other values are case sensitive. For example, "Test" and "test" are considered two different words.

1. Contacts  & companies API
-----------------------------
|Field Name|Description|Value Type|Read-Only|Mandatory|Accepted values|
|:----------|:-----------|:------|:------|:----------|:----------|
|id|Unique id is generated  when contact is created|Long|Yes|Yes, to update and delete calls.|N/A|
|type|Type distinguishes a contact and a company.|String|No|No.|Defaults to "PERSON" if not mentioned."PERSON" or "COMPANY"|
|tags|Unique identifiers added to contact, for easy management of contacts. This is not applicable for companies.|List|no|no| Tag name should start with an alphabet and can not contain special characters other than underscore and space.|
|lead_score|Score of contact. This is not applicable for companies.|Integer|no|no|Any positive integer|
|contact_company_id|This field should only be added in the Contact object to specify that the contact works for the given company.|Long|No|No|Company ID can be provided here. Only long values are accepted.|
|star_value|Rating of contact (Max value 5). This is not applicable for companies.|Short|no|no|0 to 5|
|properties|Contact properties are represented by list of JSON objects, each JSON object should follow the prototype shown.  Custom fields will have type as CUSTOM and others will have type as SYSTEM.|List of JSON objects|no|first_name is mandatory|
|campaignStatus|Information about campaigns running on a contact, like name, status, start time, end time of campaign|List of JSONObjects|Yes|Only if this contact has campaigns|N/A|
|unsubscribeStatus|Information about the campaign from which the contact is unsubscribed.|List of JSONObjects|Yes|Only if this contact has campaigns|N/A|
|emailBounceStatus|Information about the email bounce and spam while running the campaign|List of JOSNObjects|Yes|Only if this conatct has campaigns|N/A|

###Properties JSON:

|Field Name|Description|Value Type|Read-Only|Mandatory|Accepted values|
|:----------|:-----------|:------|:------|:----------|:----------|
|name|Name of the field.|String|No|Yes|Any string|
|type|Type of the field (Whether it is system defined field or custom field).|String|No|Yes|SYSTEM or CUSTOM|
|subtype|Sub type of the field.Only SYSTEM properties like email will have the sybtypes.|String|No|No|The value of this field depends up on the property name.|
|value|Value of the property.|String|No|No|Any String.|

The below are the subtypes for respective property fields.

|Name|Type|Syb types|
|:-----|:------|:--------------|
|email|SYSTEM|work,personal|
|phone|SYSTEM|work,home,mobile,main,home fax,work fax,other|
|address|SYSTEM|home,postal,office|
|website|SYSTEM|URL,SKYPE,TWITTER,LINKEDIN,FACEBOOK,XING,FEED,GOOGLE_PLUS,FLICKR,GITHUB,YOUTUBE|

Note: There will be subtypes for custom fields. User should specify the above mentioned subtype for those respective properties only.

###Properties JSON Complete Example:
```javascript
"properties": [
        {
            "name": "Text field test",
            "type": "CUSTOM",
            "value": "I am text field test."
        },
        {
            "name": "Text Area Test",
            "type": "CUSTOM",
            "value": "I am text area field test. I am CEO of Uptake Technologies. I like Agile Chrome Extension. You can add leads from LinkedIn, Twitter, Facebook, Gmail etc."
        },
        {
            "name": "Date of Joining",
            "type": "CUSTOM",
            "value": 1279132200
        },
        {
            "name": "Please select checkbox to accept term and condition",
            "type": "CUSTOM",
            "value": "on"
        },
        {
            "name": "Please select one product from list",
            "type": "CUSTOM",
            "value": "tomato"
        },
        {
            "name": "Please add what are the companies you worked",
            "type": "CUSTOM",
            "value": "[\"5694691248963584\",\"5646962099486720\"]"
        },
        {
            "type": "SYSTEM",
            "name": "first_name",
            "value": "Brad"
        },
        {
            "type": "SYSTEM",
            "name": "last_name",
            "value": "Keywell"
        },
        {
            "type": "SYSTEM",
            "name": "image",
            "value": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkpAAAAJDY4ZDg2OTU3LTVhOTAtNGRlOC1hNjAxLTgwNGUyMzc0MDc2Mg.jpg"
        },
        {
            "type": "SYSTEM",
            "name": "company",
            "value": "Uptake Technologies"
        },
        {
            "type": "SYSTEM",
            "name": "title",
            "value": "‎Co-Founder and CEO"
        },
        {
            "name": "email",
            "value": "brad.keywell@yopmail.com",
            "subtype": "work"
        },
        {
            "name": "phone",
            "value": "8888888888",
            "subtype": "work"
        },
        {
            "name": "website",
            "value": "https://www.linkedin.com/in/bradkeywell",
            "subtype": "LINKEDIN"
        },
        {
            "name": "website",
            "value": "https://www.youtube.com/watch?v=8-zQMprfDgE",
            "subtype": "YOUTUBE"
        },
        {
            "name": "address",
            "value": "{\"address\":\"Motor City 120 street\",\"city\":\"Detroit\",\"state\":\"Michigan\",\"zip\":\"48201\",\"country\":\"US\",\"countryname\":\"United States\"}"
        }
    ]
```

###Contact JSON example

```javascript
{
    "id": "5629585249009664",
    "type": "PERSON",
    "created_time": "1469170109",
    "updated_time": 1469764466,
    "last_contacted": 0,
    "last_emailed": 0,
    "last_campaign_emaild": 0,
    "last_called": 0,
    "viewed_time": 0,
    "viewed": {
        "viewed_time": 1469764498855,
        "viewer_id": 6263975862861824
    },
    "star_value": 4,
    "lead_score": 5,
    "tags": [],
    "tagsWithTime": [
        {
            "tag": "dummyTestTag",
            "createdTime": 1469510469602,
            "availableCount": 0,
            "entity_type": "tag"
        }
    ],
    "properties": [
        {
            "name": "Text field test",
            "type": "CUSTOM",
            "value": "I am text field test."
        },
        {
            "name": "Text Area Test",
            "type": "CUSTOM",
            "value": "I am text area field test. I am CEO of Uptake Technologies. I like Agile Chrome Extension. You can add leads from LinkedIn, Twitter, Facebook, Gmail etc."
        },
        {
            "name": "Date of Joining",
            "type": "CUSTOM",
            "value": 1279132200
        },
        {
            "name": "Please select checkbox to accept term and condition",
            "type": "CUSTOM",
            "value": "on"
        },
        {
            "name": "Please select one product from list",
            "type": "CUSTOM",
            "value": "tomato"
        },
        {
            "name": "Please add what are the companies you worked",
            "type": "CUSTOM",
            "value": "[\"5694691248963584\",\"5646962099486720\"]"
        },
        {
            "type": "SYSTEM",
            "name": "first_name",
            "value": "Brad"
        },
        {
            "type": "SYSTEM",
            "name": "last_name",
            "value": "Keywell"
        },
        {
            "type": "SYSTEM",
            "name": "image",
            "value": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkpAAAAJDY4ZDg2OTU3LTVhOTAtNGRlOC1hNjAxLTgwNGUyMzc0MDc2Mg.jpg"
        },
        {
            "type": "SYSTEM",
            "name": "company",
            "value": "Uptake Technologies"
        },
        {
            "type": "SYSTEM",
            "name": "title",
            "value": "Co-Founder and CEO"
        },
        {
            "name": "email",
            "value": "brad.keywell@yopmail.com",
            "subtype": "work"
        },
        {
            "name": "phone",
            "value": "8888888888",
            "subtype": "work"
        },
        {
            "name": "website",
            "value": "https://www.linkedin.com/in/bradkeywell",
            "subtype": "LINKEDIN"
        },
        {
            "name": "website",
            "value": "https://www.youtube.com/watch?v=8-zQMprfDgE",
            "subtype": "YOUTUBE"
        },
        {
            "name": "address",
            "value": "{\"address\":\"Motor City 120 street\",\"city\":\"Detroit\",\"state\":\"Michigan\",\"zip\":\"48201\",\"country\":\"US\",\"countryname\":\"United States\"}"
        }
    ],
    "campaignStatus": [],
    "entity_type": "contact_entity",
    "contact_company_id": "5649189358796800",
    "unsubscribeStatus": [],
    "emailBounceStatus": [],
    "formId": 0,
    "owner": {
        "id": 6263975862861824,
        "domain": "ghanshyam",
        "email": "ghanshyam.raut@agilecrm.com",
        "name": "Ghanshyam",
        "pic": "https://d1gwclp1pmzk26.cloudfront.net/img/gravatar/25.png",
        "schedule_id": "Ghanshyam",
        "calendar_url": "https://ghanshyam.agilecrm.com/calendar/Ghanshyam",
        "calendarURL": "https://ghanshyam.agilecrm.com/calendar/Ghanshyam"
    }
}
```

##1.1 Listing contacts :  
###dev/api/contacts 
Method: GET

- returns list of contacts in domain which are ordered by creation time.

For the Response in the Json format, add the header 'Accept' as application/json. By default, the response will be in XML format. Paging can be applied using the page_size and cursor query parameters. Count of the contacts will be in the first contact and Cursor for the next page will be in the last contact of the list. If there is no cursor, it means that it is the end of list.


###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts?page_size=20&cursor=E-ABAIICNGoRc35hZ2lsZS1jcm0tY2xvdWRyFAsSB0NvbnRhY3QYgICAgKLThAoMogEIcHJhYmF0aGuIAgAU \
-H "Accept : application/json" \
-v -u sample@agilecrm.com:123456 
```
####Example JSON response
```javascript
[
    {
        "id": 5073269292007424,
        "type": "PERSON",
        "created_time": 1445941332,
        "updated_time": 1451545213,
        "star_value": 0,
        "lead_score": 0,
        "tags": [
            "Sample based",
            "tag1",
            "tag3",
            "tag2"
        ],
        "tagsWithTime": [
            {
                "tag": "Sample based",
                "createdTime": 1449716452263,
                "availableCount": 0,
                "entity_type": "tag"
            },
            {
                "tag": "tag1",
                "createdTime": 1449716779882,
                "availableCount": 0,
                "entity_type": "tag"
            },
            {
                "tag": "tag3",
                "createdTime": 1449716997174,
                "availableCount": 0,
                "entity_type": "tag"
            },
            {
                "tag": "tag2",
                "createdTime": 1449716997174,
                "availableCount": 0,
                "entity_type": "tag"
            }
        ],
        "properties": [
            {
                "type": "CUSTOM",
                "name": "text sample test",
                "value": "text custom"
            },
            {
                "type": "CUSTOM",
                "name": "TeamNumbers",
                "value": "5"
            },
            {
                "type": "SYSTEM",
                "name": "first_name",
                "value": "April"
            },
            {
                "type": "SYSTEM",
                "name": "last_name",
                "value": "Woodlif"
            },
            {
                "type": "SYSTEM",
                "name": "email",
                "subtype": "",
                "value": "pinkpp@hotmail.com"
            },
            {
                "type": "SYSTEM",
                "name": "phone",
                "value": "6767678982"
            },
            {
                "type": "SYSTEM",
                "name": "phone",
                "subtype": "home",
                "value": "6767678982"
            }
        ]
    },
    {
        "cursor": "CjsSNWoRc35hZ2lsZS1jcm0tY2xvdWRyFAsSB0NvbnRhY3QYgICA8MTNhAkMogEJZ2hhbnNoeWFtGAAgAA",
        "id": 5086805955182592,
        "type": "PERSON",
        "created_time": 1448516471,
        "star_value": 4,
        "lead_score": 92,
        "tags": [
            "Lead",
            "Likely Buyer"
        ],
        "tagsWithTime": [
            {
                "tag": "Lead",
                "createdTime": 1448516471573,
                "availableCount": 0,
                "entity_type": "tag"
            },
            {
                "tag": "Likely Buyer",
                "createdTime": 1448516471573,
                "availableCount": 0,
                "entity_type": "tag"
            }
        ],
        "properties": [
            {
                "type": "SYSTEM",
                "name": "first_name",
                "value": "Los "
            },
            {
                "type": "SYSTEM",
                "name": "last_name",
                "value": "Bruikheilmer"
            },
            {
                "type": "SYSTEM",
                "name": "company",
                "value": "steady.inc"
            },
            {
                "type": "SYSTEM",
                "name": "title",
                "value": "VP Sales"
            },
            {
                "type": "SYSTEM",
                "name": "email",
                "subtype": "work",
                "value": "bruik@walt.ltd"
            },
            {
                "type": "SYSTEM",
                "name": "address",
                "value": "{\"address\":\"MIG-106\",\"city\":\"Hyderabad\",\"state\":\"Telangana\",\"zip\":\"500032\",\"country\":\"India\"}"
            },
            {
                "type": "CUSTOM",
                "name": "My Custom Field",
                "value": "Custom value"
            }
        ]
    }
]
```

###Other available responses:
- Status 200: Gives the above JSON object in above format.
- Status 204: There are no contacts in your account.
- Status 401: Unauthorised (when the user name and password fields are wrong.)

##1.2 Get contact by ID
###dev/api/contacts/{id}
Method: GET 

- Returns contact object which is associated with given id

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/{id} \
-H "Accept :application/json" \
-v -u sample@agilecrm.com:123456
```
###Example response

- Returns created contact object with all parameters in it as mentioned in the above example. 

###Other available responses:
- Status 200: Gives the above JSON object in above format.
- Status 204: No contact with the specified ID in your account.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##1.3 Creating a contact
###dev/api/contacts
Method: POST

Accepts contact JSON as post data along with the credentials of domain User (User name and API Key).

###Acceptable request Representation:
```javascript
{
    "star_value": "4",
    "lead_score": "92",
    "tags": [
        "Lead",
        "Likely Buyer"
    ],
    "properties": [
        {
            "type": "SYSTEM",
            "name": "first_name",
            "value": "Samson"
        },
        {
            "type": "SYSTEM",
            "name": "last_name",
            "value": "Nolan"
        },
        {
            "type": "SYSTEM",
            "name": "email",
            "subtype": "work",
            "value": "samson@walt.ltd"
        },
        {
            "type": "SYSTEM",
            "name": "address",
            "value": "{\"address\":\"225 George Street\",\"city\":\"NSW\",\"state\":\"Sydney\",\"zip\":\"2000\",\"country\":\"Australia\"}"
        },
        {
            "name": "phone",
            "value": "8888888889",
            "subtype": "work"
        },
        {
            "name": "phone",
            "value": "8888888889",
            "subtype": "home"
        },
        {
            "name": "website",
            "value": "www.youtube.com",
            "subtype": "YOUTUBE"
        },
        {
            "name": "website",
            "value": "www.linkedin.com",
            "subtype": "LINKEDIN"
        },
        {
            "name": "website",
            "value": "www.mywebsite.com",
            "subtype": "URL"
        },
        {
            "name": "My custom field of type text",
            "type": "CUSTOM",
            "value": "My name is ghanshyam"
        },
        {
            "name": "My custom field of type date",
            "type": "CUSTOM",
            "value": 1479580200
        },
        {
            "name": "My custom field of type checkbox",
            "type": "CUSTOM",
            "value": "on"
        },
        {
            "name": "My custom field of type list",
            "type": "CUSTOM",
            "value": "lemon"
        },
        {
            "name": "My custom field of type companies",
            "type": "CUSTOM",
            "value": "[\"5767466600890368\",\"5114076984246272\",\"5746725247516672\"]"
        }
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "star_value": "4",
    "lead_score": "92",
    "tags": [
        "Lead",
        "Likely Buyer"
    ],
    "properties": [
        {
            "type": "SYSTEM",
            "name": "first_name",
            "value": "Samson"
        },
        {
            "type": "SYSTEM",
            "name": "last_name",
            "value": "Nolan"
        },
        {
            "type": "SYSTEM",
            "name": "email",
            "subtype": "work",
            "value": "samson@walt.ltd"
        },
        {
            "type": "SYSTEM",
            "name": "address",
            "value": "{\"address\":\"225 George Street\",\"city\":\"NSW\",\"state\":\"Sydney\",\"zip\":\"2000\",\"country\":\"Australia\"}"
        }
    ]
}' \
-v -u sample@agilecrm.com:123456 -X POST
```

###Response:
- Status 200: Contact added successfully. Returns the newly added contact object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.
- Status 406: If the limit of the contacts is exceeded.

##1.4 Update properties of a contact by ID (partial update)
###dev/api/contacts/edit-properties
Method: PUT 


We can update  required property fields of the contact using this call. It is used to add the new property or update the existing property. It accepts property object of contact with valid parameter in it. We need to send the Contact-Id of the contact to identify it. This will not affect other fields.

Using this API you can not delete properties.If subtype is same for phone,website or email then value can be overridden.
Lead score, star value and tags can not be updated using this API. follow the below API for editing lead score,star value and tags.

###Acceptable request representation:
```javascript
{
    "id": "5676477903273984",
    "properties": [
        {
            "type": "SYSTEM",
            "name": "first_name",
            "value": "Samson"
        },
        {
            "type": "SYSTEM",
            "name": "last_name",
            "value": "Nolan"
        },
        {
            "type": "SYSTEM",
            "name": "email",
            "subtype": "work",
            "value": "samson@walt.ltd"
        },
        {
            "type": "SYSTEM",
            "name": "address",
            "value": "{\"address\":\"225 George Street\",\"city\":\"NSW\",\"state\":\"Sydney\",\"zip\":\"2000\",\"country\":\"Australia\"}"
        }
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/edit-properties \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "id": "5725836472745984",
    "properties": [
        {
            "type": "SYSTEM",
            "name": "first_name",
            "value": "Santar"
        }
    ]
}' \
-v -u sample@agilecrm.com:123456 -X PUT
```

###Response:
- Status 200: Contact updated successfully. Returns the updated contact object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##1.5 Update lead score by ID
###dev/api/contacts/edit/lead-score
Method: PUT 


We can update lead score of a contact using this call. It accepts lead score and contact id of contact with valid parameter. We need to send the Contact-Id of the contact to identify it. This will not affect other fields.

###Acceptable request representation:
```javascript
{
    "id": "5676477903273984",
    "lead_score": 20
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/edit/lead-score \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "id": "5725836472745984",
    "lead_score": 150
}' \
-v -u sample@agilecrm.com:123456 -X PUT
```

###Response:
- Status 200: Lead score updated successfully. Returns the updated contact object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##1.6 Update star value by ID
###dev/api/contacts/edit/add-star
Method: PUT 


We can update star value of a contact using this call. It accepts star value and contact id of contact with valid parameter. We need to send the Contact-Id of the contact to identify it. This will not affect other fields.

###Acceptable request representation:
```javascript
{
    "id": "5676477903273984",
    "star_value": 20
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/edit/add-star \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "id": "5725836472745984",
    "star_value": 2
}' \
-v -u sample@agilecrm.com:123456 -X PUT
```

###Response:
- Status 200: Star value updated successfully. Returns the updated contact object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##1.7 Update tags value by ID
###dev/api/contacts/edit/tags
Method: PUT 


We can add tag values of a contact using this call. It accepts tag values and contact id of contact with valid json format. We need to send the Contact-Id of the contact to identify it. This will not affect other fields.

###Acceptable request representation:
```javascript
{
    "id": "4584963487825920",
    "tags": [
        "test1",
        "test2"
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/edit/tags \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "id": "5725836472745984",
    "tags": [
        "test1",
        "test2"
    ]
}' \
-v -u sample@agilecrm.com:123456 -X PUT
```

###Response:
- Status 200: tags value added/updated successfully. Returns the updated contact object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##1.8 Delete tags value by ID
###dev/api/contacts/delete/tags
Method: PUT 


We can delete tag values of a contact or company using this call. It accepts tag values and contact id of contact with valid json format. We need to send the Contact-Id of the contact to identify it.This call searches for the contact based on the given contact id and searches for the given tag in the contact's tag list. If there is a match, then it deletes that tag. You can delete multiple tags.

###Acceptable request representation:
```javascript
{
    "id": "4584963487825920",
    "tags": [
        "test1",
        "test2"
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/delete/tags \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "id": "5725836472745984",
    "tags": [
        "test1",
        "test2"
    ]
}' \
-v -u sample@agilecrm.com:123456 -X PUT
```

###Response:
- Status 200: tags value deleted successfully. Returns the tag list in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##1.9 Delete single contact
###dev/api/contacts/{id}
Method: DELETE
- Deletes contact based on the id of the contact, which is  sent in request url path.
	
###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/{id}  \
-v -u {email}:{apikey} -X DELETE
```

###Response:
- Status 204: Contact deleted successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##1.10.1 Search contact by email
###dev/api/contacts/search/email/{email}
Method: GET 

- Returns contact object which is associated with given email

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/search/email/{email} \
-H "Accept :application/json" \
-v -u {email}:{apikey} -X GET
```
###Example response

- Returns created contact object with all parameters in it as mentioned in the above example. 

###Other available responses:
- Status 200: Gives the above JSON object in above format.
- Status 204: No contact with the specified phone number in your account.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##1.10.2 Search contact by email
###dev/api/contacts/search/email
Method: POST

- Searches for the contact with given email address. Email address should be sent as a form parameter (Content-Type: application/x-www-form-urlencoded ). We can search for multiple contacts using their Email-Ids. 

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/search/email -H "Accept: application/json" \
-H "Content-Type :application/x-www-form-urlencoded" \
-d 'email_ids=["samson@walt.ltd"]' \
-v -u sample@agilecrm.com:123456 -X POST
```

###Response:
- Status 200: Gives the Contact as JSON object in the above format. If email doesn’t match, it will return an empty object.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the email is in wrong format.

##1.11 Search contacts/companies 
###dev/api/search
Method: GET 

Parameters allowed are as below. All parameters are mandatory. 

-  ‘q'  - Search keyword (all contact/company default fields and <i>searchable</i> custom fields will be searched)

-  ‘page_size’  - Number of results to fetch

- 'type' - Should be 'PERSON' for searching Contacts and 'COMPANY' for Companies

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/search?q=ab&page_size=10&type="COMPANY" -H "Accept: application/json" -v -u {email}:{apikey}
```

###Response:
- Status 200: Gives the list of Companies/Contacts.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##1.12 Adding tags to a contact based on email:
###dev/api/contacts/email/tags/add
Method: POST

- Searches for the contact based on the given email address and adds the given tags to the contact. You can add multiple tags. Tags should be sent as an array. Email address (email) and tags (tags) array should be sent as a form parameter (Content-Type: application/x-www-form-urlencoded ).Tag name should start with an alphabet and can not contain special characters other than underscore and space.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/email/tags/add -H "Accept: application/json" \
-H "Content-Type :application/x-www-form-urlencoded" \
-d 'email=samson@walt.ltd&tags=["testingtesto"]' \
-v -u sample@agilecrm.com:123456 -X POST
```
###Response:
- Status 204: Tags added successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##1.13 Delete tags to a contact based on email:
###dev/api/contacts/email/tags/delete
Method: POST

- Searches for the contact based on the given email address and searches for the given tag in the contact's tag list. If there is a match, then it deletes that tag. You can delete multiple tags. Tags should be sent as an array. Email address (email) and tags (tags) array should be sent as a form parameter(Content-Type: application/x-www-form-urlencoded )

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/email/tags/delete -H "Accept: application/json"
-H "Content-Type :application/x-www-form-urlencoded" \
-d 'email=samson@walt.ltd&tags=["testingtesto"]' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X POST
```
###Response:
- Status 204: Tags deleted successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##1.14 Add score to a contact using email ID:
###dev/api/contacts/add-score
Method: POST

- It is used to change the score of the contact using the email address. If you want to decrease the existing score, then use negative values for the score parameter.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/add-score -H "Accept: application/json" \
-H "Content-Type :application/x-www-form-urlencoded" \
-d 'email=samson@walt.ltd&score=100' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X POST
```
###Response:
- Status 200: Score changed successfully and it returns the Contact object.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

##1.15 Get tasks related to contact:
###dev/api/contacts/{contact_id}/tasks/sort
Method: GET

- Retrieves the tasks related to contact, sorted by the date (latest first.).

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/{contact_id}/tasks/sort -H "Accept: application/json" -v -u {email}:{apikey}
```
###Response:
- Status 200: Returns the tasks list related to the contact.
```javascript
[
    {
        "id": 5152971570544640,
        "type": "EMAIL",
        "priority_type": "NORMAL",
        "due": 1409596200,
        "created_time": 1409567774,
        "is_complete": false,
        "contacts": [
            {
                "id": 5716606839685120,
                "type": "PERSON",
                "created_time": 1403057154,
                "updated_time": 1403057154,
                "viewed_time": 0,
                "viewed": {
                    "viewed_time": 1409567737463,
                    "viewer_id": 5345980119515136
                },
                "star_value": 0,
                "lead_score": 0,
                "tags": [],
                "tagsWithTime": [],
                "properties": [
                    {
                        "type": "SYSTEM",
                        "name": "first_name",
                        "value": "Basecamp (2Desk)"
                    },
                    {
                        "type": "SYSTEM",
                        "name": "last_name",
                        "value": "Basecamp (2Desk)"
                    },
                    {
                        "type": "SYSTEM",
                        "name": "email",
                        "value": "notifications@basecamp.com"
                    }
                ],
                "campaign- Status": [],
                "entity_type": "contact_entity",
                "unsubscribe- Status": [],
                "emailBounce- Status": [],
                "owner": {
                    "id": 5345980119515136,
                    "domain": "prabathk",
                    "email": "prabath.kolipaka@gmail.com",
                    "is_admin": true,
                    "is_account_owner": true,
                    "is_disabled": false,
                    "name": "prabath kolipaka"
                }
            }
        ],
        "subject": "Contact created in agile crm",
        "entity_type": "task",
        "notes": [],
        "progress": 0,
        "- Status": "YET_TO_START",
        "ownerPic": "https://s3.amazonaws.com/agilecrm/panel/uploaded-logo/1401427105618?id=upload-container",
        "taskOwner": {
            "id": 5345980119515136,
            "domain": "prabathk",
            "email": "prabath.kolipaka@gmail.com",
            "is_admin": true,
            "is_account_owner": true,
            "is_disabled": false,
            "name": "prabath kolipaka"
        }
    }
]
```
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##1.16 Updating contact properties
###dev/api/contacts/add/property
Method: POST 


We can update a single field of the contact using this call. It is used to add the new property or update the existing property. It accepts property object of contact with valid parameter in it. We need to send the Email-Id of the contact to identify it. This will not effect other fields. 

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/add/property?email=samson@walt.ltd \
-H "Content-Type: application/json" \
-d '{
    "type": "SYSTEM",
    "name": "first_name",
    "value": "hans"
}' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X POST
```

###Acceptable request representation:
```javascript   
	{
	   "type": "SYSTEM",
	   "name": "first_name",
	   "value": "Los "
   }
```

If there is no ID, it will considered as a new contact.

###Response:
- Status 200: Contact updated successfully. Returns the updated contact object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##1.17 Change contact owner
###dev/api/contacts/change-owner
Method: POST 


We can update the owner of the contact using this call. It will take two parameters. One is the email address of the user (owner_email) and the second one is the ID of the contact(contact_id). Both fields are mandatory.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/change-owner \
-H "Content-Type: application/x-www-form-urlencoded" \
-d 'owner_email=test@agilecrm.com&contact_id=5646748928180224' \
-v -u test@example.com:4uet78u6atfn38m9dounnq9g4u -X POST 
```

###Response:
- Status 200: Owner changed successfully. Returns the updated contact object in the response. If the user does not exists with the given email, it returns a message saying user does not exist with that email.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##1.18 Add contact to a campaign
###dev/api/campaigns/enroll/email
Method: POST

- This is used when a contact added to campaign (with an email address)

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/campaigns/enroll/email \
-H "Accept: application/json" \ 
-H "Content-Type :application/x-www-form-urlencoded" \ 
-d 'email=tester@gmail.com&workflow-id = 5727517264576512' \
-v -u {email}:{apikey} -X POST
```

- [Workflow-id is the id returned from list of campaign](https://github.com/agilecrm/rest-api/blob/master/README.md#7-list-of-campaigns)

###Response:
- Status 200: Campaign added successfully to the Contact.
- Status 401: Unauthorized (When the User Name and Password fields are wrong.)
- Status 400: If the input is in the wrong format

##1.19 Remove contact from a campaign
###dev/api/workflows/remove-active-subscriber/{workflow-id}/{contact_id}
Method: DELETE

- This is used when a contact needs to be taken off a campaign with the contact's contact_id. In other words, to unsubscribe a contact from a campaign.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/workflows/remove-active-subscriber/{workflow-id}/{contact_id} \
-H "Accept : application/json" \
-v -u {email} : {API Key} -X DELETE
```

- [Workflow-id is the id returned from list of campaign](https://github.com/agilecrm/rest-api/blob/master/README.md#7-list-of-campaigns)

###Response:
- Status 204: Campaign removed successfully from the Contact.
- Status 401: Unauthorized (When the User Name and Password fields are wrong.)
- Status 400: If the input is in the wrong format

##1.20 Get contact by phone number
###dev/api/contacts/search/phonenumber/{phone-number}
Method: GET 

- Returns contact object which is associated with given phone number

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/search/phonenumber/{id} \
-H "Accept :application/json" \
-v -u {email}:{apikey}
```

###Other available responses:
- Status 200: Returns contact json data.
- Status 204: No contact with the specified phone number in your account.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##1.21 Get contacts by dynamic filter

###dev/api/filters/filter/dynamic-filter
Method: POST 

- Returns contacts or companies object which is associated with given filter

###Using curl
```sh
curl https://{your_domain}.agilecrm.com/dev/api/filters/filter/dynamic-filter -H "Accept: application/json" \
-H "Content-Type :application/x-www-form-urlencoded" \
-d 'page_size=25&global_sort_key=-created_time&filterJson={"rules":[{"LHS":"tags","CONDITION":"EQUALS","RHS":"linkedin prospect"}],"contact_type":"PERSON"}' \
-v -u sample@agilecrm.com:123fghfhf******* -X POST
```

###Other available responses:
- Status 200: Returns contact json data.
- Status 204: No contact with the specified phone number in your account.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)


###dev/api/filters/filter/dynamic-filter
Method: POST 

- Returns contacts or companies object which is associated with given filter

###Using curl
```sh
curl https://{your_domain}.agilecrm.com/dev/api/filters/filter/dynamic-filter -H "Accept: application/json" \
-H "Content-Type :application/x-www-form-urlencoded" \
-d 'page_size=25&global_sort_key=-created_time&filterJson={"rules":[{"LHS":"EmployeeDataCustom","CONDITION":"EQUALS","RHS":"prospect001"}],"contact_type":"PERSON"}' \
-v -u sample@agilecrm.com:123fghfhf******* -X POST
```

###Other available responses:
- Status 200: Returns contact json data.
- Status 204: No contact with the specified phone number in your account.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##2.1 Creating a company
###dev/api/contacts
Method: POST 

- Accepts company JSON as post data along with the credentials of domain User (User name and API Key).

###Acceptable request representation:
```javascript
{
    "type": "COMPANY",
    "star_value": 4,
    "lead_score": 120,
    "tags": [
        "Permanent",
        "USA",
        "Hongkong",
        "Japan"
    ],
    "properties": [
        {
            "name": "Company Type",
            "type": "CUSTOM",
            "value": "MNC Inc"
        },
        {
            "type": "SYSTEM",
            "name": "name",
            "value": "Spicejet"
        },
        {
            "type": "SYSTEM",
            "name": "url",
            "value": "http://www.spicejet.com/"
        },
        {
            "name": "email",
            "value": "care@spicejet.com",
            "subtype": ""
        },
        {
            "name": "phone",
            "value": "45500000",
            "subtype": ""
        },
        {
            "name": "website",
            "value": "http://www.linkedin.com/company/agile-crm",
            "subtype": "LINKEDIN"
        },
        {
            "name": "address",
            "value": "{\"address\":\"MS 35, 440 N Wolfe Road\",\"city\":\"Sunnyvale\",\"state\":\"CA\",\"zip\":\"94085\",\"country\":\"US\"}",
            "subtype": "office"
        }
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "type": "COMPANY",
    "star_value": 4,
    "lead_score": 120,
    "tags": [
        "Permanent",
        "USA",
        "Hongkong",
        "Japan"
    ],
    "properties": [
        {
            "name": "Company Type",
            "type": "CUSTOM",
            "value": "MNC Inc"
        },
        {
            "type": "SYSTEM",
            "name": "name",
            "value": "Spicejet"
        },
        {
            "type": "SYSTEM",
            "name": "url",
            "value": "http://www.spicejet.com/"
        },
        {
            "name": "phone",
            "value": "45500000",
            "subtype": ""
        },
        {
            "name": "website",
            "value": "http://www.linkedin.com/company/agile-crm",
            "subtype": "LINKEDIN"
        },
        {
            "name": "address",
            "value": "{\"address\":\"MS 35, 440 N Wolfe Road\",\"city\":\"Sunnyvale\",\"state\":\"CA\",\"zip\":\"94085\",\"country\":\"US\"}",
            "subtype": "office"
        }
    ]
}' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X POST
```

###Example response

- Returns created company object with all parameters in it as mentioned in the above example. 

###Other available Responses:
- Status Status 200: Company added successfully. Returns the newly added company object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.
- Status 406: If the limit of the contacts is exceeded.

##2.2 Updating a company
###dev/api/contacts/edit-properties
Method: PUT 

- We can update required property fields of the company using this call. It is used to add the new property or update the existing property. It accepts property object of company with valid parameter in it. We need to send the Company-Id of the company to identify it. This will not affect other fields.

###Acceptable request Representation:
```javascript
{
    "id":5651082298523648,
    "properties": [
        {
            "type": "SYSTEM",
            "name": "name",
            "value": "Spicejet"
        },
        {
            "type": "SYSTEM",
            "name": "url",
            "value": "http://www.spicejet.com/"
        },
        {
            "name": "email",
            "value": "care@spicejet.com",
            "subtype": ""
        },
        {
            "name": "phone",
            "value": "45500000",
            "subtype": ""
        },
        {
            "name": "website",
            "value": "http://www.linkedin.com/company/agile-crm",
            "subtype": "LINKEDIN"
        },
        {
            "name": "address",
            "value": "{\"address\":\"MS 35, 440 N Wolfe Road\",\"city\":\"Sunnyvale\",\"state\":\"CA\",\"zip\":\"94085\",\"country\":\"US\"}",
            "subtype": "office"
        }
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/edit-properties \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "id": 5694691248963584,
    "properties": [
        {
            "type": "SYSTEM",
            "name": "name",
            "value": "SPICE JET"
        },
        {
            "type": "SYSTEM",
            "name": "url",
            "value": "http://www.spicejet.com/"
        },
        {
            "name": "phone",
            "value": "45500000",
            "subtype": ""
        }
    ]
}' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X PUT
```
###Example response

- Returns updated company object with all parameters in it as mentioned in the above example. 

###Other available responses:
- Status Status 200: Company updated successfully. Returns the updated contact object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##2.3 Get list of companies
###dev/api/contacts/companies/list
Method: POST 

- Fetches list of companies. Page_size,global_sort_key and cursor should be sent as a form parameter (Content-Type: application/x-www-form-urlencoded ).Paging can be applied using the page_size and cursor form parameters. Cursor for the next page will be in the last company of the list. If there is no cursor, it means that it is the end of list.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/companies/list \
-H "Accept: application/json" \
-H "Content-Type :application/x-www-form-urlencoded" \
-d 'page_size=25&global_sort_key=-created_time&cursor=ClMKFgoMY3JlYXRlZF90aW1lEgYI-rbWrgUSNWoRc35hZ2lsZS1jcm0tY2xvdWRyFAsSB0NvbnRhY3QYgICAkNv0nQoMogEJZ2hhbnNoeWFtGAAgAQ' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X POST
```
###Example response :
```javascript
[
    {
        "id": 5638758711951360,
        "type": "COMPANY",
        "created_time": 1439390694,
        "updated_time": 0,
        "last_contacted": 0,
        "last_emailed": 0,
        "last_campaign_emaild": 0,
        "last_called": 0,
        "viewed_time": 0,
        "viewed": {
            "viewed_time": 0
        },
        "star_value": 0,
        "lead_score": 0,
        "tags": [],
        "tagsWithTime": [],
        "properties": [
            {
                "type": "SYSTEM",
                "name": "name",
                "value": "infosys"
            },
            {
                "type": "SYSTEM",
                "name": "name_lower",
                "value": "infosys"
            }
        ]
    },
    {
        "id": 5689143912824832,
        "type": "COMPANY",
        "created_time": 1438784350,
        "updated_time": 0,
        "last_contacted": 0,
        "last_emailed": 0,
        "last_campaign_emaild": 0,
        "last_called": 0,
        "viewed_time": 0,
        "viewed": {
            "viewed_time": 0
        },
        "star_value": 0,
        "lead_score": 0,
        "tags": [],
        "tagsWithTime": [],
        "properties": [
            {
                "type": "SYSTEM",
                "name": "name",
                "value": "lead"
            },
            {
                "type": "SYSTEM",
                "name": "name_lower",
                "value": "lead"
            }
        ]
    }
]
 ```
 
 ###Response - statuses:
- Status 200: Successfully retrieved the companies list. 
- Status 401: Unauthorised. (when the user name and password fields are wrong.)


##2.4 Get company by ID
###dev/api/contacts/{id}
Method: GET 

- Returns company object which is associated with given company id

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/{id} -H "Accept :application/json" 
-v -u {email}:{apikey}
```
###Example response

```javascript
{
    "id": 5638758711951360,
    "type": "COMPANY",
    "created_time": 1439390694,
    "updated_time": 0,
    "last_contacted": 0,
    "last_emailed": 0,
    "last_campaign_emaild": 0,
    "last_called": 0,
    "viewed_time": 0,
    "viewed": {
        "viewed_time": 0
    },
    "star_value": 0,
    "lead_score": 0,
    "tags": [],
    "tagsWithTime": [],
    "properties": [
        {
            "type": "SYSTEM",
            "name": "name",
            "value": "infosys"
        },
        {
            "type": "SYSTEM",
            "name": "name_lower",
            "value": "infosys"
        }
    ]
}
 ```

###Other available responses:
- Status 200: Gives the above JSON object in above format.
- Status 204: No contact with the specified ID in your account.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##2.5 Delete single company
###dev/api/contacts/{id}
Method: DELETE
- Deletes company based on the id of the company, which is  sent in request url path.
	
###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/{id}  \
-v -u {email}:{apikey} -X DELETE
```

###Response:
- Status 204: Company deleted successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

3. Deals API
-----------
|Field Name|Description|Value Type|Read Only|Mandatory|Accepted Values|
|:----|:----------|:-----|:-----|:-------|:---------|
|id|Unique id is assigned to every deal, when it is created| Long|no|Yes, if request is to update an existing deal|N/A|
|name|Name of the deal|string|no|Yes|N/A|
|description|Brief description about deal.|string|no|No|N/A|
|expected_value|Estimated value of a deal.|double|no|Yes|Max up to  1000000000000|
|pipeline_id|Track id of the deal. |long|no|Yes|There should be a track with this Id.|
|milestone|Milestone of deal (won, progress, lost..). These depend up on the track selected. Milestones may differ based on the tracks.|String|no|Yes|MIlestone in the above mentioned track.|
|probability||integer|no|should be ranging between 0-100| 0 to 100|
|close_date|close date of deal|long|no|Yes|Epoch time|
|created_time|Created time of the deal. Returns time in seconds|long|yes|No, generated automatically on deal creation|Epoch time|
|owner_id|owner_id represents id of domain user|string|No, write access is provided to set owner of deal|Yes|The id of the user.|
|prefs||JSON string|||N/A|
|contacts|Relates list of contacts to deal|List of contact.|Yes|No||
|contact_ids|Relates list of contacts to deal. They Should be sent in the request while creating and updating contacts.|List of contact id.ex:  ["122", 145,201].|Write access to relate contacts, while returning contact jsons respective to ids set|No|IDs of contacts.|


###Deal JSON Example
```javascript
{
    "name": "Carz008",
    "owner_id": "6263975862861824",
    "expected_value": "85000",
    "probability": "89",
    "pipeline_milestone": "5730082031140864_Prospect",
    "close_date": 1472581800,
    "pipeline_id": "5730082031140864",
    "milestone": "Prospect",
    "deal_source_id": "5762909909024768",
    "color1": "#0000ff",
    "lost_reason_id": "",
    "relates_to": "",
    "description": "This is deal description",
    "archived": false,
    "contact_ids": [
        "5698320831873024"
    ],
    "custom_data": [
        {
            "name": "Deal greetings",
            "value": "Welcome to Deal greeting custom field"
        },
        {
            "name": "Deal From",
            "value": "This Deal from Zapan"
        }
    ],
    "colorName": "BLUE",
    "tagsWithTime": [
        {
            "tag": "intersted"
        },
        {
            "tag": "developer"
        }
    ]
}
```

##3.1 Listing deals
###dev/api/opportunity
Method: GET 
- Returns list of all "Deals" in the domain in JSON format, which are ordered by created time. Paging can be applied using the page_size and cursor query parameters. Count of the deals will be in the first deal and the cursor for the next page will be in the last deal of the list. If there is no cursor, it means that it is the end of the list.

###Using curl
```sh
curl https:{domain}.agilecrm.com/dev/api/opportunity?page_size=10&cursor=E-ABAIICNGoRc35hZ2lsZS1jcm0tY2xvdWRyFAsSB0NvbnRhY3QYgICAgKLThAoMogEIcHJhYmF0aGuIAgAU -H  "Accept:application/json" -v -u {email}:{API Key}
```
###Example response:
```javascript
	[
    {
        "id": 981,
        "name": "premium subscriptions",
        "contacts": [
            {
                "id": 2363,
                "type": "PERSON",
                "created_time": 1359033520,
                "updated_time": 1359033533,
                "star_value": 0,
                "lead_score": 0,
                "tags": [],
                "properties": [
                    {
                        "type": "SYSTEM",
                        "name": "first_name",
                        "value": "John"
                    },
                    {
                        "type": "SYSTEM",
                        "name": "last_name",
                        "value": "Olsen"
                    },
                    {
                        "type": "SYSTEM",
                        "name": "email",
                        "value": "john@example.com.com"
                    }
                ],
                "domainUser": {
                    "id": 516,
                    "email": "test@example.com",
                    "is_admin": true,
                    "is_account_owner": false,
                    "is_disabled": false,
                    "name": "ram"
                }
            }
        ],
        "description": "Deal premium plan subscription",
        "expected_value": 300,
		  "pipeline_id" :	"43535822",
        "milestone": "Open",
        "probability": 46,
        "close_date": 1371753000,
        "created_time": 1360503631,
        "entity_type": "deal",
        "owner": {
            "id": 516,
            "email": "test@example.com",
            "is_admin": true,
            "is_account_owner": false,
            "is_disabled": false,
            "name": "Test"
        },
        "prefs": {
            "id": 984,
            "pic": "",
            "template": "blue",
            "width": "",
            "currency": "USD",
            "signature": "- Powered by AgileCRM",
            "task_reminder": true,
            "currentDomainUserName": "?"
        },
        "pic": ""
    },
    {
        "id": 981,
        "name": "premium subscriptions",
        "contacts": []
    }
]
```
###Other Response - Statuses:
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##3.2 Get deal by its ID
###dev/api/opportunity/{id}
Method: GET 
	- Gets the deal with the given ID.
###Using curl : 
```sh
curl https:{domain}.agilecrm.com/dev/api/opportunity/981 -H  "Accept : application/json" -v -u {email}:{API Key}
```
###Example response : 
```javascript
{
    "id": 981,
    "name": "500 premium subscriptions",
    "contacts": [
        {
            "id": 2363,
            "type": "PERSON",
            "created_time": 1359033520,
            "updated_time": 1359033533,
            "star_value": 0,
            "lead_score": 0,
            "tags": [
                
            ],
            "properties": [
                {
                    "type": "SYSTEM",
                    "name": "first_name",
                    "value": "John"
                },
                {
                    "type": "SYSTEM",
                    "name": "last_name",
                    "value": "Olsen"
                },
                {
                    "type": "SYSTEM",
                    "name": "email",
                    "value": "john@example.com"
                },
            ],
            "domainUser": {
                "id": 516,
                "email": "test@example.com",
                "is_admin": true,
                "is_account_owner": false,
                "is_disabled": false,
                "name": "ram",
                "password": "PASSWORD",
                "info_json_string": "{\"logged_in_time\":1360503513,\"created_time\":1353507148}"
            }
        }
    ],
    "description": "Deal premium plan subscription",
    "expected_value": 300,
          "pipeline_id" :"43535822",
    "milestone": "Open",
    "probability": 46,
    "close_date": 1371753000,
    "created_time": 1360503631,
    "entity_type": "deal",
    "owner": {
        "id": 516,
        "email": "test@example.com",
        "is_admin": true,
        "is_account_owner": false,
        "is_disabled": false,
        "name": "ram",
        "password": "PASSWORD",
        "info_json_string": "{\"logged_in_time\":1360503513,\"created_time\":1353507148}"
    },
    "prefs": {
        "id": 984,
        "pic": "",
        "template": "blue",
        "width": "",
        "currency": "USD",
        "signature": "- Powered by AgileCRM",
        "task_reminder": true,
        "currentDomainUserName": "?"
    },
    "pic": ""
}
```

###Other Response - statuses:
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##3.3 Create deal
###dev/api/opportunity
Method: POST
- Accepts deal JSON as data in Post request to the url specified above, which creates new deal and returns the deal JSON with id field generated when new deal is created. If Post data includes valid deal id, respective deal is updated with the data sent in request.
Milestone name should be same as the the one in the website and it is case sensitive. (If the milestone name is given in the wrong case, it will not be shown in the milestone view.)

- Note : expected_value is mandatory field.

###Acceptable request representation:
```javascript
{
    "name": "Deal-Tomato",
    "expected_value": "500",
    "probability": "75",
    "close_date": 1455042600,
    "milestone": "Proposal",
    "contact_ids": [
        "5758948741218304"
    ],
    "custom_data": [
        {
            "name": "Group Size",
            "value": "10"
        }
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "name": "Deal-Tomato",
    "expected_value": "500",
    "probability": "75",
    "close_date": 1455042600,
    "milestone": "Proposal",
    "contact_ids": [
        "5694691248963584"
    ],
    "custom_data": [
        {
            "name": "Group Size",
            "value": "10"
        }
    ]
}' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X POST
```
###Response - Statuses:
- Status 200: Deal added successfully and it returns the newly created deal as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format


##3.4 Update deal (Partial update)
###dev/api/opportunity/partial-update
Method: PUT 


We can update deal using this call. It accepts Deal JSON. Id parameter of the deal should be specified. It indicates the deal to be updated with the new data sent. Milestone name should be same as the the one in the website and it is case sensitive. (If the milestone name is given in wrong case, it will not be shown in the milestone view.). This will not affect other fields.

###Acceptable request representation:
```javascript
{
    "id": "5631693742407680",
    "expected_value": "1000",
    "probability": "20",
    "contact_ids": [
        "5629703511605248",
        "5744178885558278"
    ],
    "custom_data": [
        {
            "name": "dealTester",
            "value": "hello hello2"
        }
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/partial-update \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "id":5717827835133952,
    "name": "Deal-Tomato",
    "expected_value": "600",
    "probability": "100",
    "milestone": "Proposal",
    "contact_ids": [
        "5694691248963584"
    ]
}' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X PUT
```

###Response:
- Status 200: Deal updated successfully. Returns the updated deal object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##3.5 Create deal to a contact using email ID
###dev/api/opportunity/email/{email}
Method: POST
- Accepts deal JSON as data in Post request to the url specified above, which creates new deal and returns the deal JSON with id field generated when new deal is created. If Post data includes valid deal id, respective deal is updated with the data sent in request.
Milestone name should be same as the the one in the website and it is case sensitive. (If the milestone name is given in the wrong case, it will not be shown in the milestone view.)

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/email/samson@walt.ltd \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "name": "Deal-Tomato",
    "expected_value": "500",
    "probability": "75",
    "close_date": 1455042600,
    "milestone": "Proposal",
    "custom_data": [
        {
            "name": "Group Size",
            "value": "10"
        }
    ]
}' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X POST
```
 Creates a deal for the contact with the given email address. If there is no contact, it will not create any deal.

###Response - statuses:
- Status 200: Deal added successfully and it returns the new created deal as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format


##3.6 Delete deal
###dev/api/opportunity/{id}
Method: DELETE 

- Deletes the deal based on the id specified in the url.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/{id} -H "Content-Type: application/json" -v -u test@example.com:4uet78u6atfn38m9dounnq9g4u -X DELETE
```
###Response - statuses:
- Status 204: Deal deleted successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##3.7 Bulk delete 
###dev/api/opportunity/bulk
Method: POST 

- Accepts list of deal ids in Post request and deletes all deals based on list of ids sent.

###Using curl :
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/bulk \
-H "Content-Type: application/x-www-form-urlencoded" \
-d '{
    "ids": [
        "123",
        "234",
        "235"
    ]
}' \
-v -u {email}:{API Key} -X POST
```
###Response - statuses:
- Status 200: Deal deleted successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##3.8 Get deals from default track grouped by milestones:
###dev/api/opportunity/byMilestone
Method: GET 

- Fetches list of deals from the default track grouped by milestones. Number of milestones depends upon the milestones added by user to default track.

###Using curl :
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/byMilestone -H "Accept : application/json"  -v -u {email} : {API Key}
```
###Example response :
```javascript
{
    "Lost": [
        {
            "cursor": "",
            "count": "",
            "id": 5086100271923200,
            "name": "  Nike Endorsement",
            "contact_ids": [
                
            ],
            "custom_data": [
                {
                    "name": "Ddate",
                    "value": "07/11/2014"
                }
            ],
            "description": "Advertisements and apparel for Nike",
            "expected_value": 2000000.0,
		"pipeline_id" :"43535822",
            "milestone": "Lost",
            "probability": 98,
            "close_date": 1468800,
            "owner_id": "",
            "created_time": 1405085631,
            "track": "",
            "entity_type": "deal",
            "notes": [
                
            ],
            "note_description": "",
            "owner": {
                "cursor": "",
                "count": "",
                "id": 5345980119515136,
                "domain": "prabathk",
                "email": "prabath.kolipaka@gmail.com",
                "is_admin": true,
                "is_account_owner": true,
                "is_disabled": false,
                "email_template": "",
                "name": "prabath kolipaka"
            },
            "contacts": [
                
            ],
            "pic": "https://s3.amazonaws.com/agilecrm/panel/uploaded-logo/1401427105618?id=upload-container"
        }
    ],
    Open: [
        {
            "cursor": "",
            "count": "",
            "id": 5115435166990336,
            "name": " test deal",
            "contact_ids": [
                
            ],
            "custom_data": [
                {
                    "name": "Ddate",
                    "value": "07/23/2014"
                }
            ],
            "description": "testing",
            "expected_value": 1235.0,
		"pipeline_id" :"43535822",
            "milestone": "Lost",
            "probability": 123,
            "close_date": 1405555200,
            "owner_id": "",
            "created_time": 1405518785,
            "track": "",
            "entity_type": "deal",
            "notes": [
                
            ],
            "note_description": "",
            "owner": {
                "cursor": "",
                "count": "",
                "id": 5345980119515136,
                "domain": "prabathk",
                "email": "prabath.kolipaka@gmail.com",
                "is_admin": true,
                "is_account_owner": true,
                "is_disabled": false,
                "email_template": "",
                "name": "prabath kolipaka"
            },
            "contacts": [
                
            ],
            "pic": "https://s3.amazonaws.com/agilecrm/panel/uploaded-logo/1401427105618?id=upload-container"
        }
    ],
    Won: [
        {
            "cursor": "",
            "count": "",
            "id": 5123586478047232,
            "name": "  deal test",
            "contact_ids": [
                
            ],
            "custom_data": [
                {
                    "name": "Ddate",
                    "value": "07/21/2014"
                }
            ],
            "description": "",
            "expected_value": 1.0E10,
		"pipeline_id" :"43535822",
            "milestone": "Lost",
            "probability": 10,
            "close_date": 1405036800,
            "owner_id": "",
            "created_time": 1405575543,
            "track": "",
            "entity_type": "deal",
            "notes": [
                
            ],
            "note_description": "",
            "owner": {
                "cursor": "",
                "count": "",
                "id": 5345980119515136,
                "domain": "prabathk",
                "email": "prabath.kolipaka@gmail.com",
                "is_admin": true,
                "is_account_owner": true,
                "is_disabled": false,
                "email_template": "",
                "name": "prabath kolipaka"
            },
            "contacts": [
                
            ],
            "pic": "https://s3.amazonaws.com/agilecrm/panel/uploaded-logo/1401427105618?id=upload-container"
        }
    ],
    Stage1: [
        {
            "cursor": "",
            "count": "",
            "id": 5193799529660416,
            "name": " Nike Endorsement",
            "contact_ids": [
                
            ],
            "custom_data": [
                
            ],
            "description": "Advertisements and apparel for Nike",
            "expected_value": 2.0E11,
		"pipeline_id" :"43535822",
            "milestone": "Lost",
            "probability": 98,
            "close_date": 0,
            "owner_id": "",
            "created_time": 1402580362,
            "track": "",
            "entity_type": "deal",
            "notes": [
                
            ],
            "note_description": "",
            "owner": {
                "cursor": "",
                "count": "",
                "id": 5345980119515136,
                "domain": "prabathk",
                "email": "prabath.kolipaka@gmail.com",
                "is_admin": true,
                "is_account_owner": true,
                "is_disabled": false,
                "email_template": "",
                "name": "prabath kolipaka"
            },
            "contacts": [
                
            ],
            "pic": "https://s3.amazonaws.com/agilecrm/panel/uploaded-logo/1401427105618?id=upload-container"
        }
    ]
}
 ````
In this above example, Lost, Open, Won, Stage 1 are different milestones. These may vary depending on the user choice.

###Response - statuses:
- Status 200: Successfully retrieved the deals list. 
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##3.9 Get deals for a particular track (grouped by milestone).
###dev/api/opportunity/byPipeline/based
Method: GET 

- Fetches list of deals from the particular track grouped by milestones. Number of milestones depends upon the milestones added by user to that track. The track id has to be sent as a query parameter. If 0 is sent as the parameter, it will give the list of deals from the default track.

###Using curl :
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/byPipeline/based?pipeline_id=4756437 -H "Accept : application/json"  -v -u {email} : {API Key}
```
###Example response :
```javascript
{
    "Lost": [
        {
            "cursor": "",
            "count": "",
            "id": 5086100271923200,
            "name": "  Nike Endorsement",
            "contact_ids": [
                
            ],
            "custom_data": [
                {
                    "name": "Ddate",
                    "value": "07/11/2014"
                }
            ],
            "description": "Advertisements and apparel for Nike",
            "expected_value": 2000000.0,
		"pipeline_id" :"4756437",
            "milestone": "Lost",
            "probability": 98,
            "close_date": 1468800,
            "owner_id": "",
            "created_time": 1405085631,
            "track": "",
            "entity_type": "deal",
            "notes": [
                
            ],
            "note_description": "",
            "owner": {
                "cursor": "",
                "count": "",
                "id": 5345980119515136,
                "domain": "prabathk",
                "email": "prabath.kolipaka@gmail.com",
                "is_admin": true,
                "is_account_owner": true,
                "is_disabled": false,
                "email_template": "",
                "name": "prabath kolipaka"
            },
            "contacts": [
                
            ],
            "pic": "https://s3.amazonaws.com/agilecrm/panel/uploaded-logo/1401427105618?id=upload-container"
        }
    ],
    Open: [
        {
            "cursor": "",
            "count": "",
            "id": 5115435166990336,
            "name": " test deal",
            "contact_ids": [
                
            ],
            "custom_data": [
                {
                    "name": "Ddate",
                    "value": "07/23/2014"
                }
            ],
            "description": "testing",
            "expected_value": 1235.0,
		"pipeline_id" :"4756437",
            "milestone": "Lost",
            "probability": 123,
            "close_date": 1405555200,
            "owner_id": "",
            "created_time": 1405518785,
            "track": "",
            "entity_type": "deal",
            "notes": [
                
            ],
            "note_description": "",
            "owner": {
                "cursor": "",
                "count": "",
                "id": 5345980119515136,
                "domain": "prabathk",
                "email": "prabath.kolipaka@gmail.com",
                "is_admin": true,
                "is_account_owner": true,
                "is_disabled": false,
                "email_template": "",
                "name": "prabath kolipaka"
            },
            "contacts": [
                
            ],
            "pic": "https://s3.amazonaws.com/agilecrm/panel/uploaded-logo/1401427105618?id=upload-container"
        }
    ]
}
 ```
In this above example, Lost, Open, Won, Stage 1 are different milestones. These may vary depending on the user choice.

###Response - statuses:
- Status 200: Successfully retrieved the deals list. 
- Status 401: Unauthorised. (when the user name and password fields are wrong.)



##3.10 Get deals from particular track:
###dev/api/opportunity/based
Method: GET 

  - Fetches list of deals from the particular track. Number of milestones depends upon the milestones added by user to that track. The track id has to be sent as a query parameter.
	- If 0 is sent as the parameter, it will give the list of deals from the default track.
	- If 1 is sent as the parameter, it will give the list of all deals from all tracks.
	
	Paging can be applied using the page_size and cursor query parameters. Count of the deal will be in the first deal and Cursor for the next page will be in the last deal of the list. If there is no cursor, it means that it is the end of list.

###Using curl :
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/based?pipeline_id=4756437&page_size=10&cursor=E-ABAIICNGoRc35hZ2lsZS1jcm0tY2xvdWRyFAsSB0NvbnRhY3QYgICAgKLThAoMogEIcHJhYmF0aGuIAgAU -H "Accept : application/json"  -v -u {email} : {API Key}
```
###Example response :
```javascript
[
        {
            "cursor": "",
            "count": "",
            "id": 5086100271923200,
            "name": "  Nike Endorsement",
            "contact_ids": [
                
            ],
            "custom_data": [
                {
                    "name": "Ddate",
                    "value": "07/11/2014"
                }
            ],
            "description": "Advertisements and apparel for Nike",
            "expected_value": 2000000.0,
		"pipeline_id" :"4756437",
            "milestone": "Lost",
            "probability": 98,
            "close_date": 1468800,
            "owner_id": "",
            "created_time": 1405085631,
            "track": "",
            "entity_type": "deal",
            "notes": [
                
            ],
            "note_description": "",
            "owner": {
                "cursor": "",
                "count": "",
                "id": 5345980119515136,
                "domain": "prabathk",
                "email": "prabath.kolipaka@gmail.com",
                "is_admin": true,
                "is_account_owner": true,
                "is_disabled": false,
                "email_template": "",
                "name": "prabath kolipaka"
            },
            "contacts": [
                
            ],
            "pic": "https://s3.amazonaws.com/agilecrm/panel/uploaded-logo/1401427105618?id=upload-container"
        },
        {
            "cursor": "",
            "count": "",
            "id": 5115435166990336,
            "name": " test deal",
            "contact_ids": [
                
            ],
            "custom_data": [
                {
                    "name": "Ddate",
                    "value": "07/23/2014"
                }
            ],
            "description": "testing",
            "expected_value": 1235.0,
		"pipeline_id" :"4756437",
            "milestone": "Lost",
            "probability": 123,
            "close_date": 1405555200,
            "owner_id": "",
            "created_time": 1405518785,
            "track": "",
            "entity_type": "deal",
            "notes": [
                
            ],
            "note_description": "",
            "owner": {
                "cursor": "",
                "count": "",
                "id": 5345980119515136,
                "domain": "prabathk",
                "email": "prabath.kolipaka@gmail.com",
                "is_admin": true,
                "is_account_owner": true,
                "is_disabled": false,
                "email_template": "",
                "name": "prabath kolipaka"
            },
            "contacts": [
                
            ],
            "pic": "https://s3.amazonaws.com/agilecrm/panel/uploaded-logo/1401427105618?id=upload-container"
        }
] 
```
In this above example, Lost, Open, Won, Stage 1 are different milestones. These may vary depending on the user choice.

###Response - statuses:
- Status 200: Successfully retrieved the deals list. 
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##3.11 Get deals related to specific contact
###dev/api/contacts/{id}/deals
Method: GET 

	- Fetches list of deals related to specified contact using the contact id.

###Using curl :
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/{contact_id}/deals -H "Accept : application/json"  -v -u {email} : {API Key}
```
###Example response :
```javascript
[
  {
	"id" :		   822,
	"name" :	   "Game Development",
	"created_time" :  1356325843,
	"contacts"	 :  [
{
	id : "445",
	created_time : 1356315843
	…
}
...
     ]
	…
   },
  {
	"id" :		   850,
	"name"	 :	   "Product Design",
	"created_time"	 : "1357794282",
…	
  },
   ...
]
```
###Response - statuses:
- Status 200: Successfully retrieved the deals list. 
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##3.12 Get deals of current user (my deals)
###dev/api/opportunity/my/deals
Method: GET 

	- Fetches list of deals of the current user

###Using curl :
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/my/deals -H "Accept : application/json"  -v -u {email} : {API Key}
```
###Example response :
```javascript
[
  {
	"id" :		   822,
	"name" :	   "Game Development",
	"created_time" :  1356325843,
	"contacts"	 :  [
{
	id : "445",
	created_time : 1356315843
	…
}
...
     ]
	...
   },
  {
	"id" :		   850,
	"name"	 :	   "Product Design",
	"created_time"	 : "1357794282",
…	
  },
   ...
]
```
###Response - statuses:
- Status 200: Successfully retrieved the deals list. 
- Status 401: Unauthorised. (when the user name and password fields are wrong.)


##3.13 Remove contacts of a deal
###dev/api/opportunity/partial-update/delete-contact
Method: PUT 


We can update deal using this call. It accepts Deal JSON. Id parameter of the deal should be specified. This will not affect other fields.

###Acceptable request representation:
```javascript
{
      "id": "6429943999234048",
      "contact_ids": [
          "4930210138947584",
	  "4600356650614784"
      ]
  }
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/partial-update/delete-contact \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
      "id": "6429943999234048",
      "contact_ids": [
          "4930210138947584",
	  "4600356650614784"
      ]
  }' \
-v -u ghanshyam.raut@agilecrm.com:your_rest_api -X PUT
```

###Response:
- Status 200: Deal updated successfully. Returns the updated deal object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

4. Notes API
------------

|Field Name|Description|Value Type|Read Only|Mandatory|Accepted values|
|:----|:----------|:--------|:-----|:------|:------|
|id|Unique id generated  when note is created|Long|no|no|N/A|
|created_time|Creation time of note|Long|yes|no|epoch time|
|subject|Subject of the note|String|no|yes|N/A|
|description|Description of note|String|no|yes|N/A|
|contact_json|list of contact ids|String array|no|no|N/A|


##4.1 Create a note and relate that to contacts :
###/dev/api/notes
Method: POST 

- Creates a note and relates it to contacts, which are sent in the note JSON contact field.

###Using curl : 
```sh
curl https://{domain}.agilecrm.com/dev/api/notes/ \
-H "Content-Type : application/json" \
-H "Accept : application/json" \
-d '{
    "subject": " Note subject",
    "description": "Note description",
    "contact_ids": [
        "5688267051630592",
        "5721389839417344"
    ]
}' \
-v -u {email} : {APi Key} -X POST
```
###Example response : 	
```javascript
	{
		"id" : 5688267051630500,
		"created_time" : 1360561958,
		"subject" : "Note subject",
		"description" : "Note description",
		"entity_type" : "note"
	}
```

###Response - statuses:
- Status 200: Note added successfully and it returns the newly created note as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

##4.2 Add note to a contact using email ID:
###dev/api/contacts/email/note/add
Method: POST

- Adds a note to the contact with given Email-ID. Email address and the note object should be sent as url-encoded form parameters to the above given URL.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/email/note/add -H "Accept: application/json" \
-H "Content-Type :application/x-www-form-urlencoded" \
-d 'email=notifications@basecamp.com&note={"subject":"test","description":"testing description"}' \
-v -u {email}:{apikey} -X POST
```
###Response:
- Status 204: Note added successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##4.3 Gets notes related to specific contact :
###/dev/api/contacts/{contact_id}/notes
Method: GET

- Returns list of note JSONs related to the contact. 

###Using curl :
```sh	
curl https://{domain}.agilecrm.com/dev/api/contacts/5688267051630592/notes -H "Accept : application/json" -v -u {email} : {API Key}
```
###Example response :
```sh	
[
    {
        "count": 2,
        "id": 5757434010271744,
        "created_time": 1456469393,
        "subject": "Tata",
        "description": "Product Famous in India",
        "contact_ids": [
            "5748927693324288"
        ],
        "contacts": [
            {
                "id": 5748927693324288,
                "type": "PERSON",
                "properties": [
                    {
                        "type": "SYSTEM",
                        "name": "first_name",
                        "value": "olay"
                    }
                ]
            }
        ]
    },
    {
        "id": 5725589243691008,
        "created_time": 1456469284,
        "subject": "toyta",
        "description": "Product's related to worldwide.",
        "contact_ids": [
            "5748927693324288"
        ],
        "contacts": [
            {
                "id": 5748927693324288,
                "type": "PERSON",
                "properties": [
                    {
                        "type": "SYSTEM",
                        "name": "first_name",
                        "value": "olay"
                    }
                ]
            }
        ]
    }
]
```
	
##4.4 Delete a specific note from specific contact :
###/dev/api/contacts/{contact_id}/notes/{note_id}
Method: DELETE
	- Deletes the note of the specific contact. (It will remove the relationship between the note and the contact.)

###Using curl : 
```sh	
curl https://{domain}.agilecrm.com/dev/api/contacts/{contact_id}/notes/{note_id} -H "Accept : application/json" -v -u {email} : {API Key} -X DELETE
```
###Response:
- Status 204: Note removed successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

##4.5 Create note to a deal
###dev/api/opportunity/deals/notes
Method: POST
- Accepts note JSON as data in Post request to the url specified above, which creates new note and returns the note JSON with id field generated when new note is created.

###Acceptable request representation:
```javascript
{
    "subject": "Deal From Albany",
    "description": "This deal came directly from customer. No advertisement and hence very important for us.",
    "deal_ids": [
        "5088304026353664"
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/deals/notes  \
-H "Accept :application/json" \
-H "Content-Type: application/json" \
-d '{
    "subject": "Deal From Albany",
    "description": "This deal came directly from customer. No advertisement and hence very important for us.",
    "deal_ids": [
        "5088304026353664"
    ]
}' \
-v -u {email}:{apikey} -X POST 
```

###Response - statuses:
- Status 200: Note added successfully and it returns the deal as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

##4.6 Update note to a deal
###dev/api/opportunity/deals/notes
Method: PUT
- Accepts note JSON as data in Post request to the url specified above, which update note and returns the deal JSON with id field generated when new note is created.

###Acceptable request representation:
```javascript
{
    "id": "5714548224950272",
    "subject": "Deal From Albany edit",
    "description": "This deal came directly from customer. No advertisement and hence very important for us.",
    "deal_ids": [
        "5088304026353664"
    ]
}
```

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/opportunity/deals/notes  \
-H "Accept :application/json" \
-H "Content-Type: application/json" \
-d '{
    "id": "5714548224950272",
    "subject": "Deal From Albany Edit",
    "description": "This deal came directly from customer. No advertisement and hence very important for us.",
    "deal_ids": [
        "5088304026353664"
    ]
}' \
-v -u {email}:{apikey} -X PUT
```

###Response - statuses:
- Status 200: Note updated successfully and it returns the deal as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

##4.7 Gets notes related to specific deal :
###/dev/api/opportunity/5088304026353664/notes
Method: GET

- Returns list of note JSONs related to the contact. 

###Using curl :
```sh	
curl https://{domain}.agilecrm.com/dev/api/opportunity/5088304026353664/notes -H "Accept : application/json" -v -u {email} : {API Key}
```
###Example response :
```sh	
[
    {
        "id": 5702534932987904,
        "created_time": 1456467295,
        "subject": "Deal From Albany",
        "description": "This deal came directly from customer. No advertisement and hence very important for us.",
        "entity_type": "note"
    },
    {
        "id": 5714548224950272,
        "created_time": 1456468655,
        "subject": "Deal From Albany edit 1234",
        "description": "This deal came directly from customer. No advertisement and hence very important for us.",
        "contact_ids": [],
        "deal_ids": []
    }
]
```
###Response:
- Status 200: Returned list od notes
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format


##4.8 Delete notes from specific deal :
###/dev/api/contacts/notes/bulk
Method: POST
	- Deletes notes of the specific deal.

###Using curl : 
```sh	
curl https://{domain}.agilecrm.com/dev/api/contacts/notes/bulk -H "Accept: application/json" \
-H "Content-Type :application/x-www-form-urlencoded" \
-d 'ids=["5641751750508544"]' \
-v -u {email}:{apikey} -X POST
```
###Response:
- Status 204: Note removed successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

5. Tasks API
---------

|Field Name|Description|Value Type|Read Only|Mandatory|Accepted values|
|:-------|:-----------|:---------|:--------|:-------|:----------|
|id|Unique id generated when task is created|Long|no|no|N/A|
|type|Determines the type to which the task belongs. The type should be in the given list. It is case sensitive. It should only be specified as mentioned here - |String|no|yes|CALL, EMAIL, FOLLOW_UP, MEETING, MILESTONE, SEND, TWEET, OTHER.|
|priority_type|Determines the priority of the task. It is case sensitive. It should only be specified as mentioned here. |String|no|yes| There are 3 kinds of priorities - HIGH, NORMAL, LOW.|
|due|Due date of the task. It should be specified as Epoch Time.|Long|no|yes|Epoch time|
|created_time|Creation time of task|Long|yes|no|Epoch time|
|is_complete|Determines whether the task is completed or not. If completed, then true. Else, false.|Boolean|no|no|true/false|
|contacts|List of contacts related to the task. While saving, the contact ids have to be given as a string array to relate them to the task.|String array|no|no|ID’s of the contacts.|
|subject|Subject of the task.|String|no|yes|N/A|
|entity_type|It is a read only variable. Its value is ‘task’ always.|String|yes|no|task|
|notes|It is the list of notes related to this task. While adding or editing a task, the list of note id’s has to be sent as a string array in order to save them.|String array|no|no|N/A|
|progress|It is used to determine the progress of the task. (0-100%)|Int|no|no|0 to 100|
|status|Determines the status of the task. |String|no|no|YET_TO_START, IN_PROGRESS, COMPLETED. These are case sensitive.
|taskOwner|It has the information about the owner of the task.|JSON object|yes|no|N/A|
|owner_id|lId of the user who is the owner of the task. Send this field in the task object while adding or updating the task in order to assign the task to the owner.|Long|no|no|Id of the user(Owner)|


##5.1 Get the list of pending tasks depending on the number of pending days:
###dev/api/tasks/pending/{num-days}
Method: GET

	- Retrieve the pending tasks of all the users which are ‘num-days’ days away from the due date. It will return the list of tasks as a JSON Array.

###Using curl
```sh	
	curl https:{domain}.agilecrm.com/dev/api/tasks/pending/3 -H  "Accept:application/json" -v -u {email}:{API Key}
```
###Response:
- Status 200: Gets the list of tasks.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
###Example response:
```javascript
[
    {
        "id": 5149503652888576,
        "type": "EMAIL",
        "priority_type": "HIGH",
        "due": -19800,
        "created_time": 1409649528,
        "is_complete": false,
        "contacts": [
            {
                "id": 5704147139559424,
                "type": "PERSON",
                "created_time": 1398421585,
                "updated_time": 1406619697,
              ...
            }
        ],
        "subject": "Contact created in agile crm",
        "entity_type": "task",
        "notes": [
            
        ],
        "progress": 0,
        "status": "YET_TO_START",
        "taskOwner": {
            "id": 5345980119515136,
            "domain": "prabathk",
            "email": "prabath.kolipaka@gmail.com",
            "is_admin": true,
          ...
    },
    {
        "id": 5176288276905984,
        "type": "EMAIL",
        "priority_type": "LOW",
        "due": -19800,
        "created_time": 1409649695,
        "is_complete": false,
        "contacts": [
            {
                "id": 5704147139559424,
                "type": "PERSON",
                "created_time": 1398421585,
                "updated_time": 1406619697,
              ...
            }
        ],
        "subject": "Contact created in agile crm",
        "entity_type": "task",
        "notes": [
            
        ],
        "progress": 0,
        "status": "YET_TO_START",
        "taskOwner": {
            "id": 5345980119515136,
            "domain": "prabathk",
            "email": "prabath.kolipaka@gmail.com",
          ...
    }
]
```
##5.2 Get the list of tasks based on given filters:
###dev/api/tasks/based
Method: GET

	- Retrives the list of tasks based on the given filters. The filters available are ‘type’, ‘owner’, ’pending’, ‘criteria’, and ‘page_size’. These should be sent as a query parameters in the URL.
	- There are three criteria can be use using this api and each has its own type.
	- criteria = CATEGORY has these type (EMAIL,CALL,FOLLOW_UP,MEETING,MILESTONE,SEND,TWEET,OTHER)
	- criteria = STATUS has these type (IN_PROGRESS,YET_TO_START,COMPLETED)
	- criteria = PRIORITY has these type (HIGH,NORMAL,LOW)
	
	Paging can be applied using the page_size and cursor query parameters. Count of the tasks will be in the first task and Cursor for the next page will be in the last task of the list. If there is no cursor, it means that it is the end of list.

###Using curl
```sh	
	curl https:{domain}.agilecrm.com/dev/api/tasks/based?pending=true&criteria=CATEGORY&type=EMAIL&page_size=10&cursor=E-ABAIICNGoRc35hZ2lsZS1jcm0tY2xvdWRyFAsSB0NvbnRhY3QYgICAgKLThAoMogEIcHJhYmF0aGuIAgAU -H  "Accept:application/json" -v -u {email}:{API Key}
```
###Response:
- Status 200: Gets the list of tasks.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
###Example response:
```javascript
[
    {
        "id": 5149503652888576,
        "type": "EMAIL",
        "priority_type": "HIGH",
        "due": -19800,
        "created_time": 1409649528,
        "is_complete": false,
        "contacts": [
            {
                "id": 5704147139559424,
                "type": "PERSON",
                "created_time": 1398421585,
                "updated_time": 1406619697,
              ...
            }
        ],
        "subject": "Contact created in agile crm",
        "entity_type": "task",
        "notes": [
            
        ],
        "progress": 0,
        "status": "YET_TO_START",
        "taskOwner": {
            "id": 5345980119515136,
            "domain": "prabathk",
            "email": "prabath.kolipaka@gmail.com",
            "is_admin": true,
          ...
    },
    {
        "id": 5176288276905984,
        "type": "EMAIL",
        "priority_type": "LOW",
        "due": -19800,
        "created_time": 1409649695,
        "is_complete": false,
        "contacts": [
            {
                "id": 5704147139559424,
                "type": "PERSON",
                "created_time": 1398421585,
                "updated_time": 1406619697,
              ...
            }
        ],
        "subject": "Contact created in agile crm",
        "entity_type": "task",
        "notes": [
            
        ],
        "progress": 0,
        "status": "YET_TO_START",
        "taskOwner": {
            "id": 5345980119515136,
            "domain": "prabathk",
            "email": "prabath.kolipaka@gmail.com",
          ...
    }
]
```

##5.3 Get the task based on ID:
###dev/api/tasks/{id}
Method: GET

	- Gets the task of the contact with the given ID.

###Using curl
```sh	
	curl https:{domain}.agilecrm.com/dev/api/tasks/5149503652888576 -H  "Accept:application/json" -v -u {email}:{API Key}
```
###Response:
- Status 200: Gets the list of tasks.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
###Example response:
```javascript  
  {
        "id": 5149503652888576,
        "type": "EMAIL",
        "priority_type": "HIGH",
        "due": -19800,
        "created_time": 1409649528,
        "is_complete": false,
        "contacts": [
            {
                "id": 5704147139559424,
                "type": "PERSON",
                "created_time": 1398421585,
                "updated_time": 1406619697,
              ...
            }
        ],
        "subject": "Contact created in agile crm",
        "entity_type": "task",
        "notes": [
            
        ],
        "progress": 0,
        "status": "YET_TO_START",
        "taskOwner": {
            "id": 5345980119515136,
            "domain": "prabathk",
            "email": "prabath.kolipaka@gmail.com",
            "is_admin": true,
          ...
    }
```

##5.4 Create a task:
###dev/api/tasks
Method: POST

	- Creates a new task.
	- Acceptable value for below field :
	 progress (0 to 100), is_complete (true or false), type (CALL, EMAIL, FOLLOW_UP, MEETING, MILESTONE, SEND, TWEET, OTHER),
	 priority_type (HIGH, NORMAL, LOW), status (YET_TO_START, IN_PROGRESS, COMPLETED)

###Acceptable request Representation:
```javascript
{
    "progress": "0",
    "is_complete": "false",
    "subject": "Need to contact vendor",
    "type": "MEETING",
    "due": 1459319400,
    "task_ending_time": "12:00",
    "owner_id": "6263975862861824",
    "priority_type": "HIGH",
    "status": "YET_TO_START",
    "taskDescription": "This is very important. We need to discuss with few vendors about the product.",
    "contacts": [
        "5719430394806272"
    ],
    "notes": [
        "5715549623418880"
    ],
    "deal_ids": [
        "5715549623415649"
    ]
}
```
###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/tasks \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "progress": "0",
    "subject": "Need to contact",
    "type": "EMAIL",
    "due": 1456986600,
    "task_ending_time": "12:00",
    "priority_type": "HIGH",
    "status": "YET_TO_START",
    "contacts": [
        "5725836472745984"
    ]
}' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X POST
```
###Response:
- Status 200: Task added successfully and it returns the newly created task as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

###Example response:
```javascript   
   {
        "id": 5149503652888576,
        "type": "EMAIL",
        "priority_type": "HIGH",
        "due": 11545245654,
        "created_time": 1409649528,
        "is_complete": false,
        "contacts": [
            {
                "id": 5704147139559424,
                "type": "PERSON",
                "created_time": 1398421585,
                "updated_time": 1406619697,
              ...
            }
        ],
        "subject": "test",
        "entity_type": "task",
        "notes": [
            
        ],
        "progress": 0,
        "status": "YET_TO_START",
        "taskOwner": {
            "id": 5345980119515136,
            "domain": "prabathk",
            "email": "prabath.kolipaka@gmail.com",
            "is_admin": true,
          ...
    }
```

##5.5 Create a task based on contact email:
###dev/api/tasks/email/{email}
Method: POST

	- Creates a new task and relates it to the contact having the email.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/tasks/email/samson@walt.ltd \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "subject": "Need to contact1",
    "type": "EMAIL",
    "due": 1456986600,
    "task_ending_time": "12:00",
    "priority_type": "HIGH",
    "status": "YET_TO_START"
}' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X POST
```
###Response:
- Status 200: Task added successfully and it returns the newly created task as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

###Example response:
```javascript   
   {
        "id": 5149503652888576,
        "type": "EMAIL",
        "priority_type": "HIGH",
        "due": 11545245654,
        "created_time": 1409649528,
        "is_complete": false,
        "contacts": [
            {
                "id": 5704147139559424,
                "type": "PERSON",
                "created_time": 1398421585,
                "updated_time": 1406619697,
              ...
            }
        ],
        "subject": "test",
        "entity_type": "task",
        "notes": [
            
        ],
        "progress": 0,
        "status": "YET_TO_START",
        "taskOwner": {
            "id": 5345980119515136,
            "domain": "prabathk",
            "email": "prabath.kolipaka@gmail.com",
            "is_admin": true,
          ...
    }
```

##5.6 Update a task (Partial update)
###dev/api/tasks/partial-update
Method: PUT 


We can update task using this call. It accepts task JSON. Id parameter of the task should be specified. This will not affect other fields.

###Acceptable request Representation:
```javascript
{
    "id": "6097891487645696",
    "subject": "sample",
    "type": "EMAIL"
    "due": 1448941500,
    "contacts": [
        "5700328880078848",
        "6487118603878400"
    ]
}
```

###Using curl

```sh
curl https://{domain}.agilecrm.com/dev/api/tasks/partial-update \
-H "Accept : application/json" \
-H "Content-Type: application/json" \
-d '{
    "id": "5690477483393024",
    "subject": "sample edit",
    "type": "EMAIL",
    "due": 1448941500,
    "contacts": [
        "5725836472745984",
        "6487118603878400"
    ]
}' \
-v -u ghanshyam.raut@agilecrm.com:123456 -X PUT
```

###Response:
- Status 200: Deal updated successfully. Returns the updated deal object in the response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format.

##5.7 Delete a task based on ID:
###dev/api/tasks/{id}
Method: DELETE

	- Deletes the task having the given ID.

###Using curl
```sh	
	curl https:{domain}.agilecrm.com/dev/api/tasks/5149503652888576 -H  "Accept:application/json" -v -u {email}:{API Key} -X DELETE
```
###Response:
- Status 204: Task deleted successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)



6. Events API
------------

|Field Name|Description|Value Type|Read Only|Mandatory|Accepted Values|
|:--------|:----------|:---------|:-------|:---------|:-------------|
|id|Unique id generated  when event is created||Long|no|no|N/A|
|created_time|Creation time of Event|Long|yes|no|Epoch time|
|allDay|Determines whether the event lasts for the whole day or not.|Boolean|no|no|true / false|
|contacts|List of contacts related to the event. While saving, the contact ids have to be given as a string array to relate them to the event.|String array|no|no|ID’s of the contacts|
|title|Title of the event|String|no|yes|N/A|
|color|Color states the priority of the event.|The colors are case sensitive. All of them should be specified in the same case.|String|no|no|High = red, Normal = #36C, Low = green.|
|start|Start time of Event in epoch time format.|Long|no|yes|epoch time|
|end|End time of Event in epoch time format.|Long|no|yes|epoch time|
|is_event_starred|It determines whether the particular event is starred or not.|Boolean|no|no|true / false|

##6.1 Get list of events:
###dev/api/events
Method: GET

- Fetches the list of events happened in particular time. The start time and end time have to be sent in epoch format as query parameters.

###Using curl
	   curl https:{domain}.agilecrm.com/dev/api/events?start=1409423400&end=1413052200 -H  "Accept:application/json" -v -u {email}:{API Key}

###Response:
- Status 200: Gets the list of events.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

###Example response:
```javascript
[
    {
        "id": 5758048710688768,
        "start": 1409682600,
        "end": 1409768100,
        "is_event_starred": false,
        "allDay": true,
        "title": "Today Test event",
        "color": "red",
        "created_time": 1409569472,
        "contacts": [
            {
                "id": 5716606839685120,
                "type": "PERSON",
                "star_value": 0,
                "lead_score": 0,
                "tags": [],
                "properties": [
                    {
                        "type": "SYSTEM",
                        "name": "first_name",
                        "value": "Basecamp (2Desk)"
                    },
                   ...
                ],
              ...
            }
        ]
    },
    {
        "id": 5740240702537728,
        "start": 1409769000,
        "end": 1409855340,
        "is_event_starred": false,
        "allDay": false,
        "title": "tlest",
        "color": "green",
        "created_time": 1410421808,
        "contacts": [
            {
                "id": 5727217287954432,
                "type": "PERSON",
                "star_value": 0,
                "lead_score": 1,
                "tags": [
                    "  mobile",
                    "test"
                ],
                "properties": [
                    {
                        "type": "SYSTEM",
                        "name": "first_name",
                        "value": "test first"
                    }
                   ...
                ],
                ...
            }
        ]
    }
]
```

##6.2 Get events related to contact:
###dev/api/contacts/{contact_id}/events/sort
Method: GET

- Retrieves the events related to contact sorted by date.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/contacts/{contact_id}/events/sort -H "Accept: application/xml" -v -u {email}:{apikey}
```
###Response:
- Status 200: Returns the events list related to the contact.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

###Example response:
```javascript
[
    {
        "id": 5758048710688768,
        "start": 1409682600,
        "end": 1409768100,
        "is_event_starred": false,
        "allDay": true,
        "title": "Today Test event",
        "color": "red",
        "created_time": 1409569472,
        "contacts": [
            {
                "id": 5716606839685120,
                "type": "PERSON",
   …...                 
            }
        ]
    }
]
```

##6.3 Create event:
###dev/api/events
Method: POST

- Creates an event.

###Using curl : 
```sh
	curl https://{domain}.agilecrm.com/dev/api/events -H "Content-Type : application/json" -H "Accept : application/json" -d ‘{"title" : "Today Test event" , "allDay" : true, "color" : "red" , "start":1409682600,"end":1409768100, "contacts" : ["721001", "722001"] }’ -v -u {email} : {APi Key} -X POST
```
###Example response : 	
```javascript
	{
        "id": 5758048710688768,
        "start": 1409682600,
        "end": 1409768100,
        "is_event_starred": false,
        "allDay": true,
        "title": "Today Test event",
        "color": "red",
        "created_time": 1409569472,
        "contacts": [
            {
                "id": 721001,
                "type": "PERSON",
   ...                 
            }
        ]
    }
```

###Response - statuses:
- Status 200: Event added successfully and it returns the newly created event as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

##6.4 Update event:
###dev/api/events
Method: PUT

- Updates an event. To update the event, the event id has to be provided in the request object. Otherwise, it will be considered as a new event.

###Using curl : 
```sh
	curl https://{domain}.agilecrm.com/dev/api/events -H "Content-Type : application/json" -H "Accept : application/json" -d ‘{"id": 5758048710688768, "title" : "Today Test event" , "allDay" : true, "color" : "red" , "start":1409682600,"end":1409768100, "contacts" : ["721001", "722001"] }’ -v -u {email} : {APi Key} -X PUT
```

###Example response : 	
```javascript
	{
        "id": 5758048710688768,
        "start": 1409682600,
        "end": 1409768100,
        "is_event_starred": false,
        "allDay": true,
        "title": "Today Test event",
        "color": "red",
        "created_time": 1409569472,
        "contacts": [
            {
                "id": 721001,
                "type": "PERSON",
   ...                 
            }
        ]
    }
```

###Response - statuses:
- Status 200: Event updated successfully and it returns the updated event as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

##6.5 Delete an event:
###dev/api/events/{id}
Method: DELETE

- Deletes the event with the particular id. The id passed in the url will be used to identify the event.

###Using curl
```sh	
	curl https:{domain}.agilecrm.com/dev/api/events/5149503652888576 -H  "Accept:application/json" -v -u {email}:{API Key} -X DELETE
```
###Response:
- Status 204: Event deleted successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)


7. Track / Milestones API
----------------------

|Field Name|Description|Value Type|Read Only|Mandatory|Accepted values|
|:---------|:----------|:---------|:--------|:--------|:--------------|
|id|Unique id generated  when Track is created|Long|no|no|N/A|
|name|Name of the track|String|no|yes|N/A|
|milestones|Comma separated strings. Each string is a milestone and these are case sensitive. All of them should be specified in the same case. The first letter of the track needs to be specified in upper case.|String|no|yes|N/A|

##7.1 Get all the tracks:
###dev/api/milestone/pipelines
Method: GET

- Gets all the tracks. Each track will be having a set of milestones.

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/milestone/pipelines -H "Accept: application/xml" -v -u {email}:{apikey}
```
###Response:
- Status 200: Returns the events list related to the contact.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

###Example response:
```javascript
[
    {
        "id": 5146448186310656,
        "milestones": "Open,New,Prospect,Proposal,Won,Lost",
        "name": "Default"
    }
]
```

##7.2 Create a track:
###dev/api/milestone/pipelines
Method: POST

- Creates a track. Name should not be "Default". Milestone fields should be a single string - a group of multiple strings separated by comma. First letter of all the milestones should be in uppercase.

###Using curl : 
```sh`
	curl https://{domain}.agilecrm.com/dev/api/milestone/pipelines -H "Content-Type : application/json" -H "Accept : application/json" -d ‘{"name" : "Test" , "milestones" : "Open,New,Prospect,Proposal,Won,Lost" }’ -v -u {email} : {APi Key} -X POST
```
###Example Response:
```javascript
 {
   "id": 5146448186310656,
   "milestones": "Open,New,Prospect,Proposal,Won,Lost",
   "name": "Default"
 }
```
###Response - statuses:
- Status 200: Track created successfully and it returns the newly created track as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

##7.3 Update a track:
###dev/api/milestone/pipelines
Method: PUT

- Updates a track. Name should not be "Default". Milestone fields should be a single string - group of multiple strings separated by comma. First letter all the milestones should be in uppercase. The Id of the track needs to be specified in the request json to update the track. Otherwise, it will be considered as a new track.

###Using curl : 
```sh
	curl https://{domain}.agilecrm.com/dev/api/milestone/pipelines -H "Content-Type : application/json" -H "Accept : application/json" -d ‘{"id": 5146448186310656,
 "name" : "Test" , "milestones" : "Open,New,Prospect,Proposal,Won,Lost" }’ -v -u {email} : {APi Key} -X PUT
```

###Example response:
```javascript
 {
   "id": 5146448186310656,
   "milestones": "Open,New,Prospect,Proposal,Won,Lost",
   "name": "Default"
 }
```
###Response - statuses:
- Status 200: Track updated successfully and it returns the updated track as JSON in response.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)
- Status 400: If the input is in wrong format

##7.4 Delete a track:
###dev/api/milestone/pipelines/{id}
Method: DELETE


- Deletes the track with the particular id. The id passed in the url will be used to identify the track.

###Using curl
```sh	
	curl https:{domain}.agilecrm.com/dev/api/milestone/pipelines/5149503652888576 -H  "Accept:application/json" -v -u {email}:{API Key} -X DELETE
```
###Response:
- Status 204: Track deleted successfully.
- Status 401: Unauthorised. (when the user name and password fields are wrong.)

##8 List of campaigns.
###dev/api/workflows
Method: GET 
- Returns a list of campaigns

For the Response in the XML format, add the header 'Accept' as application/xml. By default, the response will be in XML format. Paging can be applied using the page_size and cursor query parameters. 

###Using curl
```sh
curl https://{domain}.agilecrm.com/dev/api/workflows?page_size=20&cursor=E-ABAIICNGoRc35hZ2lsZS1jcm0tY2xvdWRyFAsSB0NvbnRhY3QYgICAgKLThAoMogEIcHJhYmF0aGuIAgAU -H "Accept : application/json" -v -u {email}:{apikey}
```
###Example response:
```javascript
{
	id: 5727517264576512
	name: "letter head"
	created_time: 1437996248
	updated_time: 0
	rules: "{"nodes":[{"NodeDefinition":{"name":"Start","thumbnail":"json/nodes/images/common/Start.png","icon":"json/no			des/icons/common/Start.png","info":"Entry point of your campaign. Please create workflow for your 				campaign starting from here.","help":"Start point in your campaign  .... 						Action</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</td>\r\n</tr>\			r\n<tr>\r\n<td align=\"center\" valign=\"top\">\r\n<table style=\"border-collapse: collapse 		!important; width: 100%;\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\r\n<tbody>\r\n<tr>\r\n<td style=\"color: #606060; font-family: Helvetica,Arial,sans-serif; font-size: 13px; line-height: 125%;\" align=\"center\" valign=\"top\">\r\n<p style=\"margin: -5px;\"><img style=\"vertical-align: middle;\" src=\"https://www.MYSITE.com/logo.png\" alt=\"\" /> Your Caption</p>\r\n<p style=\"margin: 10px;\"><a style=\"padding: 6px; color: black; border: none;\" href=\"https://twitter.com/agile_crm\" target=\"_blank\"><img style=\"border: none;\" src=\"https://www.agilecrm.com/img/twitter-icon.png\" alt=\"twitter\" /></a> <a style=\"padding: 6px; border: none;\" href=\"https://www.facebook.com/CRM.Agile\" target=\"_blank\"><img style=\"border: none;\" src=\"https://www.agilecrm.com/img/facebook-icon.png\" alt=\"fb\" /></a> <a style=\"padding: 6px; border: none;\" href=\"https://plus.google.com/109484059291748745615/posts\" target=\"_blank\"><img style=\"border: none;\" src=\"https://www.agilecrm.com/img/googleplus-icon.png\" alt=\"gplus\" /></a></p>\r\n<p><a href=\"https://www.agilecrm.com\" target=\"_blank\">www.mysite.com</a></p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td align=\"center\" valign=\"top\">&nbsp;</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n</center></div>"},{"name":"track_clicks","value":"yes"},{"name":"purl_keyword","value":""},{"name":"time_zone","value":"ACT"},{"name":"on","value":"any_day"},{"name":"at","value":"any_time"}],"States":[{"yes":"hangup"}]}]}"
	unsubscribe: {
	action: "ASK_USER"
	tag: ""
	unsubscribe_email: ""
	}-
	domainUserId: 5609297576722432
	creatorName: "ghanshyam"
}
```
###Response - statuses:
- Status 200: Successfully retrieved the campaign list. 
- Status 401: Unauthorized. (When the user name and password fields are wrong.)

##9 Youtube links for Rest APIs.

###Create contact:

<a href="https://www.youtube.com/watch?v=8-zQMprfDgE" target="_blank"><img src="https://github.com/agilecrm/rest-api/blob/master/api/createContact.PNG" 
alt="IMAGE ALT TEXT HERE" width="440" height="180" border="10" /></a>

###Update contact partial:

WIP

###Update tag by ID:

<a href="https://www.youtube.com/watch?v=xlid69VOUxE" target="_blank"><img src="https://github.com/agilecrm/rest-api/blob/master/api/updateTags.PNG" 
alt="IMAGE ALT TEXT HERE" width="440" height="180" border="10" /></a>

###Create deal:

<a href="https://www.youtube.com/watch?v=otxmAuuHeDA" target="_blank"><img src="https://github.com/agilecrm/rest-api/blob/master/api/createDeal.PNG" 
alt="IMAGE ALT TEXT HERE" width="440" height="180" border="10" /></a>

###Get list of contact example 1:

<a href="https://www.youtube.com/watch?v=2Yui9HJXAOE" target="_blank"><img src="https://github.com/agilecrm/rest-api/blob/master/api/createDeal.PNG" 
alt="IMAGE ALT TEXT HERE" width="440" height="180" border="10" /></a>

###Get list of contact example 2:

<a href="https://www.youtube.com/watch?v=jJAAZKqybQ4" target="_blank"><img src="https://github.com/agilecrm/rest-api/blob/master/api/createDeal.PNG" 
alt="IMAGE ALT TEXT HERE" width="440" height="180" border="10" /></a>