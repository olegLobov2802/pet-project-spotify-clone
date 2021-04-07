import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import HomePage from './components/Content/HomePage';
import CategoryContainer from './components/Content/Category/CategoryContainer';
import GenreContainer from './components/Content/Genre/GenreContainer';
import PlaylistGenre from './components/Content/Genre/PlaylistGenre';
import PlaylistAlbums from './components/Content/Albums/PlaylistAlbums';
import { Artist } from './components/Content/Artist/Artist';

export const App = () => {
  return (
    <div className='app'>
      <div className='wrapper'>
        <Navbar />
        <div className='content'>
          <div className='content__wrapper'>
            <Switch>
              <Route exact path='/' render={() => <HomePage />} />
              <Route path='/Category' render={() => <CategoryContainer />} />
              <Route path='/genre' render={() => <GenreContainer />} />
              <Route path='/playlist' render={() => <PlaylistGenre />} />
              <Route path='/album' render={() => <PlaylistAlbums />} />
              <Route path='/artist' render={() => <Artist />} />
              <Route path='/search' render={() => <Search />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
