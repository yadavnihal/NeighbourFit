

// import { Link } from "react-router-dom";

// function LivabilityMetrics() {
//   const areas = [
//     { name: "Vasant Kunj", score: 87 },
//     { name: "Greater Kailash", score: 87 },
//     { name: "South Extension", score: 86 },
//     { name: "Defence Colony", score: 86 },
//     { name: "Hauz Khas", score: 86 },
//     { name: "Dwarka", score: 85 },
//     { name: "Janakpuri", score: 85 },
//     { name: "Pitampura", score: 84 },
//     { name: "Rohini", score: 84 },
//     { name: "Rajouri Garden", score: 85 },
//     { name: "Lajpat Nagar", score: 83 },
//     { name: "Karol Bagh", score: 83 },
//     { name: "Saket", score: 85 },
//     { name: "Mayur Vihar", score: 83 },
//     { name: "Shahdara", score: 81 },
//   ];

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>🏙️ Livability Metrics</h2>
//       <div style={styles.grid}>
//         {areas.map((area, index) => (
//           <Link
//             key={index}
//             to={`/areas/${encodeURIComponent(area.name)}`}
//             style={{ textDecoration: "none", color: "inherit" }}
//           >
//             <div style={styles.card}>
//               <div style={styles.icon}>🏠</div>
//               <h3 style={styles.name}>{area.name}</h3>
//               <div style={styles.badge}>Livability {area.score}</div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: "2.5rem 1rem",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     fontFamily: "'Poppins', sans-serif",
//   },
//   heading: {
//     fontSize: "2rem",
//     marginBottom: "2rem",
//     textAlign: "center",
//     fontWeight: "600",
//     color: "#111827",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//     gap: "1.8rem",
//   },
//   card: {
//     backgroundColor: "#f9fafb",
//     padding: "1.2rem",
//     borderRadius: "14px",
//     textAlign: "center",
//     boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
//     cursor: "pointer",
//     transition: "transform 0.25s, box-shadow 0.25s",
//   },
//   icon: {
//     fontSize: "2.2rem",
//     marginBottom: "0.7rem",
//   },
//   name: {
//     fontSize: "1.1rem",
//     margin: "0.7rem 0",
//     fontWeight: "500",
//     color: "#1f2937",
//   },
//   badge: {
//     backgroundColor: "#3b82f6",
//     color: "#fff",
//     padding: "0.35rem 0.8rem",
//     borderRadius: "6px",
//     display: "inline-block",
//     fontSize: "0.9rem",
//     marginTop: "0.5rem",
//   },
// };

// export default LivabilityMetrics;


import { Link } from "react-router-dom";
import { FaCity, FaBuilding } from "react-icons/fa";

function LivabilityMetrics() {
  const areas = [
    { name: "Vasant Kunj", score: 87 },
    { name: "Greater Kailash", score: 87 },
    { name: "South Extension", score: 86 },
    { name: "Defence Colony", score: 86 },
    { name: "Hauz Khas", score: 86 },
    { name: "Dwarka", score: 85 },
    { name: "Janakpuri", score: 85 },
    { name: "Pitampura", score: 84 },
    { name: "Rohini", score: 84 },
    { name: "Rajouri Garden", score: 85 },
    { name: "Lajpat Nagar", score: 83 },
    { name: "Karol Bagh", score: 83 },
    { name: "Saket", score: 85 },
    { name: "Mayur Vihar", score: 83 },
    { name: "Shahdara", score: 81 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🌆 Livability Metrics</h2>
      <div style={styles.grid}>
        {areas.map((area, index) => (
          <Link
            key={index}
            to={`/areas/${encodeURIComponent(area.name)}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={styles.card}>
              <div style={styles.icon}>
                {index % 2 === 0 ? <FaCity size={40} /> : <FaBuilding size={40} />}
              </div>
              <h3 style={styles.name}>{area.name}</h3>
              <div style={styles.badge}>Livability: {area.score}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "3rem 1rem",
    maxWidth: "1300px",
    margin: "0 auto",
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    fontSize: "2.8rem",
    marginBottom: "2.5rem",
    textAlign: "center",
    fontWeight: "800",
    color: "#0f172a",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "2rem",
  },
  card: {
    backgroundColor: "#f1f5f9",
    padding: "2rem",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  icon: {
    marginBottom: "1rem",
    color: "#3b82f6",
  },
  name: {
    fontSize: "1.3rem",
    margin: "1rem 0 0.6rem",
    fontWeight: "600",
    color: "#1f2937",
  },
  badge: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    display: "inline-block",
    fontSize: "1rem",
    marginTop: "0.8rem",
  },
};

export default LivabilityMetrics;
