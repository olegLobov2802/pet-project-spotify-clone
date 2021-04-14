import React from 'react';
import { connect } from 'react-redux';
import { getPlaylist } from '../../../redux/genreReducer';
import Preloader from '../../Preloader/Preloader';
import { PlaylistGenre } from './PlaylistGenre';
import { setArtistsId } from '../../../redux/artistsReducer';
import { setPlaylistInfo } from '../../../redux/albumsReducer';

class PlaylistGenreContainer extends React.Component {
  componentDidMount() {
    this.props.getPlaylist(this.props.playlistId);
  }

  render() {
    return <>{this.props.isLoading ? <Preloader /> : <PlaylistGenre {...this.props} />}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.genrePage.playlist,
    playlistId: state.genrePage.genreItem.id,
    cover: state.genrePage.genreItem.images[0].url,
    playlistName: state.genrePage.genreItem.name,
    playlistDesc: state.genrePage.genreItem.description,
    isLoading: state.genrePage.isLoading,
  };
};

export default connect(mapStateToProps, { getPlaylist, setPlaylistInfo, setArtistsId })(PlaylistGenreContainer);
