# Editing the portfolio

Everything you see on the site comes from two places:

| What | Where |
| --- | --- |
| Landing page copy (hero, about, section intros, contact), skill rows | `src/data/personal.ts` |
| Name, email, social links, navigation, résumé PDFs | `src/data/site.ts` |
| Carousel slides and the stat cards under it | `src/content/highlights/*.md` |
| Career timeline | `src/content/experience/*.md` |
| Hardware lab, software studio, archive | `src/content/projects/*.md` |
| "Beyond the code" tiles and their pages | `src/content/stories/*.md` |

Each `.md` file has a YAML header between `---` lines, then a Markdown body. Run `npm run dev` and the
site reloads as you save. If a field is wrong, the terminal tells you which file and which field.
`src/content.config.ts` has every field with a comment.

## Tracks and colors

`track` decides the color and the "Show me first" ordering:
`hardware` (mint), `software` (crimson), `both`, `life`. Override the color with
`theme: crimson | mint | circuit | dark | light`.

Send `https://<site>/?focus=hardware` or `?focus=software` to put that side first.

## Media: one format for every visual

Any `visual`, `media`, `cover` or `architecture` field takes one of these:

```yaml
{ type: image, src: /images/projects/bci/render.png, alt: "3D render", fit: cover }   # fit: contain for transparent PNGs
{ type: image, src: /images/projects/bci/board.png, alt: "PCB", backdrop: circuit, tilt: true }   # PCB look
{ type: embed, src: /embeds/my-plot.html, title: "Signal plot" }   # any HTML page, shown in an iframe
{ type: embed, src: "https://kicanvas.org/?github=...", title: "Interactive schematic" }
{ type: html, html: "<svg>...</svg>" }
{ type: stat, value: "4×", label: Honor Scholarship, badge: "GPA 4.6 / 5.0" }
{ type: statement, text: "Integration developer for retail clients in Europe", chips: [SAP, Java] }
{ type: placeholder, label: "Photo · coming soon" }
```

Images go in `public/images/...`; HTML embeds go in `public/embeds/` (see `bci-signals.html`).

## Highlights (carousel)

```yaml
order: 1                 # position in the carousel
title: ...
tag: Project             # Project, Award, Experience, Milestone...
track: hardware
pills: [Hardware + Software]
layout: split            # split | split-reverse | overlay (photo behind the text)
visual: { type: image, ... }
cta: { label: See the build, href: /projects/bci-assistive-pedal }
cards:                   # optional stat cards under the carousel
  - { value: "4.6", suffix: "/5.0", label: "GPA" }
draft: true              # hides it
```
The body is the slide description.

## Experience (timeline)

```yaml
company: ...
role: ...
start: "2025-09"
end: "2025-12"           # leave out while ongoing
location: ...
track: software
lead: One or two sentences shown big.
tags: [Java, SQL Server]
metrics: [{ value: "75%", label: faster }]
links: [{ label: Visit, href: https://..., style: secondary }]
note: Confidentiality note in italics.
frame:
  layout: text           # text | media | showcase | polaroids
  # media:     media: {...}, side: left | right       (laptop mockups, photos)
  # showcase:  media: {...}, specs: [{label, value}]  (hardware panel + spec sheet)
  # polaroids: photos: [{ media: {...}, caption }]    (1–4 photos)
```
The body (usually bullet points) is the details.

## Projects

```yaml
title: ...
summary: One line for cards and the page header.
track: hardware          # both = shows in both labs
archive: false           # true = early work archive only
order: 10
period: Jan – May 2025
cover: { type: image, ... }
tldr: { problem: ..., built: ..., result: ... }
specs: [{ label: Role, value: ... }]
stack: [{ name: ESP32, track: hardware, icon: arduino.svg }]   # icon from public/images/techs
links: [{ label: View repository, href: ... }]
gallery:                 # tabs are created from the categories
  - { category: 3D render, media: {...}, caption: ... }
  - { category: Schematic, media: {...} }
architecture:            # required unless archive: true
  type: flow
  steps:
    - { label: ESP32 firmware, detail: low-latency C++, track: hardware }
    - label: Python + LSL
      track: software
      branches: [{ label: Qt app, detail: monitoring }]
# or use any media instead of the standard diagram:
# architecture: { type: image, src: /images/projects/x/diagram.png, alt: ... }
```
The body is the deep dive. Code blocks get syntax highlighting.

## Stories (Beyond the code)

```yaml
order: 1
title: ...
eyebrow: ...
summary: ...
page: true               # false = tile only
externalUrl: https://... # tile links out instead
tile: { size: large, theme: dark, value: "4×", label: ..., images: [{src, alt}], cta: Listen, decoration: piano }
hero: { type: image, ... }
facts: [{ label: Visa, value: J-1 }]
stats: [{ value: "16", label: weeks }]
photos: [{ media: {...}, caption: ... }]   # polaroids next to the chapters
quote: ...
gallery: [{ src, alt, caption }]           # album
```
Every `##` heading in the body becomes a numbered chapter.

## Résumés

Put the PDFs in `public/resume/` with the file names listed in `src/data/site.ts`.
