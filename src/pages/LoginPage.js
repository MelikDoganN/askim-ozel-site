import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const correctUsername = 'canim';
  const correctPassword = 'gulum2023';

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      setStep(1);
    } else {
      setError('Kullanıcı adı ya da şifre yanlış 🙈');
    }
  };

  const handleContinue = () => {
    navigate('/welcome');
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatHearts {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-100vh) scale(1.5); opacity: 0; }
      }
      .heart {
        position: absolute;
        bottom: 0;
        width: 20px;
        height: 20px;
        background-color: pink;
        animation: floatHearts 6s linear infinite;
        clip-path: polygon(50% 0%, 61% 20%, 80% 20%, 100% 40%, 80% 60%, 50% 100%, 20% 60%, 0% 40%, 20% 20%, 39% 20%);
      }
    `;
    document.head.appendChild(style);
    const container = document.getElementById('heart-container');
    if (container) {
      const interval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        container.appendChild(heart);
        setTimeout(() => container.removeChild(heart), 6000);
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div style={styles.container}>
      <div id="heart-container" style={styles.heartContainer}></div>
      <div style={styles.card}>
        {step === 0 && (
          <>
            <h1 style={styles.title}>Hoş Geldin Güzellik 💖</h1>
            <p style={styles.subtitle}>Bu sayfa sadece sana özel... ✨</p>
            <form onSubmit={handleLogin} style={styles.form}>
              <input
                type="text"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
              <button type="submit" style={styles.button}>Giriş Yap</button>
            </form>
            {error && <p style={styles.error}>{error}</p>}
          </>
        )}

        {step === 1 && (
          <>
            <h2 style={styles.title}>Başlamadan Önce 💌</h2>
            <p style={styles.subtitle}>
              Bu sayfada sana özel bir sürpriz var. Ama önce birkaç küçük soru ve görev var:
            </p>
            <ul style={{ textAlign: 'left', marginTop: '20px', fontSize: '16px', color: '#333' }}>
              <li>💭 İlk tanıştığımız tarihi hatırlıyor musun?</li>
              <li>📸 İlk birlikte çekildiğimiz fotoğraf nerede çekilmişti?</li>
              <li>🎶 O gün çalan bir şarkıyı hatırlıyor musun?</li>
              <li>❤️ Sana olan hislerimi açıklamak için yazdığım bir mektup olacak... onu okumaya hazır mısın?</li>
            </ul>
            <button style={{ ...styles.button, marginTop: '30px' }} onClick={handleContinue}>
              Hazırım ✨
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(to bottom, #ffc0cb, #ffe4e1)',
    height: '100vh',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    padding: '1rem'
  },
  heartContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '420px',
    zIndex: 1
  },
  title: {
    fontSize: '26px',
    color: '#d63384',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '10px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#ff69b4',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  error: {
    marginTop: '20px',
    color: 'red',
    fontWeight: 'bold',
  }
};

export default LoginPage;
