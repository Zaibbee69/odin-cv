import { useState, useEffect } from "react";
import CV from "./CV";
import SideBar from "./SideBar";

export default function Index({ btnData }) {
  const [isActive, setIsActive] = useState("personal");

  const [cvData, setCvData] = useState(btnData);

  useEffect(() => {
    setCvData(btnData);
  }, [btnData]);

  function handleButton(e) {
    setIsActive(e.currentTarget.value);
  }

  const handleChange = (section, field, value) => {
    setCvData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <>
      <div className="card-btn-ctn">
        <button value="personal" onClick={handleButton}>
          Personal
        </button>
        <button value="education" onClick={handleButton}>
          Education
        </button>
        <button value="experience" onClick={handleButton}>
          Experience
        </button>
      </div>
      <main
        style={{
          marginTop: "20px",
        }}
      >
        <SideBar
          isActive={isActive}
          cvData={cvData}
          handleChange={handleChange}
        />
        <CV cvData={cvData} />
      </main>
    </>
  );
}
