
---
layout: post
title: "Hackystat Mini-Feed Part 2"
date: 2008-01-23
comments: false
---


This weekend I did a bit of ruby hacking to parse out the sensor data information from the Sensorbase webservice calls and found it to be relatively easy.  Ruby is so nice ;)  As I was hacking I had this feeling that I was placing the logic to parse the data in the wrong place.  For my quick prototype, bunching all of the logic together was fine.  But it turns out I need a higher level of abstraction in the form of a new service.  [Philip explains in more detail][1]  to Pavel and Dan Port in his email about creating a new service.[![][2] ][3] In order to separate the view from the mini-feed business logic, I need a new service that can allow clients to retrieve the abstracted mini-feed information.This new service will allow multiple views such as the Rails webapp I'm writing, RSS feed viewers (Maybe RSS isn't a view, but I want people to have that information available via RSS), twitter, and other apps to be able to request the mini-feed information via webservice calls.Now what type of information can be requested?I've only gotten through half of the RESTful Webservices book so I only know how (relatively speaking since I'm still a REST noob) to design a service allowing clients to GET information.  I'm probably going to take a look at the telemetry service or the [SensorBaseClient][4]  class in order to figure out how to get my service working.With the new service comes a Mini-Feed REST API that I must design.  I have to think of what type of information can be requested by clients.  Here are some of my initial thoughts:- Mini-feed information spanning all projects, kind of like what twitter does on it's public timeline.- Relevant mini-feed information for a specific project.- Relevant mini-feed information for a set of users- The start and end time of the information can be specified to reduce/expand the grain size.- Webservice calls to filter the data. (Explanation below)The ideas I just listed above isn't anything new.  You can get all of that information using the sensorbase REST API.  I'm thinking that abstracting the webservice calls to a higher level will help filter the data that isn't useful for mini-feed purposes.  Clients lose the flexibility of getting all the data, but will hopefully gain an easier and smaller interface to get the information they need.[![][5] ][6] So what is this filtering I'm talking about?  Pavel and Aaron turned me onto Facebook's News Feed preferences, which allows you to customize the information that appears in your News Feed.  The cool thing is that it doesn't completely remove all of the information that you don't like.  It just shows it less frequently.The goal would be to get this type of control in my Rails webapp and request the user's customized information using the "Mini-Feed service data filter" REST API.How does that sound?[][7] 
## Comments ##




aaron

i second the "just do it" approach. i'm sure scuba steve would agree. we can figure it out the a, b, c, d's a little later. btw, this is cool.


Philip Johnson

Hi Austen,Sounds great!  This is a very interesting project and I'm excited to see what you come up with.My initial reaction is the following:  Since the most important 'risk factor' is figuring out (a) what kinds of information to display in this mini-feed, (b) when to display it, (c) how to display it, and (d) who to display it to,  I would not get hung up at this point in separating things in multiple services with a REST API. Instead, I would implement a single RoR service, as quickly as possible, that gathers and displays  mini-feed information for a given user, just like the Twitter home page. That's enough functionality for us to start using and evaluating. Once we gain experience with this "spike solution" (and probably it will undergo a lot of evolution once it's actually in use), there can be a second phase of development where the underlying abstraction is identified and split out into its own REST API.  Until you can articulate precisely what the mini-feed will display, it's very hard to design the REST API.




  [1]: http://groups.google.com/group/hackystat-dev/msg/4ef6d1ed3ded82fd
  [2]: http://4.bp.blogspot.com/_gZ-LJtj9hxw/R5cjR-bD7bI/AAAAAAAAAEg/K4jJukZ4wbY/s320/mini-feed-stack.jpg
  [3]: http://4.bp.blogspot.com/_gZ-LJtj9hxw/R5cjR-bD7bI/AAAAAAAAAEg/K4jJukZ4wbY/s1600-h/mini-feed-stack.jpg
  [4]: http://hackystat-sensorbase-uh.googlecode.com/svn/trunk/javadoc/org/hackystat/sensorbase/client/SensorBaseClient.html
  [5]: http://4.bp.blogspot.com/_gZ-LJtj9hxw/R5cov-bD7cI/AAAAAAAAAEo/gYw8RVQqqyQ/s320/facebook_eq.JPG
  [6]: http://4.bp.blogspot.com/_gZ-LJtj9hxw/R5cov-bD7cI/AAAAAAAAAEo/gYw8RVQqqyQ/s1600-h/facebook_eq.JPG
  [7]: http://3.bp.blogspot.com/_gZ-LJtj9hxw/R5ch7ubD7ZI/AAAAAAAAAEQ/3uNE-zyZU24/s1600-h/mini-feed-stack.jpg
