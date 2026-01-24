---
layout: ../../layouts/MarkdownPostLayout.astro
title: Running Klipper on a Pi 3B+
pubDate: 2026-01-23
description: I had some issues turns out to be mostly memory related
author: Nathan
tags: [3dprinting, tech, linux, electronics]
image:
  url:
  alt:
---

# Intro

I bought a 3B+ pi a long time ago and had klipper running fine when I set it up maybe 5 years ago on my ender 3. Then I got a P1S and hadn't touched my ender since. I recently got the itch
to fuck around with my ender again and went to turn it out to find out the SD card was fried so I had to start from scratch. I figured I would note my issues here in case others have the same.

# What I am running

So last time I installed PiOS and then just used KIUAH or whatever to get fluidd installed but this time I just installed mainsailOS. I have to say it was much simpler to get up and running with the mainsailOS image.
I think it does have some performance drawbacks though because I don't recall having any of these issues before.

# Random disconnects

I would randomly have the web interface freeze and reconnect. Sometimes I couldn't even ssh into the pi to restart anything and I had to pull the plug on the pi (rip). I couldn't figure out what the issue
was until I got the hint that it was related to the pi hardware when the same freezing happened after input shaping finished and it was calculating the freqiencies or whatever the fuck it does. It would freeze
every time I did that.

## Fix attempt 1

I got a temperature warning one time when I restarted from the input shaper BS so I decided to blast it with an old server fan I had while the calculations went. This allowed the calculations to finish without a full
lockup but I still had disconnects. So this kinda fixed it. But it was just another symptom of the issue I think.

## Fix attempt 2

The real fix I think was to increase the pi's swap and use zswap-tools for compression. If you're unaware, to put it simply swap extends the RAM space by making a little reserved spot on the SD card or whatever disk you have. Zswap in particular adds an additional layer of compression to the swap so whatever you have in there takes up less space. I got this idea from [this voron post](https://forum.vorondesign.com/threads/random-halts-freezes-of-klipper-rpi-software-hardware.2148/). Ignore the guy that said his 64-bit OS was the problem - I really don't think that was it. The 3B+ is 64 bit. Just to have another record of the exact steps to take:

```bash
# Install ZRAM
sudo apt install zram-tools

# Edit the config
sudo nano /etc/default/zramswap

# Uncomment and edit the following lines
ALGO=zstd
PERCENT=75
PRIORITY=100
# I (nathanshobbies) also added this to increase the swap size to 1GB
SIZE=954 #MiB = 1GiB
#Save and exit nano (Ctrl+O, Enter, then Ctrl+X)

#Restart the zram service
sudo systemctl restart zramswap

#Confirm it is working
zramctl
free -h

#if it's working you'll see SWAP memory available and ZSTD as the compression algorithm
```

I also went ahead and added the following to the end of /etc/sysctl.conf, the reasons for are explained [here](https://linuxblog.io/raspberry-pi-performance-add-zram-kernel-parameters/)

```bash
vm.swappiness=100
vm.dirty_background_ratio=1
vm.dirty_ratio=50
```

```

```

```

```

I think this worked. I have only had it running for like 45 minutes now so I can't be sure, but I will update this if something else goes wrong.
