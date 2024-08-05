import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Doctor from '../components/Doctor';
import Header from '../components/Header';
import Footer from '../components/Footer';

const doctorsData = [
  {
    name: 'Dr. Harshil Patel',
    title: 'Consultant',
    specialization: 'Child care',
    image: '../images/childcare.jpg',
  },
  {
    name: 'Dr. Sahil Achhava',
    title: 'MBBS',
    specialization: 'Neurology',
    image: '../images/neurology.jpg',
  },
  {
    name: 'Dr. Dhruv Shah',
    title: 'MBBS, MS, DNB',
    specialization: 'General Surgery',
    image: '../images/generalsurgery.jpg',
  },
  {
    name: 'Dr. Vijeta Kumari',
    title: 'MBBS',
    specialization: 'Health Checkup',
    image: '../images/checkup.jpg',
  },
  {
    name: 'Dr. Yagnesh Patel',
    title: 'MD',
    specialization: 'Dermatology',
    image: '../images/derma.jpg',
  },
  {
    name: 'Dr. Namita Bhoj',
    title: 'MBBS, MS, MD',
    specialization: 'Eye Specialist',
    image: '../images/eyecheckup.jpg',
  },
  {
    name: 'Dr. Jeel Patel',
    title: 'MBBS',
    specialization: 'CCU & ICU',
    image: '../images/ccu.jpg',
  },
  {
    name: 'Dr. Harman',
    title: 'MBBS',
    specialization: 'Health Checkup',
    image: '../images/check2.jpg',
  },
  {
    name: 'Dr. Anjasha Singh',
    title: 'MBBS',
    specialization: 'Cardiothoracic Surgeon',
    image: '../images/heart.jpg',
  },
];

const Doctors = () => {
  return (
    <div>
      <Header />
      <Container>
        <h2 className="text-center my-5">DOCTORS</h2>
        <Row className="d-flex justify-content-center">
          {doctorsData.map((doctor, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center">
              <Doctor
                name={doctor.name}
                title={doctor.title}
                specialization={doctor.specialization}
                image={doctor.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Doctors;