
---
layout: post
title: "We need a Hackystat developer config script"
date: 2008-02-24
comments: false
---


I recently setup my machine to run Ubuntu Gutsy, so that means that I have to install all of the apps and redo my Hackystat configuration.  I decided to put off reconfiguring Hackystat until I really needed to since it's takes awhile.  Tonight I wanted to run the latest Sensorbase so I needed to setup my environmental variables.  Here are the libraries I had to manually download and setup to create Sensorbase binary.  *deep breath* 1. Junit 4.4 2. Pmd 4.1 3. Restlet 4. Derby 5. Findbugs 1.3.2 6. Javamail
Followed by creating the following environmental variables: 1. JUNIT_HOME=/home/austen/sideProjects/external_libs/junit-4.4 2. PMD_HOME=/home/austen/sideProjects/external_libs/pmd-4.1 3. RESTLET_HOME=/home/austen/sideProjects/external_libs/restlet-1.0. 4. DERBY_HOME=/home/austen/sideProjects/external_libs/db-derby-10.3.2.1-bin 5. FINDBUGS_HOME=/home/austen/sideProjects/external_libs/findbugs-1.3.2 6. JAVAMAIL_HOME=/home/austen/sideProjects/external_libs/javamail-1.4.1
Then I found out that I need to build the Hackystat Utilities module before I could create the Sensorbase binary.  More downloading... 1. Apache Jcs 1.3 2. Apache Common Logging 1.1
And more configuration... 1. APACHE_JCS_HOME=/home/austen/sideProjects/external_libs/jcs-1.3 2. APACHE_COMMONS_LOGGING_HOME=/home/austen/sideProjects/external_libs/commons-logging-1.1 3. HACKYSTAT_UTILITIES_HOME=/home/austen/sideProjects/hackystat/hackystat-utilities
Phew.  That was quite a bit of setup just to build one jar file.Another thing that bugs me was I downloaded the wrong version of Apache Commons Logging.  I  downloaded the latest release, which happened to be v1.1.1 instead of v1.1.  Since I have done the setup before I automatically knew what was wrong, but new developers might not get it right away.  I'm thinking that the error messages should specify what jar file the build wants. What we need is to have a little shell script that goes out and grabs the current files, extracts them to the specified location, and sets your environmental variables up.  So all those steps turns into two.  1. Write the appropriate install folder location. 2. Invoke the script from the shell of your choice.
Any takers?
## Comments ##




Philip Johnson

I think the appropriate hammer for this particular nail is called "Maven". I've always thought Maven has a lot of potential, but haven't had the time to really get in there and figure it out.  Cheers,Philip




