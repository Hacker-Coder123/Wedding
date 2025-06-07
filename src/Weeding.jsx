import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weeding() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="carousel"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGQ0GaAET-8btNBq8C3tSPc9Zf9nB8KZxTQ&s"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGQ0GaAET-8btNBq8C3tSPc9Zf9nB8KZxTQ&s"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGQ0GaAET-8btNBq8C3tSPc9Zf9nB8KZxTQ&s"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
