import React from 'react';
import { connect } from 'react-redux';
import { getArtists } from '../../../redux/artistsReducer';
import { Artist } from './Artist';

class ArtistContainer extends React.Component {
  componentDidMount() {
    this.props.getArtists(this.props.artistsId)
  }

  render() {
    return <Artist />;
  }
}

const mapStateToProps = (state) => {
  return {
    artistsId: state.artistsPage.artistsId
  };
};

export default connect(mapStateToProps, {getArtists})(ArtistContainer);
