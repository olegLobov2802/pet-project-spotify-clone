import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { NavLink } from 'react-router-dom';

export const Playlist = (props) => {
  let parseTimeTrack = (time) => {
    return ((time / (1000 * 60)) % 60).toFixed(2).replace('.', ':');
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
        <div className='name'># Название</div>
        <div className='time'>
          <AccessTimeIcon />
        </div>
      </div>

      {props.playlist.map((item, index) => (
        <div className='track' key={item.id}>
          <div className='track__item'>
            <div className='number'>{index + 1}</div>
            <div className='track__description'>
              <div className='name'>{item.name}</div>
              {/* <div className='artists'>
                {item.artists.map((item, index) => (
                  <span> {(index ? ', ' : '') + item.name}</span>
                ))}
              </div> */}
            </div>
          </div>

          <div className='track__time'>{parseTimeTrack(item.duration_ms)}</div>
        </div>
      ))}
    </div>
  );
};
