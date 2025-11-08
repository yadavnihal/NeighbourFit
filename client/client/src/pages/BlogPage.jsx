function BlogPage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <h2 style={styles.heading}>📝 NeighborFit Blog</h2>
        <p style={styles.subheading}>Stories, insights & guides for urban living in Delhi</p>

        <div style={styles.blogPost}>
          <h3 style={styles.blogTitle}>🌆 The Rapid Rise of Delhi: From Walled City to Global Metropolis</h3>
          <p style={styles.blogText}>
            Over the last two decades, Delhi has transformed from a historically rich, culturally diverse city into a booming global capital. 
            What was once a cluster of ancient monuments and bustling old markets now stands as one of India’s most dynamic urban centers — 
            home to luxury high-rises, world-class hospitals, metro corridors, and an ever-growing ecosystem of startups and IT parks.
          </p>
          <p style={styles.blogText}>
            Neighborhoods like Vasant Kunj, Saket, and Dwarka have witnessed meteoric real estate growth, driven by infrastructure upgrades, 
            green parks, schools, malls, and connectivity improvements. With the Delhi Metro covering over 390 km and counting, 
            commute times have halved for many residents.
          </p>
          <p style={styles.blogText}>
            The city continues to attract talent from across the country, offering a unique blend of heritage sites, 
            modern amenities, and vibrant culture. The future? A smarter, greener, more connected Delhi that balances 
            tradition with innovation.
          </p>
        </div>

        <p style={styles.comingSoon}>🚀 More community stories and smart city insights coming soon!</p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url("https://images.unsplash.com/photo-1554197590-b34a59f7747e?auto=format&fit=crop&w=1740&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 1rem",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  container: {
    maxWidth: "900px",
    padding: "2.5rem",
    fontFamily: "Poppins, sans-serif",
    lineHeight: "1.8",
    color: "#f1f5f9",
    zIndex: 2,
    position: "relative",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#e2e8f0",
    textAlign: "center",
    marginBottom: "2rem",
  },
  blogPost: {
    backgroundColor: "rgba(255,255,255,0.07)",
    padding: "2rem",
    borderRadius: "12px",
    marginBottom: "2rem",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  },
  blogTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#38bdf8",
  },
  blogText: {
    fontSize: "1.15rem",
    marginBottom: "1rem",
    color: "#f8fafc",
  },
  comingSoon: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginTop: "2rem",
    color: "#fbbf24",
  },
};

export default BlogPage;
