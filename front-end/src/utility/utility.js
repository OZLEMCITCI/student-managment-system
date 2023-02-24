import {getAllStudents} from "./client";
import {errorNotification} from "./Notification";


export const fetchStudents =(setStudents,setFetching)=>{
    getAllStudents()
        .then(response=>response.json())
        .then(data=>{console.log(data);setStudents(data);setFetching(false)})
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

 export const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
];
