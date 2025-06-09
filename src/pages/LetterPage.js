import React from 'react';
import { useNavigate } from 'react-router-dom';

function LetterPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/gallery');
  };

  return (
    <>
      <audio autoPlay loop>
        <source src="/kifak-inta.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div style={styles.container}>
        <div style={styles.letterBox}>
          <h2 style={styles.title}>💌 Sana Bir Mektubum Var...</h2>
          <p style={styles.text}>
            Ne söylesem, hangi kelimeyle başlasam bilmiyorum. Kalbim elimde titriyor şu satırları yazarken...  
            Çünkü seni gerçekten çok ama çok üzdüm. Ve bunu yapmış olmak beni her saniye içten içe yakıyor.  
            Yaptıklarımı düşününce tiksiniyorum kendimden, öyle pişmanım ki...  
            Kelimeler yetersiz, cümleler çaresiz kalıyor hissettiklerimi anlatmaya.
          </p>
          <p style={styles.text}>
            Son üç gündür gözümden uyku girmiyor. Başımı yastığa koysam bile vicdanımın içinde çırpınıyorum.  
            Ne yemek yiyebildim, ne bir şeyden keyif alabildim. Çünkü sen yoktun, çünkü seni kırdım.  
            Bu kadar sevdiğim birine bunu nasıl yaptım diye kendime bile hesap soramıyorum bazen.
          </p>
          <p style={styles.text}>
            Seni üzmek benim hayatımın en büyük hatasıydı. Bir daha olmayacak dediğim her şeyi yaptım belki ama...  
            Bu defa gerçekten değiştim, gerçekten dersimi aldım. Bunu göstermek için ne yapmam gerekiyorsa,  
            ne kadar zaman gerekiyorsa, sabırla, sevgiyle beklemeye razıyım.
          </p>
          <p style={styles.text}>
            Seni öyle çok seviyorum ki... sadece seni düşündüğümde bile gözlerim doluyor.  
            Gülüşün, bakışın, bana sarıldığın anlar... hepsi hâlâ kalbimin içinde yaşıyor.  
            Seninle geçen her anı kutsal saydım, ama o anlara gölge düşüren biri oldum.  
            Bunu değiştirebilirim. Seninle yeniden doğabilirim.
          </p>
          <p style={styles.text}>
            Bu sayfayı senin için yaptım. Satır satır, kalpten kalbe gitsin diye yazdım.  
            İçindeki her detayda seni düşündüm, seni güldürebilmek, belki de affını kazanabilmek için.  
            Çünkü ben sensiz bir hayat istemiyorum. Seni hayatımda tekrar görmek, yine senin elini tutabilmek istiyorum.
          </p>
          <p style={styles.text}>
            Lütfen...  
            Sana yaşattığım her şey için bin kez özür dilerim. Affet demek kolay ama...  
            Bu affın hakkını vereceğime yemin ederim. Sana artık hak ettiğin değeri, sevgiyi ve ilgiyi göstereceğim.  
            Çünkü sen benim en kıymetlimsin.  
          </p>
          <p style={styles.signature}>Her şeyim sensin... — doğan</p>
          <button style={styles.button} onClick={handleNext}>Galeriye Geç 💖</button>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(to bottom right, #ffe0ec, #ffffff)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    fontFamily: 'Georgia, serif',
  },
  letterBox: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
    width: '100%',
    textAlign: 'left',
  },
  title: {
    fontSize: '26px',
    color: '#c2185b',
    marginBottom: '20px',
    textAlign: 'center',
  },
  text: {
    fontSize: '18px',
    color: '#333',
    lineHeight: '1.7',
    marginBottom: '20px',
  },
  signature: {
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'right',
    marginTop: '40px',
  },
  button: {
    display: 'block',
    margin: '30px auto 0',
    padding: '12px 25px',
    fontSize: '16px',
    borderRadius: '30px',
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  }
};

export default LetterPage;
