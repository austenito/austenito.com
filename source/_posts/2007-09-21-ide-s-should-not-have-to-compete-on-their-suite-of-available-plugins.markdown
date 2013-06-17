
---
layout: post
title: "IDE's should not have to compete on their suite of available plugins"
date: 2007-09-21
comments: false
---


The title of this blog is inspired by a one of my very smart coworkers, "IDEs should not have to compete 
on their suite of available plugins, but on their core editor's usability."  My coworker said this in 
reference to [Jupiter][1], which is an Eclipse review tool plugin. My coworker is a Netbeans users and 
was asked to use Jupiter to speed up the review process. At work there is a collossal IDE war. In one 
camp we have the Netbeans user's who feel that introducing [features that existed 3 years ago in Eclipse][2] is the way to go. And in the other camp we have the superior Eclipse users. (Can you tell I am a 
happy Eclipse user?) I am over exaggerating, both IDEs have their pros and cons. But the point is that 
users shouldn't have to chose an IDE based on what suite of plugins are available. Netbeans users should 
be able to use Jupiter. Developers shouldn't have to learn the Netbeans API in order to write a Jupiter 
plugin with the same core functionality.

What my coworker suggested was the creation of a Generic Framework that allowed other developers to create "IDE Adapters", which would allow a plugin to be written only once. For example, in the case of Jupiter, a developer would be able to write a Jupiter plugin against the Generic IDE Framework. The plugin could then be adapted to the developers IDE of choice. Sounds so simple doesn't it? One plugin that can be ported to multiple IDEs.

The tradeoff is that the Generic API will lose the IDE functionality that is not common to all IDEs as my coworker says: "The API would be limited to the lowest common denominator of features." How much functionality will be lost? Who knows, maybe too much will be lost because certain features do not exist in others.

In general I think this is a interesting, complex, useful idea. If we could get everyone using the same set of tools regardless of IDE preference, we would be a lot more productive. Maybe there wouldn't be an IDE war. There would be peace in HackerLand with Netbeans users wondering what it would be like to code ultra fast with all of the sweet Eclipse shortcuts and Eclipse users thinking, "Maybe a Swing based IDE isn't so bad after all".

A dream perhaps?



  [1]: http://code.google.com/p/jupiter-eclipse-plugin/
  [2]: http://www.netbeans.org/community/releases/60/
