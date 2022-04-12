/* eslint-disable jsx-a11y/anchor-is-valid */
import {SCNavbar, SCNavbarMenu, SCNavbarMenuHidden} from './SCNavbar';
import {MenuNavbar} from './MenuNavbar';
import MenuIcon from '@mui/icons-material/Menu';
import {useEffect, useState} from 'react';

export function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);

  const enableMenu = () => {
    setActiveMenu(activeMenu ? false : true);
  };

  return (
    <SCNavbar>
      <div className="navbar">
        <MenuIcon className="navbar-button" onClick={enableMenu} />
      </div>
      {activeMenu ? (
        <SCNavbarMenu>
          <MenuNavbar />
        </SCNavbarMenu>
      ) : (
        <SCNavbarMenuHidden>
          <MenuNavbar />
        </SCNavbarMenuHidden>
      )}
    </SCNavbar>
  );
}
