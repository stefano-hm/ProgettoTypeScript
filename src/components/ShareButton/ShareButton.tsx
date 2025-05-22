import React, { useState } from "react";
import styles from "./ShareButton.module.css";

const ShareButton: React.FC = () => {
  const [showFallback, setShowFallback] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Il mio punteggio al Quiz Ambientale",
          text: "Guarda che punteggio ho fatto al quiz ambientale!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Errore nella condivisione:", error);
      }
    } else {
      setShowFallback(true);
    }
  };

  const encodedUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Guarda che punteggio ho fatto al quiz ambientale!");

  return (
    <div className={styles.container}>
      <button className={styles.shareMainButton} onClick={handleShare}>
        Condividi risultato
      </button>

      {showFallback && (
        <div className={styles.fallbackButtons}>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.fallbackLink} ${styles.twitter}`}
          >
            X
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.fallbackLink} ${styles.facebook}`}
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.fallbackLink} ${styles.instagram}`}
          >
            Instagram
          </a>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
