import React, { useState } from 'react';
import { Todo } from '../types/todo';

type Props = {
  data: Todo[];
};

export default function FormCours({ data }: Props) {
  const [todos, setTodos] = useState(data);
  const [title, setTtitle] = useState('');
  const [fromValid, setFormValid] = useState(true);

  const addTodoHandler = () => {};

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || title == '') {
      setIsTitleValid(false);
      return;
    }

    const newTodo: TodoType = {
      id: preValue[preValue.length - 1].id + 1,
      title: title,
    };
    return [fakeTodo, ...preValue];
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTtitle(e.target.value)}
            className=""
          />
          <div className="text-red-500">Champ obligatoire</div>
        </div>
      </form>
      <input
        className=""
        type="button"
        value="Ajout"
        onClick={addTodoHandler}
      />
    </div>
  );
}
