// function AboutPage() {
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>About NeighborFit 🏘️</h2>
//       <p style={styles.text}>
//         NeighborFit is a smart neighborhood-matching platform built to help you find the perfect place to live in Delhi. 
//         We combine real-time open-data sources, safety scores, affordability insights, and local reviews to recommend communities that suit your lifestyle.
//       </p>
//       <p style={styles.text}>
//         Whether you're seeking lush parks, metro connectivity, buzzing markets, or quiet, family-friendly streets — 
//         NeighborFit brings it all together for you in one place.
//       </p>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "900px",
//     margin: "3rem auto",
//     padding: "2rem",
//     fontFamily: "Arial, sans-serif",
//     lineHeight: "1.7",
//     color: "#334155",
//   },
//   heading: {
//     fontSize: "2.5rem",
//     fontWeight: "700",
//     marginBottom: "1.5rem",
//   },
//   text: {
//     fontSize: "1.1rem",
//     marginBottom: "1rem",
//   },
// };

// export default AboutPage;

function AboutPage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <h2 style={styles.heading}>About NeighborFit 🏘️</h2>
        <p style={styles.text}>
          NeighborFit is a smart neighborhood-matching platform built to help you find the perfect place to live in Delhi.
          We combine real-time open-data sources, safety scores, affordability insights, and local reviews to recommend communities that suit your lifestyle.
        </p>
        <p style={styles.text}>
          Whether you're seeking lush parks, metro connectivity, buzzing markets, or quiet, family-friendly streets —
          NeighborFit brings it all together for you in one place.
        </p>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1740&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)", // dark overlay for readability
    zIndex: 1,
  },
  container: {
    maxWidth: "900px",
    padding: "2.5rem",
    fontFamily: "Poppins, sans-serif",
    lineHeight: "1.8",
    color: "#f1f5f9",
    textAlign: "center",
    zIndex: 2,
    position: "relative",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "800",
    marginBottom: "1.5rem",
  },
  text: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
  },
};

export default AboutPage;

