# Consent

```json
{
    "id":"ef73005e-690d-487d-9977-28a3fee4bc5c",
     "metadata": [{}] 
}
```

Salesforce:
```json
{
  "j0t5t5b2@tkbxp5ia.com" : {
    "result" : "Success",
    "proceed" : {
      "email" : "true"
      "emailResult" : "Success"
    },
    "explanation" : [ {
      "objectConsulted" : "ContactTypePointConsent",
      "status" : "opt_in",
      "purpose" : "billing",
      "recordId" : "003xx000004TxyY",
      "value" : "true"
    },{
      "objectConsulted" : "Contact",
      "field" : "HasOptedOutOfTracking",
      "recordId" : "1",
      "value" : "true"
    }]
  },
  "4quxlswo@23wj7pwh.com" : {
    "result" : "Success",
    "proceed" : {
      "email" : "false"
      "emailResult" : "Success"
    },
    "explanation" : [ {
      "objectConsulted" : "Contact",
      "field" : "HasOptedOutOfEmail",
      "recordId" : "00Qxx00000skwO",
      "value" : "true"
    }  ]
  }
}
```
Google:
https://cloud.google.com/healthcare-api/images/consent_model.svg

Iubenda
```json
{
  "subject": {
    "id": "testsubject",
    "email": "subject@example.com",
    "first_name": "John",
    "last_name": "Doe",
    "verified": false
  },
  "legal_notices": [
    {
      "identifier": "privacy_policy",
      "version": 123
    },
    {
      "identifier": "term",
      "version": 123
    }
  ],
  "proofs": [
    {
      "content": "proof_1",
      "form": "proof_1 form"
    },
    {
      "content": "proof_2",
      "form": "proof_2 form"
    }
  ],
  "preferences": {
    "newsletter": false,
    "privacy_policy": true
  },
  "ip_address": "127.0.0.1"
}
```
Ping Identity
https://apidocs.pingidentity.com/pingdirectory/consent/v1/api/guide/#consent-api-activity

Kantara Draft Specification
https://kantarainitiative.org/confluence/pages/viewpage.action?pageId=151453732&preview=%2F151453732%2F151453730%2FConsent+Receipt+Specification+1_1_0+DRAFT+8+-+clean.docx

WSO2

https://docs.wso2.com/display/IS550/apidocs/Consent-management-apis/#!/operations#Consent#consentsPost

```json
{
   "services":[
      {
         "service":"<Service_Name>",
         "tenantDomain":"<Tenant_Domain_Name>",
         "purposes":[
            {
               "purposeId":"<Purpose_ID>",
               "purposeCategoryId":[
                  "<Purpose_Category_ID>"
               ],
               "consentType":"<Consent_Type>",
               "piiCategory":[
                  {
                     "piiCategoryId":"<PII_Category_ID>",
                     "validity":"days:<Number_Of_Days>"
                  },
                  {
                     "piiCategoryId":"<PII_Category_ID>",
                     "validity":"days:<Number_Of_Days>"
                  }
               ],
               "primaryPurpose":true,
               "termination":"days:<Number_Of_Days>",
               "thirdPartyDisclosure":false,
               "thirdPartyName":""
            }
         ]
      }
   ],
   "collectionMethod":"<Collection_Method>",
   "jurisdiction":"<Jurisdiction>",
   "language":"<Language_Abbreviation>",
   "policyURL":"<Service_Policy_URL>",
   "properties":[
      {
         "key":"<PII_Controller's_Public_Key>",
         "value":"v1"
      }
   ]
}
```