import { NavLink } from 'react-router-dom';
import { Pagination } from '../Pagination/Pagination';

export const NewReleases = ({
  playlistNewReleases,
  setPlaylistInfo,
  pagination,
  setCurrentPage,
}) => {
  return (
    <div className='cover'>
      <h2 className='cover__title'>Новые релизы</h2>
      <div className='cover__wrapper'>
        {playlistNewReleases.map((item, index) => (
          <NavLink
            key={item.id}
            to='/pet-project-spotify-clone/album'
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
      <Pagination
        offset={pagination.offset}
        limit={pagination.limit}
        total={pagination.total}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
