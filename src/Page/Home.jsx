import "bootstrap/dist/css/bootstrap.min.css";
import GetCard from "../components/GetCard";
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <>
        <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://iasbh.tmgrup.com.tr/3c77ea/1200/627/0/0/1200/627?u=https://isbh.tmgrup.com.tr/sbh/2022/10/31/ataturk-nasil-oldu-mustafa-kemal-ataturk-neden-nerede-kac-yasinda-vefat-etti-e1-1667210613378.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h6>Memleketin efendisi hakiki müstahsil olan köylüdür. </h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
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
            className="d-block h-25 w-100"
            src="https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2019/12/15/234621-1618872387.jpg?itok=zFTxHf5b"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h6>
              Süngülerle, silahlarla ve kanla kazandığımız askeri zaferlerden
              sonra, kültür, bilim, fen ve ekonomi alanlarında da zaferler
              kazanmaya devam edeceğiz.
            </h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
      <GetCard />




    </>
  );
};

export default Home;
