import React from 'react';
import './HowToUse.css'; 

export const HowToUse = () => {
  return (
    <div className="how-to-use-container">
      <h1>How to Use Our Website</h1>

      <section className="section">
        <h2>1. Create an Account</h2>
        <p>
          To get started, you need to create an account on our website. Click on the "Sign Up" button and fill in the required information.
        </p>
        <img src="/images/signup_screenshot.png" alt="Sign Up Screenshot" />
      </section>

      <section className="section">
        <h2>2. Browse NGO Projects</h2>
        <p>
          Once you're logged in, you can browse through various NGO projects available on our platform. Use the search and filter options to find projects that match your interests and location.
        </p>
        <img src="/images/browse_projects_screenshot.png" alt="Browse Projects Screenshot" />
      </section>

      <section className="section">
        <h2>3. Apply for Volunteering</h2>
        <p>
          When you find a project that interests you, click on the "Apply" button to express your interest. The NGO will review your application and get in touch with you for further steps.
        </p>
        <img src="/images/apply_screenshot.png" alt="Apply Screenshot" />
      </section>

      <section className="section">
        <h2>4. Showcase Your NGO's Work</h2>
        <p>
          NGOs can showcase their work by creating an account and registering their organization. Once approved, they can add projects, upload images, and share information about their activities and impact.
        </p>
        <img src="/images/ngo_dashboard_screenshot.png" alt="NGO Dashboard Screenshot" />
      </section>

      <section className="section">
        <h2>5. Donate to NGOs</h2>
        <p>
          You can support NGOs by making donations directly through our platform. We provide a secure payment gateway to facilitate hassle-free donations.
        </p>
        <img src="/images/donate_screenshot.png" alt="Donate Screenshot" />
      </section>

      <section className="section">
        <h2>6. Communicate with Others</h2>
        <p>
          Use our messaging system to communicate with NGOs or volunteers directly. Additionally, we provide contact information on the NGO's profile for further communication.
        </p>
        <img src="/images/messaging_screenshot.png" alt="Messaging Screenshot" />
      </section>
      
      <section className="section">
        <h2>7. Leave Reviews</h2>
        <p>
          You can leave reviews based on your experience working with an NGO or a volunteer. Your feedback will help others make informed decisions.
        </p>
        <img src="/images/review_screenshot.png" alt="Review Screenshot" />
      </section>

      
    </div>
  );
};

