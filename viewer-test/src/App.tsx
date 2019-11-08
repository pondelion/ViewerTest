import React from 'react';
import BubbleMenu from './components/menu/BubbleMenu';
import ThreeScene from './components/3dviewer/ThreeScene';
import CoordinateAxisScene from './components/3dviewer/CoordinateAxisScene';
import TestBoxScene from './components/3dviewer/TestBoxScene';
import Scatter from './components/chart/Scatter';
import Scene1 from './scene/Scene1';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <BubbbleMenu />
      <div id='scene'></div>
      {/* <Scene1 /> */}
    </div>
  );
}

export default App;
