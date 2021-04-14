import { NavLink } from 'react-router-dom';

export const Artist = (props) => {
  let parseTimeTrack = (time) => {
    return ((time / (1000 * 60)) % 60).toFixed(2).replace('.', ':');
  };

  return (
    <div className='playlist'>
      <div className='playlist__head'>
        <div className='playlist__cover'>
          <img className='cover' src={props.img} alt='#' />
        </div>
        <div className='playlist__description'>
          <div className='title'>{props.name}</div>
          <div className='subtitle'>
            {props.genres.map((item, index) => (
              <span className='genres' key={index}>
                {' '}
                {(index ? ', ' : '') + item}
              </span>
            ))}
            <div className='followers'>
              Followers: {props.followers ? props.followers.toLocaleString() : 'no'}
            </div>
          </div>
        </div>
      </div>

      <div className='playlist__title'>Popular tracks</div>

      {props.topTrack.map((item, index) => (
        <div className='album' key={item.id}>
          <div className='album__item'>
            <div className='number'>{index + 1}</div>
            <img className='track__cover' src={item.album.images[2].url} alt='#' />
            <div className='track__description'>
              <div className='name'>{item.name}</div>
              <div className='artists'>
                {item.artists.map((item, index) => (
                  <NavLink
                    onClick={() => {
                      props.setArtistsId(item.id);
                    }}
                    key={index}
                    to='/pet-project-spotify-clone/artist'
                    className='artists__item'>
                    {' '}
                    {(index ? ', ' : '') + item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className='track__time'>{parseTimeTrack(item.duration_ms)}</div>
        </div>
      ))}

      <div className='cover'>
        <div className='playlist__title'>Artist albums</div>
        <div className='cover__wrapper'>
          {props.albums.map((item, index) => (
            <NavLink
              key={item.id}
              to='/pet-project-spotify-clone/album'
              onClick={() =>
                props.setPlaylistInfo(item.id, item.images[0].url, item.name, item.artists)
              }
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

      <div className='similar_artists'>
        <div className='similar_artists__title'>Similar artists</div>
        <div className='similar_artists__wrapper'>
          {props.similarArtists.map((item, index) => (
            <NavLink
              key={item.id}
              onClick={() => {
                props.setArtistsId(item.id);
              }}
              to='/pet-project-spotify-clone/artist'
              className='similar_artists__link'>
              <div className='similar_artists__item' key={index}>
                <div className='similar_artists__img'>
                  <img src={item.images[1].url} alt='#' />
                </div>
                <div className='similar_artists__name'>{item.name}</div>
                <div className='similar_artists__descr'>{item.description}</div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
