import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskContext from "../../Context/taskContext";
import Helper from "../../utils/Helper";

const RegisterForm=()=>{
let nameRef=useRef();
let emailRef=useRef();
let passwordRef=useRef();
let cpaswordRef=useRef();
let termRef=useRef();
let [isTerm,setTerm]=useState();
let navigate=useNavigate();
let taskContext=useContext(TaskContext);
let onSubmitHandler=(event)=>{
  event.preventDefault();
  if(check()){
    register();
  }

}
let check=()=>{
  if(nameRef.current.value!=""
   && emailRef.current.value!=""
   && passwordRef.current.value!=""
   && cpaswordRef.current.value!=""
   && termRef.current.checked){
    if(passwordRef.current.value==cpaswordRef.current.value){
   Helper.showMessage('success',"Success","the register successfully");

      return true;
    }
   Helper.showMessage('error',"Error","the confirm password error !");
    return false;
   }
   Helper.showMessage('error',"Error","the must can not put empty input");
   return false;
}
const register=()=>{
axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxLhMyCAMj3b3bmEcg9HCooNYf099poiY",{
  email:emailRef.current.value,
  password:passwordRef.current.value,
  returnSecureToken:true
}).then((reponse)=>{
  console.log(Response);
  localStorage.setItem("token",reponse.data.idToken);
  localStorage.setItem("logged_in",true);
  taskContext.setlogged_in(true);
  navigate("/dashboard",{replace:true});

}).catch((error)=>{
console.log(error);
})
}
  return( 
  <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
  <form onSubmit={onSubmitHandler}>
    <div className="text-center mb-3">
         <h4 className="mb-4 mt-5">Register in Momen Task System  with</h4>
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
  
       <h4 className="mb-4 mt-5 text-center">or:</h4>
    <div className="form-outline mb-4">
      <input type="text" id="registerUsername" className="form-control" placeholder="Username" ref={nameRef} />
    </div>
  
    <div className="form-outline mb-4">
      <input type="email" id="registerEmail" className="form-control" placeholder="Email" ref={emailRef} />
      
    </div>
  
    <div className="form-outline mb-4">
               
  
      <input type="password" id="registerPassword" className="form-control" placeholder="password" ref={passwordRef} />
    </div>
  
    <div className="form-outline mb-4">
          
      <input type="password" id="registerRepeatPassword" className="form-control"  placeholder="repeat password" ref={cpaswordRef} />
   
    </div>
  
    <div className="form-check d-flex justify-content-center mb-4">
      <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" 
        aria-describedby="registerCheckHelpText" onChange={()=>setTerm(termRef.current.checked)} ref={termRef} />
      <label className="form-check-label" htmlFor="registerCheck">
        I have read and agree to the terms
      </label>
    </div>
  
    <button type="submit" disabled={!isTerm} className="btn btn-main btn-block mb-3">Sign in</button>
  </form>
  </div>)
}
export default RegisterForm;