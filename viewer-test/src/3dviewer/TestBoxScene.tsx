import React from 'react';
import * as THREE from 'three';
import ThreeScene from './ThreeScene';
import { ThreeObject, ThreeObjects } from './ThreeScene';
import { Props as ThreeProps } from './ThreeScene';
import { ObjectFactory as OF } from '../utils/three/ObjectFactory';


type Props = ThreeProps;

class TestBoxScene extends ThreeScene {

  constructor(props: Props) {
    super(props);

    this.animate = this.animate.bind(this);
    this.createObjects = this.createObjects.bind(this);

    this._objects = this.createObjects();
    this.onObjectsUpdated();

    this.forceUpdate();
  }

  animate(): void {
    this._objects[0].obj.rotation.x += 0.01;
    this._objects[0].obj.rotation.y += 0.01;
    super.animate();
  }

  createObjects(): ThreeObjects {
    const objs: ThreeObjects = [];
    objs.push({
      tag: 'box1',
      obj: OF.createBox(0.0, 0.0, 0.0),
      objType: 'box'
    }) 
    return objs;
  }
}

export default TestBoxScene;
