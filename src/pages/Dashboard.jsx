import { useState } from "react";
import Content from "../component/dashboard/Content";
import Header from "../component/dashboard/Header";
import TaskContext, { TaskContextProvider } from "../Context/taskContext";

function Dashboard(){
    // let [tasks,setTask]=useState([]);
    // let addNewTask=(newTask)=>{
    //     setTask((prev)=>{
    //         return [newTask,...prev];
    //     })
    // }
return (<>
<Header/>
<Content/> 
</>)
}
export default Dashboard;