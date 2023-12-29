---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Quick note on Pihole or other self hosted DNS services with Ubuntu or OpenmediaVault 6"
pubDate: 2023-12-28
author: "Nathan Pulver"
description: "Strange behavior of OMV6 prevents succseful pihole docker launch"
image:
  url: "https://wp-cdn.pi-hole.net/wp-content/uploads/2016/12/Vortex-R.png"
  alt: "Pihole logo"
tags: ["blogging", "learning in public", "linux", "home server"]
---

## Pihole docker container wont start with error 500 on portainer

The title here was the start of my trouble. After quadruple checking the docker compose file was correct, I started googling and found that error 500 codes often have to do with unavailible ports. I changed the ports on host to be different than on the container, but the problem is as a DNS server, the Pihole needs to have port 53 or it won't work. Once I found this out, I looked at all my containers, but no one was using port 53. What was going on was that OMV6 (and it seems like some Ubuntu installations) have a dns resolver running on port 53. The steps to fix this issue can be found [here](http://web.archive.org/web/20220612212822/https://www.bklynit.net/ubuntu-20-04-lts-docker-pihole/), but since this is an internet archive link I will paste them here as well as to not lose the information. You will need to go into your host installtion, in my case OMV6 and make some changes at the command line.

## Fix

Nearly exact paste from the website linked above:

Steps:

1. Edit /etc/systemd/resolvd.conf
2. Uncomment line with DNSStubListener and change yes to no

The file should look like this

```txt
#  This file is part of systemd.
# systemd is free software; you can redistribute it and/or modify it
# under the terms of the GNU Lesser General Public License as published by
# the Free Software Foundation; either version 2.1 of the License, or
# (at your option) any later version.
# Entries in this file show the compile time defaults.
# You can change settings by editing this file.
# Defaults can be restored by simply deleting this file.
# See resolved.conf(5) for details
[Resolve]
#DNS=
#FallbackDNS=
#Domains=
#LLMNR=no
#MulticastDNS=no
#DNSSEC=no
#DNSOverTLS=no
#Cache=no-negative
DNSStubListener=no
#ReadEtcHosts=yes
```

Then restart systemd-resolved with the following command:

`sudo systemctl restart systemd-resolved.service`

Now that systemd-resolved is no longer listening on port 53, local DNS name resolution will no longer work. To fix this run the following
`sudo rm /etc/resolv.conf`

`sudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf`
You should be all good now.
