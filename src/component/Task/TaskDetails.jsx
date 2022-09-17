import { Link } from "react-router-dom";
import image from "../../resourses/img/3.png"
const TaskDetails=(props)=>{
return (
    <div className="col-md-4">
    <div className="card task card">
      <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">    <span data-feather="calendar"></span>{props.startAt} <span className="main-color">To </span>{props.endAt}</h6>
            <p className="card-text">{props.description}</p>
            <hr/>
           <span  className="btn badge-light-warning status-btn Wating">{props.status}</span>

           <Link to={`/dashboard/${props.id}/tasks`} className="btn btn-bg-gray pull-right">
            <span data-feather="arrow-right"></span>
          </Link>

        </div>
       </div>
      </div>
)
}
export default TaskDetails;
