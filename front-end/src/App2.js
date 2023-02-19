import {useState,useEffect} from "react"
import {fetchStudents} from "./utility/utility";
import AppLayout from "./components/layout";
import "./css/App.css"

function  App(){

    const [students,setStudents]=useState([]);

    useEffect(()=>{
        fetchStudents(setStudents);
    },[])

    return (students.length>0 ? <AppLayout/>: <p>no data</p>)


}

export default App;