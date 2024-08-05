import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Import custom styles

const About = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <h2 className="text-center mb-4">ABOUT US</h2>
        <p className="text-center mb-5">Central Coalfields Limited is a Category-I Mini-Ratna Company since October 2007. Formed on 1st November 1975, CCL was one of the five subsidiaries of Coal India Ltd. which was the first holding company for coal in the country .</p>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text">To emerge as a National player in the Primary Energy Sector, committed to provide energy security to the Country, by attaining environmentally and Socially Sustainable Growth, through best practices from Mine to Market.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text">The Mission of Central Coalfields Limited (CCL) is to produce and market the planned quantity of Coal and Coal products efficiently and economically in an Eco-Friendly manner, with due regard to Safety, Conservation, and Quality.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Our Objectives</h5>
                <p className="card-text">
                  To optimize resource generation, maintain high safety standards, emphasize afforestation, modernize mines, and improve employee quality of life and community wellbeing. Enhance CSR activities in health and water in villages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
