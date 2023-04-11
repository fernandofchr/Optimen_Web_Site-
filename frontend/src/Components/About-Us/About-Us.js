//Autor: Martínez Aldavera Alma Yesenia 

import { useState } from 'react'; // Importa el hook 'useState' de React
import { Carousel } from 'react-bootstrap'; // Importa el componente Carousel de React Bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';

// Define el componente 'ControlledCarousel'
function ControlledCarousel() {
  // Crea un estado 'index' y su función 'setIndex' a través del hook 'useState'
  const [index, setIndex] = useState(0);

  // Define la función 'handleSelect' que actualizará el estado 'index' con el índice seleccionado
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Devuelve el componente Carousel de React Bootstrap con las imágenes y los títulos/captions
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/11/08/49/f-16-1816071_1280.jpg"
          alt="First slide"
          height="700px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2020/07/23/04/35/flyer-5430378_1280.jpg"
          alt="Second slide"
          height="700px"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2019/05/15/11/24/dji-4204801_1280.jpg"
          alt="Third slide"
          height="700px"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
