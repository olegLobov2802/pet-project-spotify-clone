// import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Search } from './components/Search/Search';
import HomePage from './components/Content/HomePage';
import Category from './components/Content/Category';
import Genre from './components/Content/Genre/Genre';
import PlaylistGenre from './components/Content/Genre/PlaylistGenre';
import PlaylistAlbums from './components/Content/Albums/PlaylistAlbums';

export const App = () => {
  return (
    <div className='app'>
      <div className='wrapper'>
        <Navbar />
        <div className='content'>
          <div className='content__wrapper'>
            <Switch>
              <Route exact path='/' render={() => <HomePage />} />
              <Route path='/Category' render={() => <Category />} />
              <Route path='/search' render={() => <Search />} />
              <Route path='/genre' render={() => <Genre />} />
              <Route path='/playlist' render={() => <PlaylistGenre />} />
              <Route path='/album' render={() => <PlaylistAlbums />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
