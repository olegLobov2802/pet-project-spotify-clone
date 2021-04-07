import React from 'react';
import { NewReleases } from './NewReleases';
import { connect } from 'react-redux';
import { setPlaylistInfo } from '../../redux/albumsReducer';
import { setGenreItem, getGenre } from '../../redux/genreReducer';
import { getPlaylistNewReleas } from '../../redux/homeReducer';
import Preloader from '../Preloader/Preloader';
import { Genre } from './Genre/Genre';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.getPlaylistNewReleas();
    this.props.getGenre('toplists');
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <>
            <NewReleases
              playlistNewReleases={this.props.playlistNewReleases}
              setGenreItem={this.props.setGenreItem}
              setPlaylistInfo={this.props.setPlaylistInfo}
            />
            <h2 style={{color: '#fff', textAlign: 'center', marginTop: '15px'}} >Top List</h2>
            <Genre genre={this.props.genre} setGenreItem={this.props.setGenreItem} />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlistNewReleases: state.homePage.playlistNewReleases,
    isLoading: state.homePage.isLoading,
    genre: state.genrePage.genre,
  };
};

export default connect(mapStateToProps, { getPlaylistNewReleas, setGenreItem, getGenre, setPlaylistInfo })(HomePage);
