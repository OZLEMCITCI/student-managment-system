import {useState,useEffect} from "react"
import {fetchStudents} from "./utility/utility";
import AppLayout from "./components/layout";
import "./css/App.css"

function  App(){

    const [students,setStudents]=useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(()=>{
        fetchStudents(setStudents,setFetching);
    },[])

    return ( <AppLayout students={students} fetching={fetching}/>)


}

export default App;