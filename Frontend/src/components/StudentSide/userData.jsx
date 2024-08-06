import React, { useState } from "react";
import PersonalD from "./Student Details/PersonalD";
import Cgpa from "./Student Details/CGPA";
import Internships from "./Student Details/Internships";
import StudentAchievement from "./Student Details/StudentAchievement";

const UserData = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [cgpa, setCgpa] = useState({});
  const [internship, setInternship] = useState({});
  const [achievements, setAchievements] = useState({});
  let [currentStep, setCurrentStep] = useState(1);

  const handlePersonalInfo = (data) => {
    console.log(data)
    setPersonalInfo(data);
    setCurrentStep(2);
  };

  const handleMarks = (data) => {
    setMarks(data);
    setCurrentStep(3);
  };

  const handleAchievements = (data) => {
    setAchievements(data);
    setCurrentStep(4);
  };

  const handleInternship = (data) => {
    setInternship(data);
    setCurrentStep(5); // or handle completion logic here
  };
  
  const handleBack = () => {
    setCurrentStep(currentStep--);
  };

  return (
    <div>
      {currentStep === 1 && <PersonalD onSave={handlePersonalInfo} back={handleBack}/>}
      {currentStep === 2 && <Cgpa onSave={handleMarks} />}
      {currentStep === 3 && <Internships onSave={handleAchievements} />}
      {currentStep === 4 && <StudentAchievement onSave={handleInternship} />}
    </div>
  );
};

export default UserData;
