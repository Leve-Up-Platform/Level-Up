import React, { useState, useCallback, Suspense, lazy } from 'react';
import './App.css';

// ── Code-split every heavy component ──
// React.lazy defers their JS until they are actually needed,
// keeping the initial bundle small and the first paint fast.
const Sidebar      = lazy(() => import('./components/Sidebar'));
const Header       = lazy(() => import('./components/Header'));
const Podium       = lazy(() => import('./components/Podium'));
const RankingTable = lazy(() => import('./components/RankingTable'));
const XPBoost      = lazy(() => import('./components/XPBoost'));
const CurrentRank  = lazy(() => import('./components/CurrentRank'));

// Minimal skeleton shown while a lazy chunk loads
function PageSkeleton() {
  return <div className="page-skeleton" aria-label="Loading…" />;
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // useCallback keeps the same function reference between renders,
  // preventing child components wrapped in React.memo from re-rendering.
  const openSidebar  = useCallback(() => setSidebarOpen(true),  []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="app-container">
      {/* Overlay – only rendered in DOM when open for perf */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay visible"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <Suspense fallback={<PageSkeleton />}>
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      </Suspense>

      <main className="main-content">
        <Suspense fallback={null}>
          <Header onMenuClick={openSidebar} />
        </Suspense>

        <div className="scrollable-content">
          <div className="dashboard-grid">
            <div className="left-column">
              <Suspense fallback={<div className="section-skeleton" />}>
                <Podium />
              </Suspense>

              <Suspense fallback={<div className="section-skeleton" />}>
                <RankingTable />
              </Suspense>
            </div>

            <div className="right-column">
              {/* content-visibility: auto is set via CSS class,
                  telling the browser to skip rendering this column
                  until it is near the viewport */}
              <div className="defer-render">
                <Suspense fallback={<div className="section-skeleton" />}>
                  <XPBoost />
                </Suspense>
              </div>
            </div>
          </div>
        </div>

        <Suspense fallback={null}>
          <CurrentRank />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
