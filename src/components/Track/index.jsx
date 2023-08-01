import React from "react";
import { DeleteTrack } from "../../functions/DeleteTrack";

export function Track({ track, handleDeleteTrack }) {
  const tempoFormatado = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="musica" key={track.id}>
      <div>
        <p>{track.number}</p>
        <p>{track.title}</p>
      </div>
      <p className="tempo">{tempoFormatado(track.duration)}</p>
      <DeleteTrack
        trackId={track.id}
        onDeleteTrack={() => handleDeleteTrack(track.id)}
      />
    </div>
  );
}
