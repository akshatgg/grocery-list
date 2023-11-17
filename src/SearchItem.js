// SearchItem.js
import React from "react";

function SearchItem({ search, setsearch }) {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setsearch(inputValue);
  };

  return (
    <form
      className="searchitem grid grid-row-1 grid-cols-12 gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="col-start-6 col-span-2 h-8 text-xl mt-2 border border-gray-900 rounded-lg text-black placeholder-gray-500"
        placeholder="Search Items"
        id="search"
        type="text"
        role="searchbox"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchItem;
