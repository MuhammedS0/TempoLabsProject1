import React from 'react';

const HireMeButtonArrowUp = () => {
  const buttonStyle = {
    backgroundColor: '#FF8A3C', // Matching the orange color
    borderRadius: '30px',       // Rounded corners
    color: '#FFFFFF',           // White text
    padding: '10px 20px',       // Padding
    border: 'none',             // No border
    fontSize: '16px',           // Font size
    fontWeight: 'normal',         // Bold text
    cursor: 'pointer',          // Pointer cursor on hover
    display: 'inline-flex',     // Align text and icon inline
    alignItems: 'center',       // Center align vertically
    gap: '8px',                 // Space between text and icon
  };

  const arrowStyle = {
    fontSize: '18px',           // Slightly larger arrow
    fontWeight: 'bold'          // Slightly thicker arrow
  };

  return (
    <button style={buttonStyle}>
      Hire me <span style={arrowStyle}>&#8599;</span> {/* Unicode for ↗ */}
    </button>
  );
};

export default HireMeButtonArrowUp;
