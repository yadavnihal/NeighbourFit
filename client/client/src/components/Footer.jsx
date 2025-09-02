function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          {/* Brand Section */}
          <div style={styles.brandSection}>
            <h3 style={styles.brandName}>NeighborFit 🏘️</h3>
            <p style={styles.brandDescription}>
              AI-powered neighborhood discovery platform for Delhi residents. 
              Find your perfect home with data-driven insights.
            </p>
            <div style={styles.socialLinks}>
              <span style={styles.socialIcon}>📧</span>
              <span style={styles.socialIcon}>🐦</span>
              <span style={styles.socialIcon}>📱</span>
              <span style={styles.socialIcon}>💼</span>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.linkSection}>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <div style={styles.linkGroup}>
              <a href="/" style={styles.link}>Home</a>
              <a href="/about" style={styles.link}>About</a>
              <a href="/areas" style={styles.link}>Areas</a>
              <a href="/compare" style={styles.link}>Compare</a>
            </div>
          </div>

          {/* Resources */}
          <div style={styles.linkSection}>
            <h4 style={styles.sectionTitle}>Resources</h4>
            <div style={styles.linkGroup}>
              <a href="/blog" style={styles.link}>Blog</a>
              <a href="/guide" style={styles.link}>Area Guide</a>
              <a href="/faq" style={styles.link}>FAQ</a>
              <a href="/contact" style={styles.link}>Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div style={styles.linkSection}>
            <h4 style={styles.sectionTitle}>Get in Touch</h4>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>📍</span>
                <span style={styles.contactText}>Delhi, India</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>�</span>
                <span style={styles.contactText}>hello@neighborfit.com</span>
              </div>
              <div style={styles.contactItem}>
                <span style={styles.contactIcon}>🌐</span>
                <span style={styles.contactText}>www.neighborfit.com</span>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.bottomSection}>
          <p style={styles.credit}>
            © {new Date().getFullYear()} NeighborFit. All rights reserved. 
            <span style={styles.developer}> • Developed with ❤️ Nihal Yadav</span>
          </p>
          <div style={styles.legalLinks}>
            <a href="/privacy" style={styles.legalLink}>Privacy Policy</a>
            <a href="/terms" style={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1e293b",
    color: "#e2e8f0",
    fontFamily: "'Poppins', sans-serif",
    marginTop: "0"
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "3rem 2rem 1rem"
  },
  footerContent: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
    gap: "3rem",
    marginBottom: "2rem"
  },
  brandSection: {
    maxWidth: "350px"
  },
  brandName: {
    fontSize: "1.75rem",
    fontWeight: "800",
    color: "#fff",
    margin: "0 0 1rem 0"
  },
  brandDescription: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#94a3b8",
    marginBottom: "1.5rem"
  },
  socialLinks: {
    display: "flex",
    gap: "1rem"
  },
  socialIcon: {
    fontSize: "1.25rem",
    padding: "0.5rem",
    backgroundColor: "#334155",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  linkSection: {
    minWidth: "150px"
  },
  sectionTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    color: "#fff",
    margin: "0 0 1rem 0"
  },
  linkGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  link: {
    textDecoration: "none",
    color: "#94a3b8",
    fontSize: "0.95rem",
    fontWeight: "400",
    transition: "color 0.3s ease",
    cursor: "pointer"
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem"
  },
  contactIcon: {
    fontSize: "1rem",
    minWidth: "20px"
  },
  contactText: {
    fontSize: "0.95rem",
    color: "#94a3b8"
  },
  divider: {
    height: "1px",
    backgroundColor: "#334155",
    margin: "2rem 0 1.5rem"
  },
  bottomSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem"
  },
  credit: {
    fontSize: "0.9rem",
    color: "#64748b",
    margin: 0
  },
  developer: {
    color: "#94a3b8"
  },
  legalLinks: {
    display: "flex",
    gap: "1.5rem"
  },
  legalLink: {
    textDecoration: "none",
    color: "#64748b",
    fontSize: "0.9rem",
    transition: "color 0.3s ease"
  }
};

export default Footer;
