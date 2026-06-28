import React, { memo } from 'react';
import {
  LayoutDashboard, Map, BookOpen, Briefcase,
  User, BarChart2, Settings, HelpCircle, X,
} from 'lucide-react';
import './Sidebar.css';

const MAIN_NAV = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: Map,             label: 'Roadmap' },
  { icon: BookOpen,        label: 'Curriculum' },
  { icon: Briefcase,       label: 'Career Hub' },
  { icon: User,            label: 'Profile' },
  { icon: BarChart2,       label: 'Leaderboard', active: true },
];

const BOTTOM_NAV = [
  { icon: Settings,   label: 'Settings' },
  { icon: HelpCircle, label: 'Support' },
];

// NavItem isolated so only the active one re-renders on route change
const NavItem = memo(({ icon: Icon, label, active, delay }) => (
  <li style={{ animationDelay: `${delay}ms` }}>
    <a href="#" className={`nav-link ${active ? 'active' : ''}`}>
      <span className="nav-icon-wrap">
        <Icon className="nav-icon" size={19} />
      </span>
      <span>{label}</span>
      {active && <span className="active-dot" />}
    </a>
  </li>
));

// React.memo: Sidebar only re-renders when isOpen or onClose change
const Sidebar = memo(({ isOpen, onClose }) => (
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="logo-container">
      <div className="logo-text-block">
        <h1 className="logo-title">Level Up</h1>
        <p className="logo-subtitle">THE KINETIC SCHOLAR</p>
      </div>
      <button className="close-sidebar-btn" onClick={onClose} aria-label="Close menu">
        <X size={18} />
      </button>
    </div>

    <nav className="nav-menu" aria-label="Main navigation">
      <ul className="nav-list">
        {MAIN_NAV.map((item, i) => (
          <NavItem key={item.label} {...item} delay={i * 55} />
        ))}
      </ul>
    </nav>

    <div className="sidebar-bottom">
      <ul className="nav-list">
        {BOTTOM_NAV.map((item) => (
          <NavItem key={item.label} {...item} delay={0} />
        ))}
      </ul>
    </div>
  </div>
));

export default Sidebar;
