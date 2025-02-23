import { Trash2 } from "lucide-react";
import styles from "./styles.module.css";

interface TrashButtonProps {
  onClick: () => void;
}

export default function TrashButton({ onClick }: TrashButtonProps) {
  return (
    <button className={styles.trashButton}>
      <Trash2 onClick={onClick} className={styles.icon} />
    </button>
  );
}
