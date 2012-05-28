
---
layout: post
title: "I'm still learning"
date: 2007-09-27
comments: false
---


> I'm currently plowing through the Mythical Man Month by Fred Brooks and came across the above quote tonight.  I find it funny and interesting how things he writes apply to software development today.  Man Month was written over 30 years ago, yet we see the beginning of agile ideals.  Change is going to happen, so we might as well be prepared for it.Fast forward to today and I find that I'm learning and changing everyday as I'm developing.  A good example is my littering of static factory methods in my code.  A year ago I read Effective Java and said to myself, "Hey these static factory methods are awesome.  Having names for your "construction" methods would be crazy good!"  What really ended up happening was:private FooObject(Parameters){  // Do stuff with parameters}public static FooObject createFooObject(Parameters){  return FooObject(Parameters);}I did that for almost every object.  I can see the benefits of being able to return any type of object, but all that leads to is unnecessary casting of objects.  There are certain places where static factory methods are useful, but I didn't really gain anything except having more code to maintain and document.   What a headache. So now I have learned and I have changed my design.  Every thing I read, learn, and practice is being tucked away into my hacker toolbox.  While it may be frustrating to have to re-design my code, it is a great feeling to be able to look at a problem and think of multiple ways to approach it.  Someone said that if all you have is a hammer, you'll only see nails.  I want the whole hardware store.


