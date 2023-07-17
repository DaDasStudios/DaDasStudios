---
title: "Books Social Media"
description: "Your gateway to hassle-free car rentals, where convenience meets choice"
image: "books-social-media.png"
techs: [
{
  name: "Javascript",
  icon: "javascript.svg"
},
{
  name: "React",
  icon: "react.svg"
}, 
{
  name: "React Router",
  icon: "react-router.png"
},
{
  name: "Tailwind",
  icon: "tailwind.svg"
},
{
  name: "Express",
  icon: "express.png"
},
{
  name: "MongoDB",
  icon: "mongo.svg"
},
{
  name: "JWT",
  icon: "jwt.png"
}
]
link: "https://books-social-media.onrender.com/"
---

## About this project

Through out all the time I've been learning programming and web development one of the most interesting topics to me was the UI design and styling.
So I decided to create a full _social media like_ application where you can submit your favorite books and share them with others. There's several reading categories.

The main purporse of this project was to perform the topics I was intereseted in: styling and design, so I got inspiration of the __iPhone__ look and went directly to the code. Also, I just considered this project was perfect to be created with the MERN stack which is (at the time I'm writting this post) the
most useful web stack to learn the web development fundamentals. 

So that this project turned into a huge challenge, due to the variety of features I was planing to implement and the lack of time I usually got. As you can see in my portfolio, I'm electronic engenieering student, so that I can't keep programming all the time I'd like, unfortunaly.

Regardless I actually like my career and I think my programming skills along with my math and electronic skills could work togheter in a magnific way in the future. Just to present, don't hesitate to give a try to my [Thermodynamics Circuit Simulator](https://circuit-thermodynamics-simulator.vercel.app) which mixes
all these topics in a React application.

## Pre-development challenges:

During the development period I got some bugs and limitation due to the choosen stack:

__Difficult incorporations:__ Since the model of the application is creating a REST API that React application consumes, client routes managment is forced to be CSR and the server is completely separated of the react application. This problem isn't present in modern web frameworks like Astro or NextJS which allows to
mix the server logic with React. Thanks to the Express framework freedom, developers have to implement everything manually, so using React as the default render engine is another task to do.

__Project independence:__ This may be seen as an advantage because the more independence you got, the more scalability you have separately. How ever, this advantage was not my case given that the two both applications was connected. I mean, it was kind of useless to scale one separately without utilize that new feature into the other application. Please don't misinterpret me, the application development was meant to be fast and more focused on the React application, it's recommended to never mix the REST API with the client application.

__Technologies choice:__ It's too related with the two previous challenges, I just wanted to use React for this application, but one thing was sacrificed, the SEO. The client application was build on top of React Router Dom which adds a routing system to our application easily. However, the compiled Javascript bundle gets extremely big as your application grows which is a huge limitation for the Search Engine Optimization (SEO). This drawback was making me to opt to choose other web stack or build the website using an old-school SSR tool that is available in express, I'm talking about the render engine as I mentioned in the first paragraph. But still knowing this, I just ended up using the MERN stack.

## Development accomplishments

Leaving aside the issues I experimented before the website development; not everything was bad certainly and the followin goals was achieved:

* Build a complete user dashboard using nested URL routes for the books/user actions
* Deploy the clien-side application in the Express server itself so the both are linked by the same domain
* Design an actual beautiful and user-friendly layout highlighted for its high similarity to Apple applications but with a distintive differences

With this project I learned an incredible amount of things about styling and stuff like that, thanks the main purporse of the project was to use the Apple appearance for getting inspiration. But it was surprisingly the most hard part regardless using TailwindCSS.

## Additional information

If you get interested in this project and want to dirty your hands with some code, please visit the [Github Repository](https://github.com/DaDasStudios/MERN-Books-Social-Media) or see the live application in the web by clicking the below button.
