import React from 'react';
import { 
  Ticket, 
  Calendar, 
  Clock, 
  MapPin, 
  Compass, 
  CheckCircle, 
  XCircle, 
  QrCode,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const MyEvents = () => {
  const { events, rsvps, toggleRSVP, viewEventDetail, navigateTo } = useApp();

  // Find all events registered in rsvps
  const registeredEvents = events
    .filter((e) => rsvps[e.id])
    .map((e) => ({
      ...e,
      registeredAt: rsvps[e.id].registeredAt,
      rsvpStatus: rsvps[e.id].status
    }));

  return (
    <div className="page-container">
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
          My Registered Events & Passes
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Manage your confirmed RSVP registrations, access campus passes, and review event venues.
        </p>
      </div>

      {registeredEvents.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {registeredEvents.map((event) => {
            const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            });

            const registeredOnFormatted = new Date(event.registeredAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            });

            return (
              <div
                key={event.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '1.25rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  position: 'relative'
                }}
              >
                {/* Left: Media & Event info */}
                <div style={{ display: 'flex', flexDirection: 'row', gap: '1.25rem', padding: '1.5rem', flex: 2 }}>
                  <img
                    src={event.banner}
                    alt={event.title}
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: '1rem',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />

                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                      <span 
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 800,
                          backgroundColor: '#e0e7ff',
                          color: '#4338ca',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px'
                        }}
                      >
                        {event.category}
                      </span>
                      {event.status === 'ongoing' && (
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#dc2626' }}>
                          • Live Now
                        </span>
                      )}
                    </div>

                    <h3 
                      onClick={() => viewEventDetail(event.id)}
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        marginBottom: '0.5rem',
                        cursor: 'pointer',
                        lineHeight: 1.3
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#4f46e5')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#0f172a')}
                    >
                      {event.title}
                    </h3>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: '#64748b', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={15} color="#6366f1" />
                        <span>{formattedDate}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={15} color="#6366f1" />
                        <span>{event.time}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <MapPin size={15} color="#6366f1" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Pass verification & Action */}
                <div 
                  style={{
                    padding: '1.5rem',
                    background: '#f8fafc',
                    borderLeft: '1px dashed #cbd5e1',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '1rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div 
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: '#059669',
                          background: '#ecfdf5',
                          padding: '0.3rem 0.75rem',
                          borderRadius: '9999px',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          marginBottom: '0.5rem'
                        }}
                      >
                        <CheckCircle size={14} />
                        <span>Confirmed Pass</span>
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        Booked: {registeredOnFormatted}
                      </div>
                    </div>

                    <div 
                      style={{
                        padding: '0.5rem',
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '0.5rem',
                        color: '#334155'
                      }}
                      title="Digital QR Entry Pass"
                    >
                      <QrCode size={36} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      className="btn-solid-indigo"
                      style={{ flex: 1, padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                      onClick={() => viewEventDetail(event.id)}
                    >
                      <span>Event Info</span>
                      <ArrowRight size={14} />
                    </button>
                    <button
                      className="btn-danger-outline"
                      style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                      onClick={() => toggleRSVP(event.id)}
                      title="Cancel RSVP"
                    >
                      Cancel RSVP
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div
          style={{
            background: '#ffffff',
            borderRadius: '1.25rem',
            border: '1px dashed #cbd5e1',
            padding: '4rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem'
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              backgroundColor: '#eef2ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4f46e5'
            }}
          >
            <Ticket size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
              No event registrations yet
            </h3>
            <p style={{ color: '#64748b', maxWidth: 450, fontSize: '0.95rem', margin: '0 auto' }}>
              You haven't RSVP'd to any events or workshops yet. Browse the campus event directory to secure your passes!
            </p>
          </div>
          <button className="btn-solid-indigo" onClick={() => navigateTo('explore')}>
            <Compass size={18} />
            <span>Discover Events</span>
          </button>
        </div>
      )}
    </div>
  );
};

