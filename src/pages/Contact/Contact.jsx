import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactInfo}>
        <h1>Contato</h1>
        <p>Entre em contato comigo através do formulário abaixo ou pelas redes sociais:</p>
        
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/reynaldoqs" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/reynaldo-queiroz-silva-b5129a1b9/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
        </div>

        <div className={styles.contactDetails}>
          <p>
            <strong>Email:</strong> reynaldoscrip@gmail.com
          </p>
          <p>
            <strong>Localização:</strong> Campo Grande, MS - Brasil
          </p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
