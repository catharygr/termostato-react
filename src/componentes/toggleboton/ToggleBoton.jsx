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
          const esSeleecionada = value === seleccionarValue;

          return (
            <label key={opcionId} htmlFor={opcionId}>
              <input
                type="radio"
                id={opcionId}
                name={id}
                value={value}
                checked={esSeleecionada}
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
