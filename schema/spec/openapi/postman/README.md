# TMFAPIPOSTMAN

This repository contains the postman collections for the TMF APIs.

Please import them into POSTMAN.

Remember to also import the TMF.environment into POSTMAN.

This way the TMF POSTMAN collection will use the TMF Cloud Sandbox where Reference Implementations are running.

In general the POSTMAN collections are organized in the following way:

-resourceAPI with POST, GET and PATCH (letting you create, get and modify the resources like Trouble Tickets)

-hubAPI with POST and GET (letting you create, get Hub representing PUB/SUB subscriptions)

-eventSubscriberTestAPI with GET current and history (letting you get the most up to date event or the history of the events 
sent to this test listener endpoint).
