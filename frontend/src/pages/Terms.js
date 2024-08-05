import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Terms.css'; // Import custom styles

const Terms = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <h2 className="text-center mb-4">Terms and Conditions</h2>
        <div className="card shadow-sm">
          <div className="card-body">
            <p>
              Welcome to Central Coalfields Limited (CCL) Hospital. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern CCL's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
            </p>
            <h5>Use of the Website</h5>
            <p>
              The content of the pages of this website is for your general information and use only. It is subject to change without notice.
            </p>
            <h5>Privacy</h5>
            <p>
              Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
            </p>
            <h5>Links to Other Websites</h5>
            <p>
              From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
            </p>
            <h5>Governing Law</h5>
            <p>
              Your use of this website and any dispute arising out of such use of the website is subject to the laws of India.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
