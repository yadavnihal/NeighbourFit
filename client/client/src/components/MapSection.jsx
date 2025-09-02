function MapSection() {
  const highlights = [
    { icon: "🌳", title: "Green Spaces", desc: "Parks & heritage monuments" },
    { icon: "🚇", title: "Metro Access", desc: "Seamless connectivity" },
    { icon: "🥘", title: "Food Culture", desc: "Street food to fine dining" },
    { icon: "🛍️", title: "Shopping", desc: "Markets & modern malls" },
    { icon: "🎭", title: "Arts & Culture", desc: "Museums & galleries" },
    { icon: "🏢", title: "Business Hubs", desc: "Corporate districts" }
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        {/* Left — Enhanced Content */}
        <div style={styles.contentSection}>
          <div style={styles.sectionBadge}>
            <span style={styles.badgeText}>🏙️ Explore Delhi</span>
          </div>
          
          <h2 style={styles.heading}>
            Discover Delhi's Most 
            <span style={styles.accentText}> Livable </span>
            Neighborhoods
          </h2>
          
          <p style={styles.description}>
            From the historic charm of <strong>Old Delhi</strong> to the modern sophistication of 
            <strong> Gurgaon</strong>, discover neighborhoods that perfectly match your lifestyle, 
            career goals, and personal preferences.
          </p>

          <div style={styles.highlightGrid}>
            {highlights.map((item, index) => (
              <div key={index} style={styles.highlightCard}>
                <span style={styles.highlightIcon}>{item.icon}</span>
                <div>
                  <div style={styles.highlightTitle}>{item.title}</div>
                  <div style={styles.highlightDesc}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.statsRow}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>15+</div>
              <div style={styles.statLabel}>Areas Analyzed</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>10k+</div>
              <div style={styles.statLabel}>Data Points</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>95%</div>
              <div style={styles.statLabel}>Accuracy Rate</div>
            </div>
          </div>
        </div>

        {/* Right — Enhanced Image Section */}
        <div style={styles.imageSection}>
          <div style={styles.imageContainer}>
            <div style={styles.imageFrame}>
              <img src="/images/delhi1.jpg" alt="Delhi Neighborhoods Map" style={styles.mapImage} />
              <div style={styles.imageOverlay}>
                <div style={styles.overlayContent}>
                  <span style={styles.overlayIcon}>📍</span>
                  <span style={styles.overlayText}>Live Data</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div style={styles.floatingElement1}>
              <div style={styles.miniCard}>
                <span style={styles.miniIcon}>🏠</span>
                <div>
                  <div style={styles.miniTitle}>Hauz Khas</div>
                  <div style={styles.miniRating}>⭐ 4.8</div>
                </div>
              </div>
            </div>
            
            <div style={styles.floatingElement2}>
              <div style={styles.miniCard}>
                <span style={styles.miniIcon}>🌟</span>
                <div>
                  <div style={styles.miniTitle}>Dwarka</div>
                  <div style={styles.miniRating}>⭐ 4.6</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    padding: "5rem 0",
    position: "relative",
    overflow: "hidden"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 2rem",
    gap: "4rem",
    maxWidth: "1400px",
    margin: "0 auto",
    flexWrap: "wrap"
  },
  contentSection: {
    flex: "1 1 50%",
    minWidth: "500px"
  },
  sectionBadge: {
    display: "inline-block",
    backgroundColor: "#f1f5f9",
    borderRadius: "50px",
    padding: "0.5rem 1.5rem",
    marginBottom: "2rem",
    border: "1px solid #e2e8f0"
  },
  badgeText: {
    color: "#475569",
    fontSize: "0.9rem",
    fontWeight: "500"
  },
  heading: {
    fontSize: "3.5rem",
    fontWeight: "800",
    lineHeight: "1.1",
    color: "#1e293b",
    marginBottom: "1.5rem"
  },
  accentText: {
    background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    color: "#64748b",
    marginBottom: "3rem",
    maxWidth: "500px"
  },
  highlightGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
    marginBottom: "3rem"
  },
  highlightCard: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    transition: "all 0.3s ease"
  },
  highlightIcon: {
    fontSize: "1.5rem",
    minWidth: "40px"
  },
  highlightTitle: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 0.25rem 0"
  },
  highlightDesc: {
    fontSize: "0.85rem",
    color: "#64748b",
    margin: 0
  },
  statsRow: {
    display: "flex",
    gap: "2rem",
    alignItems: "center"
  },
  statItem: {
    textAlign: "center"
  },
  statNumber: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#667eea",
    margin: "0 0 0.25rem 0"
  },
  statLabel: {
    fontSize: "0.9rem",
    color: "#64748b",
    fontWeight: "500"
  },
  imageSection: {
    flex: "1 1 45%",
    position: "relative",
    minWidth: "400px"
  },
  imageContainer: {
    position: "relative"
  },
  imageFrame: {
    position: "relative",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  },
  mapImage: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
    transition: "transform 0.3s ease"
  },
  imageOverlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    padding: "0.75rem 1rem",
    backdropFilter: "blur(10px)"
  },
  overlayContent: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  },
  overlayIcon: {
    fontSize: "1rem"
  },
  overlayText: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#1e293b"
  },
  floatingElement1: {
    position: "absolute",
    top: "60px",
    right: "-10px",
    animation: "float 3s ease-in-out infinite"
  },
  floatingElement2: {
    position: "absolute",
    bottom: "60px",
    left: "-10px",
    animation: "float 3s ease-in-out infinite 1.5s"
  },
  miniCard: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255, 255, 255, 0.2)"
  },
  miniIcon: {
    fontSize: "1.25rem"
  },
  miniTitle: {
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#1e293b",
    margin: 0
  },
  miniRating: {
    fontSize: "0.8rem",
    color: "#64748b",
    margin: 0
  }
};

export default MapSection;
