
---
layout: post
title: "GeoTIFF Hell"
date: 2008-01-06
comments: false
---


This weekend I spent a lot of time manipulating GeoTIFF images for work.  GeoTIFF images have embedded meta-tags that contain coordinate, scale, and other miscellaneous information about the wrapping image.  My only problem with GeoTIFFs is that the tag information is hard to access.  The metadata isn't human readable so I had to use another application to read it.  Man that sucks.I had a problem where I had different pixel coordinate spaces for the GeoTIFF and the GeoTIFF's canvas.  Figuring out a common way to relate the two pixel spaces was a pain because I didn't know what information was available to me.  It would have been so much easier if I was able to take the graphic, look at it's metadata in a text editor (Textpad yah!), and see what I could do.  What I had to do instead, was load the image using my image manipulation API and see what data was available via the debugger in Eclipse.  Oh I also had to read the GeoTiff specification (yuck).  What a pain.  Not only did I not know what the metadata meant, I had to do this every time I wanted to see what information was available.  Lots of overhead compared to reading the information in Textpad whenever I wanted.  Why not just have a key-value pair of human-readable information? Scale= 10 meters per pixelLat=10.10Lon=-86etc etc.Aaron brought up the idea at work about images with context.  He seems to enjoy looking at pictures instead of reading (blasphemy!).  If there was a reliable way to search for images based on what was happening in the image rather than whatever Google does with their image search, we would be better off.  This idea could be spread to all types of images.  If all images had a standard text format that could be read, parsed, and manipulated, we might be able to create some interesting applications.  Flicker currently allows context to be associated with images by users manually adding tags to their images.  Why not embed the information in the image just like GeoTiffs?  Hopefully the metadata would be of the human-readable variety.
## Comments ##




aaron

haha. at least one of my ideas is useful! i don't get why images suck so bad. in my opinion, making images should be easier. one of the reasons why images hasn't been used to convey info is because it takes too long to create them. if images are supposed to be worth a thousand words, then why don't we have an imagepedia? where concepts are explained mostly in images? in my opinion thats a much more effective quick way of presenting information. anyway... thats something i wonder about.




