import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Menu
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/* ? operator - If condition is true, return first part. If false, return second part after ':' */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine with 6 dished to choose from blablabla.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// Prop
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // If pizza sold out, don't return (or something else)
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* Uncertain what element(tag)
        {pizzaObj.soldOut ? (
          <span>"Sold out"</span>
        ) : (
          <p>{pizzaObj.price}</p>
        )} */}

        {/* Certain what element(<span>) to use  */}
        <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

// Header
function Header() {
  const headerStyle = {};

  return (
    <header className="header">
      <h1 style={headerStyle}>Fast React pizza company</h1>;
    </header>
  );
}

// Footer
function Footer() {
  const hour = new Date().getHours();
  // Change openHour value to change message
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // Can code if-statement because we are OUTSIDE og JSX.
  // if restaurant is not open, return this. If it is open, then do not return this. The codeblock underneath is returned.
  // if (!isOpen)
  //   return (
  //     <p>
  //       CLOSED - old msng:We're happy to welcome you between {closeHour}:00.
  //     </p>
  //   );

  // If isOpen = true(correct time for open), the short circut and render. If not, <p>open will not execute
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closingHour={closeHour} openHour={openHour} />
      ) : (
        <p>We're happy to welcome you between {closeHour}:00.</p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open");
}

function Order({ closingHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closingHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// Renders React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
