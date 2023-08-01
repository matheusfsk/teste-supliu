import axios from "axios";

const token = "teus.fonseca@hotmail.com";

export function addTrackRequest({
  albumId,
  trackNumber,
  trackTitle,
  trackDuration,
}) {
  return axios.post(
    "https://tiao.supliu.com.br/api/track",
    {
      album_id: albumId,
      number: trackNumber,
      title: trackTitle,
      duration: trackDuration,
    },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    }
  );
}

export function deleteAlbumRequest({ albumId }) {
  return axios.delete(`https://tiao.supliu.com.br/api/album/${albumId}`, {
    headers: {
      Authorization: token,
    },
  });
}

export function deleteTrackRequest({ trackId }) {
  return axios.delete(`https://tiao.supliu.com.br/api/track/${trackId}`, {
    headers: {
      Authorization: token,
    },
  });
}

export function addAlbumRequest({ albumName, albumYear }) {
  return axios.post(
    "https://tiao.supliu.com.br/api/album",
    { name: albumName, year: albumYear },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    }
  );
}

export function searchAlbumsRequest({ search }) {
  return axios.get(
    `https://tiao.supliu.com.br/api/album?keyword=${search.toLowerCase()}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
}
