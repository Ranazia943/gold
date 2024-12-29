import React from "react";

const Loading = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loader}>
        <div style={styles.dollar}>$</div>
      </div>
      <div style={styles.text}>Loading...</div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    backgroundColor: "#f0f4f8",
    color: "#4b4f58",
    fontFamily: "Arial, sans-serif",
  },
  loader: {
    fontSize: "50px",
    fontWeight: "bold",
    animation: "bounce 1.5s infinite",
  },
  dollar: {
    display: "inline-block",
    color: "green", // Make the dollar symbol green
    fontSize: "60px", // Adjust the font size if needed
    animation: "rotate 2s infinite linear", // Rotate the dollar symbol 360 degrees
  },
  text: {
    fontSize: "20px",
    marginTop: "20px",
    fontWeight: "normal",
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  "@keyframes bounce": {
    "0%": {
      transform: "scale(1)",
    },
    "50%": {
      transform: "scale(1.2)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
};

export default Loading;
