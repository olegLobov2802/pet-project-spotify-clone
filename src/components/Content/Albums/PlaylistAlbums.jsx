import React from 'react';
import { connect } from 'react-redux';
import { getAlbumsTrack } from '../../../redux/categoryReducer';
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
    playlist: state.contentPage.playlistAlbum,
    albumId: state.contentPage.playlistId,
    cover: state.contentPage.playlistAlbumImg,
    albumName: state.contentPage.albumName,
    artists: state.contentPage.albumArtists,
    isLoading: state.contentPage.isLoading
  };
};

export default connect(mapStateToProps, { getAlbumsTrack })(PlaylistAlbums);
