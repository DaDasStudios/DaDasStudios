---
title: Books Social Media
summary: A MERN social app where readers post and share their favorite books, with an Apple-inspired design.
track: software
archive: true
order: 40
cover:
  type: image
  src: /images/projects/books-social-media.png
  alt: Books Social Media screenshot
  position: top
stack:
  - {name: Javascript, icon: javascript.svg}
  - {name: React, icon: react.svg}
  - {name: React Router, icon: react-router.png}
  - {name: Tailwind, icon: tailwind.svg}
  - {name: Express, icon: express.png}
  - {name: MongoDB, icon: mongo.svg}
  - {name: JWT, icon: jwt.png}
links:
  - {label: Visit live, href: https://books-social-media.onrender.com/}
---

## About this project

Throughout all the time I've been learning programming and web development one of the most interesting topics to me was the UI design and styling.
So I decided to create a full _social media style_ application where you can post your favorite books and share them with others. There are several reading categories.

The main purpose of this project was to practice the topics I was interested in: styling and design, so I got inspiration of the __iPhone__ look and went directly to the code. Also, I just considered this project was perfect to be created with the MERN stack which is (at the time I'm writing this post) the
most useful web stack to learn the web development fundamentals. 

This project turned into a huge challenge, due to the number of features I was planning to implement and the little time I usually had. As you can see in my portfolio, I'm an electronics engineering student, so unfortunately I can't program as much as I'd like.

Still, I really like my degree, and I think my programming, math and electronics skills can work together very well. For an example, try my [Thermodynamics Circuit Simulator](https://circuit-thermodynamics-simulator.vercel.app) which mixes
all these topics in a React application.

## Pre-development challenges:

During development I ran into some bugs and limitations due to the chosen stack:

__Difficult incorporations:__ Since the model of the application is creating a REST API that React application consumes, client routing is forced to be CSR and the server is completely separate from the React application. This problem isn't present in modern web frameworks like Astro or NextJS which allow you to
mix server logic with React. Thanks to the Express framework freedom, developers have to implement everything manually, so using React as the default render engine is another task to do.

__Project independence:__ This may be seen as an advantage because the more independence you got, the more scalability you have separately. However, that advantage didn't apply here, since both applications were connected. I mean, it was pointless to scale one separately without using that new feature in the other application. Please don't misinterpret me, the application development was meant to be fast and more focused on the React application, it's recommended to never mix the REST API with the client application.

__Technologies choice:__ It's too related with the two previous challenges, I just wanted to use React for this application, but one thing was sacrificed, the SEO. The client application was built on top of React Router Dom which adds a routing system to our application easily. However, the compiled Javascript bundle gets extremely big as your application grows which is a huge limitation for the Search Engine Optimization (SEO). This drawback made me consider another web stack or build the website using an old-school SSR tool that is available in express, I'm talking about the render engine as I mentioned in the first paragraph. But still knowing this, I just ended up using the MERN stack.

## Development accomplishments

Leaving aside the issues I ran into, not everything was bad, and I achieved the following goals:

* Build a complete user dashboard using nested URL routes for the books/user actions
* Deploy the client-side application on the Express server itself, so both share the same domain
* Design a clean, user-friendly layout inspired by Apple's apps, with its own distinctive touches

With this project I learned a lot about styling, since the main goal was to take inspiration from Apple's design. Surprisingly, it was also the hardest part, even with Tailwind CSS.

## Additional information

If you're interested in this project and want to get your hands dirty with the code, please visit the [Github Repository](https://github.com/DaDasStudios/MERN-Books-Social-Media) or see the live application with the button below.
