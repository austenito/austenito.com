
---
layout: post
title: "DailyProjectData with Rails"
date: 2008-03-25
comments: true
---


The past month or so has been spent setting up [Hackystat][1] at work and hacking on a Rails [Daily Project Data][2] viewer. So far the going has been pretty slow. Several things came up like working on 
the [Netbeans Innovators Grant][3] proposal and preparing for a intern speech at the University of Hawaii.
Excuses, excuses I know.

The good thing is that tonight I came across a nifty Rails charting plugin called [Open Flash Chart][4]. A cool hacker wrote a Rails wrapper around the php package. I did some quick plugin installation, copied some example code, and hooked it up to the data retrieved from the Daily Project Data webservice:

[![][5] ][6] 

The charts on the left are embedded flash charts that I created using data from the CodeIssue and Unit 
Test DPDs. The charts are very responsive and have very nice eye candy. Hovering over a section in the 
chart will display extra data in a tool tip. If you take a look at the pie chart, I hovered over the pink 
section to display a tooltip saying, '94 Findbugs Issues'. Each section can also have embedded links to 
forward you to another page. In my case I would want to send the user to another page with a drill down 
of the type of data they selected.

These are the two charts I played around with tonight. I was thinking that it would be cool to display DevEvent data over the course of a day or a chart with Commit's and Issue information.

The current use case of the viewer is to create a information "dashboard" that can be used in 10- minute 
stand up meetings. The goal is to have the people in the meeting quickly interpret the data to drive 
discussions. In version 7, Daily Project Data information was displayed in a table. There was a lot of 
text and it was quite hard to get a feel for things without diving deeper into the data. I'm hoping the 
the using charts will help alleviate that issue.

I find it very cool that the new architecture allows us to have multiple viewer projects going. David and 
Pavel have the [SensorDataBrowser][7] and [ProjectViewer][8] modules up and running, but I really wanted 
to do some Rails hacking. So I just fired up a service and created my own view. I love it.

The source for the project is hosted on the [Google Code Site][9]. There isn't much there besides the 
source, but I wanted a place to commit my code. [Josh Stupplebeen][10] is also going to help out since 
he wants to get back into hacking Hackystat and wants more Rails experience.

Wants to hack Hackystat. Check.

Wants to learn Rails too. Check.

Sounds like a winner!



  [1]: http://code.google.com/p/hackystat/
  [2]: http://code.google.com/p/hackystat-analysis-dailyprojectdata/
  [3]: http://austenito.blogspot.com/2008/03/netbeans-innovators-grant.html
  [4]: http://pullmonkey.com/projects/open_flash_chart
  [5]: http://2.bp.blogspot.com/_gZ-LJtj9hxw/R-jqkZUygMI/AAAAAAAAAIA/FgLCZUtfC4I/s320/Screenshot-Mozilla+Firefox-1.png
  [6]: http://2.bp.blogspot.com/_gZ-LJtj9hxw/R-jqkZUygMI/AAAAAAAAAIA/FgLCZUtfC4I/s1600-h/Screenshot-Mozilla+Firefox-1.png
  [7]: http://code.google.com/p/hackystat-ui-sensordatabrowser/
  [8]: http://code.google.com/p/hackystat-ui-projectviewer/
  [9]: http://code.google.com/p/hackystat-viewer/
  [10]: http://jpstup.blogspot.com/
