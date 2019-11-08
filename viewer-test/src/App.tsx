import React from 'react';
import BubbleMenu from './components/menu/BubbleMenu';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <BubbleMenu />
      <div id='scene'></div>
    </div>
  );
}

export default App;
