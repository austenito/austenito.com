---
layout: post
title: "Implicit Values Are Hard"
date: 2013-06-11 18:57
comments: true
categories: 
---
I help lead instruction at [CodeNow][1], an organization teaching Ruby to under-represented 
high school students. Weekend after weekend, it's obvious that implicit values 
is a pain point. Forget about object oriented programming, classes, and syntax. Beginning 
rubyists don't understand structures storing values.

Take the following example:

```
def nyan_say(text)
  # awesome implementation
end
```

In this simple method, there are two problems confronting students. 

* What is the value of `text`?
* What is the outcome of a call to `nyan_say`

Almost every student asked what the value of `text` is, says it's nil. 
They don't understand variables are implicitly assigned when the method is called.

A similar problem happens when invoking the method:

```
nyan_say("nyan nyan nyan")
```

In Ruby, the last line is a method's return value (if there isn't an early
exit). This is done implicitly. It's not clear to students that method calls
return values. The same is true when assigning the method call to a variable.

```
nyan_speak = nyan_say("nyan nyan nyan")
```

One again it isn't obvious to students that `nyan_speak` stores the value
returned by the method call.

Programming is a tricky thing if you don't know about basic things like variable assignment. 
Perhaps tracing through a program visually would help.

As instructors, we need to come up with a better way to teach implicit values.

[1]: http://www.codenow.org
