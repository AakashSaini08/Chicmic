import React from "react";

const TodoList=(props)=>{

    return(
        <>
        <div>

        <li onClick={()=>{
            props.onSelect(props.id);
        }}>
        {props.text} <button onClick={props.deleteItem}>Delete</button></li>
        {/* <li>{props.text}</li> */}
       
        </div>
        </>
  
    )
    
};

export default TodoList;