import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage6() {
  const navigate = useNavigate();
  const correctAnswer = 'sinema';

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
        background-color: #6effb2;
        animation: floatHearts 6s linear infinite;
        clip-path: polygon(50% 0%, 61% 20%, 80% 20%, 100% 40%, 80% 60%, 50% 100%, 20% 60%, 0% 40%, 20% 20%, 39% 20%);
        opacity: 0.7;
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
      setError('Yanlış olabilir aşkım 🎬 Hadi bir daha düşün...');
    }
  };

  const handleNext = () => {
    navigate('/question7');
  };

  return (
    <div style={styles.container}>
      <div id="heart-bg" style={styles.heartContainer}></div>
      {!answered ? (
        <>
          <h2 style={styles.title}>Soru 6</h2>
          <p style={styles.question}>Bu fotoğrafı çekmeden hemen önce neredeydik?</p>
          <img
            src="/WhatsApp Görsel 2025-06-09 saat 19.24.18_fbd8b7ad.jpg"
            alt="Hatıra Fotoğrafı"
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
          <h3>Harika hatırladın! 🎬</h3>
          <p>Sadece bir fotoğraf değil… o anın öncesi, sonrası, gülüşün… hepsi hâlâ aklımda.  
             Sinema sadece bir yer değil, ben senin yanındayken gerçeklik algımı kaybediyorum,  
             sen gerçek olmayacak kadar güzelsin, sen benim hayallerimi süsleyen şimomsun herşeyimsin. 💫</p>
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
    background: 'linear-gradient(to bottom, #e6fff5, #ccffe6)',
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
  },
  title: {
    fontSize: '24px',
    color: '#2ecc71',
    marginBottom: '10px',
  },
  question: {
    fontSize: '18px',
    color: '#444',
    marginBottom: '20px',
  },
  image: {
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '20px',
    border: '2px solid #ccc',
  },
  form: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    width: '80%',
    maxWidth: '300px',
  },
  button: {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  response: {
    marginTop: '30px',
  }
};

export default QuestionPage6;
