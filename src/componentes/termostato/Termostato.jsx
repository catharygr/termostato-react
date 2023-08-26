import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./Termostato.module.css";

export default function Termostato() {
  return (
    <div className={styles.termostato}>
      <h1>Termostato</h1>
      <div className={styles.display}>40</div>
      <div className={styles.grupo_botones}>
        <div className={styles.grupo}>
          <label htmlFor=""></label>
          <input type="text" name="" id="" placeholder="Modo" />
        </div>
        <div className={styles.grupo_flechas}>
          <button className={styles.btn}>
            <ChevronDown size={30} />
          </button>
          <button className={styles.btn}>
            <ChevronUp size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
