import React, { useState } from 'react'
import List from './List'; 


function TodoList() {

    const [inputList, setinputList] = useState("");
    const [items,setItems] =useState([]);

   

    const itemEvent = (event)=>{
        setinputList(event.target.value);
    };

    const listOfItem =()=>{
            setItems((oldItems)=>{
                return [...oldItems,inputList]
            })
            setinputList("");
    };

    const deleteItems=(id)=>{
        console.log("Deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }

  return (
    <div>
    <h1 style={{color:"red",background:"black"}}>TODO LIST</h1>
        <input type="text" onChange={itemEvent} value={inputList} placeholder="Add some items"/>
        <button onClick={listOfItem}>Update</button>
        <ol>
            {items.map((itemval,index)=>{
                return <List key={index} id={index} text = {itemval}
                onSelect={deleteItems}
                />
            })}
        </ol>
        
    </div>
    
  )
}

export default TodoList


