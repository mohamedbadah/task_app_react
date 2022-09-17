class Task{
taskName;
taskCategory;
taskDetails;
startAt;
endAt;
status
constructor(id,taskName,taskCategory,taskDetails,startAt,endAt,status){
this.id=id;
this.taskName=taskName;
this.taskCategory=taskCategory;
this.taskDetails=taskDetails;
this.startAt=startAt;
this.endAt=endAt;
this.status=status;
}
}
export default Task;