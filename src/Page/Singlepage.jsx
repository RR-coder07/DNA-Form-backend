import { useEffect, useState } from "react"
import Navbar from "../Component/Navbar"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

function Singlepage(){
    const {id} = useParams()
    console.log(id)
    const navigate = useNavigate()
    const[studentDetail,setstudentDetail] = useState({})
const fetchsinglestudentDetail = async () =>{
    try {
        const response = await axios.get("http://localhost:7000/studentDetail/" + id)
setstudentDetail(response.data.data)
    } catch (error) {
        console.log(error)
        console.log("error while fetching sigle student data")
    }

}

    useEffect(()=>{
fetchsinglestudentDetail()
    },[])

 const deletestudentDetail = async()=>{

    try {
const response =await axios.delete("http://localhost:7000/studentDetail/" + id)
    console.log(response.status)
    if(response.status === 200){
alert("studentDetail deleted successfully")
navigate("/")
    }
    } catch (error) {
        alert("Something went wrong")
        console.log(error)
    }
    
 
 }
    return(
      <>
      <Navbar/>
      {/* ✅ CORRECTED: Removed invalid classes and added `flex` to make a proper flex container.
      */}
      <div className="bg-gray-100 dark:bg-gray-800 py-8 flex justify-center flex-wrap"> 
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src = {studentDetail.filename} alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600" onClick={deletestudentDetail}>Delete me</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">


    <h2 className="text-2xl font-bold text-green-800 dark:text-white mb-2">Student's Personal Details :</h2>

    <h2 className="font-bold text-gray-700 dark:text-gray-300">Full Name : {studentDetail.fullname}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Date of  Birth : {studentDetail.dateofBirth}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300"></h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">whatsappNumber : {studentDetail.whatsappNumber}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Other No. : {studentDetail.otherNumber}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Email : {studentDetail.email}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Gender : {studentDetail.gender}</h2>

        <h2 className="text-2xl font-bold text-green-800 dark:text-white mb-2">Parent's Details :</h2>

    <h2 className="font-bold text-gray-700 dark:text-gray-300">Father's Name : {studentDetail.fatherName}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Father's Occupation : {studentDetail.occupationFather}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Father Contact No. : {studentDetail.contactNumberFather}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Mother's Name : {studentDetail.motherName}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Mother's Occupation : {studentDetail.occupationMother}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Mother's Contact NO. : {studentDetail.contactNumberMother}</h2>
    
        <h2 className="text-2xl font-bold text-green-800 dark:text-white mb-2">Local Guardian Details :</h2>

    <h2 className="font-bold text-gray-700 dark:text-gray-300">Guardian's Name : {studentDetail.guardianName} </h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Guardian's Realtion : {studentDetail.guardianrelation}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300"> Guardian's Contact No.: {studentDetail.guardianContactNumber}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Guardian's Whatsapp Number: {studentDetail.guardianWhatsappNumber}</h2>

      <h2 className="text-2xl font-bold text-green-800 dark:text-white mb-2">Present Address :</h2>

    <h2 className="font-bold text-gray-700 dark:text-gray-300">Province : {studentDetail.presentProvince}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Lobule : {studentDetail.presentLobule}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Ward : {studentDetail.presentWard}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Village/Tole : {studentDetail.presentVillage}</h2>

      <h2 className="text-2xl font-bold text-green-800 dark:text-white mb-2">Permanent Address :</h2>

    <h2 className="font-bold text-gray-700 dark:text-gray-300">Province {studentDetail.permanentProvince}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Mother's Occupation : {studentDetail.permanentLobule}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Mother's Contact NO. : {studentDetail.permanentWard}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Village/Tole : {studentDetail.permanentVillage}</h2>
        <div>

      <h2 className="text-2xl font-bold text-green-800 dark:text-white mb-2">School's Details :</h2>
    
    <h2 className="font-bold text-gray-700 dark:text-gray-300">SchoolName : {studentDetail.schoolName}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Current Grade : {studentDetail.currentGrade}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Grade In Exam : {studentDetail.gradeInExam}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">Gpa : {studentDetail.gpa}</h2>
    <h2 className="font-bold text-gray-700 dark:text-gray-300">School Type : {studentDetail.schoolType}</h2>

<h2 className="text-2xl font-bold text-green-800 dark:text-white mb-2">Interseted Course Details :</h2>

<h2 className="font-bold text-gray-700 dark:text-gray-300">
  Medium : {studentDetail.medium
    ? Object.keys(studentDetail.medium)
        .filter(key => studentDetail.medium[key])
        .join(", ")
    :  "Not provided"}
</h2>

<h2 className="font-bold text-gray-700 dark:text-gray-300">
  Tuition For : {studentDetail.tution
    ? Object.keys(studentDetail.tution)
        .filter(key => studentDetail.tution[key])
        .join(", ")
    :  "Not provided"}
</h2>
<h2 className="font-bold text-gray-700 dark:text-gray-300"> Heard About : {studentDetail.heardAbout
        ? Object.keys(studentDetail.heardAbout)
            .filter(key => studentDetail.heardAbout[key])
            .join(", ")
            : "Not provided"}
</h2>
    
  
     {studentDetail.newToClass === "No" ?  <h2 className="font-bold text-gray-700 dark:text-gray-300">Join Year : {studentDetail.joinYear}</h2> :      <h2 className="font-bold text-gray-700 dark:text-gray-300">New To Join : Yes</h2>} 
     {studentDetail.familyStudied === "Yes" ?  <h2 className="font-bold text-gray-700 dark:text-gray-300">Family MemberName : {studentDetail.familyMemberName}</h2> :      <h2 className="font-bold text-gray-700 dark:text-gray-300">familyStudied : No</h2>} 
                
                

    <h2 className="text-2xl font-bold text-green-800 dark:text-white mb-2">Suggestion :</h2>



    <h2 className="font-bold text-gray-700 dark:text-gray-300">{studentDetail.suggestion}</h2>

                </div>



            </div>
        </div>
    </div>
</div>

      </>
    )
}

export default Singlepage