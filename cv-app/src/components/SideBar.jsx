import {
  MdCastForEducation,
  MdDriveFileRenameOutline,
  MdOutlineMail,
  MdPhone,
  MdTitle,
  MdOutlineDateRange,
  MdOutlineLocationOn,
  MdOutlineDescription,
} from "react-icons/md";
import { FaAddressBook, FaBook, FaSchool, FaLandmark } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

export default function SideBar() {
  return (
    <aside>
      <section className="personal-details-ctn">
        <h2>
          <FaPerson /> Personal
        </h2>
        <div>
          <div>
            <label htmlFor="fullname">
              <MdDriveFileRenameOutline /> Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter your title, first- and last name"
            />
          </div>
          <div>
            <label htmlFor="title">
              <MdTitle /> Professional title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Target position or current role"
            />
          </div>
          <div>
            <label htmlFor="email">
              <MdOutlineMail /> Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label htmlFor="phone">
              <MdPhone /> Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter phone"
            />
          </div>
          <div>
            <label htmlFor="address">
              <FaAddressBook /> Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="City, Country"
            />
          </div>
        </div>
      </section>

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
    </aside>
  );
}
