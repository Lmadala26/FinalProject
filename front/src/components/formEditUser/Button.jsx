import React from 'react';
import styles from './button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Cambiar Fondo
    </button>
  );
}

export default Button ;