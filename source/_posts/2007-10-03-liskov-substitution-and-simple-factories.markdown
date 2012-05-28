
---
layout: post
title: "Liskov Substitution and Simple Factories"
date: 2007-10-03
comments: false
---


I came across a nice article on [Liskov Substitution][1]  that clearly explained what it means to follow the principle.  For those you who don't wish to read up on Liskov's Substitution Principle, the basic idea is that any sub-class should work, without any code change, for any interface that accepts a parent type.  This got me thinking about the way I'm currently implementing the [Simple Factory Pattern][2] .  The factory pattern provides you the ability of,  "Insulating the creation of objects from their usage. This allows for new derived types to be introduced with no change to the code that uses the base class."  So the implementation in Java would be:public class SimpleFactory { /** Prevents direct instantation. */ private SimpleFactory(){ } public static FooObject getInstance(BaseParameter baseParameter) {   if(baseObject instanceof FirstChildParameter){     // return FirstFooObject sub-class instance using first child parameters.   }   else if(baseObject instanceof SecondChildParameter){     // return SecondFooObject sub-class instance using second child parameters.   }   // etc, etc. }}This implementation violates the Liskov Subsitution Principle, which is found in reputable books such as [The Elements of Java Style][3] , because each new sub-type of BaseParameter that is created would require a code change to the simple factory.  Perhaps this is one those cases where there is a trade off between code brittleness and encapsulation.  While I agree that it is nice to encapsulate how objects are created using a factory because the method calling code  does not have to worry about what type of object to create, I find the [code smell][4]  behind my factory implementation to be disturbing.  First, large numbers of subclasses would have to rely on type-specific code that constructs and returns the appropriate instances.  Second, if a library with the SimpleFactory is in use by other developers, they are hosed if they create their own BaseParameter subclass.  The code will not be able to be changed because Factory methods are static, therefore unable to be sub-classed.The Liskov Substitution Principle is something I'm going to have to think about when designing new code.  It is nice to finally get a solid grasp on what it means to violate this well-known principle.  Perhaps my implementation of the Simple Factory is incorrect and there is an implementation that does not violate the principle.  I should read more code.


  [1]: http://codebetter.com/blogs/jeremy.miller/archive/2007/09/28/just-some-little-fundamental-things-to-help-you-codebetter.aspx
  [2]: http://en.wikipedia.org/wiki/Abstract_factory_pattern
  [3]: http://www.amazon.com/Elements-Java-Style-Allan-Vermeulen/dp/0521777682
  [4]: http://c2.com/xp/CodeSmell.html
