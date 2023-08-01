import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { addTrackRequest } from "../../services/services";
import { Button, ButtonModal, DivButton, InputModal, DivInput } from "./styles";

export function AddTrack({ albumId, onAddTrack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trackNumber, setTrackNumber] = useState("");
  const [trackTitle, setTrackTitle] = useState("");
  const [trackDuration, setTrackDuration] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddTrack = () => {
    addTrackRequest({ albumId, trackNumber, trackTitle, trackDuration })
      .then((response) => {
        console.log("Nova música adicionada:", response.data);
        setTrackNumber("");
        setTrackTitle("");
        setTrackDuration("");
        onAddTrack(response.data);
        handleCloseModal();
      })
      .catch((error) => console.error("Erro ao adicionar nova música:", error));
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>
        <FiPlus />
        Adicionar nova música para este álbum
      </Button>

      {isModalOpen && (
        <div>
          <h3>Preencha as informações da nova música:</h3>
          <DivInput>
            <InputModal
              type="text"
              placeholder="Nº"
              value={trackNumber}
              onChange={(e) => setTrackNumber(e.target.value)}
            />
            <InputModal
              type="text"
              placeholder="Faixa"
              value={trackTitle}
              onChange={(e) => setTrackTitle(e.target.value)}
            />
            <InputModal
              type="text"
              placeholder="Duração"
              value={trackDuration}
              onChange={(e) => setTrackDuration(e.target.value)}
            />
          </DivInput>
          <DivButton>
            <ButtonModal className="add" onClick={handleAddTrack}>
              Adicionar
            </ButtonModal>
            <ButtonModal className="cancel" onClick={handleCloseModal}>
              Cancelar
            </ButtonModal>
          </DivButton>
        </div>
      )}
    </div>
  );
}
