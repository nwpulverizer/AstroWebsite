---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Finding the right size tire for your bike"
pubDate: 2026-04-30
description: "tire filtering sucks"
author: "Nathan"
tags: ["outdoors", "biking", "bikes"]
---

# Trying to find tires that fit your bike
I just got a gravel bike. It is pretty fun - a Primos Dame. It comes stock with 650b wheels and I have found I really prefer the smaller wheel size. 
I wanted to see what sort of tires I could get on my bike so I went searching. Wow does the search on retailers website suck. You would think that 
you could filter first by wheel size, then by tire width. This is sometimes the case, but not usually. Even then, every time I had one where I could filter by wheel size, there was no **range** filter for tire width. By this I mean, I can filter by 650B (sometimes) but then I have check boxes to select individual widths. Why would I want that? Surely I am not the only one that has a rough range of widths I am interested in. I want a tire in the range of 40 to 55mm wide. To exascerbate this, 650b is also 27.5 and many many retailers will have them as separate listings. So I have to search 650b, then 27.5, checking every width I am interested in before I can see all the tires that might suit me. Manufactureres websites aren't better, in fact they are usually worse. 

So i tried to make my own tool for this..


# I made a website.. 
[biketirefinder.xyz](https://biketirefinder.xyz/)
so i scraped a bunch of websites and got a bunch of tires in a database. I have tried to be as comprehensive as possible but some manufacturers don't really like scrapers. If I list all the tires I have over 1000 entries, but there are duplicates because there is one entry per tire size and a specific tire might come in many sizes so it is probably more like half of that or 1/3 of that. 

I can now sort tires by wheel size, then a range of widths. The wheel sizes are not duplicated (i.e. 27.5 is converted to 650b, 29 to 700c) I can't beleive I had to make this myself. Fix your fucking filters. 

I added amazon affiliate links if you want to use them but they don't actually go to a specific tire's product page. They just search for the tire 
that you clicked. If you like the website and want it to stay up and running, you can click the affiliate link and do your normal amazon shopping
on there regardless of if you get a tire or not, I will get a commission. I am running on fly.io and dns through cloudflare. The domain is registered through porkbun and is about 25 bucks a year after the first year. I imagine after that and fly.io costs, it'll be around 30 to 50 bucks a year 
to keep running. 

I haven't really advertised the site anywhere and it seems to be getting decent traffic (maybe 1000 unique a month) so it seems like 
at least some people are using it. Let me know if you have suggestions or just find it useful. 


