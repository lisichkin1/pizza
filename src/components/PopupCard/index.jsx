import React from 'react';
import { useState } from 'react';
import styles from './Popup.module.scss';
function Popup({
  title,
  price,
  imageUrl,
  sizes,
  weight,
  description,
  types,
  modalActive,
  setModalActive,
}) {
  const pizzaTypes = ['Тонкое', 'Традиционное'];
  const [sizeActive, setSizeActive] = useState(0);
  const [typeActive, setTypeActive] = useState(types[0]);

  return (
    <div
      className={modalActive ? styles.modal + ' ' + styles.active : styles.modal}
      onClick={() => setModalActive(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <div className={styles.left_content}>
          <img className={styles.pizza_image} src={imageUrl} alt="Pizza" />
        </div>
        <div className={styles.right__content}>
          <h2 className={styles.pizza__title}>{title}</h2>
          <p className={styles.pizza__structure}>
            {sizeActive === 0 ? sizes[0] : sizeActive === 1 ? sizes[1] : sizes[2]} см,
            {typeActive === 0 ? pizzaTypes[0] : pizzaTypes[1]} тесто,
            {weight[sizeActive]} г
          </p>
          <p className={styles.pizza__description}>{description}</p>
          <div className={styles.pizza__selector}>
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
            <ul>
              {types.map((type) => {
                return (
                  <li
                    key={type}
                    onClick={() => setTypeActive(type)}
                    className={typeActive === type ? styles.active : ''}>
                    {pizzaTypes[type]}
                    {console.log(type)}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.pizza__products}>
            <span className={styles.pizza__products__title}>Добавить по вкусу</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
