import { useState } from "react";
import "./App.css";
import Input from "./components/ui/Input";
import List from "./components/List";

function App() {
  const [count, setCount] = useState("");

  return (
    <>
      <Input value={count} onChange={setCount} onSubmit={console.log} />
      <List items={["Static TODO 1", "Static TODO 2", "Static TODO 3"]} />
    </>
  );
}

export default App;