

import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function LineItem({ toggleItem, item, HideandRemove }) {
  return (
    <li key={`item-${item.id}`} className="item bg-gray-100 pl-9 pr-8 px-2 py-2 my-1 border-gray-500">
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-1.5 sm:space-y-0 sm:space-x-1.5">
        <div className="flex items-center">
          <input
            type="checkbox"
            onClick={() => toggleItem(item.id)}
            checked={item.checked}
            className="mr-2"
          />
          <label onClick={() => toggleItem(item.id)}>{item.item}</label>
        </div>
        <FaTrashAlt
          role="button"
          tabIndex="0"
          onClick={() => HideandRemove(item.id)}
          className="cursor-pointer"
        />
      </div>
    </li>
  );
}

export default LineItem;
