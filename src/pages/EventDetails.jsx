import React from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  CheckCircle, 
  Share2, 
  AlertCircle,
  Sparkles,
  Ticket,
  Mail,
  ShieldCheck,
  Building
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const EventDetails = () => {
  const { 
    selectedEventId, 
    events, 
    navigateTo, 
    viewClubDetail, 
    toggleRSVP, 
    isEventRsvped,
    addToast
  } = useApp();

  const event = events.find((e) => e.id === selectedEventId) || events[0];

  if (!event) {
    return (
      <div className="page-container">
        <p>Event not found.</p>
        <button className="btn-solid-indigo" onClick={() => navigateTo('explore')}>
          Back to Explore
        </button>
      </div>
    );
  }

  const isRsvped = isEventRsvped(event.id);
  const isSoldOut = event.registeredCount >= event.totalSeats;
  const seatsLeft = Math.max(0, event.totalSeats - event.registeredCount);
  const occupancyPercent = Math.min(100, Math.round((event.registeredCount / event.totalSeats) * 100));

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    addToast('Event link copied to clipboard!', 'info');
  };

  return (
    <div className="page-container detail-container">
      {/* Back Navigation Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <button
          onClick={() => navigateTo('explore')}
          className="btn-secondary"
          style={{ color: '#334155', background: '#ffffff', borderColor: '#e2e8f0', padding: '0.5rem 1rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Explore</span>
        </button>

        <button 
          onClick={handleShare}
          className="btn-secondary"
          style={{ color: '#334155', background: '#ffffff', borderColor: '#e2e8f0', padding: '0.5rem 1rem' }}
        >
          <Share2 size={16} />
          <span>Share</span>
        </button>
      </div>

      {/* Hero Header Card */}
      <div className="detail-header-card">
        <div className="detail-hero-media">
          <img src={event.banner} alt={event.title} className="detail-hero-img" />
          <div className="detail-hero-overlay">
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span 
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                {event.category}
              </span>

              {event.status === 'ongoing' && (
                <span className="event-status-badge status-ongoing" style={{ position: 'static' }}>
                  Happening Now
                </span>
              )}
              {event.status === 'upcoming' && (
                <span className="event-status-badge status-upcoming" style={{ position: 'static' }}>
                  Upcoming
                </span>
              )}
              {event.status === 'completed' && (
                <span className="event-status-badge status-completed" style={{ position: 'static' }}>
                  Completed
                </span>
              )}
            </div>

            <h1 style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              {event.title}
            </h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: '#e0e7ff', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} />
                <span>{formattedDate}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={18} />
                <span>{event.time}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={18} />
                <span>{event.venue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Content Layout */}
        <div className="detail-body-layout">
          {/* Main Info */}
          <div>
            {/* About Section */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                About This Event
              </h2>
              <p style={{ color: '#334155', lineHeight: 1.8, fontSize: '1.025rem', whiteSpace: 'pre-line' }}>
                {event.fullDescription}
              </p>
            </div>

            {/* Schedule Section */}
            {event.schedule && event.schedule.length > 0 && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                  Event Schedule
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {event.schedule.map((item, index) => (
                    <div 
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        padding: '1rem',
                        background: '#f8fafc',
                        borderRadius: '0.85rem',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      <div 
                        style={{
                          backgroundColor: '#e0e7ff',
                          color: '#4338ca',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          padding: '0.3rem 0.6rem',
                          borderRadius: '0.5rem',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.time}
                      </div>
                      <div style={{ fontWeight: 700, color: '#1e293b', fontSize: '0.95rem' }}>
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prerequisites */}
            {event.prerequisites && (
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                  Prerequisites & Instructions
                </h2>
                <div style={{ padding: '1rem 1.25rem', background: '#f8fafc', borderRadius: '0.85rem', border: '1px solid #e2e8f0', color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {event.prerequisites}
                </div>
              </div>
            )}

            {/* Organiser Profile Card */}
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                Organised By
              </h2>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  border: '1px solid #e2e8f0',
                  borderRadius: '1rem',
                  background: '#ffffff'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img 
                    src={event.organizerAvatar} 
                    alt={event.organizerName}
                    style={{ width: 56, height: 56, borderRadius: '1rem', objectFit: 'cover' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>
                      {event.organizerName}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.85rem' }}>
                      <Building size={14} />
                      <span>Official College Society</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="btn-secondary"
                  style={{ color: '#4338ca', borderColor: '#c7d2fe', background: '#eef2ff' }}
                  onClick={() => viewClubDetail(event.organizerId)}
                >
                  View Club
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar / RSVP Action Card */}
          <div>
            <div className="rsvp-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a' }}>Registration</span>
                <span 
                  style={{
                    backgroundColor: '#ecfdf5',
                    color: '#059669',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '9999px'
                  }}
                >
                  {event.price}
                </span>
              </div>

              {/* Occupancy Progress */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                  <span style={{ color: '#64748b' }}>Seats Filled</span>
                  <span style={{ color: '#0f172a' }}>{event.registeredCount} / {event.totalSeats}</span>
                </div>
                <div style={{ height: 8, background: '#e2e8f0', borderRadius: 9999, overflow: 'hidden' }}>
                  <div 
                    style={{
                      height: '100%',
                      width: `${occupancyPercent}%`,
                      backgroundColor: occupancyPercent > 90 ? '#ef4444' : '#6366f1',
                      borderRadius: 9999,
                      transition: 'width 0.3s ease'
                    }}
                  />
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.4rem', textAlign: 'right' }}>
                  {seatsLeft > 0 ? `${seatsLeft} seats remaining` : 'Housefull'}
                </div>
              </div>

              {/* RSVP Status / Action */}
              {isRsvped ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div 
                    style={{
                      padding: '0.85rem',
                      background: '#ecfdf5',
                      border: '1px solid #a7f3d0',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: '#065f46',
                      fontSize: '0.875rem',
                      fontWeight: 700
                    }}
                  >
                    <CheckCircle size={18} />
                    <span>You're registered for this event!</span>
                  </div>

                  <button 
                    className="btn-danger-outline" 
                    style={{ width: '100%' }}
                    onClick={() => toggleRSVP(event.id)}
                  >
                    Cancel My RSVP
                  </button>
                </div>
              ) : event.status === 'completed' ? (
                <button 
                  className="btn-secondary" 
                  disabled
                  style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed', color: '#64748b', background: '#e2e8f0', borderColor: '#cbd5e1' }}
                >
                  Event Ended
                </button>
              ) : isSoldOut ? (
                <button 
                  className="btn-secondary" 
                  disabled
                  style={{ width: '100%', opacity: 0.6, cursor: 'not-allowed', color: '#dc2626', background: '#fee2e2', borderColor: '#fecaca' }}
                >
                  Sold Out
                </button>
              ) : (
                <button 
                  className="btn-solid-indigo" 
                  style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginBottom: '1.5rem' }}
                  onClick={() => toggleRSVP(event.id)}
                >
                  <Ticket size={20} />
                  <span>RSVP for Event</span>
                </button>
              )}

              {/* Event Meta list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#475569' }}>
                  <MapPin size={16} color="#6366f1" />
                  <span>{event.venue}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#475569' }}>
                  <Clock size={16} color="#6366f1" />
                  <span>{event.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#475569' }}>
                  <Mail size={16} color="#6366f1" />
                  <span>{event.contactEmail}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: '#475569' }}>
                  <ShieldCheck size={16} color="#10b981" />
                  <span>College Verified Activity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

