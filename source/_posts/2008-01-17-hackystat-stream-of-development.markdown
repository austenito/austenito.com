
---
layout: post
title: "Hackystat Stream of Development"
date: 2008-01-17
comments: true
---


[![][1] ][2] 

Tonight I started working on the Hackystat version of [Atlassian's Stream of Development Consciousness][3] 
, which will tell mini-stories about what is currently happening in your development shop. Much like 
Facebook's Mini Feed, we want to provide awareness to people about what you did, when you did it.

The first thing I did was figure out how to request Hackystat data. For that information I headed over to 
the [Hackystat REST API Specification wiki][4] page and took a look at what was available to me. After a 
bit of head scratching and help from some fellow Hackystat hackers, I finally found the URI that should 
provide me with some interesting information.

Now that I got past that hurdle, now I can start to think about getting my web application (written in Rails yay!) to parse and display the right information. There are still a bit of things to think about like what type of information do we display? I was talking to Aaron online tonight and he came up with the idea of just displaying the amount of events that have taken place. For example, one mini-stream could say, '3 hours total dev time,  50 unit test invocations with 4 failing tests, and 200 builds in the last 2 hours'.

Of course that may be enough information for our little data stream, but it would be interesting to get 
more context behind the collected data. Perhaps we could start add comments to the mini-feeds? What if 
we added some telemetry to the mini-feeds? That would be cool to see how the mini-feeds turn into a large 
information feed over time with a telemetry chart.

What type of information should be collected/filtered? Currently commit data from Subversion is collected once a day. I think it would be important to see commit information in the mini-feed. Committing code is a good indicator of progress so it would be nice to get more up-to-date information with respect to commits.

Another metric that we commit once a day is Issue data from JIRA. It would be good if we could collect 
that data more often so that we could update the mini-feed with JIRA event information. I think that 
Filemetric and Code Issue data wouldn't be as useful as UnitTest and Commit information. I don't really 
know about this one. Maybe someone would want to see what kinds of FindBugs errors you have ;) Cool New 
FeaturesDrillDown information would be cool because if you find an interesting mini-event, you could click 
on the event link and see what types of unit test failures are happening or what classes were commited.An 
RSS feed with the mini-feed information would fit nicely into my Google Desktop app.

Commenting on feeds would also be cool. Mini-feed comparisons at the grain size of a day? Is your mini-feed activity the same during the week the same?Imply information from the data in the mini-feed. For example, if Aaron and I commit changes to the same module or are running similar unit tests, can we say that we are working together?  'Aaron and Austen have been working on module mini-feed for 2 hours'. 

Totally awesome.So fun!



  [1]: http://1.bp.blogspot.com/_gZ-LJtj9hxw/R5B4YN6OqRI/AAAAAAAAAEI/dPgC2tvdYK8/s320/facebook_minifeed.JPG
  [2]: http://1.bp.blogspot.com/_gZ-LJtj9hxw/R5B4YN6OqRI/AAAAAAAAAEI/dPgC2tvdYK8/s1600-h/facebook_minifeed.JPG
  [3]: http://blogs.atlassian.com/developer/2008/01/jira_studio_stream_of_developm.html
  [4]: http://code.google.com/p/hackystat-sensorbase-uh/wiki/RestApiSpecification
