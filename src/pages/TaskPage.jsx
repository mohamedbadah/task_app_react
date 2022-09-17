import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TaskDetails from "../component/Task/TaskDetails";
import TaskContext from "../Context/taskContext";

function TaskPage(){
  let taskContext=useContext(TaskContext);
  let [filterTask,setFilterTask]=useState([]);
  // let onChangeHandler=(event)=>{
  //   if(event.target.value==-1){
  //     setFilterTask(taskContext.tasks)
  //   }else{
  //     let newTaskfilters=taskContext.tasks.filter((element)=>element.status==event.target.value);
  //     setFilterTask(newTaskfilters);
  //   }
  // }
  let onChangeHandler=(event)=>{
   if(event.target.value=="-1"){
    setFilterTask(taskContext.tasks);
   }else{
    let newFilter=taskContext.tasks.filter((element)=>element.status==event.target.value);
    setFilterTask(newFilter);
    console.log(newFilter[0]);
   }
  }
  let fetchData=()=>{
    const token=taskContext.token;
    // const token=localStorage.getItem("token");
    
    if(taskContext.tasks.length==0){
    axios.get(`https://tasks-app-f5240-default-rtdb.firebaseio.com/task.json?auth=${token}`
    ).then((response)=>{
      let tasks=[];
      console.log(response);
       for(let key in response.data){
        let task=response.data[key];
        task.id=key;
        tasks.push(task);
       }
       console.log(tasks.length);
       taskContext.setTasks(tasks);
       setFilterTask(tasks);
    }).catch((error)=>{

    })
  }else{
    setFilterTask(taskContext.tasks);
    console.log("read");

  }
  }
  useEffect(fetchData,[]);
 return (<>
 <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">



        <h1 className="h2">Dashboard</h1>


        <div className=" mb-2 mb-md-0">
<div className="d-flex align-items-center ms-3 ms-lg-4">
          
</div>
<div className="d-flex align-items-center ms-3 ms-lg-4">
		
</div>
          </div>

          <ul className="list-inline">
  <li className="list-inline-item"> 
  {taskContext.tasks.length > 0 ? (
    <select className=" dropdown form-control pull-right"
  onChange={onChangeHandler}
  placeholder="Filter By status" autoComplete="off">
      <option value="" >Filter By status</option>
      <option value="-1" >All</option>
      <option value="wating">wating</option>
      <option value="In Progress">In Progress</option>
      <option value="Complete">Complete</option>
      <option value="Canceled">Canceled</option>
    </select>
  ):""}
  </li>
  {/* <li className="list-inline-item mt-3"> <select className=" dropdown form-control pull-right" placeholder="Filter By status" autoComplete="off">
      <option value="" >Filter By category</option>
      <option value="4">Category 1</option>
      <option value="1"> Category 2</option>
      <option value="3">Category 3</option>
      <option value="5">Category 4</option>
    </select></li> */}
  
</ul>
         
  
      </div>

    

      <div className="row mt-5">
  
  {filterTask.map((element)=>(
    <TaskDetails
    key={element.id}
    id={element.id}
    title={element.taskName}
    startAt={element.startAt}
    endAt={element.endAt}
    description={element.taskDetails}
    status={element.status}
    />
  ))}
      	</div>
          </main>
 </>)
}
export default TaskPage;