import React from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import HeroVideo from "./components/HeroVideo/heroVideo.jsx";
import StrategyCustomer from "./components/strategyCustomer/strategyCustomer.jsx";
import MidVideo from "./components/midVideo/midVideo.jsx";
import Slider from "./components/2ndSlider/2ndSlider.jsx";
import ImageSlider from "./components/sliders/slider.jsx";
// Import SliderApp instead of Slider



import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <HeroVideo />
      <StrategyCustomer />
      <ImageSlider />
      <MidVideo />
      <Slider/>
     
      

    </div>
  );
};

export default App;