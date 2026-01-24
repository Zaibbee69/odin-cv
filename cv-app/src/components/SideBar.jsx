import PersonalCard from "./PersonalCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";

export default function SideBar({ isActive }) {
  return (
    <aside>
      {isActive === "personal" ? (
        <PersonalCard />
      ) : isActive === "education" ? (
        <EducationCard />
      ) : (
        <ExperienceCard />
      )}
    </aside>
  );
}
