// import React from 'react';
import { NavLink } from 'react-router-dom';

export const NewReleases = ({
  playlistNewReleases,
  setPlaylistInfo,
  pagination,
  setCurrentPage,
}) => {
  let pagesCount = Math.ceil(pagination.total / pagination.limit);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const currentPages = (page) => {
    let pages = pagination.limit * page + 1;
    setCurrentPage(pages);
  };

  return (
    <div className='cover'>
      <h2 className='cover__title'>Новые релизы</h2>
      <div className='cover__wrapper'>
        {playlistNewReleases.map((item, index) => (
          <NavLink
            key={item.id}
            to='/album'
            onClick={() => setPlaylistInfo(item.id, item.images[0].url, item.name, item.artists)}
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
      <div className='pagination'>
        {/* <span className='pagination__item active'>1</span> */}
        {pages.map((item) => (
          <span
            onClick={() => currentPages(item - 1)}
            key={item}
            className='pagination__item active'>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
