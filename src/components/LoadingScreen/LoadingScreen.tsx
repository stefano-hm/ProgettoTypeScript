import React from "react";
import styles from "./LoadingScreen.module.css"; 

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.spinner} />
      <p className={styles.text}>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
