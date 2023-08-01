import React, { useState } from "react";
import { addAlbumRequest } from "../../services/services";
import { Button, InputModal, DivInput } from "./styles";

export function AddAlbum({ setAlbums }) {
  const [albumName, setAlbumName] = useState("");
  const [albumYear, setAlbumYear] = useState("");

  const handleAddAlbum = () => {
    addAlbumRequest({ albumName, albumYear })
      .then((response) => {
        const { created_at, updated_at, user_id, ...rest } = response.data;
        console.log("Novo album criado:", response.data);
        setAlbumName("");
        setAlbumYear("");
        setAlbums((oldAlbums) => [...oldAlbums, { ...rest, tracks: [] }]);
      })
      .catch((error) => console.error("Erro ao adicionar o album:", error));
  };

  return (
    <div>
      <h2>Adicionar novo album:</h2>
      <DivInput>
        <InputModal
          type="text"
          placeholder="Nome do album"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <InputModal
          type="text"
          placeholder="Ano"
          value={albumYear}
          onChange={(e) => setAlbumYear(e.target.value)}
        />
      </DivInput>
      <Button onClick={handleAddAlbum}>Adicionar novo Album</Button>
    </div>
  );
}
