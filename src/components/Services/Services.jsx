import React from "react";
import Service from "../Service/Service.jsx";
import styles from "./Services.module.css";
import fan from '../../../public/images/serviceIcons/fan.svg';
import installation from '../../../public/images/serviceIcons/installation.svg';
import maintenance from '../../../public/images/serviceIcons/maintenance.svg';
import troubleshoot from '../../../public/images/serviceIcons/troubleshoot.svg';
import worker from '../../../public/images/serviceIcons/worker.svg';



const Services = () => (
  <section id="services" className="p-8 mt-11 bg-white rounded-lg shadow">
    <h2 className="font-bold sm:text-3xl text-xl mb-5">
      Our Professional Services
    </h2>
    <p className="text-center mb-11 sm:text-xl">
    Here at Tempset HVAC Services, we make every effort to achieve your satisfaction.
    </p>
    <div
      className={`grid items-center justify-evenly ${styles["services-container"]} gap-y-8`}
    >
      <Service name="FREE Estimates" icon={fan} description="Estimates are free, including commercial work. Give our team a call to schedule an appointment and help answer any questions you may have."/>
      <Service name="Troubleshooting" icon={troubleshoot} description="Not sure what is wrong with your HVAC system? Let us help you figure out what the next steps are in order to get your unit operating safely"/>
      <Service name="Installations" icon={installation} description="Call now to schedule an installation, our technicians will ensure your unit is safely installed. Not sure which unit is best for your home or business? Give us a call and let us help you make that choice easier for you."/>
      <Service name="Maintenance" icon={maintenance} description="We can schedule regular service appointments to keep your unit running and maximize the lifespan."/>
      <Service name="Repairs" icon={worker} description="We believe that no job is too small or too big. Our technicians will ensure that all of your concerns are taken care of."/>
    </div>
  </section>
);

export default Services;
