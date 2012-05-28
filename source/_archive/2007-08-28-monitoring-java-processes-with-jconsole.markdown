
---
layout: post
title: "Monitoring Java Processes with JConsole"
date: 2007-08-28
comments: false
---


I am currently working on fixing some Out of Memory (OOM) exceptions that are being thrown by the [Hackystat XmlData sensor][1] .  Philip suggested in an [email][2]  that the a good first step would be to start looking at heap usage with [JConsole][3] .   JConsole is actually a decent tool.  It gives you graphs of heap usage over time, spawned threads, created classes, and a nice little over view.  The tool even lets you invoke the garbage collector on the monitored process.The Overview of the monitored process.[![][4] ][5] The Heap Monitoring Tab[![][6] ][7]  Tonight I was trying to reproduce the OOM exception, which from the exception log, was thrown when a 10MB file was unmarshalled.  I tried to reproduce the error by only sending data from the 10MB file, but the exception was not thrown.  After consulting the screenshots I took of the previous night's test run, I found out that OOM exception was thrown after  an hour of sending data.  I also noticed that the heap usage hovered around the high 50MB to low 60MB range.My hypothesis is that the memory usage was almost at a maximum when the large 10MB file was accessed.  So if I can keep the heap usage leveled off, maybe the exception will not get thrown.   To test my hypothesis, I pressed on the "Perform GC" button a couple times while sending data.  I noticed that the heap usage would stay at the mid to high 50MB range.  That led me to insert some 'System.gc()' calls after each file and after sending a batch of data.  The test run is currently running and I do notice that the heap usage is about 10MB lower on average.Wow it looks like you get a blog with updates before the blog is posted!  The exception was just thrown again, but the heap was around 49MB when it encounter the 10MB file.  I'm beginning to think that the solution may be to increase the JVM heap from the command-line.  I did a test invocation with a 40 MB data file and the OOM exception was thrown immediately.  If the sensor sends all of the data with 1024MB of heap allocated, we may just have to inform users to increase the heap size.Requesting the user to increase the heap size in this case may be the correct solution.  Previously, increasing the heap did not work because [I implemented the sensor wrong][8] .  I need to write a blog entitled, "It's usually your fault."  We'll just have to wait and see how the current test run goes.[][9] 


  [1]: http://code.google.com/p/hackystat-sensor-xmldata/
  [2]: http://groups.google.com/group/hackystat-dev/browse_thread/thread/b6bb9957fe0e7db8/7a81ead80a6735a1?#7a81ead80a6735a1
  [3]: http://java.sun.com/developer/technicalArticles/J2SE/jconsole.html
  [4]: http://3.bp.blogspot.com/_gZ-LJtj9hxw/RtVEAO8bFII/AAAAAAAAABI/9ZYXCyM-e74/s320/jconsole_overview.PNG
  [5]: http://3.bp.blogspot.com/_gZ-LJtj9hxw/RtVEAO8bFII/AAAAAAAAABI/9ZYXCyM-e74/s1600-h/jconsole_overview.PNG
  [6]: http://3.bp.blogspot.com/_gZ-LJtj9hxw/RtVEAO8bFHI/AAAAAAAAABA/iIPEQvMyTN8/s320/heap_usage.PNG
  [7]: http://3.bp.blogspot.com/_gZ-LJtj9hxw/RtVEAO8bFHI/AAAAAAAAABA/iIPEQvMyTN8/s1600-h/heap_usage.PNG
  [8]: http://groups.google.com/group/hackystat-dev/msg/bf20b6c058f7c22b
  [9]: http://groups.google.com/group/hackystat-dev/browse_thread/thread/b6bb9957fe0e7db8/7a81ead80a6735a1?#7a81ead80a6735a1
