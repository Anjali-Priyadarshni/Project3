
import { useState } from "react";
import { useCallback } from "react";
import Todos from "./todos";
 
function CALLBACK () {

    const [count , setCount]= useState(0);
    const [todos,setTodos] =useState([]);

    const increment = () =>{
        setCount ((c)=>c+1);
    };

    const addTodo = useCallback(()=>{
        setTodos((t)=>[...t,"New Todo"]);
    },[todos]);

    return (
        <>
        <Todos todos = {todos} addTodo={addTodo}></Todos>
        
        <hr/>

        ---------------------------------------------------------------------------
    
        <div>
            Count :{count}
            <button onClick = {increment}>+</button>
        </div>
        </>
    )
}
export default CALLBACK ;