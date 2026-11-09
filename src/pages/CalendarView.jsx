import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CalendarView = () => {
  const { events, viewEventDetail } = useApp();

  // Current viewed month: default November 2026
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(10); // 0-indexed: 10 is November
  // Selected date ISO string 'YYYY-MM-DD'
  const [selectedDate, setSelectedDate] = useState('2026-11-20');

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Navigate month
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Build calendar matrix
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Helper to format ISO YYYY-MM-DD
  const formatISO = (day) => {
    const m = String(currentMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${currentYear}-${m}-${d}`;
  };

  // Map of events by date
  const eventsByDate = events.reduce((acc, evt) => {
    if (!acc[evt.date]) acc[evt.date] = [];
    acc[evt.date].push(evt);
    return acc;
  }, {});

  // Events on the selected date
  const eventsOnSelectedDate = selectedDate ? (eventsByDate[selectedDate] || []) : [];

  const formattedSelectedDateDisplay = selectedDate
    ? new Date(selectedDate).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    : '';

  return (
    <div className="page-container">
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
          Campus Event Calendar
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Browse events by day and plan your semester schedule ahead of time.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        {/* Calendar Grid Container */}
        <div className="calendar-card">
          <div className="calendar-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div 
                style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '0.75rem', 
                  backgroundColor: '#eef2ff', 
                  color: '#4338ca', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <CalendarIcon size={20} />
              </div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                {monthNames[currentMonth]} {currentYear}
              </h2>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn-icon" onClick={handlePrevMonth} title="Previous Month">
                <ChevronLeft size={20} />
              </button>
              <button 
                className="btn-secondary" 
                style={{ color: '#4338ca', background: '#eef2ff', borderColor: '#c7d2fe', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                onClick={() => {
                  setCurrentYear(2026);
                  setCurrentMonth(10);
                  setSelectedDate('2026-11-20');
                }}
              >
                Today / Reset
              </button>
              <button className="btn-icon" onClick={handleNextMonth} title="Next Month">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="calendar-grid">
            {/* Days of week */}
            {daysOfWeek.map((day) => (
              <div key={day} className="calendar-day-header">
                {day}
              </div>
            ))}

            {/* Empty prefix slots */}
            {Array.from({ length: firstDayIndex }).map((_, idx) => (
              <div key={`empty-${idx}`} className="calendar-day-cell empty" />
            ))}

            {/* Month days */}
            {Array.from({ length: totalDaysInMonth }).map((_, idx) => {
              const dayNumber = idx + 1;
              const dateISO = formatISO(dayNumber);
              const dayEvents = eventsByDate[dateISO] || [];
              const isSelected = selectedDate === dateISO;
              const isToday = currentYear === 2026 && currentMonth === 10 && dayNumber === 9;

              return (
                <div
                  key={dayNumber}
                  className={`calendar-day-cell ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(dateISO)}
                >
                  <div className={`day-number ${isToday ? 'today' : ''}`}>
                    {dayNumber}
                  </div>

                  {/* Event Badges inside calendar cell */}
                  {dayEvents.slice(0, 2).map((evt) => (
                    <div
                      key={evt.id}
                      className={`event-dot-item ${evt.status === 'ongoing' ? 'event-dot-red' : 'event-dot-indigo'}`}
                      title={evt.title}
                    >
                      {evt.title}
                    </div>
                  ))}

                  {dayEvents.length > 2 && (
                    <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#6366f1', paddingLeft: '0.2rem' }}>
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Date Drawer / Events List */}
        <div style={{ background: '#ffffff', borderRadius: '1.25rem', border: '1px solid #e2e8f0', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Selected Date
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                {formattedSelectedDateDisplay}
              </h3>
            </div>
            <span 
              style={{
                background: '#eef2ff',
                color: '#4338ca',
                fontWeight: 800,
                fontSize: '0.8rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '9999px'
              }}
            >
              {eventsOnSelectedDate.length} {eventsOnSelectedDate.length === 1 ? 'Event' : 'Events'} Scheduled
            </span>
          </div>

          {eventsOnSelectedDate.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {eventsOnSelectedDate.map((evt) => (
                <div
                  key={evt.id}
                  onClick={() => viewEventDetail(evt.id)}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem',
                    borderRadius: '1rem',
                    border: '1px solid #e2e8f0',
                    background: '#f8fafc',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', minWidth: 280, flex: 1 }}>
                    <img
                      src={evt.banner}
                      alt={evt.title}
                      style={{ width: 80, height: 60, borderRadius: '0.6rem', objectFit: 'cover' }}
                    />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span 
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            color: '#4338ca',
                            backgroundColor: '#e0e7ff',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '0.4rem'
                          }}
                        >
                          {evt.category}
                        </span>
                        {evt.status === 'ongoing' && (
                          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#dc2626' }}>
                            • Happening Now
                          </span>
                        )}
                      </div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>{evt.title}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: '#64748b', marginTop: '0.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Clock size={13} />
                          <span>{evt.time}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <MapPin size={13} />
                          <span>{evt.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4f46e5', fontWeight: 700, fontSize: '0.875rem' }}>
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#64748b' }}>
              <div 
                style={{ 
                  width: 48, 
                  height: 48, 
                  borderRadius: '50%', 
                  backgroundColor: '#f1f5f9', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  color: '#94a3b8'
                }}
              >
                <CalendarIcon size={24} />
              </div>
              <p style={{ fontWeight: 700, color: '#1e293b', marginBottom: '0.25rem' }}>
                No events scheduled on this day
              </p>
              <p style={{ fontSize: '0.85rem' }}>
                Select another date with highlighted events or explore all upcoming events.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

