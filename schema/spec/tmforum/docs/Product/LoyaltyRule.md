# Loyalty rule Data Model

## Domain

The  schema is part of the  Domain

## Description

Loyalty rule, containing conditions, event types and actions.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Product/LoyaltyRule.schema.json).

The Data model is defined as shown below:

- `id` : Unique identifier for the loyalty rule.

  - Optional


- `href` : A reference to the loyalty rule.

  - Optional


- `isCNF` : This is a Boolean attribute that, if true, defines the condition clause of this rule to be represented in Conjunctive Normal Form (e.g., an AND of ORs). If the value of this attribute is false, then the condition clause will be represented in Disjunctive Normal Form (e.g., an OR of ANDs).

  - Optional


- `hasSubRules` : A Boolean attribute that signifies whether this loyalty rule has one or more sub-rules. Sub-rules are used to enforce a hierarchical nesting of rules, so that parent rules may control the execution and other semantics of sub-rules that they contain.

  - Optional


- `isMandatoryEvaluation` : A Boolean attribute that, if true, signifies that evaluation (and possibly action execution) of this entity is mandatory and must be attempted. If the Mandatory property value of this entity is false, then the evaluation of this entity is considered to be &#x27;best effort&#x27; and may be ignored.

  - Optional


- `usage` : A free-form string attribute that recommends how this policy object should be used.

  - Optional


- `keywords` : A string attribute that defines a set of one or more keywords that a policy administrator may use to assist in characterizing or categorizing a policy object to facilitate search operations.

  - Optional


- `policyName` : A generic naming attribute that can be used to identify different policy entities.

  - Optional


- `commonName` : A user-friendly identifier of the loyalty rule.

  - Optional


- `description` : A free-form description of the rule.

  - Optional


- `loyaltyEventType` : References to linked event types.

  - Optional


- `loyaltyCondition` : References to linked conditions.

  - Optional


- `loyaltyAction` : References to linked actions.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon