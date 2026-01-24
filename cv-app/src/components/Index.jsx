import { useState } from "react";
import CV from "./CV";
import SideBar from "./SideBar";

export default function Index() {
  const [isActive, setIsActive] = useState("personal");

  function handleButton(e) {
    setIsActive(e.currentTarget.value);
  }
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
        <SideBar isActive={isActive} />
        <CV />
      </main>
    </>
  );
}
