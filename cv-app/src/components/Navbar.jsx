import Button from "./Button";
import "../styles/index.scss";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "20px",
      }}
    >
      <nav>
        <div>
          <Button text="Content" type="default" />
          <Button text="Customize" type="default" />
        </div>
        <div>
          <Button text="Download" type="target" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
