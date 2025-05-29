import React from "react";
import styles from "./StartPage.module.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import StartCard from "../../components/StartCard/StartCard";

const StartPage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Environmental Quiz</title>
      </Helmet>
      <StartCard onStart={handleStart} />
    </div>
  );
};

export default StartPage;
