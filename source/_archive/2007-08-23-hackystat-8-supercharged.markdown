
---
layout: post
title: "Hackystat 8 Supercharged!"
date: 2007-08-23
comments: false
---


As I was in the shower 5 minutes ago, I had a thought.  (I think I should move my workstation into the shower because I channel the most ideas there).The Hackystat 8 architecture will work.  The reason why I believe it will work it is a combination of old and new things: 1. Disciplined Developers 2. Great Hackers 3. The new motto: "Convention over Configuration". 4. The sweet new architecture known as Version 8.
Disciplined DevelopersPavel found a great article of what it takes to be a [disciplined developer][1] .  Without discipline I don't think you will have the ability to produce quality software in a timely manner.  If you look up discipline in the dictionary, you'll come to [this page][2] .Great HackersIf there is one thing I miss about working in CSDL, it's reading other people's code.  Working on Hackystat 8 has reminded me what it is like to read beautiful, elegant code.  A motto I have come to accept is to "strive to be the worst in the group".  The only way to improve is to always have something to learn from your peers.  The Hackystat team is constantly providing me with that opportunity ;)Convention over ConfigurationThe motto "Convention over Configuration" is a large improvement over the Hackystat 7 motto, which was, "Config it, then let's document!"  (There wasn't really a motto for Version 7, so I decided to make one up for entertainment value).   In Hackystat 7, you had to go through so much application and dependency configuration via properties files.  That was a huge headache if you start developing on another machine.In Hackystat 8, things are already starting to look very different.  Gone are the days of endless configuration!  We now have small little modules, each with their own library that can be used by other modules.  Want to start the server up to receive data?  Configuration files?  No way!  Hit the command-line (java -jar sensorbase.jar).  I'm liking it so far.   Small little pieces, small little hacks, large contributions to the Hackystat project.Sweet New ArchitectureI'm not going to pretend I can explain the new architecture in detail.  Check out [Philip's Version 8 Design Doc][3] .  Sweet!As Aaron has said, [Hackystat is fun][4] . I can't wait till the shirts come out.  I'll take 10.


  [1]: http://www.codinghorror.com/blog/archives/000931.html
  [2]: http://hackystat.org/hackyDevSite/people.do
  [3]: http://code.google.com/p/hackystat/wiki/Version8DesignProposal
  [4]: http://kagawaa.blogspot.com/2007/08/google-issues.html
