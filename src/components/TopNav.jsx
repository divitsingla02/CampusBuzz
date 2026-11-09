import React from 'react';
import { Search, Bell, Sparkles, Menu, Ticket } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TopNav = ({ onOpenMobileMenu }) => {
  const { searchQuery, setSearchQuery, navigateTo, rsvps, activeTab } = useApp();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (activeTab !== 'explore') {
      navigateTo('explore');
    }
  };

  const rsvpCount = Object.keys(rsvps).length;

  return (
    <header className="top-nav">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          className="btn-icon mobile-menu-btn"
          onClick={onOpenMobileMenu}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <form onSubmit={handleSearchSubmit} className="top-search-box">
          <Search size={18} color="#94a3b8" />
          <input
            type="text"
            className="top-search-input"
            placeholder="Search events, workshops, clubs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>

      <div className="top-actions">
        <button 
          className="btn-secondary"
          onClick={() => navigateTo('my-events')}
          style={{ 
            color: '#4338ca', 
            background: '#eef2ff', 
            borderColor: '#c7d2fe',
            padding: '0.5rem 1rem',
            fontSize: '0.85rem'
          }}
        >
          <Ticket size={16} />
          <span>My Passes ({rsvpCount})</span>
        </button>

        <div style={{ position: 'relative' }}>
          <button 
            className="btn-icon" 
            title="Notifications"
            onClick={() => {}}
          >
            <Bell size={18} />
            <span className="notification-indicator" />
          </button>
        </div>

        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 0.8rem',
            background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
            borderRadius: '9999px',
            border: '1px solid #ddd6fe',
            fontSize: '0.75rem',
            fontWeight: 800,
            color: '#6d28d9'
          }}
        >
          <Sparkles size={14} />
          <span>Fall Term 2026</span>
        </div>
      </div>
    </header>
  );
};

