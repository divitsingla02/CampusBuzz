import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_EVENTS, INITIAL_CLUBS } from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Current active page view: 'dashboard' | 'explore' | 'event-detail' | 'calendar' | 'clubs' | 'club-detail' | 'my-events'
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Selected IDs for detailed pages
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedClubId, setSelectedClubId] = useState(null);

  // Global search input query
  const [searchQuery, setSearchQuery] = useState('');

  // Events list state
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('campusbuzz_events');
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });

  // Clubs list state
  const [clubs, setClubs] = useState(() => {
    const saved = localStorage.getItem('campusbuzz_clubs');
    return saved ? JSON.parse(saved) : INITIAL_CLUBS;
  });

  // User RSVP registrations stored in localStorage: { [eventId]: { registeredAt: string, status: 'confirmed' } }
  const [rsvps, setRsvps] = useState(() => {
    const saved = localStorage.getItem('campusbuzz_rsvps');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    // Default sample RSVP for demo purposes: HackOverflow
    return {
      'evt-hackoverflow': {
        registeredAt: new Date().toISOString(),
        status: 'confirmed'
      }
    };
  });

  // Toast feedback notifications
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3800);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync RSVPs to localStorage
  useEffect(() => {
    localStorage.setItem('campusbuzz_rsvps', JSON.stringify(rsvps));
  }, [rsvps]);

  // Sync events to localStorage
  useEffect(() => {
    localStorage.setItem('campusbuzz_events', JSON.stringify(events));
  }, [events]);

  // Navigation helpers
  const navigateTo = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const viewEventDetail = (eventId) => {
    setSelectedEventId(eventId);
    setActiveTab('event-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const viewClubDetail = (clubId) => {
    setSelectedClubId(clubId);
    setActiveTab('club-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle RSVP
  const toggleRSVP = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    if (!event) return;

    if (rsvps[eventId]) {
      // Cancel RSVP
      const updated = { ...rsvps };
      delete updated[eventId];
      setRsvps(updated);

      // Decrement registered count
      setEvents((prev) =>
        prev.map((e) =>
          e.id === eventId ? { ...e, registeredCount: Math.max(0, e.registeredCount - 1) } : e
        )
      );

      addToast(`RSVP cancelled for "${event.title}"`, 'info');
    } else {
      // Check seat availability
      if (event.registeredCount >= event.totalSeats) {
        addToast('Sorry, this event is already fully booked!', 'error');
        return;
      }

      // Add RSVP
      setRsvps((prev) => ({
        ...prev,
        [eventId]: {
          registeredAt: new Date().toISOString(),
          status: 'confirmed'
        }
      }));

      // Increment registered count
      setEvents((prev) =>
        prev.map((e) =>
          e.id === eventId ? { ...e, registeredCount: e.registeredCount + 1 } : e
        )
      );

      addToast(`🎉 Successfully RSVP'd for "${event.title}"! Pass added to My Events.`, 'success');
    }
  };

  const isEventRsvped = (eventId) => {
    return !!rsvps[eventId];
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        navigateTo,
        selectedEventId,
        setSelectedEventId,
        viewEventDetail,
        selectedClubId,
        setSelectedClubId,
        viewClubDetail,
        events,
        clubs,
        rsvps,
        toggleRSVP,
        isEventRsvped,
        toasts,
        addToast,
        removeToast,
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

