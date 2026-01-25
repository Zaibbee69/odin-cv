import { MdOutlineMail, MdPhone, MdOutlineLocationOn } from "react-icons/md";
import CVHeader from "./CVHeader";
import CVBody from "./CVBody";

export default function CV({ cvData }) {
  return (
    <section className="cv-ctn">
      <div className="cv-header-ctn">
        <div>
          <h1>{cvData.personal.fullname}</h1>
          <h3>{cvData.personal.title}</h3>
        </div>
        <div>
          <p>
            <MdOutlineMail /> {cvData.personal.email}
          </p>
          <p>
            <MdPhone /> {cvData.personal.phone}
          </p>
          <p>
            <MdOutlineLocationOn />
            {cvData.personal.address}
          </p>
        </div>
      </div>
      <div className="cv-body-ctn">
        <CVHeader text="Education" />
        <div className="cv-body-element">
          <CVBody
            date={cvData.education.startDate}
            location={cvData.education.location}
            institute={cvData.education.school}
            degree={cvData.education.degree}
          />
        </div>
        <div className="cv-body-element">
          <CVBody
            date={cvData.education.startDate}
            location={cvData.education.location}
            institute={cvData.education.school}
            degree={cvData.education.degree}
          />
        </div>

        <CVHeader text="Experience" />
        <div className="cv-body-element">
          <CVBody
            date={cvData.experience.startDate}
            location={cvData.experience.location}
            institute={cvData.experience.company}
            degree={cvData.experience.position}
          />
        </div>
      </div>
    </section>
  );
}
