import React from 'react';
import ItemList from './ItemList';
import "./content.css";

function Content({ updateBasketLength,items,toggleItem,HideandRemove,filteredItems}) {
 

  return <ItemList items={items} toggleItem={toggleItem} HideandRemove={HideandRemove} filteredItems={filteredItems}/>;
}

export default Content;
