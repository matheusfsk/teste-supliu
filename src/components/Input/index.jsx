import React from "react";
import { Container } from "./styles.js";

export function Input({ label, buttonLabel, onButtonClick, setSearch }) {
  return (
    <Container>
      {label && <label>{label}</label>}
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ex: Rei"
        />
        {buttonLabel && <button onClick={onButtonClick}>{buttonLabel}</button>}
      </div>
    </Container>
  );
}
