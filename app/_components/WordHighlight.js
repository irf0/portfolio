import React from "react";
import { RoughNotation } from "react-rough-notation";

const WordHighlight = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(10 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 3]}
      iterations={1}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
export default WordHighlight;
