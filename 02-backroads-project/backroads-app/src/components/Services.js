import React from "react";
import Title from "./Title";
import { services } from "./data.js";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            // Great example of spread operator usage
            <Service key={service.id} {...service} />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
