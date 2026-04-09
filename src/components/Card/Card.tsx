import type { TCat } from "../../shared/types";
import styles from "./styles.module.scss";

import iconHeart from "../../shared/icons/heart.svg";
import iconHeartLiked from "../../shared/icons/heartLiked.svg";
import { useState } from "react";
import { useCatsStore } from "../../store/store";

interface ICatProps {
  cat: TCat;
}

const Card = ({ cat }: ICatProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleLike = useCatsStore((state) => state.toggleLike);

  const handleLikeClick = (e: React.MouseEvent) => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    e.stopPropagation();
    toggleLike(cat.id);
  };

  return (
    <div
      className={`${styles.container} ${cat.isLiked ? styles.liked : ""}  ${isAnimating ? styles.active : ""}`}
    >
      <img
        className={styles.image}
        src={cat.url}
        alt={`котик под номером ${cat.id}`}
      />

      <img
        className={styles.like}
        src={cat.isLiked ? iconHeartLiked : iconHeart}
        alt="like"
        onClick={handleLikeClick}
      />
    </div>
  );
};

export default Card;
