import { useState } from "react";
import Section1 from "./Components/section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";

function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
