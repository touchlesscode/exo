# Balance topup Data Model

## Domain

The  schema is part of the  Domain

## Description

Represents a detailed description of a recharge operation requested over a bucket (defined by a specific product or reference to a product (i.e.: a commercial id such as an msisidn) and a service type)

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Customer/BalanceTopup.schema.json).

The Data model is defined as shown below:

- `bucket` : A reference to the bucket impacted by the request. This is used in scenarios where the requestor knows beforehand the bucket that is going to be impacted instead of just referring to the commercial identifier of the impacted product and the type of bucket created under that product

  - Optional


- `amount` : Amount (can be monetary or non-monetary) to be recharged in the bucket

  - Mandatory


- `channel` : Indicator for the channel used to request the top-up operation. Structure including at least attribute �name�

  - Mandatory


- `product` : A reference to the product related to the bucket that is impacted by the balance related operation

  - Optional


- `type` : A preconfigured value that describes a TopUp type which determines the prepay balance bucket in which the top-up is done (national-voice, roaming-voice, promotional-voice, data, ....)

  - Mandatory


- `description` : Description of the recharge operation

  - Optional


- `href` : A resource URI pointing to the resource in the OB that stores the detailed information. This is typically the resource url to retrieve individual top-up operation details

  - Mandatory


- `id` : Unique Identifier within the server for the recharge operation request

  - Mandatory


- `isAutoTopup` : Indicates if the topup requested is an autotopup (to be processed periodically)

  - Optional


- `nrOfPeriods` : For autotopup indicates the number of occurrences of the period the recharge operation must be executed. If not included then no limit is set to stop the executionof the topup every period

  - Optional


- `partyAccount` : A reference to the account that owns the bucket impacted by the balance related operation

  - Optional


- `paymentMethod` : Payment method used for the recharge operation (e.g.: cash, credit card, �). Structure including at least attribute �name�. Notice that the use of a voucher can be managed as a specific methodtype, where he voucher code can be passed as value.

  - Optional


- `recurringPeriod` : For autotopup indicates the periodicity for the recharge operation (monthly, weekly, )

  - Optional


- `relatedParty` : Used to provide information about any other entity with relation to the operation

  - Optional


- `requestor` : Identifier for the user/customer/entity that performs the top-up action. This can be used to indicate the identifier of an agent that performs the operation on behalf of a user via a customer service channel. Structure including at least attributes �role� and �name�.

  - Optional


- `voucher` : Identifier for the voucher when the topup can be perfomed by this means (referenced by a voucher based payment mean). This attribute is left in this release to keep compatibility with previous version and for implementations that do not relay on paymentMethods. A voucher can be managed as a specific methodtype, where he voucher code can be passed as value.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon