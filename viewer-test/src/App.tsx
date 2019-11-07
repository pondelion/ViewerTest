import React from 'react';
import BubbleMenu from './menu/BubbleMenu';
import ThreeScene from './3dviewer/ThreeScene';
import CoordinateAxisScene from './3dviewer/CoordinateAxisScene';
import TestBoxScene from './3dviewer/TestBoxScene';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <BubbleMenu></BubbleMenu>
      <TestBoxScene width={2000} height={800} cameraPos={{x: 5, y: 5, z: 5}} />
    </div>
  );
}

export default App;
