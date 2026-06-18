import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const navigationItems = [
  { to: '/', label: 'Users', element: <Users /> },
  { to: '/activities', label: 'Activities', element: <Activities /> },
  { to: '/leaderboard', label: 'Leaderboard', element: <Leaderboard /> },
  { to: '/teams', label: 'Teams', element: <Teams /> },
  { to: '/workouts', label: 'Workouts', element: <Workouts /> },
];

function HomeIntro() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

  return (
    <section className="hero-panel rounded-4 p-4 p-lg-5 mb-4">
      <p className="eyebrow mb-2">OctoFit Tracker</p>
      <h1 className="display-6 mb-3">React 19 presentation tier for the multi-tier application</h1>
      <p className="lead mb-3">
        This frontend uses <strong>react-router-dom</strong>, Vite environment variables,
        and a safe API fallback when Codespaces variables are not configured.
      </p>
      <div className="small text-secondary">
        {codespaceName
          ? `VITE_CODESPACE_NAME is set to ${codespaceName}.`
          : 'VITE_CODESPACE_NAME is not set, so the app will call http://localhost:8000/api.'}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="border-bottom bg-white sticky-top">
          <div className="container py-3">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3">
              <div>
                <p className="eyebrow mb-1">Modern Multi-Tier Application</p>
                <div className="h4 mb-0">OctoFit Tracker Dashboard</div>
              </div>

              <nav className="d-flex flex-wrap gap-2">
                {navigationItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `nav-chip text-decoration-none ${isActive ? 'nav-chip-active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </header>

        <main className="container py-4 py-lg-5">
          <HomeIntro />
          <Routes>
            {navigationItems.map((item) => (
              <Route key={item.to} path={item.to} element={item.element} />
            ))}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
