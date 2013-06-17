
---
layout: post
title: "Meticulosity!"
date: 2007-11-05
comments: true
---


**[Meticulous][1]: marked by extreme or excessive care in the consideration or treatment of details.**

I have found out this week that one of my new goals is to be meticulous. This week alone I have made 
three stupid mistakes that could have been avoided if I pay a little more attention to detail. Here are 
the stupid mistakes: 

1. Totally messed up merging my subversion sensor with the main line of ant sensors. Take a look how 
I [overwrote all of Julie's and Aaron's hard work][2] Philip found out that there was lots of white 
spaces in the build sensor. Some inspection showed that all of the ant sensors were reverted back to 
before my branching. Yikes. 
2. After doing some work build hacking, I broke the build because I didn't test all of the modules. I 
tested one module, saw that it passed, and went to sleep. I wake up at 7 to find out every other module 
failed. Bleh. 
3. Tonight, I spent an hour or so trying to figure out why SCLC would not work. With Julie's awesome help 
I found out that I was using ActivePerl 5.6 rather than 5.8. sigh

Being a bit more meticulous should lead to less headaches. I think this is the reason that I love unit 
testing. When I'm hacking I write some code, write some tests, and forget about it. I don't have to 
worry about my code being correct because I've tested to see if it works as I have intended. If I do find 
a bug, I do some debugging to figure out the cause, then write a test case to reproduce the problem. I 
can only image what types of horrors I would bring out if I didn't have unit testing. Now all I need is 
some way to test my process. 

```
Assert.fail("Don't be a noob you are overwriting everyone's hard work!")
Assert.fail("You didn't try every case that might cause the build to fail.")
Assert.fail("Wrong PERL version!")
```

Or maybe I should stop hacking at 12am...


  [1]: http://m-w.com/dictionary/meticulous
  [2]: http://groups.google.com/group/hackystat-svn/msg/f1a79b132cdf1337
