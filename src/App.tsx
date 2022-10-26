import React from "react";
import "./App.css";
import { Form } from "./components";

function App() {
  return (
    <>
      <div className="flex h-full bg-[#C4C4C4D4] bg-opacity-80">
        <div className="w-auto h-auto m-auto rounded">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
