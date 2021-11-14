# Measure threshold rule violation Data Model

## Domain

The  schema is part of the  Domain

## Description

A measureThresholdRuleViolation is a violation of a rule that defines the in the 
MericDefMeasureThresholdRule.

## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Service/MeasureThresholdRuleViolation.schema.json).

The Data model is defined as shown below:

- `conformanceComparatorLower` : An operator that when applied on a value specifies whether a 
threshold is crossed or ceased to be crossed. This operator is used to compare with the conformanceTargetLower.

  - Optional


- `conformanceComparatorUpper` : An operator that when applied on a value specifies whether a 
threshold is crossed or ceased to be crossed. This operator is used to compare with the conformanceTargetUpper.

  - Optional


- `conformanceTargetLower` : A value used to determine if the threshold is crossed or ceases 
to be crossed. It represents the lower limit. The value should be less than the conformanceTargetUpper. The conformance comparators should also be logically defined so as to not lead to a logically impossible condition.

  - Optional


- `conformanceTargetUpper` : A value used to determine if the threshold is crossed or ceases 
to be crossed. It represents the Upper limit. The value should be greater than the conformanceTargetLower. The conformance comparators should also be logically defined so as to not lead to a logically impossible condition.

  - Optional


- `description` : Description for the MetricDefMeasureThresholdRule .

  - Optional


- `name` : Name for the MetricDefMeasureThresholdRule .

  - Optional


- `numberOfAllowedCrossing` : The number of allowed crossing occurrences in reference to the 
tolerancePeriod without a consequence being initiated.

  - Optional


- `thresholdRuleSeverity` : A threshold can be generated in different severity levels. A 
crossing for each level may require a different condition and possibly trigger a different consequence.

  - Optional


- `tolerancePeriod` : An interval of time of allowed crossing occurrences before a 
consequence being initiated.

  - Optional


- `appliedConsequence` : An Applied Consequence defines the action (prescribed action or notification) to take when a MeasureThresholdRuleViolation occurs.

  - Optional






## TMForum APIs that use this schema

Taking into consideration the snapshot of 04/02/2020 04:59:17 UTC the list of [TMForum Open APIs](https://www.tmforum.org/open-apis/) that uses this schemas is:

Coming soon