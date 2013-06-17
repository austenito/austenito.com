
---
layout: post
title: "Baselines, Branching and Reviews!"
date: 2009-12-03
comments: false
---


We have come to a crossroads at work. 

On the left we have our latest release. On the right, we have the 
road leading to future changes, improvements, and success! Our latest release, lets call it 
FixLaterReleaseNow or FLRN for short, mainly consisted of developers committing to the trunk. This caused 
developers to commit unfinished, broken code to the mainline. When other developers would update, they 
would pull the broken code into their local workspace. I'm not sure if this led to the code rot that 
manifested itself, but something was wrong. Very very wrong.

Perhaps there was a problem with our peer reviews. We had little to none. The only set of eyes looking at the code were the author's. In FLRN we used the [Jupiter Eclipse Plugin][1] to facilitate our peer reviews. Jupiter is a great tool, but there were two major sticking points for us: 

1. Some developers use IDEs other than Eclipse. 
2. The turnover from setup -> moderation -> fixing review issues was way too long. On average it probably 
took developers 1.5-2 days to complete the process.

I love Jupiter. I've been talking with [Julie][2], the current maintainer of Jupiter, about how we can 
improve the plugin. That talk is for another blog on another day.

There were [broken windows][3] everywhere and no clean up crew to whip it into shape. Something needed to change and fast. We had no time in the FLRN codebase, but we have some time (a little) in the new release to get moving towards the proverbial Awesome Path.

To get on track we have integrated [Crucible][4], a code review tool from the great people at [Atlassian][5], into our development process. It's a bit buggy and doesn't integrate with the other Atlassian products as we would like, but Crucible increases our review turnover. It is much quicker to choose which files to review, comment on the source, and complete the review. The reviews are persisted so other people can checkout what happened in the review. What we are noticing is that developers are posting comments on lines of code and the author comes in and comments on his design decision. You just don't get that kind of immediate feedback when using Jupiter. 

So back to the developers committing broken code to the trunk. We don't want that. We want code that has been reviewed by other developers who are working on similar feature sets to be committed to the trunk. So my question is "How do we setup our branches?". (Keep in mind that we use Subversion) 

We are currently thinking of having two lines. The trunk, which contains "stable" code that developers can branch off of. In this context, stable means that the feature is complete and somewhat tested. There will be bugs, but we will iterate through them as we go.

The second line will be our feature branch. The feature branch can have many other branches contained in it. This is where developers can work on their specific features without touching the main line. In FLRN (Fix Later Release Now in case you forgot) developers would wait on committing their features because they were broken, or there would be a lot of rippling changes throughout the system, or because they wouldn't 
have any documentation which would cause our build to become unstable.

Now if we force developers to use the "Feature Branch" they can commit at any time without fear of 
breaking anyone else. 

Once the developers are ready to merge to the trunk, we can have other developers 
review their code. This seems like a good idea. Developers can commit early and often without breaking 
anyone. They can get their code reviewed by their peers. Everyone is happy.

Perhaps in the make believe place of No Bugs Land.

Complications arise when more than one developer is touching the same file. What if two developers finish 
their features but are using the same file. Do we merge their changes? Can we combine their features 
into a separate branch and then create a review? That might work.

We definately need some review and merging management. The problem we want to avoid is having a backlog 
of reviews. For example, Developer A might be working on file X. He finishes and requests a review for it
. Later that day Developer B finishes his feature which includes file X. He requests a review for his 
code. We now have a problem because there are two revisions of file X to review. If we don't merge both 
Developer A and Developer B's changes, we will have to review Developer A's changes, merge the changes, 
then review Developer B's changes. I feel the Horribleness!

I'm wondering how people handle different code baselines in their development environments. I'm going to 
have to do a bit of research, but this article by Jeff Atwood is a good starting point: [Coding Horror: Software Branching][6] (Edit: It seems that Jeff Atwood got his information from [Streamed Lines: Branching Patterns for Software Development][7])



  [1]: http://code.google.com/p/jupiter-eclipse-plugin/
  [2]: http://blog.sakuda.us/
  [3]: http://en.wikipedia.org/wiki/Fixing_Broken_Windows
  [4]: http://www.atlassian.com/software/crucible/
  [5]: http://www.atlassian.com/
  [6]: http://www.codinghorror.com/blog/archives/000968.html
  [7]: http://www.cmcrossroads.com/bradapp/acme/branching/
