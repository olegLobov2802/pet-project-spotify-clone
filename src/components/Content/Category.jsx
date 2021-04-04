import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategory, setGenreId } from '../../redux/categoryReducer';
import Preloader from '../Preloader/Preloader';

class Category extends React.Component {
  componentDidMount() {
    this.props.getCategory();
  }

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <div className='cover'>
            <div className='cover__wrapper'>
              {this.props.category.map((item) => (
                <NavLink
                  key={item.id}
                  to={'/genre'}
                  onClick={() => this.props.setGenreId(item.id)}
                  className='cover__link'>
                  <div className='cover__item'>
                    <div className='cover__img'>
                      <img src={item.icons[0].url} alt='#' />
                    </div>
                    <div className='cover__name'>{item.name}</div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
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

export default connect(mapStateToProps, { getCategory, setGenreId })(Category);
