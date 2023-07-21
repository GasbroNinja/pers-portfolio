import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './Navigation';
import "../App.css"
import Background from './Background';

const Home = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Container fluid className="p-0 m-0">
        <Background />
        <Navigation />
      </Container>
    </Container>
  );
}

export default Home