---
layout: post
title: "nginx_rewrites"
date: 2012-06-08 14:58
comments: true
categories: 
---

Our current project at [Hungry Academy](http://hungryacademy.com) is to create
a service-oriented architecture around live chat. This means having a service
storing data, a message queue service, etc. Another requirement of the our
current project is we are neck-deep in the operational side of things. I've
taken the role of neck-bearding dev ops person, which means a ton of headaches
with nginx. 

One issue that arose was routing requests from nginx to one specific rails app
in our service architecture. After much headache and searching I discovered
[nginx rewrite directives](http://wiki.nginx.org/HttpRewriteModule), which
allows nginx to route requests to another URI.

My problem:

I have a rails app being served at /fooapp. Whenever requests are forwarded to fooapp
by nginx, the request will have 'fooapp' appended to the request. For example,
fooapp will recieve requests with the route 'fooapp/api/v1/data'. To fix this
issue I added the following to my nginx config:

```
location /fooapp {
  rewrite ^(.*)(fooapp)(.*)$ $3 break;
  root /home/vagrant/foo/apps/fooapp/current/public;
  passenger_enabled on;
}
```

What this does is "rewrites" the request that is forwarded to my rails app. I
use regex to match the URI received by nginx and only take the part I care
about, which is the `$3` pattern match. This allows me to rewrite the URI
passed to fooapp. Essentially I'm stripping off the `fooapp` namespace. 

Nifty.
