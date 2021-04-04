import React from 'react';
import { NewReleases } from './NewReleases';
import { connect } from 'react-redux';
import { getPlaylistNewReleas, setGenreItem } from '../../redux/categoryReducer';
import Preloader from '../Preloader/Preloader';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getPlaylistNewReleas();
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <NewReleases playlistNewReleases={this.props.playlistNewReleases} setGenreItem={this.props.setGenreItem} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlistNewReleases: state.contentPage.playlistNewReleases,
    isLoading: state.contentPage.isLoading,
  };
};

export default connect(mapStateToProps, { getPlaylistNewReleas, setGenreItem })(HomePage);
