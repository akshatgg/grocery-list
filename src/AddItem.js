
import React from 'react';
import { FaPlus } from 'react-icons/fa';

function AddItem({ newitem, setnewitem, handleSubmit }) {
  return (
    <form className='grid grid-row-1 grid-cols-12 gap-2 mt-3' onSubmit={handleSubmit}>
      <label htmlFor='additem'></label>
      <input
        className='col-start-6 col-span-2 h-8 text-xl border border-gray-900 rounded-lg'
        id='additem'
        type='text'
        placeholder='Add Items'
        required
        autoFocus
        value={newitem}
        onChange={(e) => setnewitem(e.target.value)}
      />
      <button
        className='border border-gray-900 w-5 rounded-md h-8 hover-bg-gray-200'
        type='submit'
        aria-label='Add Item'
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;
