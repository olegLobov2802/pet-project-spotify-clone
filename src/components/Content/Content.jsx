import React from "react";
import { Category } from "./Category";
import * as axios from "axios";
import { setNewPlaylist } from "../../redux/playlistReducer";
import { connect } from "react-redux";

class Content extends React.Component {
  componentDidMount() {
    const clientId = "6dd24a9303114d3d84ecb1b03f3f5cf5";
    const clientSecret = "3dac0676a0a34e29a7e1396dfd0d4179";

    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      // axios("https://api.spotify.com/v1/browse/new-releases?limit=6", {
      // axios("	https://api.spotify.com/v1/browse/featured-playlists", {
      axios("https://api.spotify.com/v1/browse/categories", {
        method: "GET",
        headers: { Authorization: "Bearer " + tokenResponse.data.access_token },
      }).then((response) => {
        // this.props.setNewPlaylist(response.data.playlists.items);
        console.log(response);
      });
    });
  }

  render() {
    return <Category />;
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlistPage.playlist,
});

export const ContentContainer = connect(mapStateToProps, { setNewPlaylist })(
  Content
);
