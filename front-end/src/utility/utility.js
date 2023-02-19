import {getAllStudents} from "./client";
import {errorNotification} from "./Notification";


export const fetchStudents =(setStudents)=>{
    getAllStudents()
        .then(response=>response.json())
        .then(data=>{console.log(data);setStudents(data);})
        .catch(err=>{
            console.log(err.response);
            err.response.json().then(res => {
                console.log(res);
                errorNotification(
                    "There was an issue",
                    `${res.message} [${res.status}] [${res.error}]`
                )
            });
        });
}
