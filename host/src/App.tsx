import { useState } from "react";
import List from "todo/List";
import Input from "todo/Input";

function App() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const onSubmit = () => {
    if (newTodo !== "" && !todos.includes(newTodo)) {
      setTodos((prev) => [...prev, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <>
      <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
      <List items={todos} />
    </>
  );
}

export default App;
