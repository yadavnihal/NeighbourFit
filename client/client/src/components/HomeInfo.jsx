import { useState, useEffect } from "react";

// Add CSS keyframes for the animated gradient
const gradientAnimation = `
  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`;

// Inject the CSS into the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = gradientAnimation;
  document.head.appendChild(style);
}

function HomeInfo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.heroBackground}></div>
      <div style={{
        ...styles.container,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {/* Hero Content */}
        <div style={styles.heroContent}>
          <div style={{
            ...styles.badge,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            <span style={styles.badgeText}>🚀 Nihal Neighborhood Discovery</span>
          </div>
          <h1 style={{
            ...styles.mainHeading,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}>
            Find Your Perfect
            <span style={styles.gradientText}> Neighborhood </span>
            in Delhi
          </h1>
          <p style={{
            ...styles.heroSubtext,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
          }}>
            Discover communities that perfectly align with your lifestyle through smart data insights, 
            safety scores, and personalized recommendations powered by real-time analytics.
          </p>
          
          <div style={{
            ...styles.featureGrid,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
          }}>
            <div 
              style={styles.featureCard}
              className="feature-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={styles.featureIcon} className="feature-icon">🏙️</div>
              <div>
                <h3 style={styles.featureTitle}>Real-time Insights</h3>
                <p style={styles.featureDesc}>Live neighborhood data & trends</p>
              </div>
            </div>
            <div 
              style={styles.featureCard}
              className="feature-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={styles.featureIcon} className="feature-icon">💡</div>
              <div>
                <h3 style={styles.featureTitle}>Smart Matching</h3>
                <p style={styles.featureDesc}>AI-powered lifestyle alignment</p>
              </div>
            </div>
            <div 
              style={styles.featureCard}
              className="feature-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={styles.featureIcon} className="feature-icon">📊</div>
              <div>
                <h3 style={styles.featureTitle}>Safety Scores</h3>
                <p style={styles.featureDesc}>Comprehensive safety analytics</p>
              </div>
            </div>
            <div 
              style={styles.featureCard}
              className="feature-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={styles.featureIcon} className="feature-icon">🌐</div>
              <div>
                <h3 style={styles.featureTitle}>Local Reviews</h3>
                <p style={styles.featureDesc}>Community-driven insights</p>
              </div>
            </div>
          </div>

          <div style={{
            ...styles.ctaSection,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
          }}>
            <button 
              style={{...styles.primaryButton}}
              className="primary-button"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
            >
              Discover Your Neighborhood
              <span style={styles.buttonIcon}>→</span>
            </button>
            <button 
              style={{...styles.secondaryButton}}
              className="secondary-button"
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'transparent';
              }}
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div style={{
          ...styles.heroImageSection,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
        }}>
          <div style={styles.imageContainer}>
            <img src="/images/img1.jpg" alt="Delhi Neighborhoods" style={styles.heroImage} />
            <div style={styles.floatingCard}>
              <div style={styles.cardIcon}>📍</div>
              <div>
                <div style={styles.cardTitle}>15+ Areas</div>
                <div style={styles.cardSubtitle}>Analyzed & Rated</div>
              </div>
            </div>
            <div style={styles.floatingCard2}>
              <div style={styles.cardIcon}>⭐</div>
              <div>
                <div style={styles.cardTitle}>98% Accuracy</div>
                <div style={styles.cardSubtitle}>Match Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const styles = {
//   wrapper: {
//     padding: "3rem 2rem",
//     backgroundColor: "#f9f9f9"
//   },
//   container: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     gap: "2rem",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     flexWrap: "wrap"
//   },
//   textSection: {
//     flex: "1 1 50%",
//     fontFamily: "Arial, sans-serif"
//   },
//   heading: {
//     fontSize: "2.2rem",
//     fontWeight: "700",
//     marginBottom: "1rem"
//   },
//   text: {
//     fontSize: "1.05rem",
//     lineHeight: "1.6",
//     marginBottom: "1rem"
//   },
//   list: {
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//     fontSize: "1rem",
//     lineHeight: "1.6"
//   },
//   imageSection: {
//     flex: "1 1 45%",
//     textAlign: "center"
//   },
//   mapImage: {
//     width: "100%",
//     maxWidth: "450px",
//     height: "auto",
//     borderRadius: "12px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
//   }
// };

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%)
    `,
    zIndex: 1,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "4rem",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "2rem",
    position: "relative",
    zIndex: 2,
    flexWrap: "wrap"
  },
  heroContent: {
    flex: "1 1 55%",
    minWidth: "500px"
  },
  badge: {
    display: "inline-block",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "50px",
    padding: "0.5rem 1.5rem",
    marginBottom: "2rem",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)"
  },
  badgeText: {
    color: "#fff",
    fontSize: "0.9rem",
    fontWeight: "500"
  },
  mainHeading: {
    fontSize: "4rem",
    fontWeight: "800",
    lineHeight: "1.1",
    color: "#fff",
    marginBottom: "1.5rem",
    textShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },
  gradientText: {
    background: "linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffd93d, #ff6b6b)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    animation: "shimmer 3s ease-in-out infinite",
    fontWeight: "900",
    textShadow: "0 0 30px rgba(255, 255, 255, 0.5)"
  },
  heroSubtext: {
    fontSize: "1.3rem",
    lineHeight: "1.6",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: "3rem",
    maxWidth: "500px"
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.5rem",
    marginBottom: "3rem"
  },
  featureCard: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  },
  featureIcon: {
    fontSize: "2rem",
    minWidth: "50px"
  },
  featureTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#fff",
    margin: "0 0 0.25rem 0"
  },
  featureDesc: {
    fontSize: "0.9rem",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 0
  },
  ctaSection: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    flexWrap: "wrap"
  },
  primaryButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "1rem 2rem",
    backgroundColor: "#fff",
    color: "#667eea",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
  },
  secondaryButton: {
    padding: "1rem 2rem",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)"
  },
  buttonIcon: {
    fontSize: "1.2rem",
    transition: "transform 0.3s ease"
  },
  heroImageSection: {
    flex: "1 1 40%",
    position: "relative",
    minWidth: "400px"
  },
  imageContainer: {
    position: "relative"
  },
  heroImage: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "24px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    border: "3px solid rgba(255, 255, 255, 0.2)"
  },
  floatingCard: {
    position: "absolute",
    top: "20px",
    right: "-20px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    animation: "float 3s ease-in-out infinite"
  },
  floatingCard2: {
    position: "absolute",
    bottom: "20px",
    left: "-20px",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.5rem",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
    animation: "float 3s ease-in-out infinite 1.5s"
  },
  cardIcon: {
    fontSize: "1.5rem"
  },
  cardTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: 0
  },
  cardSubtitle: {
    fontSize: "0.85rem",
    color: "#64748b",
    margin: 0
  }
};

export default HomeInfo;
