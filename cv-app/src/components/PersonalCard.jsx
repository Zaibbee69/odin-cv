import {
  MdDriveFileRenameOutline,
  MdOutlineMail,
  MdPhone,
  MdTitle,
} from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

export default function PersonalCard({ cvData, handleChange }) {
  return (
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
            value={cvData.personal.fullname}
            onChange={(e) =>
              handleChange("personal", "fullname", e.target.value)
            }
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
            value={cvData.personal.title}
            onChange={(e) => handleChange("personal", "title", e.target.value)}
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
            value={cvData.personal.email}
            onChange={(e) => handleChange("personal", "email", e.target.value)}
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
            value={cvData.personal.phone}
            onChange={(e) => handleChange("personal", "phone", e.target.value)}
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
            value={cvData.personal.address}
            onChange={(e) =>
              handleChange("personal", "address", e.target.value)
            }
          />
        </div>
      </div>
    </section>
  );
}
