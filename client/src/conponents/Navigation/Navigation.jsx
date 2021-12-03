import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Navigation.module.css'

const Navigation = () => (
  <div className={style.NavigationWrapper}>
    <ul className={style.List}>
      <li><NavLink exact to="/" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      Play Secret Santa</NavLink></li>
      <li><NavLink exact to="/invite" className={style.Navigation_link}
        activeClassName={style.Navigation_link_active} >
      Join to play</NavLink></li>
    </ul>
  </div>
);

export default Navigation;
