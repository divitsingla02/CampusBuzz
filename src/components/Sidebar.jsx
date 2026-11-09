import React from 'react';
import { 
  LayoutDashboard, 
  Compass, 
  Calendar, 
  Users, 
  Ticket, 
  Zap,
  X,
  GraduationCap
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Sidebar = ({ isMobileOpen, setIsMobileOpen }) => {
  const { activeTab, navigateTo, rsvps } = useApp();

  const rsvpCount = Object.keys(rsvps).length;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'explore', label: 'Explore Events', icon: Compass },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'clubs', label: 'Campus Clubs', icon: Users },
    { id: 'my-events', label: 'My Events', icon: Ticket, badge: rsvpCount },
  ];

  const handleNavClick = (id) => {
    navigateTo(id);
    if (setIsMobileOpen) setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          onClick={() => setIsMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 35
          }}
        />
      )}

      <aside className={`sidebar ${isMobileOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="brand-logo" onClick={() => handleNavClick('dashboard')}>
            <div className="brand-icon">
              <Zap size={22} fill="white" />
            </div>
            <div>
              <div className="brand-text">CampusBuzz</div>
              <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.05em' }}>
                COLLEGE HUB 2026
              </div>
            </div>
          </div>
          {setIsMobileOpen && (
            <button 
              className="btn-icon mobile-menu-btn"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <nav className="sidebar-nav">
          <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Menu
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || 
              (item.id === 'explore' && activeTab === 'event-detail') ||
              (item.id === 'clubs' && activeTab === 'club-detail');

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-item ${isActive ? 'active' : ''}`}
                style={{ textAlign: 'left', width: '100%', background: isActive ? undefined : 'transparent' }}
              >
                <div className="icon">
                  <Icon size={19} color={isActive ? '#4338ca' : '#64748b'} />
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User profile / status indicator at bottom */}
        <div className="sidebar-footer">
          <div className="user-status-card">
            <div className="user-avatar">
              <GraduationCap size={20} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#1e293b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Alex Morgan
              </div>
              <div style={{ fontSize: '0.725rem', color: '#64748b', fontWeight: 600 }}>
                Computer Science '26
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

