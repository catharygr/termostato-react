import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./Termostato.module.css";
import ToggleBoton from "../toggleboton/ToggleBoton";

export default function Termostato() {
  return (
    <div className={styles.termostato}>
      <h1>Termostato</h1>
      <div className={styles.display}>40</div>
      <div className={styles.grupo_botones}>
        <ToggleBoton />
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
