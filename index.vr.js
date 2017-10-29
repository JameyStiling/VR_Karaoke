import React from "react";
import { AppRegistry, asset, Pano, Text, View } from "react-vr";

import FlyingText from "./vr/components/FlyingText";
import SpinningText from "./vr/components/SpinningText";

const NodePDX = () => (
  <View>
    <Pano source={asset("chess-world.jpg")} />
    <SpinningText />
    <FlyingText startingZ={-100} endingZ={-5} />
  </View>
);

export default NodePDX;

AppRegistry.registerComponent("NodePDX", () => NodePDX);
