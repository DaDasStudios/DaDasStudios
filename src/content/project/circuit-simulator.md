---
title: "Circuit Simulator"
description: "Observe how a simple resistive circuit would behave in real life considering the thermodynamic factor"
image: "circuit-simulator.png"
link: "https://circuit-thermodynamics-simulator.vercel.app"
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
  name: "Tailwind",
  icon: "tailwind.svg"
},
]

---

# Introduction
Welcome to my simulation app, where the intriguing world of DC resistive circuits comes to life. With a passion for electronics and a vision to simplify complex circuit simulations, I embarked on a journey to create an intuitive app that allows users to explore the behavior of resistive circuits under varying conditions. Join me as I delve into the fascinating realm of circuit simulation, where temperature changes, environmental factors, resistor materials, and circuit properties influence the performance of these circuits.

## A Vision for a Dynamic Circuit Simulator
Driven by my fascination with electronics and the desire to make circuit simulations accessible to all, I envisioned a powerful yet user-friendly tool that would enable users to experiment with DC resistive circuits in real-time. Whether you're a seasoned engineer or an aspiring electronics enthusiast, I wanted this app to serve as a bridge between theory and practical application, fostering a deeper understanding of circuit behavior.

During my physics class in the university, the professor proposed an activity focus on mixing our engineering career with thermodynamics. I didn't know certainly what kind of thing to do, but everything was allowed to put forward. But an incredible idea come in to my mind related to the circuits effiency; I mean, the electronic calculation are usually __ideal__ which means that majority of external factors are being ignored for simplicity. But the big drawback with doing that is the lack of knowledge about the leaks of power and energy due to the components' temperatures.

## Building process
Firstly, I had a long journey through the internet doing research about this topic which was kind of difficult. If you are familiar with electronics, there're no many people interested in this topic because it's too specific. The main thing I needed to understand was the relation between the current in a resistor and its material with its temperature. Once that was figured out, the application building had to come up, if you want to know more about the research, please visit the this [Notion page where I covered specifically all the specific topics of this project.](https://www.notion.so/Eficiencia-de-los-circuitos-el-ctricos-8c187509fc2b478a9231da6a98120a7b?pvs=4)

With a clear vision in mind, I turned to Vite, React, and TailwindCSS to bring my app to life. Vite's lightning-fast build tool and React's flexibility provided the foundation for seamless user interactions, while TailwindCSS empowered me to design a visually appealing and responsive interface. By keeping the app client-side rendered (CSR), I aimed to deliver a smooth and engaging experience, allowing users to visualize the circuit changes instantaneously.

#### Embracing Circuit Variables for Realistic Simulations
At the heart of my simulation app lies the ability to adjust various circuit variables, including temperature, environmental factors, resistor materials, and circuit properties such as source voltage and resistance values. By offering users the freedom to tweak these variables, they gain insight into how real-world conditions impact the performance of DC resistive circuits. This dynamic approach to circuit simulation fosters a deeper understanding and sparks curiosity for exploring diverse scenarios.

## Conclusion:
My simulation app has opened up a captivating world of DC resistive circuits, empowering users to explore and experiment in a dynamic virtual environment. Through the synergy of Vite, React, and TailwindCSS, I have built a platform that bridges the gap between theory and practice, offering users a captivating and educational journey into the intricacies of resistive circuits. With a focus on continuous improvement and user feedback, I am committed to making this app a go-to resource for all electronics enthusiasts, where curiosity thrives, knowledge deepens, and the beauty of circuitry comes to life. Thank you for being a part of my simulation app journey, and I look forward to seeing the innovative circuits you create!