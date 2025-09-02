import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  // Generate random particles for animation
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 60; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    
    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y > 100 ? -5 : particle.y + particle.speed * 0.08,
        x: particle.x + Math.sin(particle.y * 0.02) * 0.15,
      })));
    };

    const interval = setInterval(animateParticles, 60);
    return () => clearInterval(interval);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        localStorage.setItem("userId", data.userId);
        navigate(`/user/${data.userId}`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.pageContainer}>
      {/* Animated Background */}
      <div style={styles.backgroundContainer}>
        {/* Gradient Orbs */}
        <div style={styles.gradientOrb1}></div>
        <div style={styles.gradientOrb2}></div>
        <div style={styles.gradientOrb3}></div>
        <div style={styles.gradientOrb4}></div>
        
        {/* Moving Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}
        
        {/* Animated Waves */}
        <svg style={styles.waves} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            style={styles.waveAnimation}
          />
        </svg>
      </div>

      {/* Signup Form Container */}
      <div style={styles.container}>
        <div style={styles.logoSection}>
          <h1 style={styles.logo}>🏡 NeighborFit</h1>
        </div>
        
        <div style={styles.formCard}>
          <h2 style={styles.title}>Join Our Community!</h2>
          <p style={styles.subtitle}>Create your account to get started</p>
          
          <form style={styles.form} onSubmit={handleSignup}>
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>👤</span>
              <input
                type="text"
                placeholder="Enter your full name"
                style={styles.input}
                className="signup-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>📧</span>
              <input
                type="email"
                placeholder="Enter your email"
                style={styles.input}
                className="signup-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>🔒</span>
              <input
                type="password"
                placeholder="Create a password"
                style={styles.input}
                className="signup-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div style={styles.inputGroup}>
              <span style={styles.inputIcon}>🔐</span>
              <input
                type="password"
                placeholder="Confirm your password"
                style={styles.input}
                className="signup-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <button 
              type="submit" 
              style={{
                ...styles.button,
                opacity: isLoading ? 0.7 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
              className="signup-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <span style={styles.loadingSpinner}>🚀 Creating account...</span>
              ) : (
                <>
                  <span>Create Account</span>
                  <span style={styles.buttonIcon} className="button-icon">✨</span>
                </>
              )}
            </button>
          </form>
          
          <div style={styles.divider}>
            <span style={styles.dividerText}>or</span>
          </div>
          
          <p style={styles.footerText}>
            Already have an account?{" "}
            <a href="/login" style={styles.link} className="signup-link">Sign in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, #f093fb 0%, #6d0fcbff 50%, #4facfe 100%)',
    zIndex: -1,
  },
  
  gradientOrb1: {
    position: 'absolute',
    top: '-40%',
    left: '-40%',
    width: '80%',
    height: '80%',
    background: 'radial-gradient(circle, rgba(240, 147, 251, 0.4) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(50px)',
    animation: 'float 7s ease-in-out infinite',
  },
  
  gradientOrb2: {
    position: 'absolute',
    top: '10%',
    right: '-50%',
    width: '90%',
    height: '90%',
    background: 'radial-gradient(circle, rgba(79, 172, 254, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'float 9s ease-in-out infinite reverse',
  },
  
  gradientOrb3: {
    position: 'absolute',
    bottom: '-50%',
    left: '20%',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(197, 20, 225, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(70px)',
    animation: 'float 11s ease-in-out infinite',
  },
  
  gradientOrb4: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '60%',
    height: '60%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(40px)',
    animation: 'float 5s ease-in-out infinite',
    transform: 'translate(-50%, -50%)',
  },
  
  particle: {
    position: 'absolute',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.7)',
    pointerEvents: 'none',
    filter: 'blur(1px)',
  },
  
  waves: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '25%',
    opacity: 0.2,
    transform: 'rotate(180deg)',
  },
  
  waveAnimation: {
    fill: 'rgba(255, 255, 255, 0.15)',
    animation: 'wave 5s ease-in-out infinite',
  },
  
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    zIndex: 1,
    position: 'relative',
  },
  
  logoSection: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  
  logo: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'white',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    margin: 0,
  },
  
  formCard: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(25px)',
    borderRadius: '24px',
    padding: '3rem 2.5rem',
    border: '1px solid rgba(255, 255, 255, 0.25)',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    minWidth: '420px',
    maxWidth: '480px',
    textAlign: 'center',
  },
  
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'white',
    marginBottom: '0.5rem',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  
  subtitle: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: '2rem',
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  
  inputGroup: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  
  inputIcon: {
    position: 'absolute',
    left: '1rem',
    fontSize: '1.2rem',
    zIndex: 2,
  },
  
  input: {
    width: '100%',
    padding: '1rem 1rem 1rem 3rem',
    fontSize: '1rem',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  },
  
  button: {
    width: '100%',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 25px rgba(240, 147, 251, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
  },
  
  buttonIcon: {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
  },
  
  loadingSpinner: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  
  divider: {
    position: 'relative',
    margin: '1.5rem 0',
    textAlign: 'center',
  },
  
  dividerText: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.9rem',
    border: '1px solid rgba(255, 255, 255, 0.25)',
  },
  
  footerText: {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: '0.95rem',
    margin: 0,
  },
  
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
    transition: 'all 0.3s ease',
  },
};

// Add CSS animations
const animationCSS = `
  @keyframes float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-30px) scale(1.1); }
  }
  
  @keyframes wave {
    0%, 100% { transform: translateX(0) rotate(180deg); }
    50% { transform: translateX(-25px) rotate(180deg); }
  }
  
  .signup-input:focus {
    border-color: rgba(255, 255, 255, 0.7) !important;
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.3) !important;
    background: rgba(255, 255, 255, 0.2) !important;
  }
  
  .signup-input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .signup-button:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 15px 35px rgba(240, 147, 251, 0.5) !important;
  }
  
  .signup-button:hover .button-icon {
    transform: scale(1.2) rotate(15deg) !important;
  }
  
  .signup-link:hover {
    text-shadow: 0 0 15px rgba(255, 255, 255, 1) !important;
  }
`;

// Inject CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = animationCSS;
  document.head.appendChild(style);
}

export default SignupPage;
