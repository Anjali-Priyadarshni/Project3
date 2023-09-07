
import { useState } from "react";
import { useMemo } from "react";

function HighP() {

    const [count,setCount]= useState(0);
    const [todos,setTodos]=useState([]);

    const expensiveCalculation=(num)=>{
        console.log("calculating...");
        for(let i=0;i<10000000;i++){
            num +=1

        }
        return num;

    }

    const calculation = useMemo(()=> expensiveCalculation(count),[count]);

    const increment = () => {
        setCount((c)=>c+1)
    }

    const addTodo= ()=> {
        setTodos((t)=> [...t,"Add Todo"])
    }

    return(
        <div>
            <div>
                <h2>My Todos</h2>
                    {
                        todos.map((todo,index)=>{
                            return <p key={index}>{todo}</p>
                        })
                    }
                    <button onClick={addTodo}> Add Todo </button>
            </div>
            <hr/>
            <div>
                count:{count}
                <button onClick={increment}>+</button>
                <h2> Expensive Calculation </h2>
                {calculation}
            </div>
        </div>
    )

}
export default HighP;