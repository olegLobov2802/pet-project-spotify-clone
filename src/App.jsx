import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import HomePage from './components/Content/HomePage';
import CategoryContainer from './components/Content/Category/CategoryContainer';
import GenreContainer from './components/Content/Genre/GenreContainer';
import PlaylistGenre from './components/Content/Genre/PlaylistGenreContainer';
import PlaylistAlbums from './components/Content/Albums/PlaylistAlbums';
import ArtistContainer from './components/Content/Artist/ArtistContainer';

export const App = () => {
  return (
    <div className='app'>
      <div className='wrapper'>
        <Navbar />
        <div className='content'>
          <div className='content__wrapper'>
            <Switch>
              <Route exact path='/pet-project-spotify-clone/' render={() => <HomePage />} />
              <Route path='/pet-project-spotify-clone/Category' render={() => <CategoryContainer />} />
              <Route path='/pet-project-spotify-clone/genre' render={() => <GenreContainer />} />
              <Route path='/pet-project-spotify-clone/playlist' render={() => <PlaylistGenre />} />
              <Route path='/pet-project-spotify-clone/album' render={() => <PlaylistAlbums />} />
              <Route path='/pet-project-spotify-clone/artist' render={() => <ArtistContainer />} />
              <Route path='/pet-project-spotify-clone/search' render={() => <Search />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
