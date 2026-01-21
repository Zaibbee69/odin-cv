import Button from "./Button";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
