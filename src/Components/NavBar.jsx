import React, { useState } from "react";
import LinkWithIcon from "./LinkWithIcon";

const NavBar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const focusStyle = (index) => {
    const baseStyle = { transform: "scale(1) translateY(0px)" };
    const focusedStyle = { transform: "scale(1.5) translateY(-10px)" };
    const adjacentStyle = { transform: "scale(1) translateY(-6px)" };
    const distantStyle = { transform: "scale(1)" };

    if (hoveredIndex === null) return baseStyle;

    const previous = hoveredIndex - 1;
    const previous1 = hoveredIndex - 2;
    const next = hoveredIndex + 1;
    const next2 = hoveredIndex + 2;

    if (index === hoveredIndex) return focusedStyle;
    if (index === previous || index === next) return adjacentStyle;
    if (index === previous1 || index === next2) return distantStyle;

    return baseStyle;
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


};

export default NavBar;
