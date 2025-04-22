import { useState } from "react";

export default function Todo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState<string[]>([]);
  
    const addTodo = () => {
      if (task.trim() === "") return;
      setTodos([...todos, task.trim()]);
      setTask("");
    };
  
    return (
      <div className="max-w-md mx-auto mt-10 px-4">
        <p className="mt-5 bg-fuchsia-950">components Logo.tsx :</p>
        <h2 className="text-2xl font-bold mb-4">Envoyer dans l'api</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Tâche..."
            className="flex-1 p-2.5 border rounded"
          />
          <button onClick={addTodo}>
            Ajouter
          </button>
        </div>
  
        <ul className="mt-6 space-y-2">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    );
  }