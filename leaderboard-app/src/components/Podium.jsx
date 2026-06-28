import React, { memo } from "react";
import { Clock } from "lucide-react";
import "./Podium.css";

// Avatar — explicit dimensions prevent layout shift (CLS)
const Avatar = memo(({ src, alt, highlight }) => (
  <img
    src={src}
    alt={alt}
    className={`avatar${highlight ? " highlight-img" : ""}`}
    width={highlight ? 90 : 72}
    height={highlight ? 90 : 72}
    loading={highlight ? "eager" : "lazy"}
    decoding="async"
  />
));

const Podium = memo(() => (
  <div className="podium-section">
    <div className="podium-header">
      <div className="podium-title-block">
        <h2 className="season-info">SEASON 4 • WEEK 12</h2>
        <h1 className="main-title">Global Leaderboard</h1>
        <p className="subtitle">
          Push your limits, master the curriculum, and earn your place among the
          top kinetic scholars this month.
        </p>
      </div>

      <div
        className="countdown-timer glass-panel"
        aria-label="Time remaining: 4 days 12 hours 30 minutes"
      >
        <div className="timer-icon-bg" aria-hidden="true">
          <Clock size={15} />
        </div>
        <div className="timer-text">
          <span className="timer-label">ENDS IN</span>
          <span className="timer-value">04d 12h 30m</span>
        </div>
      </div>
    </div>

    <div className="podium-display" role="list" aria-label="Top 3 scholars">
      {/* ── Rank 2 — Ahmed Wael ── */}
      <div className="podium-card rank-2 glass-panel" role="listitem">
        <div className="avatar-wrapper">
          <Avatar src="https://i.pravatar.cc/72?img=8" alt="Ahmed Wael" />
          <div className="rank-badge" aria-label="Rank 2">
            2
          </div>
        </div>
        <h3 className="scholar-name">Ahmed Wael</h3>
        <p className="scholar-xp">12,450 XP</p>
        <div className="scholar-badges" aria-label="Badges">
          <span className="badge green-badge" />
          <span className="badge purple-badge" />
        </div>
      </div>

      {/* ── Rank 1 — Iman Khaled (center) ── */}
      <div className="podium-card rank-1 glass-panel" role="listitem">
        <div className="avatar-wrapper highlight-avatar">
          <Avatar
            src="https://i.pravatar.cc/90?img=47"
            alt="Iman Khaled"
            highlight
          />
          <div className="rank-label" aria-label="Apex Scholar">
            APEX
            <br />
            SCHOLAR
          </div>
        </div>
        <h3 className="scholar-name highlight-name">Iman Khaled</h3>
        <p className="scholar-xp highlight-xp">14,820 XP</p>
        <div className="mvp-badge">MVP WEEK 12</div>
      </div>

      {/* ── Rank 3 — Omar ── */}
      <div className="podium-card rank-3 glass-panel" role="listitem">
        <div className="avatar-wrapper">
          <Avatar src="https://i.pravatar.cc/72?img=12" alt="Omar" />
          <div className="rank-badge" aria-label="Rank 3">
            3
          </div>
        </div>
        <h3 className="scholar-name">Omar</h3>
        <p className="scholar-xp">11,900 XP</p>
        <div className="scholar-badges" aria-label="Badges">
          <span className="badge purple-badge" />
        </div>
      </div>
    </div>
  </div>
));

export default Podium;
