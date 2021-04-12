import React from 'react';
import { NavLink } from 'react-router-dom';

export const Genre = (props) => {
  return (
    <div className='cover'>
      <div className='cover__wrapper'>
        {props.genre.map((item, index) => (
          <NavLink
            key={item.id}
            to='/playlist'
            onClick={() => props.setGenreItem(item)}
            className='cover__link'>
            <div className='cover__item' key={index}>
              <div className='cover__img'>
                <img src={item.images[0].url} alt='#' />
              </div>
              <div className='cover__name'>{item.name}</div>
              <div className='cover__descr'>{item.description}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
