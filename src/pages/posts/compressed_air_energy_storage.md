---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Compressed Air Energy Storage (CAES) viability for the home"
pubDate: 2023-02-21
description: "Doing some calculations to see if we can store energy with air"
author: "Nathan Pulver"
image:
  url: "https://www.harborfreight.com/media/catalog/product/cache/9fc4a8332f9638515cd199dd0f9238da/9/4/94801_W3.jpg"
  alt: "A silver air tank"
tags: ["academics", "electronics", "energy storage"]
---

Although many think of storing energy in lithium batteries, alternative methods
of energy storage exist such as a compressed air energy storage (CAES). These
types of batteries do not use chemical potential to store energy, but mechanical
work through compression. Compressed air energy storage is not meant to replace
lithium batteries at all, they are a useful way to expand them without much
cost.

## How it works

CAES is used during times of high energy production and low energy usage.
Electricity use is highest during the evenings when most people are at home.
This is bad news for solar energy production, because a solar panel will peak
its production when the sun is at its peak, hitting the panel face on. To
supplement this lag in energy usage, many electrical grids will have some form
of energy storage. To utilize CAES, when we are at peak _generation_ we would
run some air compressor to get compressed air into a holding vessel. Then during
peak _usage_ we would decompress the air to run a wind turbine that creates
electricity.

## Is this useful on smaller scales?

I was introduced to this idea through a youtube video by Just Have a Think. In
his video, a company was commercializing this idea for energy storage in power
grid setting. I was wondering if this would be viable for a home to have. To
find out, I am going to propose a model system consisting of Harbor Freight
products and calculating how much energy we can store in it. Finally, I will
compare the cost to simply investing in batteries.

### Harbor Freight CAES system

I imagine this system as adding onto a small backup 12V system like one in a
camper van or RV. Although not necessary to restrict yourself to 12V, I want to
keep it simple for future calculations.

- **The compressor:**
  [12V 150 PSI Compact Air Compressor](https://www.harborfreight.com/12v-150-psi-compact-air-compressor-63184.html)
  : $80

  - This compressor can get us up to 150 PSI (10.34 Bar). There is a cheaper
    compressor that will go to 125 PSI, but the more expensive compressor will
    give us more run time.
    <img src="https://www.harborfreight.com/media/catalog/product/cache/9fc4a8332f9638515cd199dd0f9238da/6/3/63184_W3.jpg" alt="an air compressor" height=500em>

- **The storage:**
  [7 Gallon Portable Aluminum Air Tank](https://www.harborfreight.com/air-tools-compressors/air-compressors-tanks/portable-air-tanks/7-gallon-aluminum-air-tank-94801.html)
  : $80
  - The reason I chose this 7 gallon tank over the 5 or 11 gallon tank is
    because the 7 gallon tank can go up to 140 PSI while the 5 and 11 gallon
    tanks are only safe up to 125 PSI. With that said, the 11 gallon tank is
    actually cheaper than this one by $20, so maybe the extra capacity at lower
    PSI would be more economical. We can calculate both later on.
    <img src="https://www.harborfreight.com/media/catalog/product/cache/9fc4a8332f9638515cd199dd0f9238da/9/4/94801_W3.jpg" alt="an air tank" height=500em>

I will not worry about how to get from compressed air to electricity just yet
because I do not even know if it would be viable yet. With that said, let's find
out with some thermodynamic calculations.

## Thermodynamics

If you have attended an upper level physical chemistry course in college, you
probably recognize this battery as an adiabatic compression problem. If not, no
worries I am not going to get into the thermodynamics at all, but know that this
is a problem you will find in many undergraduate college textbooks. From the
[Wikipedia](https://en.wikipedia.org/wiki/Compressed-air_energy_storage#Storage_thermodynamics)
article on CAES, we can calculate the energy for our storage tank of a specified
volume and pressure by the following equation:

$$ W = p_B V_B \ln(\frac{p_A}{p_B}) + (p_B - p_A)V_B $$

Where $p_B$ is the starting pressure (our tanks max PSI rating), $p_A$ is the
outside pressure (atmospheric pressure for us), and $V_B$ is the volume of our
tank. To get our units out in megajoules MJ, we can put our pressure into MPa,
and volume into m$^3$ to get the following values:

$$
V_B = 7 \text{gal} = .0265 m^3\\ p_A = 140 \text{PSI} = .9653MPa\\ p_B = 14.7
\text{PSI} = .1013 MPa
$$

So we can just punch the numbers into our calculator to get our output in MJ,
and I am getting .0168MJ, which is 4.6Wh (Watt hours) of energy for this harbor
freight system.

## Comparison to lithium batteries

Depending on your background you may have no idea how much energy 4.6Wh really
is. I think comparing to a familiar 18650 battery is a good way to go here. Lets
consider this
[Panasonic 3600mAH 18650 battery](https://www.illumn.com/batteries-chargers-and-powerpax-carriers/18650-panasonic-3600mah-ncr18650g-flat-top.html).
To get the Wh of the battery we take the nominal voltage (3.6V) and multiply by
the capacity in amp hours (Ah). So in our case that's 3.6Ah \* 3.6V. Well, that
is disappointing, this tiny 18650 battery contains 18Wh of energy. It seems our
home made CAES is not very effective. Just to be thorough, what do we get if we
use that 11 gallon tank that can only go up to 125PSI instead? In that case, we
still get a measly 6.1 Wh - not even half of the energy stored in a
handheld 18650. Take a look at the plots below to get a better idea

<img src ="/energy_volume.jpg" height=250em><img src="/energy_pressure.jpg" height=250em>

## Conclusion

If you did want to do this, it would be extremely inefficient, but possible.
From the calculations we found that harbor freight equipment got us less than
half as much energy as a single lithium ion battery in a much larger space. The
calculation accounted for the work that the compressed air can do without
considering any losses from the compressor or the output generator, whatever
that would have been. CAES appears to be ill fitted for home use unless you
already have high capacity, high pressure air tanks and a good compressor.
