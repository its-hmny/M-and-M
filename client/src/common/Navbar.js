import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../routes';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.CREATOR}>Creator</Link>
      </li>
      <li>
        <Link to={ROUTES.EDITOR}>Editor</Link>
      </li>
      <li>
        <Link to={`${ROUTES.PLAYER}?storyId=0`}>Player</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
