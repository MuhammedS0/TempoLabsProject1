import React from "react";

const CardBackgroundDesign = () => {
  return (
    <div
      style={{
        width: "400px", // Adjust width of the component
        height: "200px", // Adjust height of the component
        position: "relative",
        backgroundColor: "#333333", // Dark grey background
        overflow: "hidden", // Prevent shapes from going outside
        borderRadius: "15px", // Optional: Rounded card style
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Optional: Card shadow
      }}
    >
      {/* Shape 1 */}
      <div
        style={{
          position: "absolute",
          width: "120px",
          height: "120px",
          top: "10%",
          left: "5%",
          borderRadius: "50%",
          backgroundImage: "linear-gradient(135deg, #FF7F36, #FFAF68)", // Orange gradient
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)", // Subtle shadow
          transform: "rotate(45deg)", // Rotated blob
        }}
      ></div>

      {/* Shape 2 */}
      <div
        style={{
          position: "absolute",
          width: "80px",
          height: "80px",
          top: "40%",
          left: "50%",
          borderRadius: "50%",
          backgroundImage: "linear-gradient(135deg, #FF7F36, #FFAF68)",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          transform: "rotate(45deg)",
        }}
      ></div>

      {/* Shape 3 */}
      <div
        style={{
          position: "absolute",
          width: "160px",
          height: "160px",
          top: "70%",
          left: "80%",
          borderRadius: "50%",
          backgroundImage: "linear-gradient(135deg, #FF7F36, #FFAF68)",
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
          transform: "rotate(45deg)",
        }}
      ></div>

      {/* Optional: Add card content */}
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          color: "white",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: "500",
        }}
      >
      </div>
    </div>
  );
};

export default CardBackgroundDesign;
