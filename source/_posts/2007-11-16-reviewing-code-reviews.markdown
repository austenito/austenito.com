
---
layout: post
title: "Reviewing Code Reviews"
date: 2007-11-16
comments: true
---


This is an additional post to [Aaron's blog][1] about a review I moderated.

Over the past couple of months, I've tried to increase my code reviewing [soft skill][2]. Early on I 
gathered feedback about my ability to moderate code reviews. Like any noob, I had some glaring holes in 
my approach. I'll try to summarize my faults so you can recognize them and hopefully avoid the mistakes I 
have made. 

1. No offense and defense - The first couple of reviews I attended/moderated, I attacked peoples code and 
defended issues I found. I learned that it is very important not to think about reviews in terms of being 
on the offensive when pointing out issues and playing "tough defense" when explaining why issue x should 
be solve with that new awesome design pattern you found in [Head First Design Patterns][3]. You must be 
respectful of everyone's code. More often than not, they spent 100x longer deciding whether to make a 
certain decision. If something is weird, point it out, and ask for their input in a respectful manner. 
2. Give people the benefit of the doubt - People are smart. Most times they are smarter than you. (At 
least it seems that way. Maybe I'm just slow...)  It's silly to think that you can read someone's code 
for an hour and immediately know the tradeoffs of the current design. People know what they are doing and 
usually do things with purpose. This leads directly to my next point. 
3. Stop, Shut up, and Listen - Listen carefully to what people have to say. Don't dismiss the 
explanations about why they chose to do something. There may be a specific reason for their choice. 
Again it just not productive to think that you know everything about their code. 
4. Provide guidelines, not rules - So you went ahead and read [Effective Java][4] Twice. You know the 
chapters by heart and know the horrors of using inheritance instead of composition. You start reviewing 
someone's code, and *gasp*. Inheritance. Inheritance everywhere with no composition in sight. You take 
out that red pen and start slashing away marking up every place that uses inheritance. During the review 
you cry, "Don't use inheritance or else" except the only problem is that no one is listening to you. If 
you want people to listen to you, provide suggestions or alternatives. You must remember that every 
software engineering principle and rule is not set in stone. In the end only the developer will decide 
what needs to be changed. If they aren't listening to you, they won't change their code. 
5. Ask others for their opinion - Once again, people are smart. You will be amazed about how people think 
about problems. It is important to ask others what they think about the current issue. I've done this 
many times and have found new ways to look at code. A simple, "Is that the right way to do it?" or "How 
would you suggest we fix this code?" will do the trick.

Code reviews are great opportunity to have some fun and learn new things. Everyone is there to improve 
the quality of the code base and increase the team's hacking fitness. I'm planning on attending and 
moderating a lot more code reviews in the future. It is a learning process, but I think that I am moving 
forward. Hopefully I am changing out of the "know-it-all hot shot hacker that is set in stone about his 
methods" mold to the "nice, approachable developer that will take the time to help me without biting off 
my head for asking questions" type of hacker.




  [1]: http://kagawaa.blogspot.com/2007/11/learning-how-to-run-code-reviews.html
  [2]: http://kagawaa.blogspot.com/2007/11/work-on-your-soft-skills.html
  [3]: http://books.google.com/books?id=LjJcCnNf92kC&amp;dq=head+first+design+patterns&amp;pg=PP1&amp;ots=_85-4Aoas0&amp;sig=DSXqsXzB1heW6CqpQngk1-BnY7U&amp;prev=http://www.google.com/search%3Fhl%3Den%26client%3Dfirefox-a%26rls%3Dorg.mozilla%253Aen-US%253Aofficial%26hs%3Dfwd%26q%3Dhead%2Bfirst%2Bdesign%2Bpatterns%26btnG%3DSearch&amp;sa=X&amp;oi=print&amp;ct=title&amp;cad=one-book-with-thumbnail
  [4]: http://www.amazon.com/Effective-Java-Programming-Language-Guide/dp/0321356683/ref=pd_bbs_sr_1?ie=UTF8&amp;s=books&amp;qid=1195210706&amp;sr=1-1
