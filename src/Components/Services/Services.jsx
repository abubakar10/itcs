import React from "react";
import ServicesHero from "./ServicesHero/ServicesHero";
import ServicesGrid from "./ServicesGrid/ServicesGrid";
import ServicesSatisfaction from "./ServicesSatisfaction/ServicesSatisfaction";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesSatisfaction />
    </>
  );
};

export default Services;
