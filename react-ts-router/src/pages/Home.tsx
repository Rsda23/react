// src/pages/Home.tsx
import React from 'react';
import TodoList from '../components/todo/TodoList';

const Home: React.FC = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default Home;