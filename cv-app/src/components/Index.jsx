import CV from "./CV";
import SideBar from "./SideBar";

export default function Index() {
  return (
    <main
      style={{
        marginTop: "20px",
      }}
    >
      <SideBar />
      <CV />
    </main>
  );
}
