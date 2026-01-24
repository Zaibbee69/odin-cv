import {
  MdCastForEducation,
  MdOutlineDateRange,
  MdOutlineLocationOn,
  MdOutlineDescription,
} from "react-icons/md";
import { FaBook, FaLandmark } from "react-icons/fa";

export default function ExperienceCard() {
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
        <div>
          <label htmlFor="description">
            <MdOutlineDescription /> Description
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Enter Description"
          ></textarea>
        </div>
      </div>
    </section>
  );
}
