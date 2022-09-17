import React, { useState } from "react";
const TaskContext=React.createContext({
    tasks:[],
    setTasks:(data)=>{},
    isLogged_in:false,
    token:null,
    setlogged_in:(status)=>{},
    addNewTask:(newTask)=>{}
});
export const TaskContextProvider=(props)=>{
    let [tasks,setTasks]=useState([]);
    let [isLogged_in,setLogged_in]=useState(JSON.parse(localStorage.getItem("logged_in")));
    let addNewTask=(newTask)=>{
        setTasks(prev=>{
            return [newTask,...prev];
        })}
    
    return <TaskContext.Provider value={{
        tasks:tasks,
        addNewTask:addNewTask,
        isLogged_in:isLogged_in,
        setTasks:setTasks,
        token:localStorage.getItem("token"),
        setlogged_in:setLogged_in
        }}>
        {props.children}
    </TaskContext.Provider>
}
export default TaskContext;