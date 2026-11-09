import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle, Flame, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const EventCard = ({ event }) => {
  const { viewEventDetail, isEventRsvped, toggleRSVP } = useApp();
  const isRsvped = isEventRsvped(event.id);

  const isSoldOut = event.registeredCount >= event.totalSeats;
  const seatsLeft = Math.max(0, event.totalSeats - event.registeredCount);

  // Format date readable
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    weekday: 'short'
  });

  return (
    <div 
      className="event-card"
      onClick={() => viewEventDetail(event.id)}
    >
      <div className="event-card-media">
        <img 
          src={event.banner} 
          alt={event.title} 
          className="event-card-image"
          loading="lazy"
        />

        {/* Status Badge */}
        {event.status === 'ongoing' && (
          <span className="event-status-badge status-ongoing">
            <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: 'white' }} />
            Happening Now
          </span>
        )}
        {event.status === 'upcoming' && (
          <span className="event-status-badge status-upcoming">
            Upcoming
          </span>
        )}
        {event.status === 'completed' && (
          <span className="event-status-badge status-completed">
            Completed
          </span>
        )}

        {/* Category Pill */}
        <span className="event-category-badge">
          {event.category}
        </span>
      </div>

      <div className="event-card-content">
        <div className="event-meta-line">
          <div className="event-meta-item">
            <Calendar size={14} />
            <span>{formattedDate}</span>
          </div>
          <div className="event-meta-item">
            <Clock size={14} />
            <span>{event.time.split('-')[0]}</span>
          </div>
        </div>

        <h3 className="event-card-title">{event.title}</h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.8rem', marginBottom: '0.6rem' }}>
          <MapPin size={14} />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {event.venue}
          </span>
        </div>

        <p className="event-card-desc">{event.shortDescription}</p>

        <div className="event-card-footer">
          <div className="event-organizer-info">
            <img 
              src={event.organizerAvatar} 
              alt={event.organizerName} 
              className="event-organizer-avatar" 
            />
            <span className="event-organizer-name">{event.organizerName}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {isRsvped ? (
              <span 
                className="event-seats-pill" 
                style={{ backgroundColor: '#e0e7ff', color: '#4338ca', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <CheckCircle size={12} />
                RSVP'd
              </span>
            ) : isSoldOut ? (
              <span className="event-seats-pill seats-full">
                Full
              </span>
            ) : seatsLeft < 20 ? (
              <span className="event-seats-pill seats-low">
                {seatsLeft} seats left
              </span>
            ) : (
              <span className="event-seats-pill seats-available">
                {seatsLeft} open
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

