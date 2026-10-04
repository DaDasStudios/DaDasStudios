---
title: Whouse
summary: Website and GraphQL back end for a Colombian furniture cleaning company.
track: software
order: 20
period: May – Aug 2022
tags: [Freelance]
cover:
  type: image
  src: /images/work/whouse.png
  alt: Whouse landing page
  position: top
tldr:
  problem: Whouse needed a website and a way to manage its content and users.
  built: An Astro website with React components and a GraphQL API backed by MongoDB.
  result: Deployed and live at whouse.vercel.app.
specs:
  - { label: Role, value: Full-stack developer }
  - { label: Client, value: Whouse, Colombia }
stack:
  - { name: Astro, icon: astro.svg }
  - { name: React, icon: react.svg }
  - { name: TypeScript, icon: typescript.svg }
  - { name: Tailwind CSS, icon: tailwind.svg }
  - { name: GraphQL, icon: graphql.svg }
  - { name: Express, icon: express.png }
  - { name: MongoDB, icon: mongo.svg }
  - { name: JWT, icon: jwt.png }
links:
  - { label: Visit live, href: "https://whouse.vercel.app" }
  - { label: Back-end repo, href: "https://github.com/DaDasStudios/Whouse-backend" }
  - { label: Front-end repo, href: "https://github.com/DaDasStudios/Whouse" }
gallery:
  - category: Screens
    media: { type: image, src: /images/work/whouse-mokcup.png, alt: Whouse on a laptop, fit: contain, backdrop: light }
  - category: Screens
    media: { type: image, src: /images/work/whouse.png, alt: Whouse landing page, position: top }
architecture:
  type: flow
  steps:
    - label: Astro site
      detail: React components
      track: software
    - label: GraphQL API
      detail: Express, JWT
      track: software
      branches:
        - label: Content filter
          detail: blocks inappropriate user content
    - label: MongoDB
      detail: site content, users
      track: software
---

## What I built

- **API:** a GraphQL API in Express for managing the site's content and users, with JWT authentication. Deployed to production.
- **Website:** the company's site in Astro, with React components for the interactive parts.
- **Moderation:** filters that block inappropriate content in user-submitted data.

