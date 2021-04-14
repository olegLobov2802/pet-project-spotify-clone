import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { NavLink } from 'react-router-dom';

export const PlaylistGenre = (props) => {
  let parseTimeTrack = (time) => {
    return ((time / (1000 * 60)) % 60).toFixed(2).replace('.', ':');
  };

  let dataParse = (data) => {
    return new Date(data).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className='playlist'>
      <div className='playlist__head'>
        <div className='playlist__cover'>
          <img className='cover' src={props.cover} alt='#' />
        </div>
        <div className='playlist__description'>
          <div className='title'>{props.playlistName}</div>
          <div className='subtitle'>{props.playlistDesc}</div>
        </div>
      </div>

      <div className='interlayer'>
        <div className='interlayer__name'># Название</div>
        <div className='interlayer__album'>Альбом</div>
        <div className='interlayer__data'>Дата Добавления</div>
        <div className='interlayer__time'>
          <AccessTimeIcon />
        </div>
      </div>

      {props.playlist.map((item, index) => (
        <div className='track' key={item.track.id}>
          <div className='track__item'>
            <div className='number'>{index + 1}</div>
            <img className='track__cover' src={item.track.album.images[2].url} alt='#' />
            <div className='track__description'>
              <div className='name'>{item.track.name}</div>
              <div className='artists'>
                {item.track.artists.map((item, index) => (
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

          <NavLink
            onClick={() =>
              props.setPlaylistInfo(
                item.track.album.id,
                item.track.album.images[0].url,
                item.track.album.name,
                item.track.artists
              )
            }
            to='/pet-project-spotify-clone/album'
            className='track__album'>
            {item.track.album.name}
          </NavLink>
          <div className='track__data'>{dataParse(item.track.album.release_date)}</div>
          <div className='track__time'>{parseTimeTrack(item.track.duration_ms)}</div>
        </div>
      ))}
    </div>
  );
};
