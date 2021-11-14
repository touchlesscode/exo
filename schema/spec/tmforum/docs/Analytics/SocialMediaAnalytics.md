# Social media analytics Data Model

## Domain

The  schema is part of the  Domain

## Description



## Data model

A JSON Schema corresponding to this data model can be found
[here](https://github.com/tmforum-rand/schemas/blob/candidates/Analytics/SocialMediaAnalytics.schema.json).

The Data model is defined as shown below:

- `startTimestamp` : The beginning of the measurement interval 
START_TIMESTAMP to END_TIME_STAMP defines define the period for which the measurement is done

  - Optional


- `endTimestamp` : The beginning of the measurement interval 
START_TIMESTAMP to END_TIME_STAMP defines define the period for which the measurement is done

  - Optional


- `twitterFollowers` : Total followers at the end of the period

  - Optional


- `twitterFollowersGrowth` : Difference in followers between beginning of period and end of period

  - Optional


- `twitterTweets` : Total own tweets in period

  - Optional


- `twitterRetweets` : Total retweets to own tweets in period

  - Optional


- `twitterReplies` : Total replies to own tweets in period

  - Optional


- `twitterLike` : Total likes to own tweets in period

  - Optional


- `facebookPosts` : Total facebook posts in period

  - Optional


- `facebookReactions` : Total facebook reactions to own posts in period

  - Optional


- `facebookShares` : Total facebook shares to own posts in period

  - Optional


- `facebookComments` : Total facebook comments to own posts in period

  - Optional


- `facebookFans` : Total facebook fans / friends at the end of period

  - Optional


- `facebookFansGrowth` : Difference in fans / friends count between beginning of period and end of period

  - Optional


- `youtubeVideos` : Total own youtube videos in period

  - Optional


- `youtubeVisualizations` : Total youtube visualizations to own videos in period

  - Optional


- `youtubeLikes` : Total youtube likes to own videos in period

  - Optional


- `youtubeDislikes` : Total youtube dislikes to own videos in period

  - Optional


- `youtubeComments` : Total youtube comments to own videos in period

  - Optional


- `youtubeSubscribers` : Total youtube subscribers at the end of the period

  - Optional


- `youtubeSubscribersGrowth` : Difference in subscribers count between beginning of period and end of period

  - Optional


- `instagramPosts` : Total own instagram posts in period

  - Optional


- `instagramLikes` : Total instagram likes to own posts in period

  - Optional


- `instagramComments` : Total instagram comments to own posts in period

  - Optional


- `instagramFollowers` : Total instagram followers  at the end of the period

  - Optional


- `instagramFollowersGrowth` : Difference in followers count between beginning of period and end of period

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