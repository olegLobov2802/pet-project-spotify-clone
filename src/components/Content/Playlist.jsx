import React from 'react';
import { connect } from 'react-redux';
import { getPlaylist } from '../../redux/categoryReducer';
import Preloader from '../Preloader/Preloader';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

class Playlist extends React.Component {
  componentDidMount() {
    this.props.getPlaylist(this.props.playlistId);
  }

  parseTimeTrack = (time) => {
    return ((time / (1000 * 60)) % 60).toFixed(2).replace('.', ':');
  };

  dataParse = (data) => {
    return new Date(data).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <Preloader />
        ) : (
          <div className='playlist'>
            <div className='playlist__head'>
              <div className='playlist__cover'>
                <img className='cover' src={this.props.cover} alt='#' />
              </div>
              <div className='playlist__description'>
                <div className='title'>{this.props.playlistName}</div>
                <div className='subtitle'>{this.props.playlistDesc}</div>
              </div>
            </div>

            <div className='interlayer'>
              <div className='name'># Название</div>
              <div className='album'>Альбом</div>
              <div className='data'>Дата Добавления</div>
              <div className='time'>
                <AccessTimeIcon />
              </div>
            </div>

            {this.props.playlist.map((item, index) => (
              <div className='track' key={item.track.id}>
                <div className='track__item'>
                  <div className='number'>{index + 1}</div>
                  <img className='track__cover' src={item.track.album.images[2].url} alt='#' />
                  <div className='track__description'>
                    <div className='name'>{item.track.name}</div>
                    <div className='artists'>
                      {item.track.artists.map((item, index) => (
                        <span> {(index ? ', ' : '') + item.name}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='track__album'>{item.track.album.name}</div>
                <div className='track__data'>{this.dataParse(item.track.album.release_date)}</div>
                <div className='track__time'>{this.parseTimeTrack(item.track.duration_ms)}</div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playlist: state.contentPage.playlist,
    playlistId: state.contentPage.genreItem.id,
    cover: state.contentPage.genreItem.images[0].url,
    playlistName: state.contentPage.genreItem.name,
    playlistDesc: state.contentPage.genreItem.description,
    isLoading: state.contentPage.isLoading,
  };
};

export default connect(mapStateToProps, { getPlaylist })(Playlist);
