
---
layout: post
title: "Checkstyle: It's Important"
date: 2010-04-02
comments: false
---


People have a love/hate relationship with [Checkstyle][1]. Some people, myself included, are in the 
love camp. We include it in our development process. We strive for 0 checkstyle warnings. We fear 
committing Checkstyle warnings because of the ensuing shame resulting from [Hudson][2] unstable build 
emails. Other people tend to hate checkstyle. They think that checkstyle piles on work on the already 
piled on work stack. Here's why that's the wrong mindset to have.

Checkstyle enforces your team's agreed upon code style guidelines. Code style is very religious subject. Very Religious. It creates just as many holy wars as the "My IDE is better than yours" argument. But I think everyone can agree that having code style guidelines is a good thing. It aids teams by keeping code uniform and easy to read. Reading code is hard enough without having to weed through 20 different ways types of if-statements and for-loops.

This one is easy. You have style guidelines, let's make sure that everyone is following them. It doesn't 
take much work to integrate Checkstyle into the daily build. Enforcing code style is a good thing. It 
really doesn't matter what the style is. What matters is that everyone follows what rules the team has 
agreed upon.

### Checkstyle forces you to write documentation

Developers hate writing documentation. If you love writing code comments then you are a sick, sick 
person and you probably already love Checkstyle. Feel free to stop reading. Now for the rest of us, we 
often have a personal two-way connection to our source. We know what it does. At least we know what it 
does right now. What about two weeks from now? One month? One year?

Integrating Checkstyle into your development process forces you to stop and think. It makes you question 
what your code does. It can help validate your design. The intricacies of your code exist in your head 
at this very moment. Why not write it down? Checkstyle makes it so.

The argument against forcing developers to write documentation is that they will write useless comments. This isn't a fault of Checkstyle, it's a fault of the developer. Why aren't they writing good 
documentation? Why aren't other developers getting on the bad documenter's case? Is anyone else 
reviewing their code to make sure they aren't being sloppy? Checkstyle doesn't do any of that. Your 
team does.

Checkstyle isn't for you, it's for everyone else. I believe we all can agree that clear, concise, 
and well documented code helps other developers. There is a feeling of pure joy when you use a well-documented third party library. Since all code you write will be used by other developers, shouldn't you 
impose the same documentation standards on yourself that you wish everyone else would follow? What about 
the argument of "Why should I care about checkstyle? I know how to document". Even if it were true that 
you always wrote great documentation, 99.9% of us aren't like you. We need help verifying that we are 
indeed following code style standards. Checkstyle keeps us honest. After all, we are developers and 
developers are lazy. Sometimes we need a little prodding to keep ourselves disciplined.

Checkstyle is just a tool. If you don't use the tool correctly, then of course it's going to suck. Used in the right way it's extremely powerful, even for something as seemingly trivial as code style.




  [1]: http://checkstyle.sourceforge.net/
  [2]: https://hudson.dev.java.net/
  