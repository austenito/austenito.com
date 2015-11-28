---
layout: post
title: "Moving to Octopress"
date: 2012-05-28 00:04
comments: true
categories: 
---

I've finally moved my blog over to Jekyll. I've decided to use Octopress
because me and [@athal's](https://github.com/athal7) current open source 
project is [mr-hyde](https://github.com/organizations/mr-hyde). mr-hyde is
a nifty little script allowing your [Octopress](http://octopress.org/) 
blog to be auto-deployed to Heroku.

This is great for several reasons:

1. No committing your /public folder.

2. No need to push to both Github and Heroku. 

All that's needed is to create a new post and push to Github. A post-receive
hook will be triggered and a tiny sinatra app running on Heroku will pull your
blog's latest changes and redeploy. 

Simple.

To help ease the transition from Blogger to Jekyll, I created a command-line utility 
called [Html2Markdown-Cli](https://github.com/austenito/html2markdown-cli). I 
exported my Blogger posts to Html and used the CLI tool to covert the HTML to 
markdown. The transition wasn't as smooth as I had hoped because the export
process didn't preserve my CSS.



