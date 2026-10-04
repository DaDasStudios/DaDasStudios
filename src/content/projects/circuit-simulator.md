---
title: Thermal circuit simulator
summary: A DC resistive circuit simulator that accounts for temperature, so you can see the losses ideal calculations ignore.
track: software
archive: false
order: 30
tags: [Physics, Simulation]
cover:
  type: image
  src: /images/projects/circuit-simulator.png
  alt: Thermal circuit simulator screenshot
  position: top
tldr:
  problem: Circuit calculations are usually ideal, so they hide the power lost as resistors heat up.
  built: A web simulator for DC resistive circuits with a thermal model for each resistor.
  result: A live app anyone can try in the browser.
stack:
  - { name: TypeScript, icon: typescript.svg }
  - { name: Vite, icon: vite.png }
  - { name: React, icon: react.svg }
  - { name: Tailwind CSS, icon: tailwind.svg }
links:
  - { label: Visit live, href: "https://circuit-thermodynamics-simulator.vercel.app" }
  - { label: Research notes, href: "https://www.notion.so/Eficiencia-de-los-circuitos-el-ctricos-8c187509fc2b478a9231da6a98120a7b?pvs=4" }
architecture:
  type: flow
  steps:
    - label: Circuit inputs
      detail: source voltage, resistances
      track: software
    - label: Environment
      detail: temperature, resistor material
      track: hardware
    - label: Thermal model
      detail: resistance vs temperature
      track: hardware
    - label: DC solver
      detail: currents, power, losses
      track: software
    - label: Live view
      detail: React + Tailwind UI
      track: software
---

## Why I built it

In a university physics course, the professor asked us to connect our degree with thermodynamics. In electronics, we usually calculate circuits as if they were ideal and ignore external factors like temperature. But resistors heat up, their resistance changes, and power is lost. I wanted a tool that shows that difference.

## How it works

The hardest part was the research: there isn't much material on this topic because it's very specific. The key was understanding how a resistor's temperature relates to its current and its material. I documented the research in the [Notion notes](https://www.notion.so/Eficiencia-de-los-circuitos-el-ctricos-8c187509fc2b478a9231da6a98120a7b?pvs=4).

In the app, you set the source voltage, the resistances, the ambient temperature and the resistor material. The simulator recalculates currents, power and losses every time you change a value.

## Stack

A client-side React app built with Vite, TypeScript and Tailwind CSS. Everything runs in the browser, so results update instantly.
