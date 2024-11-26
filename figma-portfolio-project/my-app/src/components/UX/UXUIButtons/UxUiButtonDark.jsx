import React from "react";

const UxUiButtonDark = () => {
  const buttonStyle = {
    backgroundColor: "#D1D3D6", // Slightly darker gray background
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

export default UxUiButtonDark;
