---
title: "AliExpress Clone"
description: "A exact clone of the homepage of AliExpress, even along with a set of features with dynamic behaviour"
image: "aliexpress-clone.png"
link: "https://aliexpress-clone-typescript-react.vercel.app"
techs: [
{
  name: "Typescript",
  icon: "typescript.svg"
},
{
  name: "Vite",
  icon: "vite.png"
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
  name: "Bulma",
  icon: "bulma.svg"
},
{
  name: "CSS",
  icon: "css-3.svg"
}
]
---

## Why this project?

For put into action the concepts learned about front-end development, I thought it's a nice idea to replicate the homepage of Aliexpress.
To do this, I implemented the concepts  of below:

This project was born to only replicate the appierance of the webpage, however it evolved to a better insight more complex

## Specific tasks

In this project I had to accomplish the following requisites:

* A custom CSS for a better management of the styles in order to clone the apperience of _Aliexpress_ exactly like it looks like
* The folder structure is oriented to a real project, so that is made up of a recursive structure inside the folders
* An interactive and dynamic GUI with a bunch of componenets separed by folders according their type
* Usage of __Typescript__ in order to avoid type-errors and, instead handle the data-flow of the project properly
* Consuming a **REST API** to get the products attributes like it was a common e-commerce webpage
* Formatting of currency and selection of languages to choose at the navbar

## Achievements

In general the most useful things I've learned with this project was the project files organization and the usage of a good CSS semantic clases. 

How ever during the development layout and component problems didn't wait to show up, so I had to find efficient and scalable solutions for this challenges:

* Create a custom carrousel component that accepts different types of content formats
* Design a select box for the language and currency options which requests a global languages API
* Build different styled components with only CSS in order to leverage its powerful posibilities