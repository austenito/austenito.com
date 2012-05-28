
---
layout: post
title: "JAXB Pet-Peeve"
date: 2007-12-09
comments: false
---


A while back [Randy Cox][1]  made a comment on his blog about his teammate disliking JAXB:"Another aspect of our differences is Brian's drive to build a high quality system from the start, while I tend to like to start with the basics and increase scope incrementally. Brian's strong dislike of JaxB, resulted in a lot of work on the Model to mitigate the JaxB limitations."Curious about what the limitations of JAXB were, I made a comment on his blog.  Sadly I was left out to dry on the matter and forgot about it for a month.  This past week at work I revisited my JAXB code and figured out one JAXB limitation.There is no easy to abstract JAXB auto-generated classes.So what normally happens with JAXB is: 1. Create an XML schema 2. Run the XJC compiler, which creates the JAXB auto-generated classes. 3. Write the java code using the JAXB classes to marshall and unmarshall data.
The problem occurs when you have 2 JAXB objects that do similar things:Apple Object Interface:setName()setColor()Orange Object Interface:setName()setColor()So now you have 2 classes that perform the same operations.  You end having to write code specific to each object:Apple apple = new Apple();apple.setName("Ringo");apple.setColor("Red");Orange orange = new Orange();orange.setName("Japanese name for an orange");orange.setColor("Orange");This is an excellent time to abstract their behaviors to enforce the [DRY][2]  principle.  Why don't we go ahead and create a 'Fruit' interface that abstracts the behavior of each object?  Technically you can, but because the Apple and Orange classes are auto-generated, it isn't such a good idea to edit them directly.  If you ever decide to change the XML schema, you will have to re-run the XJC compiler, which in turn will overwrite your changes.  Another alternative is to wrap the JAXB objects in a wrapper class to provide a common interface.  If the schema changes, the auto-generated class changes will be transparent to the wrapper's clients.Although it is possible to provide common interfaces between the JAXB objects, there is no clean way to do it.  Maybe there should be a way to specify behaviors of objects to the XJC compiler.  That would remove the round-about way of abstracting the JAXB classes.I'm sure that there even more limitations to the JAXB package, but currently it's benefits outweigh the drawbacks.  XML parsing is fun again!  (Well, more fun than manipulating the XML DOM tree directly)


  [1]: http://cox-engineering-log.blogspot.com/2007/11/27myisern-13-final-release.html
  [2]: http://en.wikipedia.org/wiki/Don%27t_repeat_yourself
