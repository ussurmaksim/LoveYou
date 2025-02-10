import React from "react";
import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

export default function App() {
  return (
    <div className="App">
        <Header  />
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
  );
}