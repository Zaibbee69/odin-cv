import {
  MdCastForEducation,
  MdOutlineDateRange,
  MdOutlineLocationOn,
  MdOutlineDescription,
} from "react-icons/md";
import { FaBook, FaLandmark } from "react-icons/fa";

export default function ExperienceCard({ cvData, handleChange }) {
  return (
    <section className="experience-ctn">
      <h2>
        <FaBook /> Experience
      </h2>
      <div>
        <div>
          <label htmlFor="company">
            <FaLandmark /> Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Enter Company Name"
            value={cvData.experience.company}
            onChange={(e) =>
              handleChange("experience", "company", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="position">
            <MdCastForEducation /> Position
          </label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Enter Position Title"
            value={cvData.experience.position}
            onChange={(e) =>
              handleChange("experience", "position", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="startDate">
            <MdOutlineDateRange /> Start Date
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            placeholder="Enter Start Date"
            value={cvData.experience.startDate}
            onChange={(e) =>
              handleChange("experience", "startDate", e.target.value)
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
            value={cvData.experience.location}
            onChange={(e) =>
              handleChange("experience", "location", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="description">
            <MdOutlineDescription /> Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter Description"
            value={cvData.experience.description}
            onChange={(e) =>
              handleChange("experience", "description", e.target.value)
            }
          ></textarea>
        </div>
      </div>
    </section>
  );
}
