import React from 'react';
import { Header } from './components/header';
import { AddTask } from './components/add-task';
import { List } from './components/list';

function App() {
  return (
    <div className="todo">
      <Header />
      <AddTask
        onAdd={ addTask }
      />
      <List />
    </div>
  );

  function addTask() {
    
  }

}

export default App;
