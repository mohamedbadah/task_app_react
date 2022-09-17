import LoginPage from "../pages/LoginPage";
import { Routes,Route,Navigate } from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import TaskPage from "../pages/TaskPage";
import TaskNew from "../pages/TaskNew";
import TaskDetailsPage from "../pages/TaskDetailsPage";
import { useContext } from "react";
import TaskContext from "../Context/taskContext";
function AppRoute(){
    let taskContext=useContext(TaskContext);
    return (
        <Routes>
            {/* <Route path="/dashboard" element={<Navigate to="/dashboard/tasks"/>}/> */}
        <Route path="/dashboard" element={JSON.parse(taskContext.isLogged_in)?( <Dashboard/> ): (<Navigate to="/login"/>)}>
            <Route path="/dashboard/tasks" element={<TaskPage/>}/>
            <Route path="/dashboard/tasks/newtasks" element={<TaskNew/>}/>
            <Route path={`/dashboard/:id/tasks`} element={<TaskDetailsPage/>}/>
        </Route>
        <Route path="/login" element={taskContext.isLogged_in!=true?<LoginPage/> :<Navigate to="/dashboard"/>}/>
        <Route path="/*" element={taskContext.isLogged_in!=true ?<Navigate to="/login"/>:<Navigate to="/dashboard"/>}/>
        {/* <Route path="/dashboard/newtasks" element={<TaskNew/>}/> */}
        
        </Routes>
    //     <Routes>
    //     {/* <Route path="/dashboard" element={<Navigate to="/dashboard/tasks"/>}/> */}
    // <Route path="/dashboard" element={JSON.parse(localStorage.getItem("logged_in")) ? <Dashboard/> :<Navigate to="/login"/>}>
    //     <Route path="/dashboard/tasks" element={<TaskPage/>}/>
    //     <Route path="/dashboard/tasks/newtasks" element={<TaskNew/>}/>
    //     <Route path={`/dashboard/:id/tasks`} element={<TaskDetailsPage/>}/>
    // </Route>
    // <Route path="/login" element={JSON.parse(localStorage.getItem("logged_in"))!=true?<LoginPage/> :<Navigate to="/dashboard"/>}/>
    // <Route path="/*" element={JSON.parse(localStorage.getItem("logged_in"))!=true?<Navigate to="/login"/>:<Navigate to="/dashboard"/>}/>
    // {/* <Route path="/dashboard/newtasks" element={<TaskNew/>}/> */}
    
    // </Routes>
    )
 
}
export default AppRoute;