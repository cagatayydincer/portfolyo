import React from 'react';
import { motion } from 'framer-motion';
import './about.css';

const About = () => (
  <div id="about">
    {/* Ben Kimim bölümü */}
    <section style={styles.simpleSection}>
      <h2 style={styles.title}>Ben Kimim?</h2>
      <p style={styles.text}>
        Yazılım geliştirmeye tutkuyla bağlı, öğrenmeyi ve üretmeyi seven bir geliştiriciyim.
        Web teknolojileri, yapay zeka ve problem çözme konularına özel ilgi duyuyorum.
      </p>
    </section>

    {/* Hakkımda bölümü */}
    <section style={styles.section}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={styles.card}
      >
        {/* Sol: Profil Görseli */}
        <div style={styles.imageContainer}>
          <img
            src="/files/görsel.jpg"
            alt="Çağatay Dinçer"
            style={styles.image}
          />
        </div>

        {/* Sağ: Metin ve buton */}
        <div style={styles.content}>
          <h2 style={styles.title}>Hakkımda</h2>
          <p style={styles.text}>
            Merhaba! Ben <strong>Balıkesir Üniversitesi</strong> Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.
            Takım çalışmasına yatkın, problem çözmeyi seven ve teknolojiye ilgi duyan bir geliştirici adayıyım.
            Üniversitenin <strong>Bilgi İşlem Daire Başkanlığı</strong>'nda aktif olarak görev alıyor ve çeşitli yazılım projelerinde
            yer alarak hem front-end hem back-end deneyimi kazanıyorum.
          </p>

          <a
            href="/files/CagatayDincer_CV.docx"
            download="CagatayDincer_CV.docx"
            style={styles.button}
          >
            📄 CV'mi İndir
          </a>
        </div>
      </motion.div>
    </section>
  </div>
);

const styles = {
  section: {
    padding: '4rem 2rem',
    backgroundColor: '#0f172a',
    display: 'flex',
    justifyContent: 'center',
  },
  simpleSection: {
    padding: '4rem 2rem',
    backgroundColor: '#111827',
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    gap: '2rem',
    backgroundColor: '#1e293b',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
    padding: '2rem',
    maxWidth: '1000px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  imageContainer: {
    flex: '1 1 250px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '250px', // Sabit genişlik
    height: '250px', // Sabit yükseklik
    borderRadius: '1rem',
    border: '3px solid #3b82f6',
    objectFit: 'cover', // Fotoğrafın oranlarını korur
  },
  content: {
    flex: '2 1 400px',
  },
  title: {
    fontSize: '2rem',
    color: '#3b82f6',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    color: '#e2e8f0',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#3b82f6',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default About;