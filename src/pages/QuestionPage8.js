import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage8() {
  const navigate = useNavigate();
  const correctAnswer = 'mirullah';

  const [userAnswer, setUserAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [error, setError] = useState('');

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
        background-color: #ffd966;
        animation: floatHearts 6s linear infinite;
        clip-path: polygon(50% 0%, 61% 20%, 80% 20%, 100% 40%, 80% 60%, 50% 100%, 20% 60%, 0% 40%, 20% 20%, 39% 20%);
        opacity: 0.7;
        pointer-events: none;
        z-index: 0;
      }
    `;
    document.head.appendChild(style);

    const container = document.getElementById('heart-bg');
    if (container) {
      const interval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        container.appendChild(heart);
        setTimeout(() => container.removeChild(heart), 6000);
      }, 300);
      return () => clearInterval(interval);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const entered = userAnswer.toLowerCase().trim();
    if (entered === correctAnswer) {
      setAnswered(true);
      setError('');
    } else {
      setError('Kim çekmişti bu güzelliği hatırla bakalım 😍');
    }
  };

  const handleNext = () => {
    navigate('/letter');
  };

  return (
    <div style={styles.container}>
      <div id="heart-bg" style={styles.heartContainer}></div>
      {!answered ? (
        <>
          <h2 style={styles.title}>Soru 8</h2>
          <p style={styles.question}>Bu tatlı fotoğrafını kim çekmişti?</p>
          <img
            src="/WhatsApp Görsel 2025-06-09 saat 19.24.21_835909ed.jpg"
            alt="Gülümseyen An"
            style={styles.image}
          />
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Cevabını yaz..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Gönder</button>
          </form>
          {error && <p style={styles.error}>{error}</p>}
        </>
      ) : (
        <div style={styles.response}>
          <h3>Ayyy evet! 📸</h3>
          <p>
            Mirullah’ın ilk defa bir güzel şeye vesile olmuştu. <br />
            O kadar mutlu etmiştiki beni bu fotoğraf... anlatamam. <br />
            Gözlerin ışıldarken zamanı durdurmuştum. 🧡
          </p>
          <button onClick={handleNext} style={styles.button}>Devam Et ❤️</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '80px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #fffbe6, #fff2cc)',
    overflow: 'hidden',
    position: 'relative'
  },
  heartContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none'
  },
  title: {
    fontSize: '24px',
    color: '#d4a017',
    marginBottom: '10px',
    zIndex: 1,
    position: 'relative'
  },
  question: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '20px',
    zIndex: 1,
    position: 'relative'
  },
  image: {
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '20px',
    border: '2px solid #ccc',
    zIndex: 1,
    position: 'relative'
  },
  form: {
    marginBottom: '15px',
    zIndex: 1,
    position: 'relative'
  },
  input: {
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    width: '80%',
    maxWidth: '300px',
    zIndex: 1,
    position: 'relative'
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f4c542',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    zIndex: 1,
    position: 'relative'
  },
  error: {
    color: 'red',
    marginTop: '10px',
    zIndex: 1,
    position: 'relative'
  },
  response: {
    marginTop: '30px',
    zIndex: 1,
    position: 'relative'
  }
};

export default QuestionPage8;
