import React from "react";
import Heading from "./Heading.jsx";
import Accordion from "./Accordion.js";
import Bottom from "./Bottom.jsx";

const Faq = () => {
  return (
    <>
    <br />
      <Heading />
      
      <br />
      <Accordion 
      title="How can my NGO showcase its work on this platform?"
      content="To showcase your NGO's work, you can create an account and register your organization. Once approved, you can add projects, upload images, and share information about your activities and impact."
      />
      <Accordion 
      title="Is there a fee for NGOs to use this platform? "
      content=" No, our platform is free for NGOs to join and showcase their work. We aim to support NGOs in reaching a wider audience and connecting with potential volunteers. "
      />
      <Accordion 
      title="How can my NGO attract more volunteers? "
      content="Make sure to provide comprehensive information about your projects and the volunteering opportunities available. Highlight the impact of your work and the difference volunteers can make by joining your organization. "
      />
      <Accordion 
      title="How can I find volunteering opportunities near me? "
      content="You can search for volunteering opportunities based on your location and interests. Once you create an account, you'll have access to a list of available projects and NGOs in your area. "
      />
      <Accordion 
      title="How do I apply to volunteer for a specific project? "
      content="Once you find a project that interests you, click on the 'Apply' button to express your interest. The NGO will review your application and get in touch with you for further steps. "
      />
      <Accordion 
      title="What skills are required to volunteer? "
      content="Different projects may require various skills, but there are opportunities for everyone, regardless of their expertise. Some projects may need specialized skills, while others might require only enthusiasm and a willingness to help. "
      />
      <br />
      <br />
      <Bottom />
    </>
  );
};

export default Faq;
