import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.mercadolibre.com/sites/MLA/search?q=iphone%2013&limit=12'
    )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        //console.log(data.results);
        setItems(data.results);
      });
  }, []);

  return (
    <div className="container">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
