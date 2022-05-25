import React from "react";
import Business from "../Business/Business";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import Team from "../Team/Team";
import Tools from "../Tools/Tools";
import Bannerr from "./Bannerr";

const Home = () => {
  return (
    <div>
     
    
      <Bannerr></Bannerr>
      <Tools></Tools>
      <Category></Category>
      <Team></Team>
      <Review></Review>
      <Gallery></Gallery>
      <Business></Business>
      
    </div>
  );
};

export default Home;
