import React, { useCallback, useEffect, useState } from "react";
import { Album } from "../../components/Album";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { AddAlbum } from "../../functions/AddAlbum";
import { searchAlbumsRequest } from "../../services/services";
import { Background, Container } from "./styles";

export function Home() {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");

  const fetchAlbums = useCallback(() => {
    searchAlbumsRequest({ search })
      .then((response) => {
        const responseData = response.data;
        if (
          responseData.hasOwnProperty("data") &&
          Array.isArray(responseData.data)
        ) {
          setAlbums(responseData.data);
        } else {
          console.error("API sem resposta", responseData);
        }
      })
      .catch((error) => console.error("Erro ao buscar albuns:", error));
  }, [search]);

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <Background>
      <Container>
        <main>
          <Header />
          <Input
            label="Digite uma palavra chave"
            buttonLabel="Procurar"
            onButtonClick={fetchAlbums}
            setSearch={setSearch}
          />

          {albums.length > 0 ? (
            albums.map((album) => (
              <Album
                key={album.id}
                album={album}
                albums={albums}
                setAlbums={setAlbums}
              />
            ))
          ) : (
            <p>Album não encontrado</p>
          )}
          <div className="novoAlbum">
            <AddAlbum setAlbums={setAlbums} />
          </div>
        </main>
      </Container>
    </Background>
  );
}
