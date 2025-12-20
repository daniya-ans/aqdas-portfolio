import React, { useState } from "react";

const AnimatedArrow = () => {
  const [animation, setAnimation] = useState(""); // current animation

  const startAnimation = (type) => {
    setAnimation(""); // reset first to restart animation
    setTimeout(() => setAnimation(type), 10);
  };

  const stopAnimation = () => setAnimation("");

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Arrow Animation Demo (React)</h2>

      {/* SVG Arrow */}
      <svg
        style={{
          ...styles.svg,
          animation: animation ? `${animation} 1.5s infinite ease-in-out` : "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M19.0538 4.93957L19.0651 14.8503L17.0874 14.8525L17.0624 8.35749L5.65092 19.8209L4.2367 18.4067L15.6482 6.94328L9.15017 6.95065L9.16556 4.95079L19.0538 4.93957Z"
          fill="#6E6E73"
        />
      </svg>

      {/* Buttons */}
      <div style={styles.buttons}>
        <button onClick={() => startAnimation("rotate")}>Rotate 🔄</button>
        <button onClick={() => startAnimation("bounce")}>Bounce ⬆️</button>
        <button onClick={() => startAnimation("slide")}>Slide ↔️</button>
        <button onClick={() => startAnimation("pulse")}>Pulse 💓</button>
        <button onClick={() => startAnimation("flip")}>Flip 🔁</button>
        <button onClick={stopAnimation}>Stop ✋</button>
      </div>

      {/* Embedded CSS for animations */}
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @keyframes slide {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(25px); }
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.6; }
          }

          @keyframes flip {
            0%, 100% { transform: rotateY(0deg); }
            50% { transform: rotateY(180deg); }
          }

          button {
            padding: 10px 16px;
            border: none;
            border-radius: 8px;
            background-color: #6e6e73;
            color: white;
            cursor: pointer;
            transition: background 0.3s;
          }

          button:hover {
            background-color: #555;
          }
        `}
      </style>
    </div>
  );
};

// 💅 Inline Styles
const styles = {
  container: {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#f9f9f9",
  },
  title: {
    marginBottom: "20px",
    color: "#444",
  },
  svg: {
    marginBottom: "25px",
    transition: "transform 0.5s ease",
    transformOrigin: "center",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  },
};

export default AnimatedArrow;
