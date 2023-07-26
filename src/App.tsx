import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar.tsx";
import SelectedPage from "@/shared/types";
import Home from "@/components/Home.tsx";
import Benefits from "@/components/Benefits.tsx";
import OurClasses from "@/components/OurClasses.tsx";
import ContactUs from "@/components/ContactUs.tsx";
import Footer from "@/components/Footer.tsx"

function App() {
  const [selectedPage,setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopPage,setIsTopPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      }else setIsTopPage(false);
    }
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  });
  return (
    <div className="app bg-gray-20 ">
      <Navbar isTopPage={isTopPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )
}

export default App