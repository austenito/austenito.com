
---
layout: post
title: "Unit Tests Show Me The Way"
date: 2007-12-13
comments: false
---


After a week long hiatus, I finally got back into Hackystat hacking.  I re-started my work on the [Commit Daily Project Data Analysis Service][1] .  After some initial startup lag (getting a drink, listening to some easy hacking music radio, etc) I was ready to whip out some code and get it done.  Or so I thought.  I had no idea where to begin.  I only had 3 classes, but I still was lost.  What was I working on a week ago?  Does everything work or do I need to debug?  Oh man this is going to be a long night...Then I remembered that I wrote unit tests as I was coding.  I did a quick ALT+SHIFT+X+T and saw the little green bar appear in eclipse.  (I'm running unit tests with a keyboard shortcut for those of you who don't use eclipse)  Hooray, it seems that everything I did in that class is functional.  I did this for the remaining two classes and was able to figure out relatively quickly what I completed the previous week.Writing unit tests while coding continues to amaze me with it's usefulness.  I can add "restarting long forgotten work" to the existing list of unit test uses such as "debugging while I code" and "ensuring the correctness of my logic".  I remember long ago that someone told me that unit tests help developers learn about the intent of someone's code.  I guess this is a prime example of showing someone (me!) what the hell I did last week.


  [1]: http://code.google.com/p/hackystat-analysis-dailyprojectdata/wiki/RestApiSpecification
