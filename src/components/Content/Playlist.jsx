import React from "react";
import { connect } from "react-redux";
import { getPlaylist } from "../../redux/categoryReducer";

class Playlist extends React.Component {
  componentDidMount() {
    this.props.getPlaylist(this.props.playlistId);
  }

  parseTimeTrack = (time) => {
    return ((time / (1000 * 60)) % 60).toFixed(2).replace(".", ":");
  };

  render() {
    return (
      <div className="playlist">
        <div className="playlist__head">
          <img className="playlist__cover" src={this.props.cover} alt="#" />
          <div className="playlist__name">{this.props.playlistName}</div>
          <div className="playlist__descr">{this.props.playlistDesc}</div>
        </div>
        {this.props.playlist.map((item, index) => (
          <div className="track" key={item.track.id} style={{ color: "#fff" }}>
            <div className="track__number">{index + 1}</div>
            <img
              className="track__cover"
              src={item.track.album.images[2].url}
              alt="#"
            />
            <div className="track__name">{item.track.name}</div>
            <div className="track__artists">
              {item.track.artists.map(
                (item, index) => (index ? ", " : "") + item.name
              )}
            </div>
            <div className="track__time">
              {this.parseTimeTrack(item.track.duration_ms)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.contentPage.playlist,
    playlistId: state.contentPage.genreItem.id,
    cover: state.contentPage.genreItem.images[0].url,
    playlistName: state.contentPage.genreItem.name,
    playlistDesc: state.contentPage.genreItem.description,
  };
};

export default connect(mapStateToProps, { getPlaylist })(Playlist);
