import axios from "axios";
import { useContext, useRef } from "react";
import Swal from "sweetalert2";
import TaskContext from "../Context/taskContext";
import Task from "../model/Task";

class NewTaskController{
    taskName=useRef();
    taskDetails=useRef();
    startAt=useRef();
    endAt=useRef();
    taskCategory=useRef();
    taskContext=useContext(TaskContext);
    addNewTask=()=>{
        if(this.checkForm()){
            const newTaskObject=this.newTask;
            const token=localStorage.getItem("token");
            axios.post(`https://tasks-app-f5240-default-rtdb.firebaseio.com/task.json?auth=${token}`,
            newTaskObject).then((response)=>{
                this.taskContext.addNewTask(newTaskObject);
                this.clear();
                this.showMessage('success','the data saved','saved data');
                // console.log("the task",this.newTask);
            }).catch((error)=>{
              console.log(error);
            })
            this.taskContext.addNewTask(newTaskObject);
            // this.showMessage('success','the data saved','saved data');
            // console.log("the task",this.newTask);
            this.clear();
            return this.taskContext.tasks;
        }
    }
    onSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(this.addNewTask());
    
      }
      clear=()=>{
        this.taskName.current.value="";
        this.taskDetails.current.value="" ;
         this.startAt.current.value="";
          this.endAt.current.value="";
          this.taskCategory.current.value="";
      }
    checkForm=()=>{
        if(this.taskName.current.value!=""
         && this.taskDetails.current.value!="" 
         && this.startAt.current.value!=""
         && this.endAt.current.value!=""
         && this.taskCategory.current.value!=""
         ){
            return true;
         }else{
            this.showMessage("error","Enter Task info","Erorr data");
         }
    }

    showMessage=(icon,text,title)=>{
        Swal.fire({
            icon:icon,
            title:title,
            text:text,
            showCancelButton:false,
            showConfirmButton:false,
            timer:1500
        })
    }
    get newTask(){
        return new Task(
            Math.random(),
            this.taskName.current.value,
            this.taskCategory.current.value,
            this.taskDetails.current.value,
            this.startAt.current.value,
            this.endAt.current.value,
            "wating"
               
        );
    }

}
export default NewTaskController