# Payment analytics Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Analytics/PaymentAnalytics.schema.json).

The Data model is defined as shown below:

- `paymentDueAmount` : Payment due amount

  - Optional


- `paymentDueDate` : Payment due date

  - Optional


- `paymentPaidAmount` : Payment paid amount

  - Optional


- `paymentPaidDate` : Payment paid date

  - Optional


- `paymentPaidPostingDate` : Posting date for payment paid

  - Optional


- `paymentPaidValueDate` : Value date for payment paid

  - Optional


- `paymentPaidDiscountAmount` : Cash discount granted for clearing

  - Optional


- `bankCountryCode` : Bank country key

  - Optional


- `bankNumber` : Bank number

  - Optional


- `bankAccountNumber` : Bank account number

  - Optional


- `iban` : IBAN (International Bank Account Number)

  - Optional


- `swift` : SWIFT Code / Bank Identifier Code (BIC)

  - Optional


- `paymentCardNumber` : Payment card number

  - Optional


- `paymentCardValidFromDate` : Payment card valid from

  - Optional


- `paymentCardValidToDate` : Payment card valid to

  - Optional


- `paymentCardAuthorizationNumber` : Payment card authorization number

  - Optional


- `paymentCardAuthorizationDate` : Payment card authorization date

  - Optional


- `checkNumber` : Check number

  - Optional


- `paymentInstallmentNumber` : Payment number within payments associated with the same installment

  - Optional


- `invoiceReferenceIssueDate` : Date of invoice associated with this payment

  - Optional


- `customerStatusDate` : Date when status was set or changed last time

  - Optional


- `customerCreationDate` : Date when customer was created

  - Optional


- `customerBirthDate` : Date of birth

  - Optional


- `accountStatusDate` : Status last change date

  - Optional


- `accountCreationDate` : Account creation Date

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