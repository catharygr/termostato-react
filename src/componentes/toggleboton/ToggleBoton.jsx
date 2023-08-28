/* eslint-disable react/prop-types */
import styles from "./ToggleBoton.module.css";
import { useId } from "react";

export default function ToggleBoton({
  label,
  opciones,
  seleccionarValue,
  unCambio,
}) {
  const id = useId();

  return (
    <div className={styles.container}>
      <div className={styles.toggle_label}>{label}</div>
      <div className={styles.toggle_boton}>
        {opciones.map(({ label, value }) => {
          const opcionId = `${id}-${label}`;
          const esSeleccionada = value === seleccionarValue;

          return (
            <label
              key={opcionId}
              htmlFor={opcionId}
              className={`${styles.opccion} ${
                esSeleccionada ? styles.opccionSeleccionada : ""
              }`}
            >
              <input
                type="radio"
                id={opcionId}
                name={id}
                value={value}
                checked={esSeleccionada}
                onChange={unCambio}
              />
              {label}
            </label>
          );
        })}
      </div>
    </div>
  );
}
