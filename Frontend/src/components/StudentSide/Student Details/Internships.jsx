import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Internships = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [organizationName, setOrganizationName] = useState("");
  const [mode, setMode] = useState("");
  const [role, setRole] = useState("");

  const [stipend, setStipend] = useState("");

  const [internshipInfo, setInternshipInfo] = useState({
    organization: "",
    year: "",
    branch: "",
    role: "",
    from: "",
    to: "",
    Stipend: "",
    mode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInternshipInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleStipendChange = (e) => {
    const { id } = e.target;
    setStipend(id === "stipend" ? "Yes" : "No");
    internshipInfo.Stipend = stipend;
  };

  useEffect(() => {
    const internshipInfo = localStorage.getItem("internshipInfo");
    if(internshipInfo){
      setInternshipInfo(JSON.parse(internshipInfo))
    }
  }, []);

  const handleNext = () => {
    localStorage.setItem("internshipInfo", JSON.stringify(internshipInfo));
    navigate("/StudentAchievement");
  };

  const handleBack = () => {
    navigate("/CGPA");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white border border-blue-700 rounded-md p-8 shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-900">
          Internship Details
        </h1>
        <form onSubmit={handleNext}>
          <div className="my-4">
            <label
              htmlFor="organization"
              className="block text-sm text-black-500 mb-1"
            >
              Organization
            </label>
            <input
              type="text"
              id="organization"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              placeholder="Enter Organization Name"
              name="name"
              value={internshipInfo.name}
              onChange={handleChange}
            />
            {errors.organizationName && (
              <p className="text-red-500 text-sm">{errors.organizationName}</p>
            )}
          </div>
          <div className="my-4">
            <label htmlFor="year" className="block text-sm text-black-500 mb-1">
              Year
            </label>
            <select
              id="year"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              name="year"
              value={internshipInfo.year}
              onChange={handleChange}
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
            <label htmlFor="role" className="block text-sm text-black-500 mb-1">
              Role
            </label>
            <input
              type="text"
              id="role"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              placeholder="Enter your role"
              name="role"
              value={internshipInfo.role}
              onChange={handleChange}
            />
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role}</p>
            )}
          </div>
          <div className="my-4">
            <label
              htmlFor="period-from"
              className="block text-sm text-black-500 mb-1"
            >
              Period From
            </label>
            <input
              type="date"
              id="period-from"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              name="from"
              value={internshipInfo.from}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="period-to"
              className="block text-sm text-black-500 mb-1"
            >
              Period To
            </label>
            <input
              type="date"
              id="period-to"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              name="to"
              value={internshipInfo.to}
              onChange={handleChange}
            />
          </div>
          <div className="my-4">
            <label
              htmlFor="stipend"
              className="block text-sm text-black-500 mb-1"
            >
              Stipend
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="stipend"
                className="mr-2"
                checked={stipend === "Yes"}
                onChange={handleStipendChange}
              />
              <label htmlFor="stipend" className="text-sm text-black-500">
                Yes
              </label>
              <input
                type="checkbox"
                id="no-stipend"
                className="ml-4 mr-2"
                checked={stipend === "No"}
                onChange={handleStipendChange}
              />
              <label htmlFor="no-stipend" className="text-sm text-black-500">
                No
              </label>
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="mode" className="block text-sm text-black-500 mb-1">
              Mode
            </label>
            <input
              type="text"
              id="mode"
              className="block w-full py-2 px-3 text-sm border border-blue-500 rounded-md focus:border-black"
              placeholder="Enter mode of internship"
              name="mode"
              value={internshipInfo.mode}
              onChange={handleChange}
            />
            {errors.mode && (
              <p className="text-red-500 text-sm">{errors.mode}</p>
            )}
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
            className="ml-4 bg-gray-500 text-white py-2 px-3 rounded"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="ml-4 bg-gray-500 text-white py-2 px-3 rounded"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Internships;
