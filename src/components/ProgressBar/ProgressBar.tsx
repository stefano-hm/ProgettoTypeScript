import React from "react";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  current: number;
  total: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.filler} style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
