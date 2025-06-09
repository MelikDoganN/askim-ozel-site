import React, { useState } from 'react';

function SecretPage() {
  const correctAnswer = '27ekim';
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const entered = userAnswer.toLowerCase().trim();
    if (entered === correctAnswer) {
      setAnswered(true);
      setError('');
    } else {
      setError('Hmm... Yanlış gibi. Tekrar denemek ister misin? ❤️');
    }
  };

  if (answered) {
    return (
      <div style={styles.container}>
        <h2>Tebrikler Aşkım 🎉</h2>
        <p>O günü unutmadığın için çok mutluyum. 🥹</p>
        <p>Seninle her gün özel ama o gün bambaşkaydı... hayatımın en güzel günü benim doğum günüm o gün 💘</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>💞 Küçük Bir Soru</h2>
      <p style={styles.question}>Biz ne zaman sevgili olduk?</p>
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
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  question: {
    fontSize: '20px',
    color: '#d63384',
    marginBottom: '20px',
  },
  form: {
    marginTop: '20px',
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
};

export default SecretPage;