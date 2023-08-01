import React from "react";
import { FiX } from "react-icons/fi";
import { Container } from "./styles";
import { deleteAlbumRequest } from "../../services/services";

export function DeleteAlbum({ albumId, onDeleteAlbum }) {
  const handleDeleteAlbum = () => {
    const confirm = window.confirm("Deseja realmente excluir este album?");
    if (confirm) {
      deleteAlbumRequest({ albumId })
        .then((response) => {
          console.log("Album deletado:", response.data);
          onDeleteAlbum();
        })
        .catch((error) => console.error("Erro ao deletar o album:", error));
    }
  };

  return (
    <Container>
      <button onClick={handleDeleteAlbum}>
        Deletar album <FiX />
      </button>
    </Container>
  );
}
