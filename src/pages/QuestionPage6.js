import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage6() {
  const navigate = useNavigate();
  const correctAnswer = 'sinema';

  const [userAnswer, setUserAnswer] = useState('');
  const [answered, setAnswered] = useState(false);
  const [error, setError] = useState('');

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
             Sinema sadece bir yer değil, ben senin yanındayken gerçeklik algımı kaybediyorum, sen gerçek olmayacak kadar güzelsin, sen benim hayallerimi süsleyen şimomsun herşeyimsin . 💫</p>
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
  },
  title: {
    fontSize: '24px',
    color: '#d63384',
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
    backgroundColor: '#ff69b4',
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