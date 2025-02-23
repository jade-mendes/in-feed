import { useState } from "react";
import { ThumbsUp } from "lucide-react";
import styles from "./styles.module.css";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <button className={`${liked ? styles.likeButtonClicked : styles.likeButton}`} onClick={toggleLike}>
      <ThumbsUp className={`${liked ? styles.iconClicked : styles.icon}`} />
      Like • {likes}
    </button>
  );
}
