import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Taskbar from './components/Taskbar';


function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Sidebar />
        <Taskbar/>
      </div>
    </div>
  );
}

export default App;
