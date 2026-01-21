import {
  MdDriveFileRenameOutline,
  MdOutlineMail,
  MdPhone,
  MdTitle,
} from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

export default function SideBar() {
  return (
    <aside>
      <section className="personal-details-ctn">
        <h2>
          <FaPerson /> Personal Details
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

      <section className="education-ctn"></section>
    </aside>
  );
}
