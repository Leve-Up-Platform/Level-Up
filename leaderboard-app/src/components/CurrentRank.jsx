import React from "react";
import { Share2, Zap, ArrowUp } from "lucide-react";
import "./CurrentRank.css";

const CurrentRank = () => {
  return (
    <div className="current-rank-bar glass-panel">
      {/* Rank Info */}
      <div className="rank-info-section">
        <img
          src="https://png.pngtree.com/png-clipart/20240817/original/pngtree-businessman-confidently-crossing-his-arms-and-looking-at-the-camera-white-png-image_15790650.png"
          alt="You"
          className="current-user-avatar"
          width={48}
          height={48}
          decoding="async"
        />
        <div className="rank-details">
          <span className="rank-label-small">YOUR CURRENT RANK</span>
          <div className="rank-value-container">
            <span className="current-rank-number">#42</span>
            <span className="rank-movement text-green">
              <ArrowUp size={13} className="move-icon" />
              12 positions
            </span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="progress-section">
        <div className="progress-header">
          <span className="next-tier-label">NEXT TIER</span>
          <span className="xp-remaining">340 XP to Master</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" />
        </div>
      </div>

      {/* Actions */}
      <div className="action-buttons">
        <button className="btn-secondary">
          <Share2 size={15} />
          <span>Share Progress</span>
        </button>
        <button className="btn-primary">
          Go to Lessons
          <Zap size={15} className="zap-icon" />
        </button>
      </div>
    </div>
  );
};

export default CurrentRank;
