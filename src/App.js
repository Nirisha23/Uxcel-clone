import React from "react";
import "./app.css";
import {
  Navbar,
  Hero,
  Benefits,
  CTA,
  Howitwork,
  Footer,
} from "./components/index";

const foodArray = [
  {
    foodName: "Pizza",
    description:
      "A delicious Italian dish made with a crispy crust, tomato sauce, and a variety of toppings, often including cheese and meats.",
    imageName: "pizza",
  },
  {
    foodName: "Burgers",
    description:
      "A popular fast food item consisting of a patty made from ground beef, served between two buns with a variety of toppings and condiments.",
    imageName: "burgers",
  },
  {
    foodName: "Tacos",
    description:
      "A Mexican dish consisting of a corn or wheat tortilla filled with various ingredients such as meat, beans, vegetables, and cheese.",
    imageName: "tacos",
  },
  {
    foodName: "Sushi",
    description:
      "A Japanese dish made with vinegared rice and various types of seafood, often served with soy sauce, wasabi, and pickled ginger.",
    imageName: "sushi",
  },
  {
    foodName: "Pad Thai",
    description:
      "A popular Thai dish made with stir-fried rice noodles, vegetables, egg, and a sweet and savory sauce, often served with peanuts and lime.",
    imageName: "pad-thai",
  },
  {
    foodName: "Ramen",
    description:
      "A Japanese noodle soup dish made with a meat or fish-based broth, topped with various ingredients such as sliced pork, vegetables, and egg.",
    imageName: "ramen",
  },
  {
    foodName: "Curry",
    description:
      "A dish originating in the Indian subcontinent made with a mix of spices, vegetables, and/or meat in a sauce, often served with rice or naan.",
    imageName: "curry",
  },
  {
    foodName: "Falafel",
    description:
      "A Middle Eastern dish made with ground chickpeas or fava beans, formed into balls or patties, and deep-fried, often served in a pita with vegetables and sauce.",
    imageName: "falafel",
  },
  {
    foodName: "Pho",
    description:
      "A Vietnamese soup made with broth, rice noodles, herbs, and meat, often served with bean sprouts, lime, and chili peppers.",
    imageName: "pho",
  },
  {
    foodName: "Pasta",
    description:
      "A traditional Italian dish made with dough from durum wheat, often served with various sauces and toppings such as meat, vegetables, and cheese.",
    imageName: "pasta",
  },
];

function App() {
  return (
    <div>
      {/* <div className="Navbar">
        <Navbar />
      </div>
      <div className="Hero">
        <Hero />
      </div>
      <div className="Benefits">
        <Benefits />
      </div>
      <div>
        <Howitwork />
      </div> */}

      <CTA />
      {/* <div className="Footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
