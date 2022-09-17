import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import TaskContext from "../Context/taskContext";
import image from "../resourses/img/1.png"
const TaskDetailsPage=()=>{
    let params=useParams();
     let taskContext=useContext(TaskContext);
     let [taskDetails,setTaskDetails]=useState({});
    let fetchData=()=>{
     let filterDatails= taskContext.tasks.filter((element)=>element.id == params.id);
      setTaskDetails(filterDatails[0]);
    }
    useEffect(fetchData,[]);
    let onStatusHandler=(status)=>{
    const token=taskContext.token;
    axios.patch(`https://tasks-app-f5240-default-rtdb.firebaseio.com/task/${taskDetails.id}.json?auth=${token}`,{
        status:status
      }).then((response)=>{
        setTaskDetails(prev=>{
          prev.status=status
          return {...prev}
        })
      }).catch((error)=>{
        console.log(error);

      })
      
    }
return (<>
<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">



        <h1 className="h2">Dashboard {taskDetails.taskName}</h1>


        <div className=" mb-2 mb-md-0">
<div className="d-flex align-items-center ms-3 ms-lg-4">
          
</div>
<div className="d-flex align-items-center ms-3 ms-lg-4">
		
</div>
          </div>

        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
          	 
          	<button type="button"
            onClick={()=>onStatusHandler("In Progress")}
             className={`btn btn-sm btn-outline-secondary ${taskDetails.status=="In Progress"?"active":""}`} 
             value="in progress">in progress</button>
            <button type="button"
            onClick={()=>onStatusHandler("Complete")} 
            className={`btn btn-sm btn-outline-secondary ${taskDetails.status=="Complete"?"active":""}`}  
            value="Complete">Complete</button>
            <button 
            onClick={()=>onStatusHandler("wating")} 
            type="button"
             className={`btn btn-sm btn-outline-secondary ${taskDetails.status=="wating"?"active":""}`} 
              value="wating">Waiteing</button>
            <button type="button"
            onClick={()=>onStatusHandler("Canceled")} 
             className={`btn btn-sm btn-outline-secondary ${taskDetails.status=="Canceled"?"active":""}`} 
              value="Canceled">Canceled</button>
          </div>
          <button type="button" className="btn btn-light-main btn">
             <span data-feather="edit-3"></span> Edit
          </button>
        </div>

         
  
      </div>

    

      <div className="row mt-5">
 
         <div className="col-md-6">
         	<img src={image}  className="img-fluid rounded de-img"/>
         </div>
         <div className="col-md-6  mt-5">
         	<div className=" mb-3">
         	 <span data-feather="bookmark" className="main-color"></span> <strong>Title:</strong>{taskDetails.taskName}
         	</div>
            <div className="mb-3">
         	 <span data-feather="layers" className="main-color"></span> <strong>Category:</strong> {taskDetails.taskCategory}
         	</div>
         	<div className="">
         	 <span data-feather="calendar" className="main-color"></span> <strong>Date:</strong> {taskDetails.startAt}
         	</div>


         </div>
    
        <div className="row mt-5">
           	<div className="task-info">
            {taskDetails.taskDetails}

           	</div>
        </div>

      </div>
  



   
      
    </main>
</>)
}
export default TaskDetailsPage;