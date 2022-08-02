import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const information = data.map((item) => {
    return <Card item={item} />;
  });

  return (
    <div className="main-container">
      <Navbar />
      <section className="cards-list">{information}</section>
    </div>
  );
}
