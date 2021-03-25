import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  method: "GET",
});

export const getToken = () => {
  const clientId = "6dd24a9303114d3d84ecb1b03f3f5cf5";
  const clientSecret = "3dac0676a0a34e29a7e1396dfd0d4179";

  return axios("https://accounts.spotify.com/api/token", {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    data: "grant_type=client_credentials",
    method: "POST",
  }).then((tokenResponse) => tokenResponse.data.access_token);
};

export const contentListAPI = {
  getCategory() {
    return getToken().then((access_token) => {
      return instance("browse/categories", {
        headers: { Authorization: "Bearer " + access_token },
      }).then((response) => response.data);
    });
  },

  getPlaylistCategory(id) {
    return getToken().then((access_token) => {
      return instance(`browse/categories/${id}/playlists`, {
        headers: { Authorization: "Bearer " + access_token },
      }).then((response) => response.data.playlists.items)
    })
  },

  getPlaylistNewReleas() {
    return getToken().then((access_token) => {
      return instance(`browse/new-releases`, {
        headers: { Authorization: "Bearer " + access_token },
      }).then((response) => response.data.albums.items)
    })
  }
};
