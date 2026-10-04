---
title: CarsHub
summary: A car rental demo built to learn Next.js, and the API mistake that taught me to respect useEffect.
track: software
archive: true
order: 30
cover:
  type: image
  src: /images/projects/car-hub.png
  alt: CarsHub screenshot
  position: top
stack:
  - {name: Typescript, icon: typescript.svg}
  - {name: NextJS, icon: next.svg}
  - {name: React, icon: react.svg}
  - {name: Tailwind, icon: tailwind.svg}
  - {name: HeadlessUI, icon: headlessui.png}
  - {name: Rapid API, icon: rapid-api.png}
links:
  - {label: Visit live, href: https://cars-app-two.vercel.app}
---

## About the project

CarsHub is a car rental demo I built to learn Next.js. It uses server-side rendering, React and Tailwind CSS, and gets car data from a third-party API on RapidAPI. It was a learning project only, not a real business.

## The mistake

The API had a monthly request limit. While building and testing the app, I forgot to add the dependency array to the main `useEffect` hook. The effect ran on every render, and the app used up all the monthly requests before I noticed.

It cost nothing this time because I was on the free plan. In a production app with real traffic, the same bug could have wasted thousands of dollars on unnecessary API calls.

## The lesson

Any effect that calls a paid or rate-limited API needs a correct dependency array, and it's worth watching the request count while testing.
