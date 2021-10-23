import React from 'react';
import './header.styles.scss';
import logo from '../../logo.svg';

const Header = () => {
  return (
      <header className="header">
        <a
          className="main-header-link"
          href="/"
        >
          <img src={logo} className="App-logo" alt="logo" />
          <span>JSON PlaceHolder Use API</span>
        </a>
        <a href='/' className='header-option'>Home</a>
        <a href='/albums' className='header-option'>Álbuns</a>
        <a href='/posts' className='header-option'>Posts</a>
        <a href='/tasks' className='header-option'>Tarefas</a>
      </header>
  );
}

export default Header;
