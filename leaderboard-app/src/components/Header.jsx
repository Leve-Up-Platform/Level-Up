import React, { memo } from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import './Header.css';

// memo: Header only re-renders when onMenuClick reference changes.
// Since we pass useCallback from App, this is stable.
const Header = memo(({ onMenuClick }) => (
  <header className="header" role="banner">
    <div className="header-left">
      <button
        className="menu-btn"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        <Menu size={22} />
      </button>

      <div className="search-container" role="search">
        <Search className="search-icon" size={18} aria-hidden="true" />
        <input
          type="search"
          className="search-input"
          placeholder="Search rankings or badges..."
          aria-label="Search rankings or badges"
        />
      </div>
    </div>

    <div className="header-actions">
      <button className="icon-button" aria-label="Notifications">
        <Bell size={20} aria-hidden="true" />
        <span className="notification-dot" aria-hidden="true" />
      </button>
    </div>
  </header>
));

export default Header;
