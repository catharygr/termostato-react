import styles from "./ToggleBoton.module.css";

export default function ToggleBoton() {
  return (
    <div className={styles.grupo_modo}>
      <label className={styles.opcion} htmlFor=""></label>
      <input type="text" name="" id="" placeholder="Modo" />
    </div>
  );
}
