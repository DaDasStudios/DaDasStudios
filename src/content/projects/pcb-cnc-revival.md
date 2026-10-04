---
title: Reviving the faculty's PCB CNC router
summary: The university's PCB milling machine was barely used. A professor taught me to run it, and today students across the program use it for their boards.
track: hardware
order: 20
period: 2024
tags: [Fabrication]
cover: { type: image, alt: The CNC router milling a board, src: /images/projects/cnc-reviving/cnc.jpg }
tldr:
  problem: Boards had to be ordered from outside or made by hand, which made every prototype slow.
  built: A working fabrication process on the faculty's idle CNC router, from design files to drilled boards.
  result: Double-layer prototypes made in-house. I became an authorized operator for later projects.
specs:
  - { label: Role, value: Trained operator }
  - { label: Boards, value: Single and double layer }
  - { label: Status, value: Authorized operator }
stack:
  - { name: KiCad, track: hardware }
  - { name: Altium Designer, track: hardware }
  - { name: Gerber / Excellon, track: hardware }
gallery:
  - category: Lab
    media: { type: image, alt: The manufacturing lab, src: /images/projects/cnc-reviving/lab1.jpg }
    caption: The manufacturing lab.
  - category: Lab
    media: { type: image, alt: Another view of the lab, src: /images/projects/cnc-reviving/lab2.jpg }
    caption: Another view of the lab.
  - category: Operation
    media: { type: image, alt: The router in operation, src: /images/projects/cnc-reviving/cnc.jpg }
    caption: The router in operation.
  - category: Operation
    media: { type: image, alt: A tiny milled board, src: /images/projects/cnc-reviving/cnc2.png, fit: contain, backdrop: dark }
    caption: A tiny board, later used for an RF circuit.
links:
  - label: Watch it run
    href: https://drive.google.com/file/d/1btMVIU7W1crPRbs3asNy7c32r039Jv1v/view?usp=sharing
architecture:
  type: flow
  steps:
    - label: PCB design
      detail: KiCad / Altium
      track: hardware
    - label: Fabrication files
      detail: Gerber + drill
      track: hardware
    - label: Isolation milling
      detail: top and bottom copper
      track: hardware
    - label: Drilling and finish
      detail: vias, cut-out
      track: hardware
---

## The problem

The machine and its drill bits are very expensive, so it's delicate to work with: one mistake can break a bit or damage the machine. Access was very restricted, since very few students and professors knew how to use its brand-specific software.

## Getting it to work

Professor Cristian taught me and other students how to use the machine for our designs. At first, every job was supervised so we could avoid critical mistakes and get support. Later, we were trusted to use it without strict supervision, and even to mill other students' designs when needed.

## Results

The machine went from barely used to a regular part of the program. Students now make boards that wouldn't have been possible to get this fast without it.
