import React from 'react';
import styles from './buttonprof.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Cambiar Foto de Perfil
    </button>
  );
}

export default Button ;