import React from "react";
import { FiX } from "react-icons/fi";
import { deleteTrackRequest } from "../../services/services";
import { Container } from "./styles";

export function DeleteTrack({ trackId, onDeleteTrack }) {
  const handleDeleteTrack = () => {
    const confirm = window.confirm("Deseja realmente excluir esta faixa?");
    if (confirm) {
      deleteTrackRequest({ trackId })
        .then((response) => {
          console.log("Música deletada:", response.data);
          onDeleteTrack();
        })
        .catch((error) => console.error("Erro ao deletar música:", error));
    }
  };

  return (
    <Container>
      <button title="Deletar musica" onClick={handleDeleteTrack}>
        <FiX />
      </button>
    </Container>
  );
}
