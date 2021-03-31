import React from "react";
import { connect } from "react-redux";
import { getPlaylist } from "../../redux/categoryReducer";

class Playlist extends React.Component {
  componentDidMount() {
    this.props.getPlaylist(this.props.playlistId);
  }

  render() {
    return (
      <div>
        {this.props.playlist.map((item) => (
          <div key={item.track.id} style={{ color: "#fff" }}>
            <img src={item.track.album.images[2].url} alt="#" />
            {item.track.name}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.contentPage.playlist,
    playlistId: state.contentPage.playlistId,
  };
};

export default connect(mapStateToProps, { getPlaylist })(Playlist);
