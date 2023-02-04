import Carousel from 'react-bootstrap/Carousel';
import './Carouse.css';

function Carouse() {
  return (
    <div class="container" id='carose'>
    <Carousel> 
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="images/c.jpeg" height="400rem"  width="400px"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/ca.jpeg"  height="400rem" width="180px"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/car.jpeg" width="180px" height="400rem" 
          alt="third slide"
        />

       
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carouse;