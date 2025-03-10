import { useState } from "react";
import "./strategyCustomer.css";

const StrategyCustomer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const featureData = [
    {
      title: "Curate your video media collection with an AI-powered library",
      content: "Organize and manage your videos effortlessly with AI-driven tools.",
    },
    {
      title: "Build, Brand & Publish your Media",
      content: "Customize your video experience with powerful branding tools.",
    },
    {
      title: "Gate your media, capture leads & connect your CRM - it's easy",
      content: "Integrate video with your marketing stack for seamless lead generation.",
    },
    {
      title: "Track your views - with detailed analytics",
      content: "Gain insights into audience behavior and optimize engagement.",
    },
  ];

  return (
    <div className="strategy-container">
      {/* Header Section */}
      <div className="header">
        <p className="highlight-text">Elevate your video strategy</p>
        <h1 className="main-title">Seamless Video Management</h1>
        <p className="subtitle">
          Transform how you engage with your audience using Media+
        </p>
      </div>

      {/* Card Section */}
      <div className="stats-container">
        <div className="stat-card">
          <h2>2.5X</h2>
          <p>Lead Generation</p>
          <span>Boost watch time and drive more leads</span>
        </div>
        <div className="stat-card">
          <h2>3X</h2>
          <p>Publish Content Faster with AI</p>
          <span>Tailor made to get more views</span>
        </div>
        <div className="stat-card">
          <h2>30min</h2>
          <p>Setup</p>
          <span>Set up your video CMS in less than 30 minutes</span>
        </div>
      </div>

      {/* Demo Button */}
      <button className="demo-button">Request a Demo</button>

      {/* Why Choose Media+ Section */}
      <div className="why-media">
        <h3>Why choose Media+?</h3>
        <h2>
          Media+ turns video engagement <br /> into customer conversions
        </h2>
      </div>

      {/* Features Section with Accordion */}
      <div className="features-container">
        <div className="features">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${openIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <p>{feature.title}</p>
              <span>{openIndex === index ? "−" : "+"}</span>
              {openIndex === index && <p className="accordion-content">{feature.content}</p>}
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="feature-image">
          <img src="/images/Right.png" alt="Feature" />
        </div>
      </div>
    </div>
  );
};

export default StrategyCustomer;