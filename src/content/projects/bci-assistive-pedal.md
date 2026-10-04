---
title: Assistive brain-computer interface for pianists
summary: Pianists with lower-limb motor disabilities can't use the sustain pedal. This system reads their brain and head-motion signals and presses it for them.
track: both
order: 10
period: Jan – May 2025
tags: [Biomedical]
cover:
  type: image
  src: "/images/projects/bci-pedal-actuator/PCB 3D model.png"
  alt: 3D render of the BCI controller board
tldr:
  problem: Pedaling needs the feet. Some pianists can't use theirs.
  built: EEG and motion acquisition, actuator firmware, an ESP32 SMD board and a web app.
  result: Working prototype, endorsed by the dean's office for continuation by research groups.
specs:
  - { label: Role, value: "Hardware and software lead" }
  - { label: Context, value: Biomedical engineering project }
  - { label: Team, value: "3 people" }
  - { label: Status, value: Endorsed for research continuation }
stack:
  - { name: ESP32, track: hardware }
  - { name: Arduino C++, track: hardware, icon: arduino.svg }
  - { name: SMD PCB, track: hardware }
  - { name: Muse EEG, track: hardware }
  - { name: Python, track: software, icon: python.svg }
  - { name: Lab Streaming Layer, track: software }
  - { name: Node-RED, track: software }
  - { name: MQTT, track: software }
links:
  - { label: View repository, href: "https://github.com/DaDasStudios/adaptative-pedal/tree/main" }
  - { label: Demo video, href: "https://drive.google.com/file/d/1YI93RghzARfQn4a209pvopOsKgONSbkw/view?usp=sharing" }
  - { label: Read the paper, href: "https://drive.google.com/drive/folders/1cSLXKdR3rIJ0DxNPsbDUgoe3lwKT5jVJ?usp=sharing" }
gallery:
  - category: 3D render
    media:
      type: image
      src: "/images/projects/bci-pedal-actuator/PCB 3D model.png"
      alt: 3D model of the board, top side
    caption: 3D model exported from KiCad, top side.
  - category: 3D render
    media:
      type: image
      src: "/images/projects/bci-pedal-actuator/PCB 3D bottom model.png"
      alt: 3D model of the board, bottom side
    caption: 3D model exported from KiCad, bottom side.
  - category: PCB layout
    media: { type: image, src: "/images/projects/bci-pedal-actuator/PCB Hardware.png", alt: PCB layout of the controller board, fit: contain, backdrop: dark }
    caption: Layout of the compact SMD board with the integrated ESP32.
  - category: Schematic
    media: { type: image, src: "/images/projects/bci-pedal-actuator/Schematic.png", alt: Schematic of the controller board, fit: contain, backdrop: light }
    caption: Power stage, ESP32 and the three servo drivers.
  - category: Photos
    media: { type: image, src: "/images/projects/bci-pedal-actuator/tests-on-piano-1.jpg", alt: Early prototype mounted at the piano }
    caption: A very early prototype at the piano.
  - category: Photos
    media: { type: image, src: "/images/projects/bci-pedal-actuator/Under piano view.png", alt: The actuator seen from under the piano, fit: contain, backdrop: dark }
    caption: The actuator seen from under the piano.
architecture:
  type: flow
  steps:
    - label: Muse headband
      detail: EEG + accelerometer, Bluetooth
    - label: Python + LSL + Node-RED
      detail: filtering, detection, MQTT publish
      track: software
      branches:
        - label: Web app
          detail: calibration, live monitoring
          track: software
    - label: ESP32 firmware + Node-RED
      detail: low-latency C++, MQTT subscribe
      track: hardware
    - label: Pedal actuator
      detail: press / release
      track: hardware
---

## The challenge

The main challenge was latency: how fast the motors respond. A musician needs an instrument that reacts immediately, so this was a key requirement.

To get a quicker response, the user interface lets musicians adjust the detection sensitivity. Once they're used to the device, they can rely on smaller, faster head movements.

## Decisions and trade-offs

Given the academic context, we had to make trade-offs in the system architecture. The ideal design processes all the data on the chip itself, so no computer or internet connection is needed. But processing these signals takes more computing power than a typical IoT application, and the project had to stay budget-friendly. So we did the signal processing on a computer with Python and Node-RED, and sent the commands to the ESP32 over MQTT.

## What I'd do next

Replace the mechanical actuator with a more precise, stronger and faster one. A custom-made mechanism would be the ideal solution, and it would also make the device look more polished.
