import { ChevronDown, ChevronUp } from "react-feather";
import styles from "./Termostato.module.css";
import ToggleBoton from "../toggleboton/ToggleBoton";
import { useState } from "react";

export default function Termostato() {
  const [modo, setModo] = useState("celsius");
  const [temperatura, setTemperatura] = useState(20);

  function ToggleModo() {
    const nextMode = modo === "celsius" ? "fahrenheit" : "celsius";
    setModo(nextMode);
  }

  function incrementarTemperatura() {
    setTemperatura(temperatura + 1);
  }

  function decrementarTemperatura() {
    setTemperatura(temperatura - 1);
  }

  return (
    <div className={styles.termostato}>
      <h1>Termostato</h1>
      <div className={styles.display}>{temperatura}°</div>
      <div className={styles.grupo_botones}>
        <ToggleBoton
          label="Modo"
          opciones={[
            { label: "C", value: "celsius" },
            { label: "F", value: "fahrenheit" },
          ]}
          seleccionarValue={modo}
          unCambio={ToggleModo}
        />
        <div className={styles.grupo_flechas}>
          <button onClick={decrementarTemperatura} className={styles.btn}>
            <ChevronDown size={30} />
          </button>
          <button onClick={incrementarTemperatura} className={styles.btn}>
            <ChevronUp size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
