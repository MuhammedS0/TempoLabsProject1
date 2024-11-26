import React from "react";
const Bell = () => {
    const styles = {
      buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
      },
      button: {
        backgroundColor: '#333333',
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #ffffff',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      },
      icon: {
        width: '1.5rem',
        height: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transform: 'rotate(-15deg)',  // Added rotation
      },
      path: {
        fill: '#ffffff',
      }
    };
  
    return (
      <div style={styles.buttonContainer}>
        <button 
          style={styles.button}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#1a1a1a';
            e.currentTarget.style.transform = 'translateY(2px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#333333';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <div style={styles.icon}>
            <svg 
              viewBox="0 0 24 24" 
              width="24" 
              height="24"
            >
              <path 
                style={styles.path}
                d="M20.34 13.5l-1.06-1.06c-.78-.78-1.28-1.84-1.28-3.03V8.34C18 5.46 15.54 3 12.66 3h-.01C9.78 3 7.32 5.46 7.32 8.34v1.07c0 1.19-.5 2.25-1.28 3.03L5 13.5c-.36.36-.44.89-.17 1.32.27.44.82.68 1.34.68h13c.52 0 1.07-.24 1.34-.68.27-.43.19-.96-.17-1.32zM12 22c1.66 0 3-1.34 3-3H9c0 1.66 1.34 3 3 3z"
              />
            </svg>
          </div>
        </button>
      </div>
    );
  };
  
  export default Bell;