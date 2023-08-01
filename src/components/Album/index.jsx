import React from "react";
import { Track } from "../../components/Track";
import { AddTrack } from "../../functions/AddTrack";
import { DeleteAlbum } from "../../functions/DeleteAlbum";

export function Album({ albums, setAlbums, album }) {
  const handleDeleteAlbum = (albumId) => {
    const updatedAlbums = albums.filter((album) => album.id !== albumId);
    setAlbums(updatedAlbums);
  };

  const handleDeleteTrack = (trackId) => {
    const updatedAlbums = albums.map((album) => ({
      ...album,
      tracks: album.tracks.filter((track) => track.id !== trackId),
    }));
    setAlbums(updatedAlbums);
  };

  const handleAddTrack = (newTrack) => {
    const updatedAlbums = albums.map((album) =>
      album.id === newTrack.album_id
        ? {
            ...album,
            tracks: [...album.tracks, newTrack],
          }
        : album
    );
    setAlbums(updatedAlbums);
  };

  return (
    <div className="album" key={album.id}>
      <div>
        <h2>
          Álbum: {album.name}, {album.year}
          <AddTrack albumId={album.id} onAddTrack={handleAddTrack} />
        </h2>
        <DeleteAlbum
          albumId={album.id}
          onDeleteAlbum={() => handleDeleteAlbum(album.id)}
        />
      </div>
      <div className="menu">
        <div>
          <p>Nº</p>
          <p>Faixa</p>
        </div>
        <p>Duração</p>
      </div>

      {album.tracks.length > 0 ? (
        album.tracks.map((track) => (
          <Track
            track={track}
            key={track.id}
            handleDeleteTrack={handleDeleteTrack}
          />
        ))
      ) : (
        <p>Faixa não encontrada.</p>
      )}
    </div>
  );
}
