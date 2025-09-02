
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function ContactPage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <h2 style={styles.heading}> Contact Me</h2>
        <p style={styles.text}>
          Got a question, feedback, or collaboration idea? I'd love to hear from you!
        </p>

        <div style={styles.contactLinks}>
          <a
            href="https://github.com/yadavnihal/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FaGithub style={styles.icon} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nihal-yadav-cse/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FaLinkedin style={styles.icon} /> LinkedIn
          </a>

          <a
            href="mailto:yadav.nihal103@gmail.com"
            style={styles.link}
          >
            <FaEnvelope style={styles.icon} /> Email
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url("https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1740&q=80")`,
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
    backgroundColor: "rgba(0,0,0,0.45)",
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
    marginBottom: "2.5rem",
  },
  contactLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2.5rem",
    justifyContent: "center",
  },
  link: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.3rem",
    color: "#38bdf8",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  icon: {
    marginRight: "0.7rem",
    fontSize: "2.7rem",
  },
};

export default ContactPage;
