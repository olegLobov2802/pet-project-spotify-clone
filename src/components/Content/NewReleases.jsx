import React from 'react';
import { NavLink } from 'react-router-dom';

export const NewReleases = ({ playlistNewReleases, setGenreItem }) => {
  return (
    <div className='cover'>
      <h2 className='cover__title'>Новые релизы</h2>
      <div className='cover__wrapper'>
        {playlistNewReleases.map((item, index) => (
          <NavLink
            key={item.id}
            to='/album'
            // onClick={() => setGenreItem(item)}
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
