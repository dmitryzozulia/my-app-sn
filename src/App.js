import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
          <Route exact path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
