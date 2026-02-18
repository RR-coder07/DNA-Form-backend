import { Link } from "react-router-dom"

function Card(props){
  console.log("props in card",props)

    return(

            <>

        <Link to={`/studentDetail/${props.studentDetail._id}`}>
      
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full ">
        <img src={props.studentDetail.filename} className="w-10 h-10 rounded-full mr-4"/>
        <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{props.studentDetail.fullname}</h1>
            <h2 className="text-1xl font-bold text-gray-800 mb-2 ">CurrentGrade  :<span className="md:pl-4 ">{props.studentDetail.currentGrade}</span></h2>
            <h2 className="text-1xl font-bold text-gray-800 mb-2 ">CurrentGrade  :<span className="md:pl-4 ">{props.studentDetail.schoolType}</span></h2>
            <p className="text-gray-700 leading-tight mb-4">
               {props.studentDetail.schoolName}
            </p>
          
        </div>
    </div>
</Link>
        </>


     )}
export default Card