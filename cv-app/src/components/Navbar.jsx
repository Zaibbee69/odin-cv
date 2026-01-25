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
          <h2>
            Resume<span>Kit.io</span>
          </h2>
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
