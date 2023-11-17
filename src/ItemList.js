// ItemList.js

import React from 'react';
import LineItem from './LineItem';

function ItemList({ items, toggleItem, HideandRemove}) {
  return (
    <div className="flex flex-col items-center my-4 justify-center">
      <div className="text-2xl flex flex-col items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <ul>
          
          {items
            .filter((item) => !item.hidden)
            .map((item) => (
              <LineItem
                key={item.id}
                toggleItem={toggleItem}
                HideandRemove={HideandRemove}
                item={item}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ItemList;
