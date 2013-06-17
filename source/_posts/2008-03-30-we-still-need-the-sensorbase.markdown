
---
layout: post
title: "We still need the Sensorbase"
date: 2008-03-30
comments: false
---


There is a [Hackystat database discussion][1] going on that is causing some confusion. I'm not 
explaining myself well so I'm going to draw some pictures with the hope of clearing things up. I'm glad 
we are having this conversation because it is helping to flesh out the Hackystat conversations sparked at 
work. We all have to have courage to express new ideas.

Philip says in the thread:

> It would be extremely easy, maybe one day's work, to extend your RoR application to support just the
> subset of the SensorBase REST API for PUTting of sensor data. Once that's  done, you have no need 
> of the sensorbase at all; you can install Hackystat sensors, point them at your RoR app, and have your 
> own custom two-tier, database-driven, client-server web application that is compatible with Hackystat 
> sensor data. You now have total control and can do processing whereever you see fit.

I do believe that we still will need the Sensorbase because it does a great job of collecting data and 
providing the basic API for retrieving data. There is nothing wrong with the way the SensorDataBrowser 
retrieves data from the Sensorbase.Here is the layout of how the current architecture is layed out in my 
mind:

[![][2] ][3] 

We are limited by having only one service, the Sensorbase, as the interface for all services. This 
reduces the flexibility of the architecture because we are stuck if we want to write an extension or 
optimization that doesn't fit in with the current Sensorbase. For example, we might want to build 
snapshots or aggregates on the database end.

Here is the architectural layout with MySQL behind the Sensorbase instead of Derby:

[![][4] ][5] 

Having MySQL (or Derby in networked mode or any other database allowing multiple connections)  adds to 
what clients can do with the current architecture rather than removing the need for the Sensorbase. We 
would have added flexibility because we can have multiple ways to get data. In the picture above, we 
could get the data from the current services, or from the new DPD service that we envision, or the 
Hackystat view can directly access the database (although the view should use the services).In the case of 
the new DPD service, the same API would be used, but the data retrieval and calculation implementation 
will be changed. Since the same API will be used, the changes would be transparent to the clients.

For example, clients would still be able to get DPD Commit data using a webservice call regardless of which DPD implementation is used:

```
http://hackystat.ics.hawaii.edu/dailyprojectdata/commit/johnson@hawaii.edu/Default/2006-01-31T00:00:00.000
```

If another public service is built on top of the DPD service, there would be no problems because the API 
would be the same.

Philip also writes:

> To me, going down the path of expanding the role of your forked SensorBase into doing analyses opens up 
> a fairly large can of worms that you might live to regret down the road. As just one danger, you could 
> end up maintaining your own, highly idiosyncratic version of the SensorBase that is incompatible with 
> the "public" version and so you cannot integrate new analyses and tools that others are contributing to 
> the Hackystat ecosystem.


We don't want to replace the current sensorbase, we just want to add another service on the same level as 
the current sensorbase. We would still be able to use all of the 'public' features provided by the 
offical Sensorbase and services because the APIs for the services would remain unchanged. The problem, as 
Philip mentions, is we would have to maintain all of the custom services and anyone who doesn't use MySQL 
will not be able to use our optimizations.

So in conclusion, we don't want to move towards a two-tiered, data-base driven web application. We want 
to utilize the benefits of the current RESTful architecture and caching, while also using the benefits of 
a RMDB.Hopefully that clears up what I wrote in the email. Whether or not that is the right way to go is 
still to be determined. Philip also says, 

> It seems far better to figure out how to solve your performance issues within the current architectural 
> boundaries, which mimic the web's in general and so are pretty much time-tested.

After talking with Aaron, I don't believe that caching will be removed because there will be other 
'public' services that still will be using it. I agree that we should investigate the current caching 
mechanism and plan on testing it against my workplace's data this week.


  [1]: http://groups.google.com/group/hackystat-ui-ror-viewer/browse_thread/thread/b8000e263ebb747f
  [2]: http://4.bp.blogspot.com/_gZ-LJtj9hxw/R_C1g5UygNI/AAAAAAAAAII/79JHYHU9aHg/s320/current_architecture.JPG
  [3]: http://4.bp.blogspot.com/_gZ-LJtj9hxw/R_C1g5UygNI/AAAAAAAAAII/79JHYHU9aHg/s1600-h/current_architecture.JPG
  [4]: http://2.bp.blogspot.com/_gZ-LJtj9hxw/R_C45ZUygPI/AAAAAAAAAIY/M-REQgK0aKI/s320/mysql_architecture.JPG
  [5]: http://2.bp.blogspot.com/_gZ-LJtj9hxw/R_C45ZUygPI/AAAAAAAAAIY/M-REQgK0aKI/s1600-h/mysql_architecture.JPG
