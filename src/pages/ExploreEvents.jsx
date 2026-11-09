import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  Sparkles, 
  Code, 
  Palette, 
  Trophy, 
  BookOpen, 
  Music, 
  Flame, 
  SlidersHorizontal,
  Frown
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/mockData';
import { EventCard } from '../components/EventCard';

export const ExploreEvents = () => {
  const { events, searchQuery, setSearchQuery } = useApp();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date-asc'); // 'date-asc', 'date-desc', 'popularity'
  const [statusFilter, setStatusFilter] = useState('all'); // 'all', 'upcoming', 'ongoing', 'completed'

  // Map icons dynamically
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={16} />;
      case 'Code': return <Code size={16} />;
      case 'Palette': return <Palette size={16} />;
      case 'Trophy': return <Trophy size={16} />;
      case 'BookOpen': return <BookOpen size={16} />;
      case 'Music': return <Music size={16} />;
      case 'Flame': return <Flame size={16} />;
      default: return <Sparkles size={16} />;
    }
  };

  // Filtered & Sorted events
  const filteredEvents = useMemo(() => {
    return events
      .filter((evt) => {
        // Search query match
        const matchesSearch =
          evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          evt.organizerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          evt.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
          evt.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

        // Category match
        const matchesCategory =
          selectedCategory === 'all' || evt.category.toLowerCase() === selectedCategory.toLowerCase();

        // Status match
        const matchesStatus =
          statusFilter === 'all' || evt.status === statusFilter;

        return matchesSearch && matchesCategory && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'popularity') {
          return b.registeredCount - a.registeredCount;
        } else if (sortBy === 'date-desc') {
          return new Date(b.date) - new Date(a.date);
        } else {
          // date-asc
          return new Date(a.date) - new Date(b.date);
        }
      });
  }, [events, searchQuery, selectedCategory, statusFilter, sortBy]);

  return (
    <div className="page-container">
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>
          Explore Campus Events
        </h1>
        <p style={{ color: '#64748b', fontSize: '1rem' }}>
          Find technical hackathons, cultural fests, sports tournaments, hands-on workshops, and music gigs.
        </p>
      </div>

      {/* Category Pills */}
      <div className="filter-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`filter-tab ${selectedCategory === cat.id ? 'active' : ''}`}
          >
            {getCategoryIcon(cat.icon)}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Search, Status & Sorting Controls */}
      <div className="controls-bar">
        <div className="search-input-group">
          <Search size={18} color="#94a3b8" />
          <input
            type="text"
            placeholder="Search by event title, organizer or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', color: '#94a3b8' }}
            >
              Clear
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {/* Status Filter */}
          <div className="sort-select-group">
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>Status:</span>
            <select
              className="sort-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Happening Now</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="sort-select-group">
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>Sort By:</span>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="date-asc">Date (Soonest First)</option>
              <option value="date-desc">Date (Furthest First)</option>
              <option value="popularity">Popularity (Most RSVPs)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Events Results Count */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
          Showing <span style={{ color: '#0f172a', fontWeight: 800 }}>{filteredEvents.length}</span> events
        </div>
        {(selectedCategory !== 'all' || searchQuery || statusFilter !== 'all') && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setStatusFilter('all');
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#4f46e5',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="events-grid">
          {filteredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
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
            gap: '1rem'
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              backgroundColor: '#f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b'
            }}
          >
            <Frown size={28} />
          </div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e293b' }}>No events found</h3>
          <p style={{ color: '#64748b', maxWidth: 400, fontSize: '0.925rem' }}>
            We couldn't find any events matching your selected search query or filters. Try adjusting your search term or resetting filters.
          </p>
          <button
            className="btn-solid-indigo"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setStatusFilter('all');
            }}
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

