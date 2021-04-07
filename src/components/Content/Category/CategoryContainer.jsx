import React from 'react';
import { connect } from 'react-redux';
import { getCategory, setGenreId } from '../../../redux/categoryReducer';
import Preloader from '../../Preloader/Preloader';
import { Category } from './Category';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.getCategory();
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <Category category={this.props.category} setGenreId={this.props.setGenreId} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.contentPage.category,
    isLoading: state.contentPage.isLoading,
  };
};

export default connect(mapStateToProps, { getCategory, setGenreId })(CategoryContainer);
