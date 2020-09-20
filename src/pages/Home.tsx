import React, { useState, useEffect } from 'react';

import ProductCard from '../components/ProductCard';

import Product from '../api/Product';
import { ProductType } from '../types';

function Home(): JSX.Element {
  const [ productList, setProductList ] = useState<Array<ProductType>>([]);
  useEffect(() => {
    const getProductList = async () => {
      const list = await Product.all();
      setProductList(list);
    };

    getProductList()
      .catch(err => {
        console.error(err);
      });
  }, []);

  const [ selectedList, setSelectedList ] = useState<Array<number>>([]);
  const onClick = (id: number): void => {
    let newValue = [ ...selectedList ];

    if (newValue.includes(id)) {
      newValue = newValue.filter(item => (item !== id))
    } else {
      newValue.push(id);
    }

    setSelectedList(newValue);
  };

  return (
    <main>
      <h1>Ты сегодня покормил кота?</h1>

      <ul>
        {productList.map((item) => {
          return <ProductCard
            key={item.id}
            item={item}
            onClick={() => onClick(item.id)}
            selected={selectedList.includes(item.id)}
          />;
        })}
      </ul>
    </main>
  );
}

export default Home;
