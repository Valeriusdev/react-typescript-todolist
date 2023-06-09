import React from "react";

type PropsType = {
    truck: string
    truck2?: number
    truck3?: boolean
    tasks: TaskType[]
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

export const Todolist =(props:PropsType)=> {
    return(
        <div className="App">
            <div>
                <h3>{props.truck}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((el:TaskType)=>{        
                        return(
                           <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                        )                        
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}