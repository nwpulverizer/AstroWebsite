---
layout: ../../layouts/MarkdownPostLayout.astro
title: Windows on an external SSD
pubDate: 2025-04-23
description: Microsoft is hiding this one weird trick
author: np
tags: [linux, windows, gaming]
image:
  url: https://upload.wikimedia.org/wikipedia/commons/5/57/ValenciaCathedral2.JPG
  alt: A church window
---

Microsoft, the little cucks they are, won't let you put windows on an external drive. This is clearly not a capability issue because I did it anyways. Maybe you've heard of windows to go and why didn't I use that - I don't know I couldn't get it to install.
Ok here is the skinny on it - get an SSD enclosure, preferably high speed one that you can put your own drive in. Take your drive and put it into your PC, install windows on it, remove, put into enclosure, boot to enclosure. That is basically it. For very slightly more detail read on.

I got an nvme drive and a nvme ssd enclosure. The exact one really doesn't matter and I am not an authority to recommend one anyways. Something something DRAM cache. Get your drive and install it into your PC, like actually install it into a drive slot. This is a pain in the ass. I had to remove my GPU because the nvme slot that I have was under it, so be prepared to do dumb shit like that. I am assuming you have a USB install media already made with windows on it. If you don't know how to do that you can figure it out I believe in you. I suggest unplugging your other drives from the PC while you install windows. I have had windows put its bootloader wherever the fuck it wants, it has overwritten grub on my Linux install before. So just save yourself the pain and unplug all your other drives while your up in it.

Go through the install, and remove your newly created installation disk and put it into the external enclosure. Plug all your other shit back in. I booted into Linux to make sure everything was still ok but live your life however you want. Plug in your windows external drive and boot into it. It will say something like windows needs to be repaired, do that and then you are golden. I can't fully remember but I think that I may have had to do that twice for some reason. Anyways do it as many times as you need until you can boot into windows.

I am trying to figure out how to use this disk on multiple machines. I tried plugging into my laptop but I got an error about network drivers or something. I am going to attempt to fix that and report back. If I can have a single windows install I can plug in to any of my computers that would be sweet. I have a feeling that won't work though because of the graphics drivers on my PC (NVIDIA) and my laptop (iGPU AMD) are different.

Ok bye bye.
