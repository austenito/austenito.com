
---
layout: post
title: "XmlData: The results are in"
date: 2007-08-31
comments: false
---


After running three test runs of the [XmlData sensor][1], I have gotten the sensor up and running. The three test run settings were: 

1. The default JVM heap size, which is 64ish MB. 
2. An increase of JVM heap size to 1024 MB with a manual invocation of System.gc() after each send to 
the sensorbase and after each file. 
3. An increase of JVM heap size to 1024 MB.

After I fixed the problem of loading the hashmap with duplicate entries, the sensor failed to 
finish sending data due to an Out of Memory Exception. After some investigation, I found that the 
sensor was failing when the largest file was unmarshalled. The largest file was 10 MB in size.

First Test Run with no increase in heap: 

[![][2] ][3] 

So what I decided to do was increase the heap size and found that the sensor completes. Great success! 
At 1:13, you can see the largest spike on the heap usage graph. That is the time when the 10 MB file 
was unmarshalled. With the increase in heap, the sensor had no problems.

[![][4] ][5] 

For fun, I ran one last invocation of the sensor with out the manual System.gc() calls.  
It turns out that the sensor allocates around 26 more MB to send the same amount of data. It 
is interesting to note that at the end of the sensor process, the data is very small, but the sensor 
still uses the same amount of allocated memory. 

In the 2nd invocation, the heap usage graph shows that it only uses a minimal amount of memory.

[![][6] ][7] 

I will need to document in the user guide to increase the heap size if sending large files. It might 
be a good idea to tell users to increase their heap to a large number. If we come across the case where 
a user has an abnormally large file, we may need to go the route that Philip suggested of writing a 
custom SAX parser. That will remove the need to load the entire document into memory. 

The sensor is almost functional. I noticed that version 7 data includes [pMap attributes][8], which I probably will need to separate. After thats completed, I can write some documentation and release! Hopefully I can send out a review request at the next milestone.


  [1]: http://code.google.com/p/hackystat-sensor-xmldata/
  [2]: http://2.bp.blogspot.com/_gZ-LJtj9hxw/RtnFF-8bFNI/AAAAAAAAACc/2g9bbFSEsKE/s320/082707-1hour.PNG
  [3]: http://2.bp.blogspot.com/_gZ-LJtj9hxw/RtnFF-8bFNI/AAAAAAAAACc/2g9bbFSEsKE/s1600-h/082707-1hour.PNG
  [4]: http://3.bp.blogspot.com/_gZ-LJtj9hxw/RtnFGO8bFOI/AAAAAAAAACk/-EXkqwtceVY/s320/082807-1hr.PNG
  [5]: http://3.bp.blogspot.com/_gZ-LJtj9hxw/RtnFGO8bFOI/AAAAAAAAACk/-EXkqwtceVY/s1600-h/082807-1hr.PNG
  [6]: http://4.bp.blogspot.com/_gZ-LJtj9hxw/RtnFGe8bFPI/AAAAAAAAACs/ckCidsfhQqE/s320/083107-1hr.PNG
  [7]: http://4.bp.blogspot.com/_gZ-LJtj9hxw/RtnFGe8bFPI/AAAAAAAAACs/ckCidsfhQqE/s1600-h/083107-1hr.PNG
  [8]: http://hackystat.ics.hawaii.edu/hackystat/docbook/ch15s05.html
