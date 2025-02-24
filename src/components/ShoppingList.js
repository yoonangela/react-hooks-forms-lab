import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,  itemName, itemCategory,  onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

   const [search, setSearch]= useState("")
    function onSearchChange(event){
      return setSearch(event.target.value)
    }

  const realItemstoDisplay = itemsToDisplay.filter((item)=>{
    if(search==="") return true;
    return item.name===search;
  })

 

  return (
    <div className="ShoppingList">
      <ItemForm  itemName={itemName} itemCategory={itemCategory} onItemFormSubmit={onItemFormSubmit}  />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {realItemstoDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
