import { Trash2 } from "lucide-react";
import styles from "./styles.module.css";

export default function TrashButton() {
  return (
    <button className={styles.trashButton}>
      <Trash2 className={styles.icon} />
    </button>
  );
}
