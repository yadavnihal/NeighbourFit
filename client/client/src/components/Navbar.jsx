import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav style={{
      ...styles.nav,
      ...(isScrolled ? styles.scrolled : {}),
    }}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoIcon}>🏡</span>
          <span style={styles.logoText}>NeighborFit</span>
        </Link>

        {/* Desktop Menu */}
        <div style={styles.desktopLinks}>
          <Link to="/" style={styles.navLink}>
            <span style={styles.linkIcon}>🏠</span>
            Home
          </Link>
          <Link to="/areas" style={styles.navLink}>
            <span style={styles.linkIcon}>🏙️</span>
            Areas
          </Link>
          <Link to="/compare" style={styles.navLink}>
            <span style={styles.linkIcon}>⚖️</span>
            Compare
          </Link>
          <Link to="/map" style={styles.navLink}>
            <span style={styles.linkIcon}>🗺️</span>
            Map
          </Link>
          {userId ? (
            <>
              <Link to="/dashboard" style={styles.navLink}>
                <span style={styles.linkIcon}>📊</span>
                Areas
              </Link>
              <button onClick={handleLogout} style={styles.logoutButton}>
                <span style={styles.linkIcon}>🚪</span>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.loginButton}>
                <span style={styles.linkIcon}>👤</span>
                Login
              </Link>
              <Link to="/signup" style={styles.signupButton}>
                <span style={styles.linkIcon}>✨</span>
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          style={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span style={{
            ...styles.hamburger,
            ...(isMobileMenuOpen ? styles.hamburgerOpen : {})
          }}>☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
            <span style={styles.linkIcon}>🏠</span>
            Home
          </Link>
          <Link to="/areas" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
            <span style={styles.linkIcon}>🏙️</span>
            Areas
          </Link>
          <Link to="/compare" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
            <span style={styles.linkIcon}>⚖️</span>
            Compare
          </Link>
          <Link to="/map" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
            <span style={styles.linkIcon}>🗺️</span>
            Map
          </Link>
          {userId ? (
            <>
              <Link to="/dashboard" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span style={styles.linkIcon}>📊</span>
                Areas
              </Link>
              <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} style={styles.mobileLogoutButton}>
                <span style={styles.linkIcon}>🚪</span>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span style={styles.linkIcon}>👤</span>
                Login
              </Link>
              <Link to="/signup" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>
                <span style={styles.linkIcon}>✨</span>
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  scrolled: {
    background: "rgba(255, 255, 255, 0.98)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    color: "#1e293b",
    fontWeight: "700",
    fontSize: "1.5rem",
    transition: "transform 0.3s ease",
  },
  logoIcon: {
    fontSize: "2rem",
    animation: "bounce 2s infinite",
  },
  logoText: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  desktopLinks: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    padding: "0.75rem 1.25rem",
    color: "#64748b",
    borderRadius: "12px",
    fontSize: "0.95rem",
    fontWeight: "500",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
  },
  linkIcon: {
    fontSize: "1.1rem",
    transition: "transform 0.3s ease",
  },
  loginButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    padding: "0.75rem 1.5rem",
    color: "#667eea",
    border: "2px solid #667eea",
    borderRadius: "12px",
    fontSize: "0.95rem",
    fontWeight: "600",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
  },
  signupButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    textDecoration: "none",
    padding: "0.75rem 1.5rem",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "0.95rem",
    fontWeight: "600",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    position: "relative",
    overflow: "hidden",
  },
  logoutButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "0.95rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 4px 15px rgba(239, 68, 68, 0.4)",
  },
  mobileMenuButton: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  },
  hamburger: {
    display: "block",
    transition: "transform 0.3s ease",
  },
  hamburgerOpen: {
    transform: "rotate(90deg)",
  },
  mobileMenu: {
    display: "none",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "1rem 2rem",
    background: "rgba(255, 255, 255, 0.98)",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    animation: "slideDown 0.3s ease",
  },
  mobileLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    textDecoration: "none",
    padding: "1rem",
    color: "#64748b",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
  mobileLogoutButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem",
    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "left",
  },
};

export default Navbar;

