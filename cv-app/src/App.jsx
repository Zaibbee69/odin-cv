import Navbar from "./components/Navbar.jsx";
import Index from "./components/Index.jsx";
import { useState } from "react";

function App() {
  const [btnData, setBtnData] = useState({
    personal: {
      fullname: "",
      title: "",
      email: "",
      phone: "",
      address: "",
    },
    education: {
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
      location: "",
    },
    experience: {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
  });

  function handleDummyData() {
    setBtnData({
      personal: {
        fullname: "Tom Cruise",
        title: "Actor",
        email: "tommyboi69@gmail.com",
        phone: "0501 5696 902",
        address: "Cleveland, Ohio",
      },
      education: {
        degree: "BS Economics",
        school: "Harvard Institute Of Sciences",
        startDate: "14th Nov, 2004",
        endDate: "15th Feb, 2010",
        location: "UK, London",
      },
      experience: {
        company: "Paramount Studios",
        position: "Director",
        startDate: "17th Dec, 2011",
        endDate: "20th Oct, 2022",
        location: "Florida, USA",
        description:
          "I was the director head at Paramount Studios for over a decade, over my time their i directed several movies that were blockbuster and cinematic thrillers, under my leadership many actors prospered",
      },
    });
  }
  return (
    <>
      <Navbar handleDummyData={handleDummyData} />
      <Index btnData={btnData} />
    </>
  );
}

export default App;
