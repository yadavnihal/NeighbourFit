function CTASection() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.background}></div>
      <div style={styles.container}>
        <div style={styles.content}>
          <h2 style={styles.heading}>
            Ready to Find Your
            <span style={styles.gradientText}> Perfect Neighborhood?</span>
          </h2>
          <p style={styles.description}>
            Join thousands of Delhi residents who have found their ideal home using our 
            AI-powered neighborhood matching platform. Start your journey today.
          </p>
          
          <div style={styles.buttonGroup}>
            <button style={styles.primaryButton}>
              Get Started Now
              <span style={styles.buttonIcon}>🚀</span>
            </button>
            <button style={styles.secondaryButton}>
              Learn More
            </button>
          </div>

          <div style={styles.features}>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>✅</span>
              <span style={styles.featureText}>Free to use</span>
            </div>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>⚡</span>
              <span style={styles.featureText}>Instant results</span>
            </div>
            <div style={styles.feature}>
              <span style={styles.featureIcon}>🔒</span>
              <span style={styles.featureText}>Privacy protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    padding: "5rem 0",
    overflow: "hidden",
    background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
    `,
    zIndex: 1
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 2rem",
    textAlign: "center",
    position: "relative",
    zIndex: 2
  },
  content: {
    fontFamily: "Poppins, sans-serif"
  },
  heading: {
    fontSize: "3.5rem",
    fontWeight: "800",
    lineHeight: "1.1",
    color: "#fff",
    marginBottom: "1.5rem"
  },
  gradientText: {
    background: "linear-gradient(45deg, #60a5fa 0%, #a78bfa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  },
  description: {
    fontSize: "1.25rem",
    lineHeight: "1.6",
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: "3rem",
    maxWidth: "600px",
    margin: "0 auto 3rem auto"
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem",
    flexWrap: "wrap"
  },
  primaryButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "1.25rem 2.5rem",
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)"
  },
  secondaryButton: {
    padding: "1.25rem 2.5rem",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)"
  },
  buttonIcon: {
    fontSize: "1rem"
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap"
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  },
  featureIcon: {
    fontSize: "1rem"
  },
  featureText: {
    fontSize: "0.95rem",
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: "500"
  }
};

export default CTASection;
