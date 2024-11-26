import React from "react";

const TrademarkName2 = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333333", // Dark grey background
        padding: "1rem",
        borderRadius: "8px", // Rounded edges for the background
        width: "fit-content", // Adjust to fit the content
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Circular Icon */}
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
        {/* J and C with no gap */}
        <span
          style={{
            display: "inline-block",
            fontSize: "1.5rem",
            fontWeight: "bold",
            lineHeight: 1, // Prevents extra spacing
          }}
        >
          JC
        </span>
      </div>

      {/* Text Section */}
      <div
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white", // White text for "JCREA"
        }}
      >
        JCREA
      </div>
    </div>
  );
};

export default TrademarkName2;
