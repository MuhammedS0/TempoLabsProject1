import React from "react";

const ShopTropicalPlants = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%", // Adjust container height
        margin: 0,
        padding: 0,
      }}
    >
      <button
        style={{
          backgroundColor: "#e5e5e5",
          color: "#1a1a1a",
          fontSize: "1.25rem",
          fontWeight: "500",
          borderRadius: "15px", // Slightly rounded corners
          width: "20rem", // Button width
          height: "4rem", // Button height
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid #1a1a1a", // Black border
          cursor: "pointer",
          transition: "all 0.3s ease", // Smooth hover transition
          position: "relative",
          overflow: "hidden",
          padding: "0 2.5rem", // Internal padding
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#1a1a1a"; // Black background on hover
          e.currentTarget.style.color = "white"; // White text on hover
          e.currentTarget.style.transform = "translateY(2px)"; // Subtle movement
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#e5e5e5"; // Revert to grey background
          e.currentTarget.style.color = "#1a1a1a"; // Revert to black text
          e.currentTarget.style.transform = "translateY(0)"; // Reset position
        }}
      >
        <span
          style={{
            transition: "all 0.3s ease",
            position: "relative",
            zIndex: 2,
          }}
        >
          Shop Tropical Plants
        </span>
      </button>
    </div>
  );
};

export default ShopTropicalPlants;
