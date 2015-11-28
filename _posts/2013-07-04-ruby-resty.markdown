---
layout: post
title: "Ruby-Resty"
date: 2013-07-04 15:30
comments: true
categories: ruby
---

I spend a lot of my time working with REST APIs. At home, at work, at
hackathons, it's GET this and POST that. [Resty][1] is an amazing tool to make
it easy to send multiple HTTP requests with the same data and headers. My
favorite part is having per-host configuration so you never have to worry about
remembering your cryptic, hashed API keys and header names.

It's such a great tool, except resty currently [doesn't work in zsh][3].

![][2]

I wanted to submit a PR to fix the problem and started thinking maybe a
shell script isn't the best approach for community development. Coming from a
Ruby background, shell script syntax is so _hard to read_. Then I thought, 

> "What about adding functionality to Resty? Can I add a new command that Resty supports? 
> Can I have nice tests documenting functionality? How about some continuous integration?"

## Embarking on a [Ruby Port of Resty][7].

What started as a straight port, morphed into something I didn't expect.

I started a spike with my own REPL. Thinking more about features,
I realized I should be using something like the superb [Pry][4].  The best part about using Pry is 
it provides a [Custom Command][5] infrastructure allowing the quick addition of new features.

After some coding, [@tpitale][6] suggested the idea of working with Ruby to
make it easier to work with objects. After all, if the user is in a Ruby REPL,
why shouldn't they be allowed to write Ruby? Ruby-Resty is liberal with what is accepts in it's 
data:

```
POST /api/nyan {"name": "grumpy"} # JSON String
POST /api/nyan {name: "grumpy"}   # Ruby Hash
POST /api/nyan data               # User assigned variable in the REPL
```

Pretty nifty.

[dkaufman][8] also suggested aliasing for per-host configuration, which is different than Resty. 
Rather than specifiying a hostname, which maps to the config file, users
can specify an easy to remember alias defined in `~/.ruby_resty.yml`.

This is still a working in progress and would love some feedback. If you're interested,
submit a [ruby-resty][7] issue or reply to this post.

[1]: https://github.com/micha/resty
[2]: http://bit.ly/19X1fE2
[3]: https://github.com/micha/resty/issues/38
[4]: https://github.com/pry/pry
[5]: https://github.com/pry/pry/wiki/Custom-commands
[6]: https://twitter.com/tpitale
[7]: https://github.com/austenito/ruby-resty
[8]: https://github.com/dkaufman
