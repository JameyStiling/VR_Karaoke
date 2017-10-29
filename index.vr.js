import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

import FlyingText from './vr/components/FlyingText';

const NodePDX = () => (
  <View>
    <Pano source={asset('chess-world.jpg')} />
    <FlyingText startingZ={-100} endingZ={-5} />
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        width: 6,
        alignItems: 'stretch',
        transform: [{ translate: [-3, 3, -5] }],
      }}
    >
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'red' }}>
        <Text style={{ fontSize: 0.2, textAlign: 'center' }}>What do you want to learn about?</Text>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 0.2, textAlign: 'center' }}>React</Text>
      </View>
      <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange' }}>
        <Text style={{ fontSize: 0.2, textAlign: 'center' }}>Node</Text>
      </View>
    </View>
  </View>
);

export default NodePDX;

AppRegistry.registerComponent('NodePDX', () => NodePDX);
