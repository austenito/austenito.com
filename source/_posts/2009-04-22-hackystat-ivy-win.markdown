
---
layout: post
title: "Hackystat + Ivy = Win?"
date: 2009-04-22
comments: false
---



It's Google Summer of Code time so I checked out Hackystat and tried to build it from source. A couple 
hours later, my Hackystat development environment was setup. Ouch.

The hardest part about setting up my environment were all of the tool dependencies. To build 
[hackystat-utilities][1], [hackystat-sensorbase-uh][2], [hackystat-sensorshell][3], I needed to the 
following libraries:

![][4]  

Then I needed to set the following environmental variables: 

1. HACKYSTAT_*UTILITIES_*HOME 
2. HACKYSTAT_*SENSORBASE_*HOME 
3. JUNIT_*HOME* 
4. FINDBUGSHOME 
5. APACHE*JCS*HOME 
6. APACHE*COMMONS*LOGGING*HOME* 
7. RESTLETHOME 
8. JAVAMAIL*HOME* 
9. DERBYHOME 
10. CHECKSTYLE*HOME* 
11. EMMAHOME 
12. HACKYSTAT*ANTSENSORS*HOME 
13. ANT*ARGS* 
14. PMDHOME

As a developer it would be cool if I could check out the source files and run a couple of ant targets to 
retrieve the dependencies.

At work I've been experimenting with [Ivy][5] to download my project's dependencies. I download the 
dependencies to the project's library directory via an Ivy ant task and I'm done. There is no need to 
configure any environmental variables because the build script knows the "Home Folder" of the external 
libraries.

I checked on the [Hackydev Mailing List][6] and found a thread started by Aaron a long time ago called [Ivy for Java hackystat dependency management][7].

I think it would be really useful if it were easiser for new developers to check out the source and start 
hacking. Integrating Ivy into Hackystat's build system might be a useful project and help to reduce 
Hackystat's hacking entry barrier.

  [1]: http://code.google.com/p/hackystat-utilities/
  [2]: http://code.google.com/p/hackystat-sensorbase-uh/
  [3]: http://code.google.com/p/hackystat-sensor-shell/
  [4]: http://2.bp.blogspot.com/_gZ-LJtj9hxw/SfAz36BInkI/AAAAAAAAApE/sNlLCtKBYyw/s320/Picture+1.png
  [5]: http://ant.apache.org/ivy/
  [6]: http://groups.google.com/group/hackystat-dev
  [7]: http://groups.google.com/group/hackystat-dev/browse_thread/thread/ce03a4ae3283fd8/f8cbdf93fcb277b0?lnk=gst&amp;q=Ivy+#f8cbdf93fcb277b0
