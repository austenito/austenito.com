---
layout: post
title: "Pair Programming Talk"
date: 2014-03-24 22:16
comments: true
categories: tech
---

I really love pair programming. I do it everyday at [Kitchensurfing](http://kitchensurfing.com)
and I can't imagine every programming without a pair.

As I was thinking about what to write about, I found a post from 2007 called
[Hacking Fitness](http://austenito.com/blog/2007/10/14/hacking-fitness/) where I mentioned
pairing.

> I have found that learning how other people think about code and their code tracing
> process is very useful. While pair programming is not useful all the time
> (although some people swear by pair programming), I find that after you experience
> it with another developer, you start to think like them when you are coding.
> I noticed this a while back when I started to trace through code like my coworker.
> You start wrapping the code around your head in different ways. You see the little things
> that you would not have seen before. Totally useful.

At the time, I believed pairing wasn't useful all the time because
I never experienced pairing 100%. As a developer, I know I get lost in the details
and I often focus on my own implementation. I now believe it's impossible to write
truely excellent code without a pair.

<iframe src="https://www.slideshare.net/slideshow/embed_code/32689798" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px 1px 0; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="https://www.slideshare.net/austenito/pairing-at-atkitchensurfing" title="Pair Programming at Kitchensurfing" target="_blank">Pair Programming at Kitchensurfing</a> </strong> from <strong><a href="http://www.slideshare.net/austenito" target="_blank">austenito</a></strong> </div>

I recently gave a talk at [HI Capacity](http://hicapacity.org/) about how we
pair program at Kitchensurfing. One of my favorite points was how we
don't do pull requests at Kitchensurfing.  My open source experience taught me that
pull requests are great. They let you asynchronously
reviews other's code. What I've learned is that pairing is so much better. Continuous review
crushes pull requests. Always. It's a pretty bold statement, however I know I get a ton
more insight by pairing that reading a pull request. Most of the time pull request comments end
up being:

> Hey add some tests

or

> This styling is bad

That's not helpful. We want all of our developers to have context around what everyone on
the team is doing. A high [bus count](https://en.wikipedia.org/wiki/Bus_factor) is super
important. Everyday, we get to say

> Hey that code looks great. Let's ship that.

> Let's refactor this.

> What's the simplest thing we can do?

And that's amazing.
