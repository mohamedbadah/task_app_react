import { useContext, useRef, useState } from "react";
import NewTaskController from "../controller/NewTaskController";

const TaskNew=()=>{
  //  let taskname=useRef();
  //  let taskDetails=useRef();
  //  let startAt=useRef();
  //  let endAt=useRef();
  //  let taskCategory=useRef();
  //  let [newTasks,setTask]=useState([]);
  //  let object=(name,details,startAt,endAt,taskCategory)=>{
  //   return {
  //     name,
  //     details,
  //     startAt,
  //     endAt,
  //     taskCategory
  //   }
  //  }
  //  let taskNew=(newTask)=>{
  //   setTask((prev)=>{
  //     return [newTask,...prev];
  //   })
  //  }
  //  let onSubmitHandler=(event)=>{
    // event.preventDefault();
    // let tasks=object(taskname.current.value,taskDetails.current.value,startAt.current.value,endAt.current.value,taskCategory.current.value);
    // taskNew(tasks);
    // console.log(newTasks);
  //  }
let taskController=new NewTaskController();

    return (<>
     <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2 mt-3">Add New Task </h1>
            
          </div>
    
      
       <form className="row mt-5" onSubmit={taskController.onSubmitHandler}>
    
    
        
        <div className="col-md-12">
    
          <div className="form-outline mb-4">
             <label  className="form-label">Task name</label>
            <input type="texy" id="loginName" className="form-control" placeholder="Task name" ref={taskController.taskName}/>
          </div>
        </div>
        
    
    
        
        {/* <div className="col-md-12">
         
      <div className="form-outline mb-4">
         <label  className="form-label">Task Category</label>
           <input id="input-tags" defaultValue="category 1,category 2, category 3 , name of category" autoComplete="off" placeholder="Add Category?"/>
         </div>
        </div> */}
        <div className="col-md-12">
         
         <div className="form-outline mb-4">
            <label  className="form-label">Task Category</label>
             <select className="form-control" ref={taskController.taskCategory}>
              <option vlaue="Home">Home</option>
              <option vlaue="Familly">Familly</option>
              <option value="Education">Education</option>
              <option value="Work">Work</option>
             </select>
            </div>
           </div>
        
    
           
        <div className="col-md-12">
         
      <div className="form-outline mb-4">
         <label  className="form-label">Image For Task</label>
            <input className="form-control" type="file" id="formFile"/>
         </div>
        </div>
        
    
    
    
        <div className="col-md-12">
              <label  className="form-label">Task Details</label>
          <div className="form-outline mb-4">
            <textarea defaultValue="!" ref={taskController.taskDetails} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
       
    
    
        
        <div className="col-md-6">
          <div className="form-outline mb-4">
             <label  className="form-label">Start date</label>
            <input type="datetime-local"  className="form-control" placeholder="Task name" ref={taskController.startAt}/>
          </div>
        </div>
        
    
    
        
        <div className="col-md-6">
              <label  className="form-label">End date</label>
          <div className="form-outline mb-4">
            <input type="datetime-local" className="form-control" placeholder="Task name" ref={taskController.endAt}/>
          </div>
        </div>
        
    
    
    
    <div>
      <button type="submit" className="pull-right btn btn-main mb-4">Add New Task</button>
    
    </div>
    
    
    
    
    
    </form>
    </main>
    </>)
    }
    export default TaskNew;