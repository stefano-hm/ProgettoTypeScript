import React, { useState } from "react";
import styles from "./ShareButton.module.css";

const ShareButton: React.FC = () => {
  const [showFallback, setShowFallback] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My score on the Environmental Quiz",
          text: "Look at the score I got on the Environmental Quiz!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Sharing error:", error);
      }
    } else {
      setShowFallback(true);
    }
  };

  const encodedUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(
    "Look at the score I got on the Environmental Quiz!"
  );

  return (
    <div className={styles.shareContainer}>
      <button className={styles.shareMainButton} onClick={handleShare}>
        Share result
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
