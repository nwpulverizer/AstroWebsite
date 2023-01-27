---
layout: ../../layouts/MarkdownPostLayout.astro
title: "What the fuck is a transistor? (part 1)"
pubDate: 2023-01-27
description: "I kind of get it but not really."
author: "Nathan Pulver"
image:
  url: "/BC548.jpg"
  alt: "A pinout diagram of a transistor"
tags: ["blogging", "electronics"]
---

I do not have the knowledge to tell you what a transistor is and how to use
them. I am writing this article because I have tried using transistors in some
electronics circuits and struggled every time. This is going to be a series of
articles that summarize my findings each time I spend some time trying to learn
some more about them. I will probably get some stuff wrong and misunderstand. If
you want to learn with me, follow along and hopefully I do not misguide anyone.

## Keeping it simple

Alright, I have a whole box of transistors I got from Aliexpress and I don't
want to try to understand all of them. I know there are loads of transistor
types but I am going to keep it simple and focus, for now, on a BC548 NPN BJT.
What the fuck does NPN and BJT mean? NPN is the orientation of the doped
semiconductors in the transistor and BJT means Bipolar Junction Transistor. I
don't think it is important to go into detail into either of these for now. I
just want to use the thing.

## Collector, Base and Emitter

On our BCN548 transistor that we are focusing on, looking at the flat face and
reading from left to right, pin 1 is the collector, pin 2 the base and pin 3 the
emitter. I _think_ that the base is always the middle pin on all transistors,
but I am not 100% positive. After looking at many websites, I think the best
explanation I saw was that the collector is our large electrical supply while
the base is used to control the current of the large electrical supply and the
emitter is the output of the controlled large electrical supply. So, current
flows from collector to the emitter, but the amount that flows is controlled by
the base.

Applying power at the base of our BCN548 transistor allows current through. I
think the importance of the previous statement is that some transistors allow
current from collector to emitter when there is no current. Again not completely
sure, but I saw this emphasized and that seems like a logical progression to me.

## Questions to answer for the next post

This is all I have time to go through right now but there is much much more to
learn. Next time I want to figure out how to use these as an amplifier. I think
I could reason it out from just the above information, but I am not really sure
on the wiring for the base. Does the signal generator at the base, say a
microphone, need to be connected to the same power supply/ have the same ground
as the BCN548? What is the range of voltages I can apply across the transistor?
What is the max current it can take? Hopefully we can figure all of that out
next time and get a working circuit.
