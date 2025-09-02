// function LivabilityMetrics() {
//   return (
//     <div style={styles.container}>
//       <img
//         src="/images/home-livability.jpg"
//         alt="Neighborhood Metrics"
//         style={styles.image}
//       />
//     </div>
//   );
// }


// const styles = {
//   container: {
//     maxWidth: "1200px",
//     margin: "2rem auto",
//     padding: "0 1rem",
//   },
//   image: {
//     width: "100%",
//     borderRadius: "16px",
//     objectFit: "cover",
//     boxShadow: "0 6px 20px rgba(0, 0, 0, 0.08)",
//     transition: "transform 0.3s ease",
//   },
// };


// export default LivabilityMetrics;


import React from "react";
import {
  FaBus,
  FaMoneyBillWave,
  FaGavel,
  FaBriefcase,
  FaHeartbeat,
  FaHome,
  FaSchool,
  FaStar,
} from "react-icons/fa";
import { MdOutlineGroups, MdOutlineThumbUp } from "react-icons/md";

function LivabilityMetrics() {
  const metrics = [
    { 
      icon: <MdOutlineThumbUp size={40} />, 
      label: "Livability",
      description: "Overall quality of life score",
      color: "#10b981"
    },
    { 
      icon: <MdOutlineGroups size={40} />, 
      label: "Amenities",
      description: "Local facilities & services",
      color: "#3b82f6"
    },
    { 
      icon: <FaBus size={40} />, 
      label: "Commute",
      description: "Transportation accessibility",
      color: "#8b5cf6"
    },
    { 
      icon: <FaMoneyBillWave size={40} />, 
      label: "Cost of Living",
      description: "Affordability index",
      color: "#f59e0b"
    },
    { 
      icon: <FaGavel size={40} />, 
      label: "Crime",
      description: "Safety & security metrics",
      color: "#ef4444"
    },
    { 
      icon: <FaBriefcase size={40} />, 
      label: "Employment",
      description: "Job opportunities nearby",
      color: "#06b6d4"
    },
    { 
      icon: <FaHeartbeat size={40} />, 
      label: "Health & Safety",
      description: "Healthcare access",
      color: "#ec4899"
    },
    { 
      icon: <FaHome size={40} />, 
      label: "Housing",
      description: "Property market insights",
      color: "#84cc16"
    },
    { 
      icon: <FaSchool size={40} />, 
      label: "Schools",
      description: "Education quality ratings",
      color: "#6366f1"
    },
    { 
      icon: <FaStar size={40} />, 
      label: "User Ratings",
      description: "Community reviews",
      color: "#f97316"
    },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.headerSection}>
          <div style={styles.sectionBadge}>
            <span style={styles.badgeText}>📊 Data-Driven Insights</span>
          </div>
          <h2 style={styles.heading}>
            Comprehensive 
            <span style={styles.gradientText}> Neighborhood </span>
            Analytics
          </h2>
          <p style={styles.subheading}>
            We analyze 10+ key factors to give you the most accurate picture of each neighborhood, 
            helping you make informed decisions about where to live.
          </p>
        </div>

        <div style={styles.grid}>
          {metrics.map((item, index) => (
            <div key={index} style={{...styles.card, '--card-color': item.color}} className="metric-card">
              <div style={{...styles.iconContainer, backgroundColor: `${item.color}15`}}>
                <div style={{...styles.icon, color: item.color}}>{item.icon}</div>
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.label}>{item.label}</h3>
                <p style={styles.description}>{item.description}</p>
              </div>
              <div style={styles.cardHover}></div>
            </div>
          ))}
        </div>

        <div style={styles.bottomSection}>
          <div style={styles.trustIndicators}>
            <div style={styles.trustItem}>
              <span style={styles.trustIcon}>🔍</span>
              <span style={styles.trustText}>Real-time Data</span>
            </div>
            <div style={styles.trustItem}>
              <span style={styles.trustIcon}>🤖</span>
              <span style={styles.trustText}>AI-Powered Analysis</span>
            </div>
            <div style={styles.trustItem}>
              <span style={styles.trustIcon}>📈</span>
              <span style={styles.trustText}>Updated Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// const styles = {
//   wrapper: {
//     maxWidth: "1100px",
//     margin: "3rem auto",
//     padding: "2rem",
//     fontFamily: "Poppins, sans-serif",
//     textAlign: "center",
//   },
//   heading: {
//     fontSize: "2.5rem",
//     fontWeight: "800",
//     marginBottom: "2.5rem",
//     color: "#0f172a",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
//     gap: "2.5rem",
//   },
//   card: {
//     backgroundColor: "#f1f5f9",
//     borderRadius: "14px",
//     padding: "1.5rem",
//     boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
//     transition: "all 0.3s ease",
//   },
//   icon: {
//     marginBottom: "1rem",
//     color: "#334155",
//   },
//   label: {
//     fontSize: "1.05rem",
//     fontWeight: "600",
//     color: "#334155",
//   },
// };
const styles = {
  wrapper: {
    backgroundColor: "#f8fafc",
    padding: "5rem 0",
    position: "relative"
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 2rem",
    fontFamily: "Poppins, sans-serif"
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "4rem"
  },
  sectionBadge: {
    display: "inline-block",
    backgroundColor: "#fff",
    borderRadius: "50px",
    padding: "0.5rem 1.5rem",
    marginBottom: "2rem",
    border: "1px solid #e2e8f0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
  },
  badgeText: {
    color: "#475569",
    fontSize: "0.9rem",
    fontWeight: "500"
  },
  heading: {
    fontSize: "3.5rem",
    fontWeight: "800",
    marginBottom: "1.5rem",
    color: "#0f172a",
    lineHeight: "1.1"
  },
  gradientText: {
    background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  },
  subheading: {
    fontSize: "1.25rem",
    color: "#64748b",
    lineHeight: "1.6",
    maxWidth: "700px",
    margin: "0 auto"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginBottom: "4rem"
  },
  card: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "2rem",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
    border: "1px solid #f1f5f9",
    transition: "all 0.3s ease",
    cursor: "pointer",
    overflow: "hidden"
  },
  iconContainer: {
    width: "70px",
    height: "70px",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.5rem"
  },
  icon: {
    fontSize: "2rem"
  },
  cardContent: {
    position: "relative",
    zIndex: 2
  },
  label: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: "0 0 0.5rem 0"
  },
  description: {
    fontSize: "0.95rem",
    color: "#64748b",
    margin: 0,
    lineHeight: "1.5"
  },
  cardHover: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    pointerEvents: "none"
  },
  bottomSection: {
    textAlign: "center"
  },
  trustIndicators: {
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    flexWrap: "wrap"
  },
  trustItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "1rem 1.5rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
  },
  trustIcon: {
    fontSize: "1.25rem"
  },
  trustText: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#475569"
  }
};


export default LivabilityMetrics;
