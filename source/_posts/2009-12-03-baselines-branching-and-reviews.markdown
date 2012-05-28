
---
layout: post
title: "Baselines, Branching and Reviews!"
date: 2009-12-03
comments: false
---


We have come to a crossroads at work. &nbsp;On the left we have our latest release. &nbsp;On the right, we have the road leading to future changes, improvements, and success! Our latest release, lets call it FixLaterReleaseNow or FLRN for short, mainly consisted of developers committing to the trunk. &nbsp;This caused developers to commit unfinished, broken code to the mainline. &nbsp;When other developers would update, they would pull the broken code into their local workspace. &nbsp;I'm not sure if this led to the code rot that manifested itself, but something was wrong. &nbsp;Very very wrong.Perhaps there was a problem with our peer reviews. &nbsp;We had little to none. &nbsp;The only set of eyes looking at the code were the author's. &nbsp;In FLRN we used the&nbsp;[Jupiter Eclipse Plugin][1] &nbsp;to facilitate our peer reviews. Jupiter is a great tool, but there were two major sticking points for us: 1. Some developers use IDEs other than Eclipse. 2. The turnover from setup -> moderation -> fixing review issues was way too long. &nbsp;On average it probably took developers 1.5-2 days to complete the process.
I love Jupiter. &nbsp;I've been talking with [Julie][2] , the current maintainer of Jupiter, about how we can improve the plugin. &nbsp;That talk is for another blog on another day.There were [broken windows][3] &nbsp;everywhere and no clean up crew to whip it into shape. &nbsp;Something needed to change and fast. &nbsp;We had no time in the FLRN codebase, but we have some time (a little) in the new release to get moving towards the proverbial Awesome Path.To get on track we have integrated&nbsp;[Crucible][4] , a code review tool from the great people at [Atlassian][5] , into our development process. &nbsp;It's a bit buggy and doesn't integrate with the other Atlassian products as we would like, but Crucible increases our review turnover. &nbsp;It is much quicker to choose which files to review, comment on the source, and complete the review. &nbsp;The reviews are persisted so other people can &nbsp;checkout what happened in the review. What we are noticing is that developers are posting comments on lines of code and the author comes in and comments on his design decision. &nbsp;You just don't get that kind of immediate feedback when using Jupiter. So back to the developers committing broken code to the trunk. &nbsp;We don't want that. &nbsp;We want code that has been reviewed by other developers who are working on similar feature sets to be committed to the trunk. &nbsp;So my question is "How do we setup our branches?". &nbsp;(Keep in mind that we use Subversion)We are currently thinking of having two lines. &nbsp;The trunk, which contains "stable" code that developers can branch off of. &nbsp;In this context, stable means that the feature is complete and somewhat tested. &nbsp;There will be bugs, but we will iterate through them as we go.The second line will be our feature branch. &nbsp;The feature branch can have many other branches contained in it. &nbsp;This is where developers can work on their specific features without touching the main line. &nbsp;In FLRN (Fix Later Release Now in case you forgot) developers would wait on committing their features because they were broken, or there would be a lot of rippling changes throughout the system, or because they wouldn't have any documentation which would cause our build to become unstable. &nbsp;Now if we force developers to use the "Feature Branch" they can commit at any time without fear of breaking anyone else.Once the developers are ready to merge to the trunk, we can have other developers review their code. &nbsp;This seems like a good idea. &nbsp;Developers can commit early and often without breaking anyone. &nbsp;They can get their code reviewed by their peers. &nbsp;Everyone is happy.Perhaps in the make believe place of No Bugs Land.Complications arise when more than one developer is touching the same file. &nbsp;What if two developers finish their features but are using the same file. &nbsp;Do we merge their changes? &nbsp;Can we combine their features into a separate branch and then create a review? &nbsp;That might work.We definately need some review and merging management. &nbsp;The problem we want to avoid is having a backlog of reviews. &nbsp;For example, Developer A might be working on file X. &nbsp;He finishes and requests a review for it. &nbsp;Later that day Developer B finishes his feature which includes file X. &nbsp;He requests a review for his code. &nbsp;We now have a problem because there are two revisions of file X to review. &nbsp;If we don't merge both Developer A and Developer B's changes, we will have to review Developer A's changes, merge the changes, then review Developer B's changes. &nbsp;I feel the Horribleness!I'm wondering how people handle different code baselines in their development environments. &nbsp;I'm going to have to do a bit of research, but this article by Jeff Atwood is a good starting point:&nbsp;[Coding Horror: Software Branching][6] &nbsp;(Edit: It seems that Jeff Atwood got his information from&nbsp;[Streamed Lines: Branching Patterns for Software Development][7] )
## Comments ##




Jason

I would say that the branching pattern itself wouldn't be much different. But the implementation of it is much easier and faster to create and merge branches. Plus if you're not using about the latest version of SVN (1.6+) then I think you need to manually track which branches have been merged. I also really like Git's history rewriting features such as rebase for keeping a clean history.


austen.ito

Yes I love Git and use it for my side projects.  I&#39;m not sure how the branching pattern that we are trying to use with SVN would be better in Git or any other SCM system.  How is it better/different?


Jason

Have you ever tried git? It has a much better branching/merging model than SVN. I need to start messing around with git-svn more.




  [1]: http://code.google.com/p/jupiter-eclipse-plugin/
  [2]: http://blog.sakuda.us/
  [3]: http://en.wikipedia.org/wiki/Fixing_Broken_Windows
  [4]: http://www.atlassian.com/software/crucible/
  [5]: http://www.atlassian.com/
  [6]: http://www.codinghorror.com/blog/archives/000968.html
  [7]: http://www.cmcrossroads.com/bradapp/acme/branching/
