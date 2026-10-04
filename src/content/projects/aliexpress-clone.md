---
title: AliExpress Clone
summary: A clone of the AliExpress homepage, including several dynamic features.
track: software
archive: true
order: 20
cover:
  type: image
  src: /images/projects/aliexpress-clone.png
  alt: AliExpress Clone screenshot
  position: top
stack:
  - {name: Typescript, icon: typescript.svg}
  - {name: Vite, icon: vite.png}
  - {name: React, icon: react.svg}
  - {name: React Router, icon: react-router.png}
  - {name: Bulma, icon: bulma.svg}
  - {name: CSS, icon: css-3.svg}
links:
  - {label: Visit live, href: https://aliexpress-clone-typescript-react.vercel.app}
---

## Why this project?

To put into practice what I had learned about front-end development, I decided to replicate the AliExpress homepage.

The project started as a copy of the page's appearance, but it grew into something more complex.

## Specific tasks

In this project I had to meet the following requirements:

* A custom CSS for a better management of the styles in order to clone the appearance of _AliExpress_ exactly
* The folder structure is oriented to a real project, so it's made up of a nested folder structure
* An interactive and dynamic GUI with many components grouped in folders by type
* __TypeScript__ to avoid type errors and handle the project's data flow properly
* Consuming a **REST API** to get product attributes, as a real e-commerce site would
* Currency formatting and language selection in the navbar

## Achievements

The most useful things I learned with this project were how to organize project files and how to write semantic CSS classes.

However, layout and component problems showed up quickly during development, so I had to find efficient and scalable solutions for these challenges:

* Create a custom carousel component that accepts different types of content formats
* Design a select box for the language and currency options that requests a global languages API
* Build different styled components with only CSS to take advantage of what it can do