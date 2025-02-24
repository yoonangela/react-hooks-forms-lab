import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({itemName, itemCategory, onItemFormSubmit}) {
  
  

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input onChange={itemName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={itemCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button  type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
