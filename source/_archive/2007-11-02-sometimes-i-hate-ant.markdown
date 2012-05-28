
---
layout: post
title: "Sometimes I hate Ant"
date: 2007-11-02
comments: false
---


I wonder what the [Ant][1]  designers had in mind when they decided to not include the ability to have if-else logic.  Tonight I started work on some Ant macros to simplify the invoking of Hackystat version 8 sensors on the current set of Hackystat 8 projects.  I wanted the ability to print out a message saying, "You dont have the Hackystat 8 ant sensors installed so I'm not sending data."  Seems pretty straight forward. 1. Check if the ant sensors exist. 2. If the ant sensor doesn't exist, print out a message, do not send data. 3. If the ant sensor does exist, send the data, drink some beer.
What that simple if-else logic mutates into is: 1. Write a task that checks for the antsensor jar file. 2. Write a task that invokes the sensor if the jar file exists. 3. Write a task that prints a message if the sensor doesn't exist. 4. Write a task that invokes the three previous tasks.
I spare you the 50 or so lines of ant code that I need to write just to have some simple if-else logic.  I find it incredibly bogus that if-else can only be represented by setting properties and including an "if or unless" attribute in the target tasks.  Not having a target embedded conditional task just makes me angry.  The [Ant-Contrib][2]  Ant task extension attempts to add additional features that Ant doesn't include.Can't I just have a built in if-else clause?On a side note, I noticed that version 7 sensor data sending code would fail the build if the sensor was not installed.  Hackystat developers really should be "eating their own dog food", so it probably will be OK to require that they install their sensors.


  [1]: http://ant.apache.org/
  [2]: http://ant-contrib.sourceforge.net/
