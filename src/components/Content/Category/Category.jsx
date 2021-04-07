import React from 'react';
import { NavLink } from 'react-router-dom';

export const Category = (props) => {
  return (
    <div className='cover'>
      <div className='cover__wrapper'>
        {props.category.map((item) => (
          <NavLink
            key={item.id}
            to={'/genre'}
            onClick={() => props.setGenreId(item.id)}
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
  );
};
