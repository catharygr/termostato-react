import { ChevronDown, ChevronUp } from "react-feather";

export default function Termostato() {
  return (
    <div>
      <h1>Termostato</h1>
      <div>40</div>
      <div>
        <input type="text" name="" id="" placeholder="Modo" />
      </div>
      <div>
        <button>
          <ChevronDown />
        </button>
        <button>
          <ChevronUp />
        </button>
      </div>
    </div>
  );
}
