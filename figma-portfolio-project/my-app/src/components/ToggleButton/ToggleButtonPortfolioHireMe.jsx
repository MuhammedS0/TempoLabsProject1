import React, { useState } from "react";

const ToggleButtonPortfolioHireMe = () => {
  // State to track which button is active or hovered
  const [activeButton, setActiveButton] = useState("portfolio");

  // Outer container styles (including the sliding black border)
  const outerContainerStyle = {
    position: "relative",
    width: "fit-content",
    margin: "0 auto", // Center horizontally
    padding: "10px",
  };

  // Sliding black border styles
  const slidingBorderStyle = {
    position: "absolute",
    top: 0,
    left: activeButton === "portfolio" ? "0px" : "calc(50%)",
    width: "calc(50%)", // Half of the container
    height: "100%",
    borderRadius: "40px", // Matches the buttons' rounded corners
    transition: "left 0.3s ease-in-out", // Smooth sliding effect
  };

  // Inner container styles (with buttons and orange slider)
  const innerContainerStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    borderRadius: "40px",
    padding: "5px", // Minimal padding around buttons
    backgroundColor: "#d3d3d3", // Light grey background
    gap: "2px", // Space between buttons
    overflow: "hidden", // Prevent sliding background from overflowing
  };

  // Button styles
  const buttonStyle = {
    border: "none",
    borderRadius: "30px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    backgroundColor: "transparent", // Transparent to allow slider visibility
    color: "#ffffff", // Always white text
    zIndex: 1, // Ensure buttons are above the orange slider
  };

  // Arrow styles
  const arrowStyle = {
    fontSize: "16px",
    fontWeight: "bold",
  };

  // Sliding orange background styles
  const slidingBackgroundStyle = {
    position: "absolute",
    top: "5px", // Align with container padding
    left: activeButton === "portfolio" ? "5px" : "calc(50% + 1px)", // Move between buttons
    width: "calc(50% - 2px)", // Exact width of one button
    height: "calc(100% - 10px)", // Exact height of the container minus padding
    backgroundColor: "#FF8A3C", // Orange background
    borderRadius: "30px", // Matches button roundness
    transition: "left 0.3s ease-in-out", // Smooth sliding effect
  };

  // Hover handlers to mimic clicking behavior
  const handleHover = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div style={outerContainerStyle}>
      {/* Sliding black border */}
      <div style={slidingBorderStyle}></div>

      {/* Inner container with buttons */}
      <div style={innerContainerStyle}>
        {/* Sliding orange background */}
        <div style={slidingBackgroundStyle}></div>

        {/* Portfolio Button */}
        <button
          style={buttonStyle}
          onMouseEnter={() => handleHover("portfolio")} // Simulate click on hover
          onClick={() => setActiveButton("portfolio")} // Set Portfolio as active
        >
          Portfolio <span style={arrowStyle}>&#8599;</span>
        </button>

        {/* Hire Me Button */}
        <button
          style={buttonStyle}
          onMouseEnter={() => handleHover("hireme")} // Simulate click on hover
          onClick={() => setActiveButton("hireme")} // Set Hire Me as active
        >
          Hire me <span style={arrowStyle}>&#8599;</span>
        </button>
      </div>
    </div>
  );
};

export default ToggleButtonPortfolioHireMe;
