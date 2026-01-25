import { MdOutlineDateRange, MdOutlineLocationOn } from "react-icons/md";
import { FaAddressBook, FaBook, FaSchool } from "react-icons/fa";

export default function EducationCard({ cvData, handleChange }) {
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
            value={cvData.education.degree}
            onChange={(e) =>
              handleChange("education", "degree", e.target.value)
            }
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
            value={cvData.education.school}
            onChange={(e) =>
              handleChange("education", "school", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="st-date">
            <MdOutlineDateRange /> Start Date
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            placeholder="Enter Start Date"
            value={cvData.education.startDate}
            onChange={(e) =>
              handleChange("education", "startDate", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="endDate">
            <MdOutlineDateRange /> End Date
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
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
            value={cvData.education.location}
            onChange={(e) =>
              handleChange("education", "location", e.target.value)
            }
          />
        </div>
      </div>
    </section>
  );
}
