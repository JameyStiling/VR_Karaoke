import { React, PropTypes } from "react";
import { Animated } from "react-vr";

class FlyingText extends React.Component {
  state = {
    flyingTextZ: new Animated.Value(this.props.startingZ)
  };

  componentDidMount() {
    this.state.flyingTextZ.setValue(-100); // Start away
    Animated.timing(
      // Base: spring, decay, timing
      this.state.flyingTextZ, // Animate
      {
        toValue: this.props.endingZ,
        duration: 2000 // Animate to front
      }
    ).start(); // Start the animation
  }

  render() {
    return (
      <Animated.Text
        style={{
          backgroundColor: "#777879",
          fontSize: 0.4,
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: "center",
          textAlignVertical: "center",
          transform: [{ translateZ: this.state.flyingTextZ }]
        }}
      >
        PDXNode Hack night!
      </Animated.Text>
    );
  }
}

FlyingText.propTypes = {
  endingZ: PropTypes.number.isRequired,
  startingZ: PropTypes.number.isRequired
};

export default FlyingText;
