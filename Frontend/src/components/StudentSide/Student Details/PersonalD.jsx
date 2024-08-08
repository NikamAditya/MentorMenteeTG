import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PersonalD = () => {
  // const [name, setName] = useState('');
  // const [program, setProgram] = useState('');
  // const [branch, setBranch] = useState('');
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  // const [phone, setPhone] = useState('');
  // const [dob, setDob] = useState('');

  const [userInfo, setUserInfo] = useState({
    name: "",
    program: "",
    branch: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.email) {
      setEmail(loggedInUser.email);
      userInfo.email = loggedInUser.email
    }
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    if(personalInfo){
      setUserInfo(personalInfo)
    }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[0-9]+$/;

    if (!nameRegex.test(userInfo.name)) {
      newErrors.name = "Name should contain only letters and spaces.";
    }

    if (!phoneRegex.test(userInfo.phone)) {
      newErrors.phone = "Phone number should contain only digits.";
    }

    if (!userInfo.phone) {
      newErrors.phone = "Phone number is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlegonext = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log(userInfo)
      localStorage.setItem("personalInfo", JSON.stringify(userInfo));
      navigate("/CGPA")
    }
  };

  const handleBack = () => {

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white border border-blue-700 rounded-md p-8 shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-900">
          Personal Details
        </h1>
        <form onSubmit={handlegonext}>
          <div className="my-4">
            <label htmlFor="name" className="block text-sm text-black-500 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              placeholder="Enter your name"
              value={userInfo.name}
              onChange={handleChange}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="year" className="block text-sm text-black-500 mb-1">
              Program
            </label>
            <select
              id="year"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              name="program"
              value={userInfo.program}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Select
              </option>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select>
          </div>
          <div className="my-4">
            <label
              htmlFor="branch"
              className="block text-sm text-black-500 mb-1"
            >
              Branch
            </label>
            <select
              id="branch"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              name="branch"
              value={userInfo.branch}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Select
              </option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Artificial Intelligence & Data Science">
                Artificial Intelligence & Data Science
              </option>
            </select>
          </div>
          <div className="my-4">
            <label
              htmlFor="email"
              className="block text-sm text-black-500 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              value={email}
              readOnly
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="phone"
              className="block text-sm text-black-500 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              placeholder="Enter your phone number"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="dob" className="block text-sm text-black-500 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              name="dob"
              value={userInfo.dob}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 bg-purple-800 text-orange-300 font-bold rounded-md hover:bg-blue-500"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleBack}
            className="mt-6 bg-gray-500 text-white py-2 px-4 rounded w-full md:w-auto"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalD;
