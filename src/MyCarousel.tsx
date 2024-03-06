import Carousel from 'react-bootstrap/Carousel';
import Sunflower from './components/sunflower.jpg';
import Tulips from './components/tulips.webp'
import Wildflowerfield from './components/wildflower-field.jpeg'
import "./MyCarousel.css"

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={20000}>
        <img className="carousel-img" src={Sunflower} />
        <Carousel.Caption>
          <h3>Sunflowers</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={20000}>
      <img className="carousel-img" src={Tulips} />
        <Carousel.Caption>
          <h3>Tulips</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={20000}>
      <img className="carousel-img" src={Wildflowerfield} />
        <Carousel.Caption>
          <h3>Wildflowers</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;