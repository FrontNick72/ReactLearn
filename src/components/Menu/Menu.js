import React, {Component} from 'react';
import { Link } from 'react-router';

class Menu extends Component {
  render() {
    return (
      <nav className='menu'>
        <Link to='/'>Tracks</Link>
        <Link to='/about'>About us</Link>
      </nav>
    );
  }
}

export default Menu;
