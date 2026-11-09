import React, { useState } from 'react';
import { useApp } from './context/AppContext';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { ToastContainer } from './components/ToastContainer';

// Pages
import { Dashboard } from './pages/Dashboard';
import { ExploreEvents } from './pages/ExploreEvents';
import { EventDetails } from './pages/EventDetails';
import { CalendarView } from './pages/CalendarView';
import { Clubs } from './pages/Clubs';
import { MyEvents } from './pages/MyEvents';

export function App() {
  const { activeTab } = useApp();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Render current view
  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'explore':
        return <ExploreEvents />;
      case 'event-detail':
        return <EventDetails />;
      case 'calendar':
        return <CalendarView />;
      case 'clubs':
      case 'club-detail':
        return <Clubs />;
      case 'my-events':
        return <MyEvents />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar 
        isMobileOpen={isMobileOpen} 
        setIsMobileOpen={setIsMobileOpen} 
      />

      <div className="main-wrapper">
        <TopNav onOpenMobileMenu={() => setIsMobileOpen(true)} />
        <main style={{ flex: 1 }}>
          {renderCurrentPage()}
        </main>
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;

