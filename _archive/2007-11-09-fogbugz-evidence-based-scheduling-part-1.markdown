
---
layout: post
title: "FogBugz Evidence Based Scheduling Part 1"
date: 2007-11-09
comments: false
---


The other night I was sweeping through my feed reader as usual when I came across a [blog][1]  talking about [FogBugz Evidence Based Scheduler][2] . > "Wow",  I thought.  That sounds pretty good since I am a horrible estimator.  I can't give a good estimate until I get waist deep into my task.  I ask Aaron about it and he shuts me down:Austen: [Evidence Based Scheduling] is awesome. Aaron: you think Evidence Based Scheduling is awesome?Aaron: Write a blog on how that sucks.Aaron: estimates probably sucks.  I think software engineering research people would eat that up and show how it sucks.Austen: I think its good.  Why do u think estimates suck? is it because they are never accurate?Aaron: First of all, it is leap. Leap sucks.   It is almost like PSP.  Psp sucks.  Read Philip's and Ann Diseny's papers on that.So my next task is to check out Philip and Ann Disney's Papers on [PSP Data Quality][3] .  Hopefully it will help me understand why estimation "sucks."
## Comments ##




russ

The evidence is what you make it. Lies, Damned Lies, and Statistics.I use the Leap timer for two things: helping me to remember to be focused on one thing (multi-tasking bad) and to do the yearly performance eval (hmmm, what did I do all last year?).


austen.ito

Great conversation.  I'm finding how little I know about why Hackystat is so great when compared to the current industry.  I think its time to do some research at: http://csdl.ics.hawaii.edu/Publications/MasterList.html;)


aaron

so, it took 10 years to get it into the main stream tool industry? see joel's own feedbackwhat is the sense of self generated estimates in a highly repetitive programming environment. if everything is the same, then the estimates from last year should work the same. anyway, i'm not sure philip saw this part of EBS. “We’re rolling out FogBugz 6.0 at work, and I’m finding that I actually like the time tracking. For one thing, it’s a tool for focus. When you kick off the timer on a task, you don’t want to jump around and multitask because it will just throw off the timer. The timer feature itself is pretty easy to use.” -- Some Feedback on EBSThe reason why that timer thing is crazy is: You can't even ask them to push a button: Toward ubiquitous, developer-centric, empirical software engineeringso, i still have two issues.1) crazy timer thing2) EBS works well in repetitive tasks in a stable environment, so why does one need self reported estimations. in that case, the manager should be able to tell you, you have 3 days and it should actually take 3 days.


Philip Johnson

Evidence-based scheduling is not new.  The PSP provided support for this 10 years ago, where estimates included confidence intervals based upon historical data of actuals vs. predicted.My belief is that evidence based scheduling has been, and will continue to be, helpful to organizations where there is a high level of stability in personnel, team structure, development process, and application domain, plus a need to precisely characterize costs and resources.


aaron

sucks is a harsh word. i don't mean sucks like it sucks. but i mean sucks like it sucks. :) haha. first off - Leap does not suck. I was just being harsh. The problem isn't with the software, it was with the approach. The approach that people will self report about what they are doing is not realistic. Its called measurement dysfunction. Its kinda like how users don't know what they want. PSP and Leap were stepping stones for what we have now with Hackystat. And in Hackystat we haven't really found a good use for Active Time. secondly - estimation doesn't suck. But, IMHO it seems like FogBugz is using self-reporting to figure out estimations. I suppose that is what estimations is all about. However, i seriously don't understand how it will work in practice. The bottom line is that it seems that measurement dysfunction has a high probability of affecting their results. i've read only a little bit about EBS. so, i would like to hear what other people think as well. EBS might work for certain people. "Disciplined people"... haha, i think i heard that argument before.  Brooks would say, "does EBS attack the essence of the estimation problem?" I don't think so. At the very best, it is an accidental improvement (unless of course it actually hurts the development process by producing inaccurate estimations).  anyway, this is a good software engineering research discussion. sounds like a research project.(one last thing -- when software tools provide claims they should provide the science behind why it makes sense. we should be doing that too. we (and everyone) shouldn't just be making pretty charts and saying this is going to revolutionize the industry. that is bogus! There is NO SILVER BULLET)




  [1]: http://feeds.feedburner.com/%7Er/SoftwareByRob/%7E3/165761072/
  [2]: http://www.fogcreek.com/FogBugz/docs/60/topics/schedules/Evidence-BasedScheduling.html
  [3]: http://csdl.ics.hawaii.edu/Research/PSP/PSP.html
