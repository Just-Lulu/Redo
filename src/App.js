// src/App.js
import React from 'react';
import TodoList from './TodoList';
import SpeedInsights from '@vercel/speed-insights/react';


function App() {
  return (
    <div>
      <TodoList />
      <SpeedInsights />

    </div>
  );
}

export default App;