import React from "react";

const HireMeButton = () => {
  const buttonStyle = {
    backgroundColor: "#FF8A3C", // Matching orange color
    borderRadius: "30px",       // Fully rounded corners
    color: "#FFFFFF",           // White text
    padding: "10px 20px",       // Padding inside the button
    border: "none",             // No border
    fontSize: "16px",           // Font size for text
    fontWeight: "normal",         // Bold font
    cursor: "pointer",          // Pointer cursor on hover
    display: "inline-flex",     // Align text and icon inline
    alignItems: "center",       // Center items vertically
    gap: "8px",                 // Space between text and arrow
  };

  const arrowStyle = {
    fontSize: "22px",           // Same size as text for balance
    fontWeight: "bold"          // Make the arrow a little thicker
  };

  return (
    <button style={buttonStyle}>
      Hire me <span style={arrowStyle}>&#8594;</span> {/* Unicode for → */}
    </button>
  );
};

export default HireMeButton;
