import styles from './Categories.module.scss';

function Categories({ value, onClickCategory }) {
  console.log(value);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <nav className={styles.categories}>
      <ul>
        {categories.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={value === index ? styles.active : ''}>
              {category}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Categories;
