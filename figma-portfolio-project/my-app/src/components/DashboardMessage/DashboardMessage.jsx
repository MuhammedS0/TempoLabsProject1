import React from "react";

const DashboardMessage = () => {
  const words = [
    "UX Design",
    "App Design",
    "Dashboard",
    "Wireframe",
    "User Research",
  ];

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#F97316", // Orange background
        width: "100%",
        height: "120px", // Adjust height as needed
        transform: "skewY(-10deg)", // Diagonal tilt
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          animation: "scroll-zigzag 15s linear infinite", // Slow scrolling
        }}
      >
        {/* Repeat the words for seamless looping */}
        {Array(3)
          .fill(words)
          .flat()
          .map((word, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "40px 15px",
                padding: "10px 20px",
                border: "2px solid white",
                borderRadius: "8px",
                backgroundColor: "white", // White background for each word
                fontWeight: "bold",
                fontSize: "14px",
                color: "#F97316", // Orange text
                transform: index % 2 === 0 ? "translateY(-10px)" : "translateY(10px)", // Zigzag effect
              }}
            >
              {word}
              {index % words.length !== words.length - 1 && (
                <span
                  style={{
                    marginLeft: "10px",
                    color: "white",
                  }}
                >
                  ✦
                </span>
              )}
            </div>
          ))}
      </div>

      <style>
        {`
          @keyframes scroll-zigzag {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default DashboardMessage;
