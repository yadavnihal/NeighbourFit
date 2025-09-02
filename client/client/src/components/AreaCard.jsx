import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AreaCard = ({ areaName, areaData, city = "Delhi", state = "Delhi" }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate overall rating
  const calculateOverallRating = (data) => {
    const total = Object.values(data).reduce((sum, score) => sum + score, 0);
    const average = total / Object.values(data).length;
    return Math.round(average / 20); // Convert to 5-star scale
  };

  // Get safety index based on crime score
  const getSafetyIndex = (crimeScore) => {
    if (crimeScore >= 80) return { level: "High", color: "#10B981", icon: "🛡️" };
    if (crimeScore >= 60) return { level: "Medium", color: "#F59E0B", icon: "⚠️" };
    return { level: "Low", color: "#EF4444", icon: "⚡" };
  };

  // Get greenery score (based on health score as proxy)
  const getGreeneryScore = (healthScore) => {
    if (healthScore >= 90) return { score: "Excellent", icon: "🌳", color: "#10B981" };
    if (healthScore >= 75) return { score: "Good", icon: "🌿", color: "#059669" };
    if (healthScore >= 60) return { score: "Fair", icon: "🍃", color: "#F59E0B" };
    return { score: "Limited", icon: "🌱", color: "#EF4444" };
  };

  // Get area description/summary
  const getAreaSummary = (name) => {
    const summaries = {
      "Vasant Kunj": "A premium residential area known for its upscale apartments and excellent connectivity. Popular among diplomats and business executives.",
      "Greater Kailash": "Vibrant locality with great shopping and dining options. Perfect blend of residential comfort and commercial convenience.",
      "South Extension": "Shopping paradise with trendy markets and cafes. A favorite among young professionals and families.",
      "Defence Colony": "Peaceful residential neighborhood with tree-lined streets. Known for its quiet atmosphere and good schools.",
      "Hauz Khas": "Historic charm meets modern nightlife. A cultural hub with art galleries, restaurants, and the famous Deer Park.",
      "Dwarka": "Modern planned city with wide roads and parks. Family-friendly with good connectivity to the airport.",
      "Janakpuri": "Well-established residential area with excellent metro connectivity. Popular among middle-class families.",
      "Pitampura": "Emerging locality with good infrastructure. Mix of residential and commercial spaces with reasonable property rates.",
      "Rohini": "Large residential area with diverse housing options. Good for families looking for affordable yet comfortable living.",
      "Rajouri Garden": "Bustling commercial and residential hub. Famous for its shopping centers and excellent food scene.",
      "Lajpat Nagar": "Traditional Delhi market area with authentic street food. Great for those who love the old Delhi charm.",
      "Karol Bagh": "Commercial heart with budget-friendly shopping. Dense locality with good connectivity to central Delhi.",
      "Saket": "Upmarket area with premium malls and restaurants. Modern living with easy access to South Delhi attractions.",
      "Mayur Vihar": "Affordable residential area across the Yamuna. Good connectivity and family-friendly environment.",
      "Shahdara": "Traditional East Delhi locality with historic significance. Budget-friendly with improving infrastructure."
    };
    return summaries[name] || "A wonderful area in Delhi with its own unique character and charm.";
  };

  // Get nearby facilities based on scores
  const getNearbyFacilities = (data) => {
    const facilities = [];
    if (data.Health >= 80) facilities.push({ name: "Hospitals", icon: "🏥" });
    if (data.Schools >= 80) facilities.push({ name: "Schools", icon: "🎓" });
    if (data.Amenities >= 80) facilities.push({ name: "Shopping", icon: "🛍️" });
    if (data.Employment >= 80) facilities.push({ name: "Offices", icon: "🏢" });
    if (data.Health >= 70) facilities.push({ name: "Parks", icon: "🌳" });
    return facilities.slice(0, 4); // Show max 4 facilities
  };

  const overallRating = calculateOverallRating(areaData);
  const safetyIndex = getSafetyIndex(areaData.Crime);
  const greeneryScore = getGreeneryScore(areaData.Health);
  const nearbyFacilities = getNearbyFacilities(areaData);
  const areaSummary = getAreaSummary(areaName);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? "#F59E0B" : "#E5E7EB" }}>
        ⭐
      </span>
    ));
  };

  return (
    <div
      style={{
        ...styles.card,
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0, 0, 0, 0.12)' 
          : '0 8px 20px rgba(0, 0, 0, 0.08)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerTop}>
          <h2 style={styles.areaName}>🧭 {areaName}</h2>
          <div style={styles.location}>
            <span style={styles.locationIcon}>📍</span>
            <span style={styles.locationText}>{city}, {state}</span>
          </div>
        </div>
        
        {/* Rating and Safety */}
        <div style={styles.ratingSection}>
          <div style={styles.rating}>
            <span style={styles.ratingLabel}>⭐ Rating:</span>
            <div style={styles.stars}>
              {renderStars(overallRating)}
              <span style={styles.ratingText}>({overallRating}/5)</span>
            </div>
          </div>
          <div style={styles.safety}>
            <span style={styles.safetyIcon}>{safetyIndex.icon}</span>
            <span style={styles.safetyLabel}>Safety:</span>
            <span style={{...styles.safetyLevel, color: safetyIndex.color}}>
              {safetyIndex.level}
            </span>
          </div>
        </div>
      </div>

      {/* Facilities and Greenery */}
      <div style={styles.facilitiesSection}>
        <div style={styles.facilities}>
          <h4 style={styles.sectionTitle}>🏥 Nearby Facilities</h4>
          <div style={styles.facilityList}>
            {nearbyFacilities.map((facility, index) => (
              <span key={index} style={styles.facilityTag}>
                {facility.icon} {facility.name}
              </span>
            ))}
          </div>
        </div>
        
        <div style={styles.greenery}>
          <span style={styles.greeneryIcon}>{greeneryScore.icon}</span>
          <span style={styles.greeneryLabel}>Greenery:</span>
          <span style={{...styles.greeneryScore, color: greeneryScore.color}}>
            {greeneryScore.score}
          </span>
        </div>
      </div>

      {/* Summary Section */}
      <div style={styles.summarySection}>
        <h4 style={styles.sectionTitle}>💬 Area Overview</h4>
        <p style={styles.summary}>{areaSummary}</p>
      </div>

      {/* Action Buttons */}
      <div style={styles.actions}>
        <Link 
          to={`/areas/${encodeURIComponent(areaName)}`}
          style={{...styles.button, ...styles.mapButton}}
        >
          � View Details
        </Link>
        <Link 
          to={`/map?area=${encodeURIComponent(areaName)}`}
          style={{...styles.button, ...styles.reviewButton}}
        >
          �️ View on Map
        </Link>
      </div>

      {/* Animated gradient overlay */}
      <div 
        style={{
          ...styles.gradientOverlay,
          opacity: isHovered ? 0.1 : 0,
        }}
      />
    </div>
  );
};

const styles = {
  card: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    borderRadius: '20px',
    padding: '2rem',
    margin: '1rem 0',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid rgba(226, 232, 240, 0.5)',
    cursor: 'pointer',
  },
  
  header: {
    marginBottom: '1.5rem',
  },
  
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  
  areaName: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: 0,
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  
  location: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(59, 130, 246, 0.1)',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
  },
  
  locationIcon: {
    fontSize: '1rem',
  },
  
  locationText: {
    fontSize: '0.9rem',
    color: '#475569',
    fontWeight: '500',
  },
  
  ratingSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  
  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  
  ratingLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#475569',
  },
  
  stars: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  },
  
  ratingText: {
    fontSize: '0.8rem',
    color: '#64748b',
    marginLeft: '0.5rem',
  },
  
  safety: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(16, 185, 129, 0.1)',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
  },
  
  safetyIcon: {
    fontSize: '1rem',
  },
  
  safetyLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#475569',
  },
  
  safetyLevel: {
    fontSize: '0.9rem',
    fontWeight: '700',
  },
  
  facilitiesSection: {
    margin: '1.5rem 0',
    padding: '1.5rem',
    background: 'rgba(248, 250, 252, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(226, 232, 240, 0.3)',
  },
  
  facilities: {
    marginBottom: '1rem',
  },
  
  sectionTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#334155',
    margin: '0 0 0.75rem 0',
  },
  
  facilityList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  
  facilityTag: {
    background: 'linear-gradient(135deg, #e0f2fe, #b3e5fc)',
    color: '#0277bd',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    fontSize: '0.8rem',
    fontWeight: '500',
    border: '1px solid rgba(2, 119, 189, 0.2)',
  },
  
  greenery: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    justifyContent: 'flex-end',
  },
  
  greeneryIcon: {
    fontSize: '1.2rem',
  },
  
  greeneryLabel: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#475569',
  },
  
  greeneryScore: {
    fontSize: '0.9rem',
    fontWeight: '700',
  },
  
  summarySection: {
    margin: '1.5rem 0',
    padding: '1.5rem',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))',
    borderRadius: '16px',
    border: '1px solid rgba(99, 102, 241, 0.1)',
  },
  
  summary: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#475569',
    margin: 0,
    fontStyle: 'italic',
  },
  
  actions: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap',
  },
  
  button: {
    flex: 1,
    minWidth: '140px',
    padding: '0.875rem 1.5rem',
    borderRadius: '12px',
    fontSize: '0.9rem',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.2s ease',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  
  mapButton: {
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
  },
  
  reviewButton: {
    background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
  },
  
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
  },
};

export default AreaCard;
