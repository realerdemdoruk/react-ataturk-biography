import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Main = () => {
  return (
    <div className="w-75 mx-auto h-50 shadow">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://geoim.bloomberght.com/2019/11/10/ver1573440686/2237629_360x203.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h6>Memleketin efendisi hakiki müstahsil olan köylüdür. </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.yemek.com/mncrop/940/625/uploads/2019/11/ataturk-anilari-10.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h6>
              Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim
              fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu
              yeterlidir.
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2019/12/15/234621-1618872387.jpg?itok=zFTxHf5b"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h6>
              Süngülerle, silahlarla ve kanla kazandığımız askeri zaferlerden
              sonra, kültür, bilim, fen ve ekonomi alanlarında da zaferler
              kazanmaya devam edeceğiz.{' '}
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Main;
