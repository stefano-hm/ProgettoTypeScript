import styles from "./LoadingScreen.module.css"; 

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.spinner} />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
