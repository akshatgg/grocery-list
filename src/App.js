import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
function App() {
  const [basketLength, setBasketLength] = useState(0);
  const [newitem, setNewitem] = useState('');
  const [search,setsearch]=useState('')
  const [items, setItems] = useState(() => {
    // Check if items are stored in localStorage
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];

    // If not, use the default items
    if (storedItems.length === 0) {
      return [
        {
          id: 1,
          checked: false,
          hidden: false,
          item: "Old Mong",
          price: 200,
        },
        {
          id: 2,
          checked: false,
          hidden: false,
          item: "Blue Lagoon",
          price: 450,
        },
        {
          id: 3,
          checked: false,
          hidden: false, // Ensure this is set to false
          item: "Buttvizer",
          price: 200,
        },
      ];
    }

    return storedItems;
  });

  const [basket, setBasket] = useState(() => {
    // Retrieve basket from localStorage or initialize it as an empty array
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    return storedBasket;
  });

  useEffect(() => {
    // Update basket length when the component mounts
    updateBasketLength(basket.length);
  }, [basket]);

  const pushToBasket = (id, checked, item, price) => {
    const newBasket = [...basket, { id, checked, item, price }];
    setBasket(newBasket);
    storeBasket(newBasket);
    updateBasketLength(newBasket.length);
  };

  const storeBasket = (basketToStore) => {
    localStorage.setItem("basket", JSON.stringify(basketToStore));
  };

  
  const toggleItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(updatedItems);

    if (updatedItems.find((item) => item.id === id).checked) {
      const selectedItem = updatedItems.find((item) => item.id === id);
      pushToBasket(id, true, selectedItem.item, selectedItem.price);
    } else {
      removeFromBasket(id);
    }
  };

  const hideItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, hidden: true } : item
    );
    setItems(updatedItems);
  };

  const removeFromBasket = (id) => {
    const newBasket = basket.filter((item) => item.id !== id);

    setBasket(newBasket);
    storeBasket(newBasket);
    updateBasketLength(newBasket.length);
    
  };



  const updatedItemlists=(id)=>{
    const newBaske = items.filter((item) => item.id !== id);
    setItems(newBaske);
    storeItems(newBaske)
 
  }

  const storeItems = (itemsToStore) => {
    localStorage.setItem("items", JSON.stringify(itemsToStore));
  };

  const HideandRemove = (id) => {
    hideItem(id);
    updatedItemlists(id);
    removeFromBasket(id);
  
  };

  const filteredItems = items.filter(item => 
    (item.item.toLowerCase()).includes(search.toLowerCase()) && !item.hidden
  );

  
  const updateBasketLength = (length) => {
    setBasketLength(length);
  };

  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const mynewitem = { id, checked: false, hidden: false, item };
    const mylistitem = [...items, mynewitem];
    setItems(mylistitem);
    localStorage.setItem('items', JSON.stringify(mylistitem));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newitem.trim()) {
      return;
    }

    additem(newitem.trim());
    setNewitem(''); // Clear the input field
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newitem={newitem}
        setnewitem={setNewitem}
        handleSubmit={handleSubmit}
      />

      <SearchItem
      search={search}
      setsearch={setsearch}
      />

<Content
  items={items.filter(item => 
    (item.item.toLowerCase()).includes(search.toLowerCase()) && !item.hidden
  )}
  updateBasketLength={updateBasketLength}
  HideandRemove={HideandRemove}
  toggleItem={toggleItem}
  filteredItems={filteredItems}
/>

      <Footer length={basketLength} />
    </div>
  );
}

export default App;