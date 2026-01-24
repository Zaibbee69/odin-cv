import { MdOutlineDateRange, MdOutlineLocationOn } from "react-icons/md";
import { FaAddressBook, FaBook, FaSchool } from "react-icons/fa";

export default function EducationCard() {
  return (
    <section className="education-ctn">
      <h2>
        <FaBook /> Education
      </h2>
      <div>
        <div>
          <label htmlFor="degree">
            <FaAddressBook /> Degree
          </label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Enter Degree / Field Of Study"
          />
        </div>
        <div>
          <label htmlFor="school">
            <FaSchool /> School
          </label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="Enter School / University"
          />
        </div>
        <div>
          <label htmlFor="st-date">
            <MdOutlineDateRange /> Start Date
          </label>
          <input
            type="date"
            name="st-date"
            id="st-date"
            placeholder="Enter Start Date"
          />
        </div>
        <div>
          <label htmlFor="ed-date">
            <MdOutlineDateRange /> End Date
          </label>
          <input
            type="date"
            name="ed-date"
            id="ed-date"
            placeholder="Enter End Date"
          />
        </div>
        <div>
          <label htmlFor="location">
            <MdOutlineLocationOn /> Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="City, Country"
          />
        </div>
      </div>
    </section>
  );
}
