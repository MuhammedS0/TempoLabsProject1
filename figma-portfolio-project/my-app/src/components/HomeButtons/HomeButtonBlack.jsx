import React from "react";
const HomeButtonBlack = () => {
    const styles = {
      buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
      },
      button: {
        backgroundColor: '#1a1a1a',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '9999px',
        width: '6rem',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid white',
        cursor: 'pointer',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
      }
    };
  
    return (
      <div style={styles.buttonContainer}>
        <button style={styles.button}>
          Home
        </button>
      </div>
    );
  };
  
  export default HomeButtonBlack;