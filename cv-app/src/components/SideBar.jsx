import PersonalCard from "./PersonalCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

export default function SideBar({ isActive, cvData, handleChange }) {
  return (
    <aside>
      {isActive === "personal" ? (
        <PersonalCard cvData={cvData} handleChange={handleChange} />
      ) : isActive === "education" ? (
        <EducationCard cvData={cvData} handleChange={handleChange} />
      ) : (
        <ExperienceCard cvData={cvData} handleChange={handleChange} />
      )}
    </aside>
  );
}
