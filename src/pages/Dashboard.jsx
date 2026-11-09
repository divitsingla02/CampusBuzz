import React from 'react';
import { 
  Compass, 
  Radio, 
  Sparkles, 
  Users, 
  ArrowRight, 
  Ticket, 
  Calendar,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EventCard } from '../components/EventCard';
import { ClubCard } from '../components/ClubCard';

export const Dashboard = () => {
  const { events, clubs, rsvps, navigateTo, viewEventDetail } = useApp();

  // "Happening Now" events
  const liveEvents = events.filter((e) => e.status === 'ongoing');

  // Featured and upcoming events
  const featuredEvents = events.filter((e) => e.isFeatured && e.status !== 'completed');

  // Registered events for quick access
  const registeredEvents = events.filter((e) => rsvps[e.id]);

  // Popular clubs
  const popularClubs = clubs.slice(0, 3);

  return (
    <div className="page-container">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <div className="banner-decor-1" />
        <div className="banner-decor-2" />

        <div className="banner-content">
          <div className="banner-badge">
            <Zap size={14} fill="currentColor" />
            <span>Campus Live Hub</span>
          </div>
          <h1 className="banner-title">Welcome back, Alex! Never miss campus life.</h1>
          <p className="banner-subtitle">
            Discover {events.length} active events, meet student societies, register for workshops, and follow the campus buzz all in one place.
          </p>

          <div className="banner-actions">
            <button className="btn-primary" onClick={() => navigateTo('explore')}>
              <Compass size={18} />
              <span>Explore All Events</span>
            </button>
            <button className="btn-secondary" onClick={() => navigateTo('my-events')}>
              <Ticket size={18} />
              <span>My Passes ({Object.keys(rsvps).length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Happening Now Section */}
      {liveEvents.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <div className="section-header">
            <div>
              <div className="section-title" style={{ color: '#dc2626' }}>
                <Radio size={22} className="animate-pulse" />
                <span>Happening Now On Campus</span>
              </div>
              <p className="section-subtitle">Real-time sessions and active gatherings open right now</p>
            </div>
          </div>

          <div className="events-grid">
            {liveEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </section>
      )}

      {/* Quick Access to Registered Events */}
      {registeredEvents.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <div className="section-header">
            <div>
              <div className="section-title">
                <Ticket size={22} color="#4f46e5" />
                <span>Your Registered Passes</span>
              </div>
              <p className="section-subtitle">You have confirmed your spot for these events</p>
            </div>
            <div className="section-link" onClick={() => navigateTo('my-events')}>
              <span>View all my passes</span>
              <ArrowRight size={16} />
            </div>
          </div>

          <div className="events-grid">
            {registeredEvents.slice(0, 3).map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Events */}
      <section style={{ marginBottom: '2.5rem' }}>
        <div className="section-header">
          <div>
            <div className="section-title">
              <Sparkles size={22} color="#f59e0b" />
              <span>Featured Campus Events</span>
            </div>
            <p className="section-subtitle">Handpicked flagships, hackathons and mega festivals</p>
          </div>
          <div className="section-link" onClick={() => navigateTo('explore')}>
            <span>See full calendar</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="events-grid">
          {featuredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      </section>

      {/* Popular Student Clubs */}
      <section style={{ marginBottom: '2.5rem' }}>
        <div className="section-header">
          <div>
            <div className="section-title">
              <Users size={22} color="#4f46e5" />
              <span>Popular Clubs & Societies</span>
            </div>
            <p className="section-subtitle">Connect with tech communities, music bands and cultural clubs</p>
          </div>
          <div className="section-link" onClick={() => navigateTo('clubs')}>
            <span>Browse all clubs</span>
            <ArrowRight size={16} />
          </div>
        </div>

        <div className="clubs-grid">
          {popularClubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </section>
    </div>
  );
};

