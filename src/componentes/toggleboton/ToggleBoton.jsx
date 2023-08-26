/* eslint-disable react/prop-types */
import styles from "./ToggleBoton.module.css";
import { useId } from "react";

export default function ToggleBoton({ label, opciones }) {
  const id = useId();
  console.log(id);
  return (
    <div className={styles.container}>
      <div className={styles.toggle_label}>{label}</div>
      <div className={styles.toggle_boton}>
        {opciones.map(({label, value}) => (
          
        ))}
      </div>
    </div>
  );
}
