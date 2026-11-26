import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ onSubmit, children, className }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Form.defaultProps = {
  className: '',
};

export default Form;
