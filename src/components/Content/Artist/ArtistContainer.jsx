import React from 'react';
import { connect } from 'react-redux';
import { getArtists, setArtistsId } from '../../../redux/artistsReducer';
import Preloader from '../../Preloader/Preloader';
import { Artist } from './Artist';
import { setPlaylistInfo } from '../../../redux/albumsReducer';

class ArtistContainer extends React.Component {
  componentDidMount() {
    this.props.getArtists(this.props.artistsId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.artistsId !== this.props.artistsId) {
      this.props.getArtists(this.props.artistsId);
    }
  }

  render() {
    return <>{this.props.isLoading ? <Preloader /> : <Artist {...this.props} />}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    artistsId: state.artistsPage.artistsId,
    followers: state.artistsPage.followers,
    genres: state.artistsPage.genres,
    img: state.artistsPage.img,
    name: state.artistsPage.name,
    isLoading: state.artistsPage.isLoading,
    topTrack: state.artistsPage.topTrack,
    albums: state.artistsPage.albums,
    similarArtists: state.artistsPage.similarArtists,
  };
};

export default connect(mapStateToProps, { getArtists, setArtistsId, setPlaylistInfo })(
  ArtistContainer
);
