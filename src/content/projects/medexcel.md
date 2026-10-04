---
title: MedExcel
summary: An exam practice platform for UK medical students, built end to end as the sole developer.
track: software
order: 10
period: Jan – Dec 2023
tags: [Freelance, UK client]
cover:
  type: image
  src: /images/work/medexcel.png
  alt: MedExcel landing page
  position: top
tldr:
  problem: Medical students needed affordable practice exams across many specialties.
  built: A TypeScript REST API, a MongoDB exam model, a React front end and an admin CMS.
  result: Delivered and deployed as a live platform at medexcel.co.uk.
specs:
  - { label: Role, value: Full-stack developer, sole developer }
  - { label: Client, value: MedExcel, United Kingdom }
stack:
  - { name: TypeScript, icon: typescript.svg }
  - { name: React, icon: react.svg }
  - { name: React Router, icon: react-router.png }
  - { name: Tailwind CSS, icon: tailwind.svg }
  - { name: Node.js + Express, icon: express.png }
  - { name: MongoDB, icon: mongo.svg }
  - { name: JWT, icon: jwt.png }
  - { name: Cloudinary, icon: cloudinary.svg }
  - { name: Docker, icon: docker.svg }
links:
  - { label: Visit live, href: "https://medexcel.co.uk" }
  - { label: Back-end repo, href: "https://github.com/DaDasStudios/MedExcel-backend" }
  - { label: Front-end repo, href: "https://github.com/DaDasStudios/MedExcel-frontend" }
gallery:
  - category: Screens
    media: { type: image, src: /images/work/medexcel-mokcup.png, alt: MedExcel on a laptop, fit: contain, backdrop: light }
  - category: Screens
    media: { type: image, src: /images/work/medexcel.png, alt: MedExcel landing page, position: top }
architecture:
  type: flow
  steps:
    - label: React SPA
      detail: students
      track: software
      branches:
        - label: Admin CMS
          detail: exam authoring
          track: software
    - label: Express REST API
      detail: TypeScript, JWT roles
      track: software
      branches:
        - label: Payments
          detail: Freemium subscriptions
    - label: MongoDB
      detail: exams, users, attempts
      track: software
---

## What I built

- **Back end:** a REST API in Node.js and Express (TypeScript) that handles authentication, role-based authorization with JWT, in-app payments and Freemium subscriptions, exam processing and the CMS operations.
- **Data model:** exams in MongoDB with several question formats and healthcare categories. The schema was flexible enough to add new exam features quickly whenever the client asked for them.
- **Front end:** a React app with React Router and Tailwind CSS, plus an admin panel where healthcare professionals create and manage exams.

## How I worked

I was the only developer, so I owned the whole cycle: gathering requirements with the client in the UK, designing the data model, building both apps and deploying them. All of it happened remotely and in English.
