import Swal from "sweetalert2";

class Helper{
static showMessage(icon,title,text){
    Swal.fire({
    icon:icon,
    title:title,
    text:text,
    showCancelButton:false,
    showConfirmButton:false,
    timer:1500
    })
}
}
export default Helper;