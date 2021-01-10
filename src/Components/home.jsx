import React from "react";
import Header from "./Header";
import Animation from "./Anime/Animation";
import Footer from "./Footer"
import About from "./About"
import Contact from "./Contact"


function Home() {
  return (
    <div>
       <Header />
       <Animation />
       <About /> 
       <Contact />
       <Footer />
    </div>
  );
}
export default Home;