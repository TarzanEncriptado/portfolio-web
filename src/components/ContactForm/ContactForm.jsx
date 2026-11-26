import React, { useState } from 'react';
import { api } from '../../services/api';
import Button from '../UI/Button';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    verificationCode: '',
  });
  const [step, setStep] = useState('email'); // email, verification
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await api.sendToken(formData.email);
      if (response.success) {
        setMessage('Código enviado com sucesso! Verifique seu email.');
        setStep('verification');
      }
    } catch (error) {
      setError(error.message || 'Erro ao enviar código');
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await api.verifyToken({
        email: formData.email,
        code: formData.verificationCode
      });
      
      if (response.success) {
        setMessage('Email verificado com sucesso!');
        // Aqui você pode redirecionar ou mostrar conteúdo adicional
      }
    } catch (error) {
      setError(error.message || 'Código inválido');
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2>Entre em Contato</h2>
      
      {step === 'email' ? (
        <form onSubmit={handleSendCode} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <Button type="submit" variant="primary">
            Enviar Código
          </Button>
        </form>
      ) : (
        <form onSubmit={handleVerifyCode} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="verificationCode">Código de Verificação:</label>
            <input
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange}
              required
              className={styles.input}
              maxLength="6"
            />
          </div>
          <Button type="submit" variant="primary">
            Verificar Código
          </Button>
          <Button 
            type="button" 
            variant="text"
            onClick={() => setStep('email')}
          >
            Voltar
          </Button>
        </form>
      )}

      {message && <div className={styles.message}>{message}</div>}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default ContactForm;
