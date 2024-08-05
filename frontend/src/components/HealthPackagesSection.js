import React from 'react';

const HealthPackagesSection = () => {
  return (
    <section className="health-packages-section">
      <h2>Health Packages</h2>
      <div className="packages-list">
        <div className="package-item">
          <h3>CCL BASIC WELLNESS</h3>
          <p>CBC, Blood Group & RH, Urine (Routine & Micro)</p>
          <p>For ₹1500/-</p>
        </div>
        <div className="package-item">
          <h3>CCL GOLD WELLNESS</h3>
          <p>CBC, Blood Group & RH, Urine (Routine & Micro), SGPT</p>
          <p>For ₹3000/-</p>
        </div>
        <div className="package-item">
          <h3>CCL HAPPY HEART</h3>
          <p>Lipid Profile, ECG, Chest X-RAY, FBS, Basic Wellness Included</p>
          <p>For ₹4500/-</p>
        </div>
        <div className="package-item">
          <h3>CCL PLATINUM WELLNESS</h3>
          <p>Basic Wellness Plan, Lung Function Tests, USG Abdomen, Thyroid All Tests, Lung Efficiency Tests</p>
          <p>For ₹8000/-</p>
        </div>
      </div>
    </section>
  );
};

export default HealthPackagesSection;
