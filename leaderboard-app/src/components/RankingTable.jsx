import React, { memo, useState, useMemo } from "react";
import "./RankingTable.css";

// Data defined outside the component so it's created once at module load
const ALL_RANKINGS = [
  {
    rank: 4,
    name: "Marcus Sterling",
    level: "Level 24",
    role: "Architect",
    avatar: "https://i.pravatar.cc/48?img=11",
    points: "10,240",
    badges: ["green", "purple", "gray"],
  },
  {
    rank: 5,
    name: "Leila Chen",
    level: "Level 22",
    role: "Analyst",
    avatar: "https://i.pravatar.cc/48?img=44",
    points: "9,810",
    badges: ["purple", "gray"],
  },
];

// Isolated row component so individual row hovers don't re-render siblings
const ScholarRow = memo(({ user, delay }) => (
  <tr className="table-row" style={{ animationDelay: `${delay}ms` }}>
    <td className="rank-col">{user.rank}</td>
    <td>
      <div className="scholar-info-cell">
        <img
          src={user.avatar}
          alt={user.name}
          className="table-avatar"
          width={40}
          height={40}
          loading="lazy"
          decoding="async"
        />
        <div className="scholar-details">
          <div className="scholar-name-table">{user.name}</div>
          <div className="scholar-level">
            {user.level} • {user.role}
          </div>
        </div>
      </div>
    </td>
    <td>
      <div className="badge-list" aria-label="Badges">
        {user.badges.map((b, i) => (
          <span key={i} className={`mini-badge ${b}-bg`} />
        ))}
      </div>
    </td>
    <td className="points-col">{user.points}</td>
  </tr>
));

const RankingTable = memo(() => {
  const [activeTab, setActiveTab] = useState("allTime");

  // useMemo: filtered list only recomputed when activeTab changes
  const rankings = useMemo(
    () => ALL_RANKINGS, // swap for filtered data when API is integrated
    [activeTab],
  );

  return (
    <div className="ranking-section">
      <div className="ranking-header">
        <h3 className="section-title">Global Ranking</h3>
        <div className="time-toggle" role="group" aria-label="Time range">
          <button
            className={`toggle-btn ${activeTab === "allTime" ? "active" : ""}`}
            onClick={() => setActiveTab("allTime")}
            aria-pressed={activeTab === "allTime"}
          >
            All Time
          </button>
          <button
            className={`toggle-btn ${activeTab === "monthly" ? "active" : ""}`}
            onClick={() => setActiveTab("monthly")}
            aria-pressed={activeTab === "monthly"}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="table-container glass-panel">
        <table className="ranking-table" aria-label="Scholar rankings">
          <thead>
            <tr>
              <th scope="col">RANK</th>
              <th scope="col">SCHOLAR</th>
              <th scope="col">BADGES</th>
              <th scope="col" className="text-right">
                POINTS
              </th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((user, i) => (
              <ScholarRow key={user.rank} user={user} delay={i * 80} />
            ))}
          </tbody>
        </table>

        <button className="load-more-btn">Load More Scholars</button>
      </div>
    </div>
  );
});

export default RankingTable;
