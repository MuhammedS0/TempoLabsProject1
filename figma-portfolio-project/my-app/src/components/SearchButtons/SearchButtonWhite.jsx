import React from "react";

const SearchButtonWhite = () => {
  // Styles for the circular button
  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px", // Circle size
    height: "60px", // Circle size
    borderRadius: "50%", // Circular shape
    backgroundColor: "#FFFFFF", // White background (adjust if needed to match exact color)
    border: "2px solid black", // black border
    cursor: "pointer", // Pointer cursor on hover
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)", // Subtle shadow
    transition: "transform 0.2s ease-in-out", // Smooth hover animation
  };

  // SVG styles for the search icon
  const svgStyle = {
    width: "24px", // Adjust width
    height: "24px", // Adjust height
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")} // Scale up on hover
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")} // Scale back on leave
    >
      {/* Search Icon SVG */}
      <svg
        style={svgStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black" // black color for the icon
        strokeWidth="2.5" // Adjust stroke thickness
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" /> {/* Circular part of the magnifying glass */}
        <line x1="16" y1="16" x2="20" y2="20" /> {/* Handle of the magnifying glass */}
      </svg>
    </button>
  );
};

export default SearchButtonWhite;
