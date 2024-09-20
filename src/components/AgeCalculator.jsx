import React, { useState } from "react";
import "./AgeCalculator.css";
const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const calculateAge = () => {
    const today = new Date();
    const birthdateDate = new Date(birthdate);

    let years = today.getFullYear() - birthdateDate.getFullYear();
    let months = today.getMonth() - birthdateDate.getMonth();
    let days = today.getDate() - birthdateDate.getDate();
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setAge({ years, months, days });
  };
  const handleReset = () => {
    setBirthdate("");
    setAge(0);
  };
  return (
    <div className="container">
      <h2 className="text-center">Age Calculator</h2>
      <p className="text-center">
        The Age Calculator can determine the age or interval between two dates.
        The calculated age will be displayed in years,
      </p>
      <div className="row">
        <div className="col mx-5">
          <h6>Date of Birth</h6>
          <input
            className="form-control"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <div className="row">
            <div className="col text-end my-3">
              <button
                className="btn btn-success btn-sm me-1"
                onClick={calculateAge}
              >
                Calculate Age
              </button>

              <button className="btn btn-sm btn-danger" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="col bg-light">
          <div className="container_middle_para">
            <h2 className="my-2">Your Age is:</h2>
          </div>
          <h1 className="age_heading text-center text-primary">
            {age.years > 0 || age.months > 0 || age.days > 0
              ? `${age.years} years, ${age.months} months, ${age.days} days`
              : ""}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
