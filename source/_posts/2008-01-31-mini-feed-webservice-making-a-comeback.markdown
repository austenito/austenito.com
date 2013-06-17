
---
layout: post
title: "Mini-Feed Webservice Making a Comeback?"
date: 2008-01-31
comments: false
---


The Hackystat Mini-Feed has hit a road block. A Mini-Feed webservice may be the answer.

### What I want to do

I had the idea that the mini-feeds should display some aggregated information based on batches of the 
sensor data entries. This will allow the feed to say things like:

```
@ 12:02pm Austen has invoked an ant build.
@ 4:04pm Philip has run the Emma Coverage tool. The foo module currently has 99.9% method level 
coverage.
@2:02am Aaron has commited 25 files.
```

###The Problem

The issue I had tonight was the large amount of webservice requests required to get the right data. There are basically two ways to request project data in Hackystat.  

1. Request the index of sensor data entries, which provides you with information such as the URL to the entries' representation, a timestamp, sdt, user, etc. 
2. Use the URL found in the index to drill down into the entities' representation.

To implement the Mini-Feed, I need to drill down into the entities' representation to get the entries' runtime and data type specific stuff. For those of you wondering what the difference between timestamps and runtime are, timestamps are unique to all data entries. It acts as the 'primary key' of an entry. A runtime can exist in multiple entries and provides a way to 'batch' data together. An example of a batch of data would be all of the entries associated with an unit test tool's execution. Each batch would have information about the unit test's execution, such as whether or not a test passed or failed.

Drilling down into each data entry is time-consuming due to the large number of data entries. If the 
index has 5000 entries, I will have to make 5000 separate requests to get the entry specific information. My tests of performing 3000 or so web requests to my local sensorbase took about 45 seconds to complete. 

Thats just too long. I think the overhead of making all those requests is causing the slowdown. Thats my 
theory anyways...The solution?

So I was thinking "How come the DailyProjectData services don't have that problem too?"  I believe the 
reason is that there is only one webservice call binding each entries' data to Java objects. So in order to remove the large amount of requests I will have to create a Mini-Feed service that can talk directly to 
the SensorBaseClient.  I am wondering if caching will get rid of this problem. If so, I probably should 
hold off on writing a Mini-Feed service.
