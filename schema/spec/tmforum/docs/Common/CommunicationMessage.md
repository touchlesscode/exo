# Communication message Data Model

## Domain

The  schema is part of the  Domain

## Description

Communication message means a notification approach in the format of a message which can be dispatched (sent) to the certain user by the system with the content which can be felt and understood by the recipient. The user can be either a final customer or a customer service agent. The message can reach the customer in different interaction channels, including: email, short message, mobile app notification (push).

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Common/CommunicationMessage.schema.json).

The Data model is defined as shown below:

- `content` : The content of the communication message

  - Optional


- `description` : Description for the whole object

  - Optional


- `href` : Hypertext Reference of the Communication Message

  - Optional


- `id` : Unique identifier of Communication Message

  - Optional


- `priority` : The priority of the communication message.
Small number means higher priority.

  - Optional


- `scheduledSendTime` : The scheduled time for sending the communication message

  - Optional


- `sendTime` : The time of sending communication message

  - Optional


- `sendTimeComplete` : The time of completion of sending communication message

  - Optional


- `state` : Status of communication message

  - Optional


- `subject` : The title of the message, necessary for the email and mobile app push

  - Optional


- `tryTimes` : How many times do you want to retry the delivery of this message?

  - Optional


- `messageType` : The type of message, such as: SMS, Email, Mobile app push notification

  - Optional


- `attachment` : Any attachment associated with this message

  - Optional


- `receiver` : The receiver(s) of this message

  - Optional


- `sender` : The sender of this message

  - Optional


- `characteristic` : Any additional characteristic(s) of this message

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:16 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon