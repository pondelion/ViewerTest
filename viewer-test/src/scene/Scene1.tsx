import React from 'react';
import TestBoxScene from '../components/3dviewer/TestBoxScene';
import { Scatter, DataType as ScatterDataType } from '../components/chart/Scatter';
import Button from '@material-ui/core/Button';


type Props= {}

export class Scene1 extends React.Component<Props> {

  private scatterRef = React.createRef<Scatter>();

  constructor(props: Props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  private onButtonClick(): void {
    const data: ScatterDataType = [];
    for (let i=0; i < 10; i++) {
      data.push({
        x: Math.random(),
        y: Math.random()
      });
    }
    this.scatterRef.current!.setData(data);
  }

  render() {
    return (
      <div>
        <TestBoxScene width={2000} height={800} cameraPos={{x: 5, y: 5, z: 5}} />
        <Scatter ref={this.scatterRef} />
        <Button variant="contained" color="primary" onClick={this.onButtonClick}>
          update data a
        </Button>
      </div>
    );
  }

}

export default Scene1;
