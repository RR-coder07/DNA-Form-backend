
import { useEffect, useState } from "react";

import axios from "axios";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";

function Homepage(){
    const[studentDetails,setstudentDetails] = useState([])
const fetchstudentDetails= async() =>{
    const response = await axios.get("http://localhost:7000/studentDetail")
 setstudentDetails(response.data.data)
}

    useEffect(()=>{
        fetchstudentDetails()
    },[])


    
    console.log(studentDetails)
    console.log(studentDetails.fullname)
    return(
        <>
        <Navbar/>
       
       
       <div className="flex flex-wrap justify-space-between gap-4 " >
        {
studentDetails.map(function(studentDetail){
    return(

    <Card studentDetail={studentDetail}/>

      
    )

}
  
)
}
        </div>     
        </>
    )
}

export default Homepage