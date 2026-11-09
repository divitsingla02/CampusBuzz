import React from 'react';
import { Users, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ClubCard = ({ club }) => {
  const { viewClubDetail } = useApp();

  return (
    <div className="club-card" onClick={() => viewClubDetail(club.id)}>
      <div className="club-banner">
        <img src={club.banner} alt={club.name} className="club-banner-img" />
        <img src={club.avatar} alt={club.name} className="club-avatar-overlap" />
      </div>

      <div className="club-card-body">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
          <span 
            style={{ 
              fontSize: '0.75rem', 
              fontWeight: 800, 
              color: '#4f46e5', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em' 
            }}
          >
            {club.category}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Est. {club.established}</span>
        </div>

        <h3 className="club-name">{club.name}</h3>
        <p className="club-tagline">{club.tagline}</p>

        <div className="club-stats-row">
          <div className="club-stat">
            <span className="club-stat-val">{club.membersCount}+</span>
            <span className="club-stat-label">Members</span>
          </div>
          <div className="club-stat" style={{ borderLeft: '1px solid #f1f5f9', paddingLeft: '1rem' }}>
            <span className="club-stat-val">{club.tags.length}</span>
            <span className="club-stat-label">Focus Areas</span>
          </div>
        </div>

        <div className="tag-cloud" style={{ marginBottom: '1rem' }}>
          {club.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="tag-pill">
              #{tag}
            </span>
          ))}
          {club.tags.length > 3 && (
            <span className="tag-pill">+{club.tags.length - 3}</span>
          )}
        </div>

        <div 
          style={{ 
            marginTop: 'auto', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#4f46e5'
          }}
        >
          <span>View Club Profile</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

