
---
layout: post
title: "Code Review Lessons Learned"
date: 2008-03-18
comments: true
---


I moderated a code review today which provided some interesting lessons learned. 

1. Scale review scope according to code complexity. We just got through with a milestone release, so I 
decided that it was a good time to review our algorithm code we have been hacking on during the iteration.
It turns out that the one hour allotted for code reviews was way below the time required to review the 
code. I am talking about 400 lines of code that takes 2+ to review for correctness. I originally was 
relying on lines of code as a good indicator on how much code I should request for a review. Bad idea!
The reviewers felt rushed and were unable to follow the code logic because the review scope was too large.
So the lesson here is to not rely on lines of code when selecting the source code to review. If the code 
is very complex, as it was in our case, it is probably a good idea to focus on certain aspects to limit 
the scope. 
2. Provide explanations of external library method calls. I got a lot of questions about the 
external API method invocations, which were found everywhere in my code. Next time, I think it will be a 
good idea to provide brief explanations of what each method call does. 
3. Provide the source code for external libraries. If you have performed a review with [Jupiter][1], you know how important IDE features are when digging deep into someone's source. In lesson learned #2, I said 
that it is important to tell reviewers what external methods do. I think it is equally important to give 
reviewers the ability to jump into the method calls source to read the documentation or read the external 
source code. What I found during this review is that a lot of my code was skipped over because reviewers 
didn't know what the external method calls were doing. All they had to go on was the name and my inline 
comments. They ended up taking a lot of things for granted and assumed that everything was fine and dandy.
That is the exact opposite behavior that I want reviewers to have. If they are going to find interesting 
and helpful issues, they must question everything! No one writes perfect code. Especially not me.

Code reviews makes everyone on your team better. I can't wait to try [Crucible][2]


  [1]: http://code.google.com/p/jupiter-eclipse-plugin/
  [2]: http://www.atlassian.com/software/crucible/
