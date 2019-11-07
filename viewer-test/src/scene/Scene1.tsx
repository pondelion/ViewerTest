import React from 'react';
import BubbleMenu from '../components/menu/BubbleMenu';
import TestBoxScene from '../components/3dviewer/TestBoxScene';
import Scatter from '../components/chart/Scatter';


type Props= {}

export class Scene1 extends React.Component<Props> {

  render() {
    return (
      <div>
        <TestBoxScene width={2000} height={800} cameraPos={{x: 5, y: 5, z: 5}} />
        <div>
          <Scatter />
        </div >
      </div>
    );
  }

}

export default Scene1;
