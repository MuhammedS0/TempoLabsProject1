import React from "react";

const HomeButtonOrange = () => {
    const styles = {
      buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
      },
      button: {
        backgroundColor: '#FF8A3C',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '9999px',
        width: '6rem',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        cursor: 'pointer',
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
  
  export default HomeButtonOrange;