import React from 'react';
import { connect } from 'react-redux';
import { getAlbumsTrack } from '../../../redux/albumsReducer';
import { setArtistsId } from '../../../redux/artistsReducer';
import Preloader from '../../Preloader/Preloader';
import { Playlist } from './Playlist';

class PlaylistAlbums extends React.Component {
  componentDidMount() {
    this.props.getAlbumsTrack(this.props.albumId);
  }

  render() {
    return <>{this.props.isLoading ? <Preloader /> : <Playlist {...this.props} />}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.albumsPage.playlistAlbum,
    albumId: state.albumsPage.playlistId,
    cover: state.albumsPage.playlistAlbumImg,
    albumName: state.albumsPage.albumName,
    artists: state.albumsPage.albumArtists,
    isLoading: state.albumsPage.isLoading,
  };
};

export default connect(mapStateToProps, { getAlbumsTrack, setArtistsId })(PlaylistAlbums);
