import React, { useState } from 'react';
import AreaCard from '../components/AreaCard';
import areaRatings from '../data/areaRatings';

function AreasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Get all areas as an array
  const areas = Object.entries(areaRatings).map(([name, data]) => ({ name, data }));

  // Filter areas based on search term
  const filteredAreas = areas.filter(area =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort areas
  const sortedAreas = [...filteredAreas].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        const ratingA = Object.values(a.data).reduce((sum, score) => sum + score, 0) / Object.values(a.data).length;
        const ratingB = Object.values(b.data).reduce((sum, score) => sum + score, 0) / Object.values(b.data).length;
        return ratingB - ratingA;
      case 'safety':
        return b.data.Crime - a.data.Crime;
      case 'cost':
        return b.data.Cost - a.data.Cost;
      default:
        return 0;
    }
  });

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1 style={styles.title}>🏙️ Explore Delhi Areas</h1>
        <p style={styles.subtitle}>
          Discover the perfect neighborhood for your lifestyle with detailed insights and ratings
        </p>
      </div>

      {/* Search and Filter Section */}
      <div style={styles.controlsSection}>
        <div style={styles.searchContainer}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search areas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        
        <div style={styles.sortContainer}>
          <label style={styles.sortLabel}>Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={styles.sortSelect}
          >
            <option value="name">Name</option>
            <option value="rating">Overall Rating</option>
            <option value="safety">Safety</option>
            <option value="cost">Cost of Living</option>
          </select>
        </div>
      </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statCard}>
          <span style={styles.statNumber}>{areas.length}</span>
          <span style={styles.statLabel}>Total Areas</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statNumber}>{filteredAreas.length}</span>
          <span style={styles.statLabel}>Showing</span>
        </div>
        <div style={styles.statCard}>
          <span style={styles.statNumber}>Delhi</span>
          <span style={styles.statLabel}>City</span>
        </div>
      </div>

      {/* Areas Grid */}
      <div style={styles.areasGrid}>
        {sortedAreas.length > 0 ? (
          sortedAreas.map(({ name, data }) => (
            <div key={name} style={styles.cardWrapper}>
              <AreaCard
                areaName={name}
                areaData={data}
                city="Delhi"
                state="Delhi"
              />
            </div>
          ))
        ) : (
          <div style={styles.noResults}>
            <span style={styles.noResultsIcon}>😔</span>
            <h3 style={styles.noResultsTitle}>No areas found</h3>
            <p style={styles.noResultsText}>
              Try adjusting your search term or filters
            </p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div style={styles.footerInfo}>
        <p style={styles.footerText}>
          🏡 Find your perfect neighborhood based on amenities, safety, cost of living, and more.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem 1rem',
    fontFamily: "'Poppins', sans-serif",
  },
  
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 1rem 0',
  },
  
  subtitle: {
    fontSize: '1.2rem',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  
  controlsSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  
  searchContainer: {
    position: 'relative',
    flex: '1',
    maxWidth: '400px',
  },
  
  searchIcon: {
    position: 'absolute',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.2rem',
    color: '#94a3b8',
  },
  
  searchInput: {
    width: '100%',
    padding: '1rem 1rem 1rem 3rem',
    borderRadius: '50px',
    border: '2px solid rgba(226, 232, 240, 0.8)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.2s ease',
    background: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  
  sortContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  
  sortLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#475569',
  },
  
  sortSelect: {
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    border: '2px solid rgba(226, 232, 240, 0.8)',
    fontSize: '0.95rem',
    outline: 'none',
    background: 'white',
    color: '#475569',
    cursor: 'pointer',
  },
  
  statsSection: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  },
  
  statCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
    borderRadius: '16px',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    minWidth: '120px',
  },
  
  statNumber: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#3b82f6',
    marginBottom: '0.5rem',
  },
  
  statLabel: {
    fontSize: '0.9rem',
    color: '#64748b',
    fontWeight: '500',
  },
  
  areasGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem',
  },
  
  cardWrapper: {
    width: '100%',
  },
  
  noResults: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '4rem 2rem',
  },
  
  noResultsIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
    display: 'block',
  },
  
  noResultsTitle: {
    fontSize: '1.5rem',
    color: '#475569',
    marginBottom: '0.5rem',
  },
  
  noResultsText: {
    color: '#64748b',
    fontSize: '1rem',
  },
  
  footerInfo: {
    textAlign: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.8), rgba(241, 245, 249, 0.8))',
    borderRadius: '16px',
    border: '1px solid rgba(226, 232, 240, 0.5)',
  },
  
  footerText: {
    color: '#64748b',
    fontSize: '1rem',
    margin: 0,
  },
};

export default AreasPage;
