import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import RegisterForm from "../component/Auth/RegisterForm";
import TaskContext from "../Context/taskContext";
import Helper from "../utils/Helper";

function LoginPage(){
    let navigate=useNavigate();
    let emaillogin=useRef();
    let passwordLogin=useRef();
    let taskContext=useContext(TaskContext);
 let onSubmitHandler=(event)=>{ 
  event.preventDefault();
   if(checked()){
    login();
   }
 }
 let checked=()=>{
  if(emaillogin.current.value!="" && passwordLogin.current.value!=""){
      return true;
  }else{
  //  Swal.fire({
  //    icon:"error",
  //    text:"the input must can't empty",
  //    title:"Error Enter Data",
  //    showCancelButton:false,
  //    showConfirmButton:false,
  //    timer:1500
  //  });
    Helper.showMessage("error","Error Enter Data","the input must can't empty")
   return false;
  }
  }
  const login=()=>{
    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxLhMyCAMj3b3bmEcg9HCooNYf099poiY",{
      email:emaillogin.current.value,
      password:passwordLogin.current.value,
      returnSecureToken:true
    }).then((response)=>{
      console.log(response);
      localStorage.setItem("logged_in",true);
      taskContext.setlogged_in(true);
      localStorage.setItem("token",response.data.idToken);
    navigate("../dashboard",{replace:true});
      console.log(response);
      
    }).catch((error)=>{
      console.log(error);
    })
  }
return (<>
<div className="container-fluid p-5 bg-primary text-white text-center login-cover">
 
 </div>
 
 
   
 <div className="container ">
   <div className="row">
 
     
        <div className="col-sm-1"></div>
        
 
     <div className="col-sm-10">
    <div className="shadow-5-strong form-box">
 <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
   <li className="nav-item" role="presentation">
     <a className="nav-link active" id="tab-login" data-bs-toggle="pill" href="#pills-login" role="tab"
       aria-controls="pills-login" aria-selected="true">Login</a>
   </li>
   <li className="nav-item" role="presentation">
     <a className="nav-link" id="tab-register" data-bs-toggle="pill" href="#pills-register" role="tab"
       aria-controls="pills-register" aria-selected="false">Register</a>
   </li>
 </ul>
 <div className="tab-content">
   <div className="tab-pane  fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
     <form onSubmit={onSubmitHandler}>
       <div className="text-center mb-3">
         <h4 className="mb-4 mt-5">Login To Momen Task System With</h4>
         <button type="button" className="btn btn-link btn-floating mx-1">
           <i className="fab fa-facebook-f"></i>
         </button>
 
         <button type="button" className="btn btn-link btn-floating mx-1">
           <i className="fab fa-google"></i>
         </button>
 
         <button type="button" className="btn btn-link btn-floating mx-1">
           <i className="fab fa-twitter"></i>
         </button>
 
         <button type="button" className="btn btn-link btn-floating mx-1">
           <i className="fab fa-github"></i>
         </button>
       </div>
 
       <h4 className="mb-5 mt-2 text-center">or</h4>
 
       <div className="form-outline mb-4">
         <input ref={emaillogin} type="email" id="loginName" className="form-control"  placeholder="Email or username" />
        
       </div>
 
       <div className="form-outline mb-4">
         <input ref={passwordLogin} type="password" id="loginPassword" className="form-control" placeholder="Password" />
      
       </div>
 
       <div className="row mb-4">
         <div className="col-md-6 d-flex justify-content-center">
           <div className="form-check mb-3 mb-md-0">
             <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
             <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
           </div>
         </div>
 
         <div className="col-md-6 d-flex justify-content-center">

           <a href="#!">Forgot password?</a>
         </div>
       </div>
 

       <button type="submit" className="btn btn-main btn-block mb-4">Sign in</button>
 

       <div className="text-center">
         <p>Not a member? <a href="#!">Register</a></p>
       </div>
     </form>
   </div>
   <RegisterForm/>
 </div>
 </div>
       </div>
       <div className="col-sm-1"></div>    
   </div>
 </div>
</>)
}
export default LoginPage;