import React from "react";

function LivabilityBreakdown({ metrics, areaName }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🏡 {areaName} — Livability Breakdown</h2>
      <div style={styles.metricList}>
        {metrics.map((metric, index) => (
          <div key={index} style={styles.metricItem}>
            <span style={styles.icon}>{metric.icon}</span>
            <span style={styles.name}>{metric.name}</span>
            <div style={styles.scoreBadge}>{metric.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "1rem",
    backgroundColor: "#f8fafc",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#111"
  },
  metricList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.9rem"
  },
  metricItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "0.7rem 1rem",
    borderRadius: "8px",
    border: "1px solid #e2e8f0"
  },
  icon: {
    fontSize: "1.3rem"
  },
  name: {
    flex: "1",
    marginLeft: "0.9rem",
    fontSize: "1rem",
    color: "#333"
  },
  scoreBadge: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    borderRadius: "50%",
    width: "38px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: "0.95rem"
  }
};


export default LivabilityBreakdown;
