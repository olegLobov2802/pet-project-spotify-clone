import React from 'react';
import { connect } from 'react-redux';
import { getPlaylist } from '../../../redux/categoryReducer';
import Preloader from '../../Preloader/Preloader';
import { Playlist } from './Playlist';
import { setPlaylistInfo } from '../../../redux/categoryReducer';

class PlaylistGenre extends React.Component {
  componentDidMount() {
    this.props.getPlaylist(this.props.playlistId);
  }

  render() {
    return <>{this.props.isLoading ? <Preloader /> : <Playlist {...this.props} />}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.contentPage.playlist,
    playlistId: state.contentPage.genreItem.id,
    cover: state.contentPage.genreItem.images[0].url,
    playlistName: state.contentPage.genreItem.name,
    playlistDesc: state.contentPage.genreItem.description,
    isLoading: state.contentPage.isLoading,
  };
};

export default connect(mapStateToProps, { getPlaylist, setPlaylistInfo })(PlaylistGenre);
