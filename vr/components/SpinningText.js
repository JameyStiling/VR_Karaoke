import React from "react";
import { Animated, Text } from "react-vr";
import { Easing } from "react-native";

class SpinningText extends React.Component {
  state = {
    rotation: new Animated.Value(0)
  };

  componentDidMount() {
    this.rotateText();
  }

  rotateText = () => {
    this.state.rotation.setValue(0);
    Animated.timing(this.state.rotation, {
      toValue: 360,
      duration: 5000,
      easing: Easing.linear
    }).start(this.rotateText);
  };

  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "red",
          width: 4,
          alignItems: "stretch",
          transform: [
            { translate: [-2, 2, -6] },
            { rotateY: this.state.rotation }
          ]
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 0.6
          }}
        >
          Attack of the Frah
        </Text>
      </Animated.View>
    );
  }
}

export default SpinningText;
