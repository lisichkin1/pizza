import { useState } from 'react';
import styles from './Categories.module.scss';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <nav className={styles.categories}>
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? styles.active : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Categories;
