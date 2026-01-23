import { MdOutlineMail, MdPhone, MdOutlineLocationOn } from "react-icons/md";
import CVHeader from "./CVHeader";
import CVBody from "./CVBody";

export default function CV() {
  return (
    <section className="cv-ctn">
      <div className="cv-header-ctn">
        <div>
          <h1>Jahan Zaib</h1>
          <h3>Software Developer</h3>
        </div>
        <div>
          <p>
            <MdOutlineMail /> zabiijaz1@gmail.com
          </p>
          <p>
            <MdPhone /> 03035336569
          </p>
          <p>
            <MdOutlineLocationOn />
            London, UK
          </p>
        </div>
      </div>
      <div className="cv-body-ctn">
        <CVHeader text="Education" />
        <div className="cv-body-element">
          <CVBody
            date="08/2020 - present"
            location="London Uk"
            institute="London City University"
            degree="Bachelors in Economics"
          />
        </div>
        <div className="cv-body-element">
          <CVBody
            date="08/2020 - present"
            location="London Uk"
            institute="London City University"
            degree="Bachelors in Economics"
          />
        </div>

        <CVHeader text="Education" />
        <div className="cv-body-element">
          <CVBody
            date="08/2020 - present"
            location="London Uk"
            institute="London City University"
            degree="Bachelors in Economics"
          />
        </div>
        <div className="cv-body-element">
          <CVBody
            date="08/2020 - present"
            location="London Uk"
            institute="London City University"
            degree="Bachelors in Economics"
          />
        </div>
      </div>
    </section>
  );
}
