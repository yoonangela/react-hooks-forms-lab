import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid } from 'uuid';



function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

 
  const [newName, setName]=useState("") 
  function itemName(event){
        return setName(event.target.value)
      }
  const [newcategory, setcategory]=useState("Produce")
  
  function itemCategory(event){
      return setcategory(event.target.value)
      }
    
  const [newitem, setItem]= useState({id:'',name:'',category:''})
   
  function onItemFormsubmit(event){
      event.preventDefault()
      const newItem = {
          id: uuid(), 
          name: newName,
          category: newcategory,
        };
      return (setItem(newItem),addElement(newItem))
      
      }

      function addElement(newItem) {
        setItems([...items, newItem]);
      }
      
      
        
      
  


  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} itemName={itemName} itemCategory={itemCategory} onItemFormSubmit={onItemFormsubmit} />
    </div>
  );
}

export default App;
