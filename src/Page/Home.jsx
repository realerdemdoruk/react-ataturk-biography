import GetSlider from '../components/GetSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import GetCard from '../components/GetCard';

const Home = () => {
  return (
    <Container>
      <GetSlider />
      <GetCard />
    </Container>
  );
};

export default Home;
