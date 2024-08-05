import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.css'; // Import custom styles

const images = [
  '/images/new_surgical_block.png',
  '/images/eye_exam.png',
  '/images/rehabilitation.png',
  '/images/nursing_station.png',
  '/images/microscopy.png',
  '/images/surgery.png',
];

const Gallery = () => {
  return (
    <div>
      <Header />
      <div className="container my-5">
        <h2 className="text-center mb-4">Gallery</h2>
        <div className="row">
          {images.map((image, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <div className="card-body p-0">
                  <img src={image} className="img-fluid rounded" alt={`Gallery ${index}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
