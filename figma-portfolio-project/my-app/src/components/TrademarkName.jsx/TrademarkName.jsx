import React from "react";

const TrademarkName = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333333", // Dark grey background
        padding: "1rem",
        borderRadius: "8px", // Rounded edges for the background
        width: "fit-content", // Adjust to fit content
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ff7f36", // Orange circle
          color: "white",
          width: "50px",
          height: "50px",
          borderRadius: "50%", // Makes it circular
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginRight: "1rem", // Space between the logo and text
        }}
      >
        JC
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: "0.9rem",
            color: "#bdbdbd", // Light grey text for "Made by"
            margin: 0,
          }}
        >
          Made by
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            color: "white", // White text for the name
            margin: 0,
          }}
        >
          Jayesh Patil
        </p>
      </div>
    </div>
  );
};

export default TrademarkName;
