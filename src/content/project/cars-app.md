---
title: "CarsHub"
description: "Your gateway to hassle-free car rentals, where convenience meets choice"
image: "car-hub.png"
techs: [
{
  name: "Typescript",
  icon: "typescript.svg"
},
{
  name: "NextJS",
  icon: "next.svg"
},
{
  name: "React",
  icon: "react.svg"
}, 
{
  name: "Tailwind",
  icon: "tailwind.svg"
},
{
  name: "HeadlessUI",
  icon: "headlessui.png"
},
{
  name: "Rapid API",
  icon: "rapid-api.png"
},
]
link: "https://cars-app-two.vercel.app"
---

# Introduction:

Welcome to CarHub, your one-stop destination for hassle-free car rentals. My  website was created with the latest technologies, including NextJS, React, and Tailwind, to provide you with a seamless user experience. The focus on server-side rendering (SSR) ensures that you get fast and reliable access to a vast collection of cars, all available for rent at your fingertips. However, no journey is without its bumps, and we encountered a fatal error that taught us a valuable lesson about the importance of diligent coding practices. In this blog, we'll take you through my journey of building CarHub, including a unintentional mistake and the measures we've taken to prevent it from happening again.

## The Inspiration Behind CarHub
CarHub was born out of the desire to revolutionize the car rental experience. We envisioned a platform that simplifies the process of finding and renting a car, with a wide selection of vehicles to suit every need and budget. From sleek sedans to rugged SUVs, we wanted CarHub to be the ultimate destination for those seeking flexibility and convenience in their travels. How ever I have to mention this was only for learning purporses.

## Building process
To bring my vision to life, we decided to build CarHub using cutting-edge technologies. NextJS provided us with server-side rendering capabilities, ensuring fast loading times and improved SEO performance. React, being a powerful front-end library, allowed us to create interactive and user-friendly interfaces, making the rental process a breeze for users. We then utilized Tailwind CSS to design sleek and responsive components, ensuring a visually pleasing experience across all devices.

## The Fatal Mistake
As we were busy developing CarHub, we integrated a third-party API from Rapid API to provide real-time car availability and pricing. The API, however, had limitations on the number of requests allowed per month. Unfortunately, in the excitement of building and testing the app, we overlooked a crucial step - adding the dependencies array to the main `useEffect` hook. This led to an unforeseen consequence - CarHub consumed all available API requests without us realizing it until it was too late.

The oversight of not including the dependencies array in the `useEffect` was a wake-up call for us. While it was a free mistake this time, we were reminded of the potential financial repercussions it could have had in a real-world production environment. In a high-traffic application, thousands of dollars could have been wasted on unnecessary API calls. We took this as a learning opportunity and vowed to never repeat the same mistake again.

## Ensuring Robustness with Code Review and Testing
To prevent similar errors in the future, we have implemented rigorous code review practices. Every pull request is thoroughly scrutinized by our team members, ensuring that critical aspects, such as the dependencies array in `useEffect`, are not overlooked. Additionally, we've ramped up our testing efforts, creating comprehensive test suites to catch any potential issues before they reach the production environment.
