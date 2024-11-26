import React from "react";

const UxUiButtonLight = () => {
  const buttonStyle = {
    backgroundColor: "#F2F3F5", // Light gray background
    borderRadius: "20px",       // Rounded corners
    color: "#000000",           // Black text
    padding: "10px 20px",       // Padding for size
    border: "none",             // No border
    fontSize: "16px",           // Font size for text
    fontWeight: "normal",       // Regular font weight
    textAlign: "center",        // Centered text
    cursor: "pointer",          // Pointer cursor on hover
  };

  return <button style={buttonStyle}>UI/UX Design</button>;
};

export default UxUiButtonLight;
