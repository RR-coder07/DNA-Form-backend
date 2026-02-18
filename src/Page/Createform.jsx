import { useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/dnalogo.png"
function CreateForm() {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    dateofBirth: "",
    gender: "",
    whatsappNumber: "",
    otherNumber: "",
    fatherName: "",
    occupationFather: "",
    contactNumberFather: "",
    motherName: "",
    occupationMother: "",
    contactNumberMother: "",
    guardianName: "",
    guardianContactNumber: "",
    guardianrelation: "",
    guardianWhatsappNumber: "",
    presentProvince: "",
    presentLobule: "",
    presentWard: "",
    presentVillage: "",
    permanentProvince: "",
    permanentWard: "",
    permanentLobule: "",
    permanentVillage: "",
    filename: "",
    schoolName: "",
  currentGrade: "",
  gradeInExam: "",
  gpa: "",
  schoolType: "",
  medium: { english: false, nepali: false },
  tution: { mathematics: false, science: false, english: false, socialStudies: false, nepali: false },
  heardAbout: { friends: false, relatives: false, advertisement: false },
  familyStudied: "",
  familyMemberName: "",
  newToClass: "",
  joinYear: ""

  });

  const handleChange = (e) => {
    const { name, value, file , checked ,type } = e.target;
 
if (type === "file") {
  setData({
    ...data,
    [name]: e.target.files[0] 
  });
  return;
}

    if (type === "checkbox" && name.includes(".")) {
    const [parent, child] = name.split(".");
    setData({
      ...data,
      [parent]: {
        ...data[parent],
        [child]: checked,
      },
    });
    return;
  }

     if (type === "checkbox") {
    setData({
      ...data,
      [name]: checked,
    });
    return;
  }

  // Normal text/radio input
  setData({
    ...data,
    [name]: value,
  });
};

  const navigate = useNavigate();

  const submitstudentDetail = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  for (let key in data) {
    if (data[key] instanceof File) {
      formData.append(key, data[key]);
    } else if (typeof data[key] === "object" && data[key] !== null) {
      formData.append(key, JSON.stringify(data[key]));
    } else {
      formData.append(key, data[key]);
    }

  }

  try {
    const response = await axios.post(
      "http://localhost:7000/studentDetail/",
      formData, // send FormData, not data
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  } catch (err) {
    console.error("Submit error:", err);
    alert("Server error. Check console for details.");
  }
};


  return (
    <>
      <Navbar />
      <div className="bg-gray-100 p-6 min-h-screen w-full " >
        <div className="max-w-full mx-auto bg-white shadow-lg rounded-xl p-6">
          {/* Header */}
       <div className="flex items-center justify-center gap-6">
      {/* Logo */}
      <div>
       <img
          src={logo}
          alt="Dev Narayan Academy Logo"
            className="w-40 h-40 object-contain"

        /> 
      </div>

      {/* Academy Info */}
      <div className="text-center border-b pb-4 mb-4">
        <h1 className="text-2xl font-bold text-green-700">
          Dev Narayan Academy
        </h1>
        <p className="text-gray-600">Kishori nagar, Janakpurdham-11</p>
        <p className="text-gray-600">Phone: 9709142728, 9709142729</p>
        <p className="text-gray-600">Email: dnaclasses31@gmail.com</p>
      </div>
    </div>

    {/* Admission Form Title */}
    <div className="text-center mt-4">
      <h2 className="text-xl font-semibold text-white bg-green-700 py-2 px-6 w-full rounded-md inline-block shadow-md">
        Admission Form
      </h2>
    </div>
  

          {/* Form Start */}
          <form onSubmit={submitstudentDetail}>
            {/* student photo */}
            <div className="flex justify-start mb-6 pt-7">
              <input
                type="file"
                name="filename"
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            {/* Student Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Student's Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="date"
                  name="dateofBirth"
                  value={data.dateofBirth}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="whatsappNumber"
                  value={data.whatsappNumber}
                  onChange={handleChange}
                  placeholder="Whatsapp No."
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="otherNumber"
                  value={data.otherNumber}
                  onChange={handleChange}
                  placeholder="Other No."
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="border rounded-lg p-2 w-full md:col-span-2"
                />
              </div>

              <div className="mt-3">
                <p className="font-medium">Gender:</p>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={data.gender === "Male"}
                      onChange={handleChange}
                      className="accent-green-700"
                    />{" "}
                    Male
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={data.gender === "Female"}
                      onChange={handleChange}
                      className="accent-green-700"
                    />{" "}
                    Female
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={data.gender === "Other"}
                      onChange={handleChange}
                      className="accent-green-700"
                    />{" "}
                    Other
                  </label>
                </div>
              </div>
            </div>

            {/* Parent Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Parent's Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fatherName"
                  value={data.fatherName}
                  onChange={handleChange}
                  placeholder="Father's Name"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="occupationFather"
                  value={data.occupationFather}
                  onChange={handleChange}
                  placeholder="Father's Occupation"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="contactNumberFather"
                  value={data.contactNumberFather}
                  onChange={handleChange}
                  placeholder="Father's Contact No."
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="motherName"
                  value={data.motherName}
                  onChange={handleChange}
                  placeholder="Mother's Name"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="occupationMother"
                  value={data.occupationMother}
                  onChange={handleChange}
                  placeholder="Mother's Occupation"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="contactNumberMother"
                  value={data.contactNumberMother}
                  onChange={handleChange}
                  placeholder="Mother's Contact No."
                  className="border rounded-lg p-2 w-full"
                />
              </div>
            </div>

            {/* Local Guardian Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Local Guardian Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="guardianName"
                  value={data.guardianName}
                  onChange={handleChange}
                  placeholder="Guardian's Name"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="guardianrelation"
                  value={data.guardianrelation}
                  onChange={handleChange}
                  placeholder="Relation"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="guardianContactNumber"
                  value={data.guardianContactNumber}
                  onChange={handleChange}
                  placeholder="Contact No."
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="guardianWhatsappNumber"
                  value={data.guardianWhatsappNumber}
                  onChange={handleChange}
                  placeholder="Whatsapp No."
                  className="border rounded-lg p-2 w-full"
                />
              </div>
            </div>

            {/* Address - Present */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Present Address (Residence)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="presentProvince"
                  value={data.presentProvince}
                  onChange={handleChange}
                  placeholder="Province"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="presentLobule"
                  value={data.presentLobule}
                  onChange={handleChange}
                  placeholder="SM/M/RM"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="presentWard"
                  value={data.presentWard}
                  onChange={handleChange}
                  placeholder="Ward"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="presentVillage"
                  value={data.presentVillage}
                  onChange={handleChange}
                  placeholder="Tole/Village"
                  className="border rounded-lg p-2 w-full"
                />
              </div>
            </div>

            {/* Address - Permanent */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Permanent Address (Residence)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="permanentProvince"
                  value={data.permanentProvince}
                  onChange={handleChange}
                  placeholder="Province"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="permanentLobule"
                  value={data.permanentLobule}
                  onChange={handleChange}
                  placeholder="SM/M/RM"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="permanentWard"
                  value={data.permanentWard}
                  onChange={handleChange}
                  placeholder="Ward"
                  className="border rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  name="permanentVillage"
                  value={data.permanentVillage}
                  onChange={handleChange}
                  placeholder="Tole/Village"
                  className="border rounded-lg p-2 w-full"
                />
              </div>
            </div>
 {/* School's Details */}
      <div>
        <h2 className="font-semibold text-green-800 text-lg mb-4">School's Details</h2>
        <label className="block mb-2 font-medium">
          School Name
          <input
            type="text"
            name="schoolName"
      
            onChange={handleChange}
            className="border border-gray-400 rounded px-2 py-1 w-full mt-1"
          />
        </label>
        <label className="block mb-2 font-medium">
          Current Grade
          <input
            type="text"
            name="currentGrade"
      
            onChange={handleChange}
            className="border border-gray-400 rounded px-2 py-1 w-1/3 mt-1"
          />
        </label>
        <label className="block mb-2 font-medium d-block">
          Grade in nal exam
          <input
            type="text"
            name="gradeInExam"
          
            onChange={handleChange}
            className="border border-gray-400 rounded px-2 py-1 w-1/3 mt-1"
          />
        </label>
        <label className="block mb-2 font-medium">
          GPA
          <input
            type="text"
            name="gpa"
           
            onChange={handleChange}
            className="border border-gray-400 rounded px-2 py-1 w-1/3 mt-1"
          />
        </label>

        <div className="mt-4">
          <p className="font-semibold">School type</p>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="schoolType"
              value="Government"
              onChange={handleChange}
              checked={data.schoolType === "Government"}
              className="mr-1"
            />
            Government
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="schoolType"
              value="Private"
              onChange={handleChange}
              checked={data.schoolType === "Private"}
              className="mr-1"
            />
            Private
          </label>
        </div>
      </div>

      {/* Interested Course Details */}
      <div>
        <h2 className="font-semibold text-green-800 text-lg mb-4">Interested Course Details:</h2>

        <p className="font-semibold">Medium:</p>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="medium.english"
            checked={data.medium.english}
            onChange={handleChange}
            className="mr-1"
          />
          English
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="medium.nepali"
            checked={data.medium.nepali}
            onChange={handleChange}
            className="mr-1"
          />
          Nepali
        </label>

        <p className="mt-4 font-semibold">Tution for:</p>
        {["mathematics", "science", "english", "socialStudies", "nepali"].map((subject) => (
          <label key={subject} className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              name={`tution.${subject}`}
              checked={data.tution[subject]}
              onChange={handleChange}
              className="mr-1"
            />
            {subject.charAt(0).toUpperCase() + subject.slice(1).replace(/([A-Z])/g, " $1")}
          </label>
        ))}
      </div>

      {/* How did you hear about DNA Classes */}
      <div>
        <p className="font-semibold text-green-800">
          How did you hear about DNA Classes :
        </p>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="heardAbout.friends"
            checked={data.heardAbout.friends}
            onChange={handleChange}
            className="mr-1"
          />
          Friends
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="heardAbout.relatives"
            checked={data.heardAbout.relatives}
            onChange={handleChange}
            className="mr-1"
          />
          Relatives
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            name="heardAbout.advertisement"
            checked={data.heardAbout.advertisement}
            onChange={handleChange}
            className="mr-1"
          />
          Advertisement
        </label>
      </div>

      {/* Family Studied */}
      <div>
        <p className="font-semibold text-green-800">
          Has anyone from your family studied in DNA or is currently studying?
        </p>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="familyStudied"
            value="Yes"
            checked={data.familyStudied === "Yes"}
            onChange={handleChange}
            className="mr-1"
          />
          Yes
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="familyStudied"
            value="No"
            checked={data.familyStudied === "No"}
            onChange={handleChange}
            className="mr-1"
          />
          No
        </label>

        <label className="block mt-2">
          If Yes, Mention His/Her Name:
          <input
            type="text"
            name="familyMemberName"
            value={data.familyMemberName}
            onChange={handleChange}
            disabled={data.familyStudied !== "Yes"}
            className="border border-gray-400 rounded px-2 py-1 w-full mt-1 disabled:bg-gray-100"
          />
        </label>
      </div>

      {/* New to DNA Class */}
      <div>
        <p className="font-semibold text-green-800">Are you new to DNA Class:</p>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="newToClass"
            value="Yes"
            checked={data.newToClass === "Yes"}
            onChange={handleChange}
            className="mr-1"
          />
          Yes
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="newToClass"
            value="No"
            checked={data.newToClass === "No"}
            onChange={handleChange}
            className="mr-1"
          />
          No
        </label>

        <label className="block mt-2">
          If no, which year did you join?
          <input
            type="text"
            name="joinYear"
            value={data.joinYear}
            onChange={handleChange}
            disabled={data.newToClass !== "No"}
            className="border border-gray-400 rounded px-2 py-1 w-full mt-1 disabled:bg-gray-100"
          />
        </label>
      </div>

      {/* Declaration */}
      <div>
        <p className="text-sm text-gray-700 italic">
          I hereby declare that all indataation provided in this data is accurate & truthful to the best of my knowledge. I will accept my termination from DNA Class if this institute finds my indataation false or incorrect.
        </p>
      </div>



      {/* Remarks from Office */}
      <div>
        <label className="font-semibold text-gray-900 block mb-1">Suggestion</label>
        <textarea
          className="w-full border border-gray-500 rounded p-2 h-24"
           type="text"
            name="suggestion"
            value={data.suggestion}
            onChange={handleChange}
          placeholder="Your Suggestion For DNA Classes"
        />
      </div>

    
            {/* Submit */}
            <div className="text-center ">
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800"
                 
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
