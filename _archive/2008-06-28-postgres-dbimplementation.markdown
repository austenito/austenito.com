
---
layout: post
title: "Postgres DbImplementation"
date: 2008-06-28
comments: true
---


I think it's been about 2 months, but I've finally got a working, distributable, [Postgres Sensorbase Implementation][1] up. If you are interested, you can check out the [discussion][2] on the hackystat-dev mailing list.

The distribution process turned out to be quite interesting because [Aaron][3] and I went through a few iterations on how to package up the binaries without having the user to do too much. My original idea was to bundle up the sensorbase.jar classes into one big sensorbase-postgres.jar file. Aaron ended up hating this idea during a chat session of night-time internet (what we call after work fun learning time) The first reason why bundling jars up is that you are stuck using whatever libraries are included. If there is a new feature in a later release you either have to 

1. Wait till the authors release a new version with the included libraries or 
2. Re-jar it yourself. 

If the libraries aren't bundled you have the flexibility to swap the jars out. Hopefully the interfaces haven't changed or else it won't work anyways.

The second reason is much worse. 

If libraries are bundled together and they use different versions of the same dependent library, which 
version is loaded onto the classpath? Who knows. If all depenent libraries are not bundled in jar files, 
you can't have the class loader clobbering problem because there will only be one version of each library.
In the end we decided that the binaries of the distribution should consist of 2 files. The first is the 
sensorbase.jar and the second is the sensorbase-postgres.jar. The sensorbase-postgres.jar file contains a 
very minimal set of classes that are used as a library to the sensorbar.jar file. Starting up the 
sensorbase with the Postgres implementation is as easy as starting up the original sensorbase. java -jar 
sensorbase.jar


  [1]: http://code.google.com/p/hackystat-sensorbase-postgres/
  [2]: http://groups.google.com/group/hackystat-dev/browse_thread/thread/37d1fa69ec602968
  [3]: http://kagawaa.blogspot.com/
