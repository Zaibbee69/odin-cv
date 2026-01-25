import Button from "./Button";

function Navbar({ handleDummyData }) {
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
          <Button
            handleDummyData={handleDummyData}
            text="Dummy Data"
            type="target"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
