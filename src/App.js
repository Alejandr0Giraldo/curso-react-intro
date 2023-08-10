import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTools = [
  {text: 'Cortar cebolla', completed: false},
  {text: 'Tomar curso de intro react.js', completed: true},
  {text: 'Llorar por el trabajo', completed: false},
  {text: 'Renunciar', completed: false},
]

function App() {
  return (
    <>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch/>

      <TodoList>
        {defaultTools.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

    <CreateTodoButton/> 
    </>
  );
}


export default App;
