import React from "react";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="min-h-screen flex  flex-col justify-center items-center space-y-20 text-3xl">
      <h1 className="">counter app</h1>
      <Counter />
    </div>
  );
};

export default App;
