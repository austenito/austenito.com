---
layout: post
title: "I think we need Hackystaller Version 2.0"
date: 2007-09-17
comments: true
---


Last night I was preparing for the September 17, 2007 milestone release of XmlData. Since the last milestone produced problems with the `ant -f verify.build.xml` invocation and with a missing dependency
check of Hackystat_Utilities, I decided to attempt to build from source on my desktop. My desktop had no 
Hackystat services or Java code analysis tools. I spent about 45 minutes getting my environment able to 
run a `ant -f verify.build.xml`. I found that I had to download and configure the environmental variables 
of all of the tools found at the [Hackystat-Sensorbase-UH Developer Guide][1].

XmlData requires Sensorshell and Hackystat utilities, which in turn requires Sensorbase. I hope I never
have to format my machine because this takes quite a while. Hackystat 7 was much easier because all of dependencies (If i remember correctly) were stored in your ant library directory.

I'm thinking that eventually we will be needing a tool like HackyInstaller, but something better. Let's call this tool HackyDevInstaller. It probably should be able to: 

1. Allow the user to choose the source and distribution releases of their Hackystat service(s) of choice.
2. Prompt the user to download the modules that the selected services depend on. 
3. Automatically download the right analysis tools, install them, and allow you to configure the 
environmental variables. 
4. It should also manage the user's current installation so they can remove or change their current 
settings. 
5. After developing some Ruby on Rails, I found that using [Instant Rails][2] was great for quickly 
starting development. It would be great if we could start a contained Hackystat development environment 
that started a local sensorbase service and provided some debugging utilities.

Perhaps we can find a NSF Research Grant for Undergraduates for a boy and girl who love hacking.


  [1]: http://code.google.com/p/hackystat-sensorbase-uh/wiki/DeveloperGuide
  [2]: http://instantrails.rubyforge.org/wiki/wiki.pl
