---
company: Casas Automáticas
role: IoT Developer
start: "2024-08"
end: "2024-12"
location: Ibagué, Colombia
track: hardware
note: The board shown is an illustration. The real design belongs to the company.
frame:
  layout: showcase
  media:
    type: image
    src: /images/illustrations/pcb-illustration.svg
    alt: Illustration of an ESP32 lighting controller board
    backdrop: circuit
    tilt: true
  specs:
    - { label: MCU, value: ESP32 }
    - { label: Protocol, value: DALI - IEC 62386 }
    - { label: Firmware, value: "C++ library: dimming, scenes" }
    - { label: EDA, value: "KiCad" }
    - { label: Sim, value: "LTspice, Proteus" }
    - { label: Fab, value: "Double-layer, in-house industrial CNC" }
    - { label: Lab, value: "Oscilloscope, digital decoders" }
---

- Wrote a C++ library for ESP32 to control DALI lighting, including dimming and scene management. It was later used in a course with 15 students.
- Reverse-engineered undocumented commercial devices: captured and decoded frames with an oscilloscope and digital decoders, then validated them against the standard with prototypes, reaching 100% decoding accuracy.
- Designed schematics and multilayer PCBs in KiCad, simulating first in LTspice and Proteus.
- Presented the system to company leadership and documented every stage of development.
