import React from 'react';
import { NewReleases } from './NewReleases';
import { connect } from 'react-redux';
import { getPlaylistNewReleas } from '../../redux/categoryReducer';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getPlaylistNewReleas();
  }

  render() {
    return (
      <>
        <NewReleases playlistNewReleases={this.props.playlistNewReleases} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlistNewReleases: state.contentPage.playlistNewReleases,
  };
};

export default connect(mapStateToProps, { getPlaylistNewReleas })(HomePage);
