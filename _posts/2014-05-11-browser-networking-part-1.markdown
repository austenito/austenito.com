---
layout: post
title: Browser Networking Part 1
date: 2014-05-11 09:46
comments: true
categories: 
  - performance
  - http
---

I'm currently reading a book called [High Performance Browswer Networking](http://amzn.to/1qsC5sE)
by Ilya Grigorik. It purpose is to provide actionable steps to improve website performance. 
Here are the highlights that I've covered so far:

### Latency vs. Bandwidth 

Latency is the measure of the round trip time in the request/response cycle.
Bandwith is the amount of data we can shove into the request. We often have enough bandwidth,
however the degredation in performance is often related to latency or the amount of time a 
request takes to get to the origin server. This is where caching and CDNs make a huge performance
improvement due to the reduction of latency.

### TCP Throttling

The normal usage of a website is typically a lot of small requests. This isn't the way TCP
was intended to be used. TCP has built in algorithms to slowly increase the window size (amount of
data sent with a request). However, this is only if the same connection is used. If a new
connection is used, the throttling must be released from the beginning.

To resolve this, there are TCP settings (like the default packet window size) that must be 
configured to allow the window size to increase faster.

### Reuse connections

Every time a request is made,  a three way handshake occurs; SYN, SYN ACK, SYN.

```
You:    "Hey server are you there?"
Server: "Yes requester I am here"
You:    "OK great. Here's some data!"
```

If you use a keep-alive connection setting, you can re-use connections and avoid the penalty of
of a three way handshake.

### Reducing the number of requests

The best request is one never sent. :)

### HTTP/1.1 and the things we do

HTTP/1.1 was written to scale the internet. It's features are centered around adding ways
to expire caches, compress data and improve performance. Some features lacked support like
request pipelining, which allows clients to dispatch multiple requests using the same connection
without waiting for a response. The problem is HTTP/1.1 doesn't allow responses
to be interleaved on the same connection. This means we must wait for all of the requests 
to finish before we send indivdiual responses. This is called the "head of
line blocking" problem.

Other things we do are inlining css and image spriting so that we can reduce the number of 
requests and RTT.

### HTTP/2.0

* Remove the head of line blocking problem
* Data is ordered so it can be multiplexed. This will remove the head of line blocking problem 
since we can interleave data.
* Servers can push data to clients if a client allows it. Imagine requesting a HTML resource and
the CSS automatically gets pushed along with it.

