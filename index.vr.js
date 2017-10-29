import React from 'react';
import { AppRegistry, asset, Pano, Text, View } from 'react-vr';

const NodePDX = () => (
  <View>
    <Pano source={asset('chess-world.jpg')} />
    <Text
      style={{
        backgroundColor: '#777879',
        fontSize: 0.4,
        layoutOrigin: [0.5, 0.5],
        paddingLeft: 0.2,
        paddingRight: 0.2,
        textAlign: 'center',
        textAlignVertical: 'center',
        transform: [{ translate: [0, 0, -3] }],
      }}
    >
      PDXNode Hack night!
    </Text>
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
