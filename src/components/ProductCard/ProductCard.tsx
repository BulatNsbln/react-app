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
      image,
    },
    onClick,
  } = props;

  const weightToKg: number = (weight / 1000);
  const src = require(`../../assets/images/${image.url}`);
  const src2x = require(`../../assets/images/${image.url2x}`);
  const src3x = require(`../../assets/images/${image.url3x}`);

  return (
    <li className={styles.container}>
      <button className={styles.card} onClick={onClick}>
        <p className={styles.category}>{category}</p>

        <h2 className={styles.title}>{name}</h2>

        <p className={styles.type}>{type}</p>

        <p className={styles.servings}>{numberOfServings} порций</p>

        { presents.map((item, index) => (<p className={styles.present} key={index}>{item}</p>)) }

        <p className={styles.weight}>{weightToKg} кг</p>

        <img className={styles.image} alt="Фотография" src={src} srcSet={`${src}, ${src2x} 2x, ${src3x} 3x`}/>
      </button>

      <p className={styles.pitch}>
        Чего сидишь? Порадуй котэ,
        <button className={styles.buy}>купи</button>
      </p>
    </li>
  );
}
