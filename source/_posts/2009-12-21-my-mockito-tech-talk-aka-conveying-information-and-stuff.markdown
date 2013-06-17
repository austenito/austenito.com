
---
layout: post
title: "My Mockito Tech Talk. AKA: Conveying Information and Stuff"
date: 2009-12-21
comments: false
---


It seems that 3 weeks after writing [Paying Myself First][1], I have already failed. Well not completely.
I haven't been writing down my thoughts in blog form because I've been preparing slides for a tech talk at 
work. I've been wanting to give a talk about [Mockito][2]. My project is on a transition point so I 
figured that it would be imperative to give a talk this month before we ramp up again in January.

I suck at public speaking. 

That process of reading your audience. Conveying information. All of that 
stuff. Who needs it right? Hook me up with my IDE, give me a fridge full of diet mountain dew and get 
out of my way. I got things to do. If only the world worked that way.

Since I'm on this whole, let's work hard and do awesome kick, I've been looking at public speaking as an area to focus on. After all, if I want to be able to lead software teams, I need to be able to be someone who is able to be informative and also know what the hell they are talking about. I've done the whole Toastmasters thing before. I like the concept, but I didn't like the structure and organization of the particular group I was a part of. So without any outside help, I got to searching on how I could improve my slides and effectively present a technical presentation to my peers.

And the search began.

I found this interesting PDF using the Google: [Presentation Tips - How to Give a Technical Presentation][3]. It's main points were to break up your presentation into distinct beginning, middle, and end sections. The normal presentation layout, which I totally brainfarted on. My presentation sections were a mess. I didn't show any importance, background, or motivation in the beginning. I had no illustrations to help my audience during the meat of my presentation. The end was the best part, most likely because the slides came to end. When I fixed my slides a bit, I changed my presentation's beginning to grab my audience's attention with some facts about my project's level of code coverage. The middle gave the basic functionality of Mockito such as mocking, stubbing and verifying. I added some code examples and gave some background on when and why you would want to use Mockito's features. There were a lot of questions that were brought up during this part of the talk. Some were of mocking and stubbing use-cases and others were related to project specific usages.

I got a sense of confusion from the audience at this point. I tried to use the List examples from the 
Mockito documentation, but that turned out to be a bit too high-level for a presentation. Most of the 
developers didn't "get it". I finished off my presentation with a "real-world" Mockito example where I 
tested the behavior of a action class populating a stack. The action class implemented ActionListener and would operate on Stack's object interface. I got good responses from this part of the presentation. 

I think that developers had that "ah hah" moment when they could finally see Mockito in action from an IDE
. Overall I think the talk went well. It was very informal and the I was getting a good vibe. The best 
part was the fun-ness factor. I'd have to give it a 9 out of 10. This was the most fun I have ever had 
during a tech talk. One thing I noticed that might have increased the fun-ness factor was the room's size
. Due to scheduling conflicts we had to switch to another room where the developers were comfortably 
crammed together. Best move ever. I think that helped the talk out a lot because it made the 
presentation feel less like a presentation and more like a discussion. I think I'll always have my talks 
in that room if it's possible.

My team has already started to use Mockito to write their unit tests. The real measure of success will be if the rest of the project's teams will start to drink some of that delicious Mockito Koolaid. Oh yeah. A coworker on another project likes the idea of Mockito and believe that he will use it for his tests. Something interesting I ended up telling him was that:

> If you already write tests, then you know the pain of trying to setup and build the dependencies of the 
> object you are testing. If you don't write tests then you'll be wondering what's the point.

I hope they get it.


  [1]: http://austenito.blogspot.com/2009/11/paying-myself-first.html
  [2]: http://mockito.org/
  [3]: http://www.home.hs-karlsruhe.de/~kech0001/ifs/ex-en/tech_exercises/Technical_English_presentations.pdf
