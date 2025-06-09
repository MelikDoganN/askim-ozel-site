import React from 'react';

function GalleryPage() {
  const images = [
    { src: '/gallery1.jpg', caption: '' },
    { src: '/gallery2.jpg', caption: '' },
    { src: '/gallery3.jpg', caption: '' },
    { src: '/gallery4.jpg', caption: '' },
    { src: '/gallery5.jpg', caption: '' },
    { src: '/gallery6.jpg', caption: '' },
    { src: '/gallery7.jpg', caption: '' },
    { src: '/gallery8.jpg', caption: '' },
  ];

  return (
    <div style={styles.container}>
      <audio autoPlay loop>
        <source src="/kifak-inta.mp3" type="audio/mpeg" />
      </audio>
      <h1 style={styles.title}>📸 Anılar Galerisi</h1>
      <div style={styles.grid}>
        {images.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.src} alt={`Galeri ${index + 1}`} style={styles.image} />
            <p style={styles.caption}>{item.caption || 'Şimom Herşeyim en güzel manzaram'}</p>
            <p style={styles.caption}>{item.caption || 'Benim en güzel gülüşlüm'}</p>
            <p style={styles.caption}>{item.caption || 'Eşsiz Hazınem benim güzel kedim'}</p>
            <p style={styles.caption}>{item.caption || 'Ömrüm Herşeyim'}</p>
            <p style={styles.caption}>{item.caption || 'Komik Eğlenceli şimosum'}</p>
            <p style={styles.caption}>{item.caption || 'Kırmızının Yakıştığı en Güzelim'}</p>
            <p style={styles.caption}>{item.caption || 'Çiçeklerden Güzel bebeğim'}</p>
            <p style={styles.caption}>{item.caption || 'Güneş Yüzlüm benim'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: '#fff0f5',
    padding: '40px 20px',
    minHeight: '100vh',
    fontFamily: 'Georgia, serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '28px',
    color: '#d63384',
    marginBottom: '30px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    justifyItems: 'center',
  },
  card: {
    background: 'white',
    padding: '15px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxWidth: '300px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  caption: {
    fontSize: '16px',
    color: '#555',
    fontStyle: 'italic',
  }
};

export default GalleryPage;
