import React from 'react';
import { useState } from 'react';
import styles from './Popup.module.scss';
function Popup({ title, price, imageUrl, sizes, types }) {
  const pizzaTypes = ['Тонкое', 'Традиционное'];
  const [sizeActive, setSizeActive] = useState(0);
  const [typeActive, setTypeActive] = useState(0);
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.left_content}>
          <img className={styles.pizza_image} src={imageUrl} alt="Pizza" />
        </div>
        <div className={styles.right__content}>
          <div className={styles.pizza__description}>
            <h2 className={styles.pizza__title}>{title}</h2>
            <p className={styles.pizza__structure}></p>
            <div className={styles.pizza__selector}>
              <ul>
                {types.map((type) => {
                  return (
                    <li
                      key={type}
                      onClick={() => setTypeActive(type)}
                      className={typeActive === type ? styles.active : ''}>
                      {pizzaTypes[type]}
                    </li>
                  );
                })}
              </ul>
              <ul>
                {sizes.map((size, index) => {
                  return (
                    <li
                      key={size}
                      onClick={() => setSizeActive(index)}
                      className={sizeActive === index ? styles.active : ''}>
                      {size} см.
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
