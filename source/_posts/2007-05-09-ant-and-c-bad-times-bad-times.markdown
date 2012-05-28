
---
layout: post
title: "ant and c++ bad times...bad times."
date: 2007-05-09
comments: false
---


I'm beginning to think that ant and C++ just don't mix.  After hours of struggling with getting the [ant-contrib][1]  cc task to link object files and static libraries to create an executable, I've just about given up on trying to get this to work.  There have been two big issues that have been bugging me with [ant-contrib][2] : 1. g++ gets called when compiling the source files, but gcc is called when linking.  This is a huge issue for me.  When I call g++ from the command-line to compile and link my source and object files, I have no problems.  Everything works great.  After using ant's verbose mode, I noticed that even if you specify 'g++' as the linker to use, the gcc linker is still called.  This leads to unreferenced files and more C++ hell.I did some searching around and noticed people having the same problems, but no work around. 2. The library is buggy.  There is a bug where ant will hang when nesting 'syslibset' and 'libset'  tags within the cc, compiler, and linker tasks.  The work around is to have nested  calls within your cc task.  You get no love if you have a lot of libraries to link.
A coworker suggested that I look into [Nant][3]  as an alternative to using ant.  I'm not sure if I really want to use Nant.  The whole point of using ant to build java and C++ projects is to have one build system.  I know that I can call Nant from ant, but that will just spawn a new process, which will hide the error results.I guess it's time to re-learn makefiles.


  [1]: http://ant-contrib.sourceforge.net/
  [2]: http://ant-contrib.sourceforge.net/
  [3]: http://nant.sourceforge.net/
