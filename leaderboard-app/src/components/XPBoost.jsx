import React from 'react';
import { BookOpen, UserCheck, Rocket, ArrowRight, Award } from 'lucide-react';
import './XPBoost.css';

const cards = [
  {
    icon: BookOpen,
    title: 'Daily Module',
    desc: 'Complete one full curriculum module within 24 hours.',
    xp: '+500 XP',
    pillClass: '',
    cardClass: '',
    iconClass: '',
  },
  {
    icon: UserCheck,
    title: 'Helpful Mentor',
    desc: 'Get your answer marked as "Helpful" in the community hub.',
    xp: '+250 XP',
    pillClass: 'green-pill',
    cardClass: 'highlight-border',
    iconClass: 'green-icon-bg',
  },
  {
    icon: Rocket,
    title: '7-Day Streak',
    desc: 'Maintain a learning streak for 7 consecutive days.',
    xp: '+1200 XP',
    pillClass: 'purple-pill',
    cardClass: 'streak-card',
    iconClass: 'purple-icon-bg',
  },
];

const XPBoost = () => {
  return (
    <div className="xp-boost-section">
      <h3 className="section-title">Boost Your XP</h3>

      <div className="boost-cards">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className={`boost-card glass-panel ${c.cardClass}`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={`boost-icon-wrapper ${c.iconClass}`}>
              <c.icon size={19} className="boost-icon" />
            </div>
            <div className="boost-content">
              <h4 className="boost-title">{c.title}</h4>
              <p className="boost-desc">{c.desc}</p>
              <div className="boost-footer">
                <span className={`xp-pill ${c.pillClass}`}>{c.xp}</span>
                <ArrowRight size={15} className="arrow-icon" />
              </div>
            </div>
          </div>
        ))}

        {/* Badge Gallery */}
        <div className="boost-card glass-panel badge-gallery-card">
          <div className="gallery-inner">
            <div className="gallery-header">
              <h4 className="boost-title">Badge Gallery</h4>
              <Award size={18} className="gallery-award" />
            </div>
            <p className="boost-desc">
              You've collected 12 of 48 legendary badges. Keep climbing!
            </p>
            <div className="gallery-preview">
              {['✦', '🎖', '💎', '🔒'].map((icon, i) => (
                <div key={i} className={`gallery-badge badge-${i}`}>
                  {icon}
                </div>
              ))}
            </div>
            <button className="view-badges-btn">View All Badges</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XPBoost;
