import React from 'react';

import styles from './ProductCard.module.scss';
import { ProductType } from '../../types';

type PropsType = {
  item: ProductType,
  onClick: () => void,
  selected: boolean,
};

export default function ProductCard (props: PropsType): JSX.Element {
  const {
    item: {
      category,
      name,
      type,
      numberOfServings,
      presents,
      weight,
    },
    onClick,
  } = props;

  const weightToKg: number = (weight / 1000);

  return (
    <li className={styles.container}>
      <button className={styles.card} onClick={onClick}>
        <p className={styles.category}>{category}</p>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.type}>{type}</p>
        <p className={styles.servings}>{numberOfServings} порций</p>
        { presents.map((item, index) => (<p className={styles.present} key={index}>{item}</p>)) }
        <p className={styles.weight}>{weightToKg} кг</p>
      </button>

      <p className={styles.pitch}>
        Чего сидишь? Порадуй котэ,
        <button className={styles.buy}>купи</button>
      </p>
    </li>
  );
}
