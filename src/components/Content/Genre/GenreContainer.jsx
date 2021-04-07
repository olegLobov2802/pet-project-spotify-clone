import React from 'react';
import { connect } from 'react-redux';
import { getGenre, setGenreItem } from '../../../redux/categoryReducer';
import Preloader from '../../Preloader/Preloader';
import { Genre } from './Genre';

class GenreContainer extends React.Component {
  componentDidMount() {
    this.props.getGenre(this.props.genreId);
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Genre genre={this.props.genre} setGenreItem={this.props.setGenreItem} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genre: state.contentPage.genre,
    genreId: state.contentPage.genreId,
    isLoading: state.contentPage.isLoading,
  };
};

export default connect(mapStateToProps, { getGenre, setGenreItem })(GenreContainer);
