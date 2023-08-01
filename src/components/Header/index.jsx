import React from "react";
import { Container } from "./styles";

import imgLogo from "../../assets/logo.png";
export function Header() {
  return (
    <Container>
      <img src={imgLogo} alt="Logo de Tiao" />
      <h1>Discografia</h1>
    </Container>
  );
}
