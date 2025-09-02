import React, { useState, useEffect } from "react";
import areaRatings from "../data/areaRatings";
import LivabilityBreakdown from "../components/LivabilityBreakdown";
import AreaCard from "../components/AreaCard";

function CompareAreas() {
  const [area1, setArea1] = useState("");
  const [area2, setArea2] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [particles, setParticles] = useState([]);

  // Get area names from the object keys
  const areaNames = Object.keys(areaRatings);

  // Animation and particles setup
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    
    // Generate particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 1 + 0.3,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y > 100 ? -5 : particle.y + particle.speed * 0.05,
        x: particle.x + Math.sin(particle.y * 0.02) * 0.1,
      })));
    };

    const interval = setInterval(animateParticles, 100);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setShowComparison(area1 && area2);
  }, [area1, area2]);

  const calculateWinner = (area1Data, area2Data, metric) => {
    const score1 = area1Data[metric];
    const score2 = area2Data[metric];
    if (score1 > score2) return { winner: area1, score: score1, loser: area2, loserScore: score2 };
    if (score2 > score1) return { winner: area2, score: score2, loser: area1, loserScore: score1 };
    return { winner: 'tie', score: score1, loser: 'tie', loserScore: score2 };
  };

  const getOverallWinner = () => {
    if (!area1 || !area2) return null;
    
    const area1Data = areaRatings[area1];
    const area2Data = areaRatings[area2];
    
    const area1Total = Object.values(area1Data).reduce((sum, score) => sum + score, 0);
    const area2Total = Object.values(area2Data).reduce((sum, score) => sum + score, 0);
    
    if (area1Total > area2Total) return { winner: area1, score: area1Total, loser: area2, loserScore: area2Total };
    if (area2Total > area1Total) return { winner: area2, score: area2Total, loser: area1, loserScore: area1Total };
    return { winner: 'tie', score: area1Total };
  };

  return (
    <div style={styles.pageContainer}>
      {/* Animated Background */}
      <div style={styles.backgroundContainer}>
        <div style={styles.gradientOrb1}></div>
        <div style={styles.gradientOrb2}></div>
        <div style={styles.gradientOrb3}></div>
        
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      <div style={{
        ...styles.container,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1 style={styles.mainHeading}>
              🏆 Area <span style={styles.gradientText}>Comparison</span> Hub
            </h1>
            <p style={styles.heroSubtext}>
              Compare neighborhoods side-by-side to find the perfect match for your lifestyle
            </p>
          </div>
        </div>

        {/* Selection Section */}
        <div style={styles.selectionSection}>
          <div style={styles.selectCard}>
            <div style={styles.selectHeader}>
              <span style={styles.selectNumber}>1</span>
              <h3 style={styles.selectTitle}>Choose First Area</h3>
            </div>
            <div style={styles.customSelectWrapper}>
              <select 
                onChange={(e) => setArea1(e.target.value)} 
                value={area1}
                style={styles.customSelect}
                className="compare-select"
              >
                <option value="">🏙️ Select Area 1</option>
                {areaNames.map((areaName) => (
                  <option key={areaName} value={areaName}>{areaName}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={styles.vsContainer}>
            <div style={styles.vsCircle}>
              <span style={styles.vsText}>VS</span>
            </div>
            <div style={styles.vsLine}></div>
          </div>

          <div style={styles.selectCard}>
            <div style={styles.selectHeader}>
              <span style={styles.selectNumber}>2</span>
              <h3 style={styles.selectTitle}>Choose Second Area</h3>
            </div>
            <div style={styles.customSelectWrapper}>
              <select 
                onChange={(e) => setArea2(e.target.value)} 
                value={area2}
                style={styles.customSelect}
                className="compare-select"
              >
                <option value="">🏙️ Select Area 2</option>
                {areaNames.map((areaName) => (
                  <option key={areaName} value={areaName}>{areaName}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Overall Winner Banner */}
        {showComparison && (
          <div style={{
            ...styles.winnerBanner,
            opacity: showComparison ? 1 : 0,
            transform: showComparison ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            {(() => {
              const winner = getOverallWinner();
              if (winner.winner === 'tie') {
                return (
                  <>
                    <span style={styles.winnerIcon}>🤝</span>
                    <div>
                      <h3 style={styles.winnerTitle}>It's a Tie!</h3>
                      <p style={styles.winnerSubtext}>Both areas have equal overall scores</p>
                    </div>
                  </>
                );
              }
              return (
                <>
                  <span style={styles.winnerIcon}>👑</span>
                  <div>
                    <h3 style={styles.winnerTitle}>{winner.winner} Wins!</h3>
                    <p style={styles.winnerSubtext}>
                      Overall Score: {Math.round(winner.score/8)} vs {Math.round(winner.loserScore/8)}
                    </p>
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* Area Cards Comparison */}
        {showComparison && (
          <div style={{
            ...styles.cardsSection,
            opacity: showComparison ? 1 : 0,
            transform: showComparison ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
          }}>
            <h2 style={styles.sectionTitle}>📋 Quick Overview</h2>
            <div style={styles.cardsGrid}>
              <div style={styles.cardWrapper}>
                <AreaCard 
                  areaName={area1} 
                  areaData={areaRatings[area1]}
                  city="Delhi"
                  state="Delhi"
                />
              </div>
              <div style={styles.cardWrapper}>
                <AreaCard 
                  areaName={area2} 
                  areaData={areaRatings[area2]}
                  city="Delhi"
                  state="Delhi"
                />
              </div>
            </div>
          </div>
        )}

        {/* Head-to-Head Comparison */}
        {showComparison && (
          <div style={{
            ...styles.headToHeadSection,
            opacity: showComparison ? 1 : 0,
            transform: showComparison ? 'translateY(0)' : 'translateY(50px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
          }}>
            <h2 style={styles.sectionTitle}>⚔️ Head-to-Head Battle</h2>
            <div style={styles.battleGrid}>
              {Object.keys(areaRatings[area1]).map((metric) => {
                const battle = calculateWinner(areaRatings[area1], areaRatings[area2], metric);
                const metricIcons = {
                  Amenities: "🏙️", Commute: "🚌", Cost: "💰", Crime: "⚖️",
                  Employment: "💼", Health: "❤️", Housing: "🏠", Schools: "🎓"
                };
                
                return (
                  <div key={metric} style={styles.battleCard} className="battle-card">
                    <div style={styles.battleHeader}>
                      <span style={styles.battleIcon}>{metricIcons[metric]}</span>
                      <h4 style={styles.battleMetric}>{metric}</h4>
                    </div>
                    <div style={styles.battleScores}>
                      <div style={styles.battleScore}>
                        <span style={styles.battleAreaName}>{area1}</span>
                        <span style={{
                          ...styles.battleScoreValue,
                          color: battle.winner === area1 ? '#10B981' : '#6B7280'
                        }}>
                          {battle.winner === area1 ? '🏆 ' : ''}{areaRatings[area1][metric]}
                        </span>
                      </div>
                      <div style={styles.battleVs}>vs</div>
                      <div style={styles.battleScore}>
                        <span style={styles.battleAreaName}>{area2}</span>
                        <span style={{
                          ...styles.battleScoreValue,
                          color: battle.winner === area2 ? '#10B981' : '#6B7280'
                        }}>
                          {battle.winner === area2 ? '🏆 ' : ''}{areaRatings[area2][metric]}
                        </span>
                      </div>
                    </div>
                    {battle.winner !== 'tie' && (
                      <div style={styles.battleWinner}>
                        🎯 {battle.winner} leads by {Math.abs(battle.score - battle.loserScore)} points
                      </div>
                    )}
                    {battle.winner === 'tie' && (
                      <div style={styles.battleTie}>
                        🤝 Perfect tie!
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!area1 && !area2 && (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>🎯</div>
            <h3 style={styles.emptyTitle}>Ready to Compare?</h3>
            <p style={styles.emptyText}>
              Select two areas above to see a detailed comparison of their livability metrics, 
              amenities, and overall quality of life factors.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Poppins', sans-serif",
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
  },
  
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  
  gradientOrb1: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: 'float 6s ease-in-out infinite',
  },
  
  gradientOrb2: {
    position: 'absolute',
    top: '50%',
    right: '10%',
    width: '250px',
    height: '250px',
    background: 'radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(50px)',
    animation: 'float 8s ease-in-out infinite reverse',
  },
  
  gradientOrb3: {
    position: 'absolute',
    bottom: '20%',
    left: '50%',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(255, 217, 61, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'float 10s ease-in-out infinite',
    transform: 'translateX(-50%)',
  },
  
  particle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.4)',
    pointerEvents: 'none',
    filter: 'blur(1px)',
  },
  
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '2rem',
    position: 'relative',
    zIndex: 1,
  },
  
  heroSection: {
    textAlign: 'center',
    marginBottom: '4rem',
    padding: '2rem 0',
  },
  
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  
  mainHeading: {
    fontSize: '3.5rem',
    fontWeight: '800',
    color: 'white',
    marginBottom: '1rem',
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    lineHeight: '1.2',
  },
  
  gradientText: {
    background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffd93d, #ff6b6b)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 3s ease-in-out infinite',
  },
  
  heroSubtext: {
    fontSize: '1.3rem',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto',
  },
  
  selectionSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  },
  
  selectCard: {
    flex: 1,
    minWidth: '300px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
  
  selectHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  
  selectNumber: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    fontWeight: '700',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
  },
  
  selectTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'white',
    margin: 0,
  },
  
  customSelectWrapper: {
    position: 'relative',
  },
  
  customSelect: {
    width: '100%',
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    appearance: 'none',
  },
  
  vsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    minWidth: '100px',
  },
  
  vsCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #f093fb, #f5576c)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 30px rgba(240, 147, 251, 0.4)',
    animation: 'pulse 2s ease-in-out infinite',
  },
  
  vsText: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'white',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  
  vsLine: {
    width: '2px',
    height: '100px',
    background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.5), transparent)',
  },
  
  winnerBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: 'rgba(16, 185, 129, 0.2)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    padding: '1.5rem 2rem',
    marginBottom: '3rem',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)',
  },
  
  winnerIcon: {
    fontSize: '2.5rem',
  },
  
  winnerTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 0.5rem 0',
  },
  
  winnerSubtext: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0,
  },
  
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginBottom: '2rem',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  
  cardsSection: {
    marginBottom: '4rem',
  },
  
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '2rem',
  },
  
  cardWrapper: {
    width: '100%',
  },
  
  headToHeadSection: {
    marginBottom: '4rem',
  },
  
  battleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '1.5rem',
  },
  
  battleCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
  },
  
  battleHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  
  battleIcon: {
    fontSize: '1.5rem',
  },
  
  battleMetric: {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: 'white',
    margin: 0,
  },
  
  battleScores: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  
  battleScore: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
  },
  
  battleAreaName: {
    fontSize: '0.9rem',
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  
  battleScoreValue: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  
  battleVs: {
    fontSize: '0.8rem',
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '500',
  },
  
  battleWinner: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#10B981',
    fontWeight: '600',
    background: 'rgba(16, 185, 129, 0.1)',
    padding: '0.5rem',
    borderRadius: '8px',
  },
  
  battleTie: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#F59E0B',
    fontWeight: '600',
    background: 'rgba(245, 158, 11, 0.1)',
    padding: '0.5rem',
    borderRadius: '8px',
  },
  
  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
    color: 'white',
  },
  
  emptyIcon: {
    fontSize: '4rem',
    marginBottom: '1rem',
  },
  
  emptyTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  
  emptyText: {
    fontSize: '1.1rem',
    color: 'rgba(255, 255, 255, 0.8)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
};

// Add CSS animations
const animationCSS = `
  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-20px) scale(1.05); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  
  .compare-select:focus {
    border-color: rgba(255, 255, 255, 0.6) !important;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2) !important;
    background: rgba(255, 255, 255, 0.2) !important;
  }
  
  .compare-select option {
    background: #1f2937;
    color: white;
  }
  
  .battle-card:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2) !important;
    background: rgba(255, 255, 255, 0.15) !important;
  }
`;

// Inject CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationCSS;
  document.head.appendChild(style);
}

export default CompareAreas;
