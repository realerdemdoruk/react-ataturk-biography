import Main from '../Page/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import GetCard from '../components/GetCard';

const Home = () => {
  return (
    <div>
      <Container>
        <Main />
        {/* <Books /> */}
        <GetCard />
        {/* <FamilyPage /> */}
        {/* <GetFooter /> */}
      </Container>
    </div>
  );
};

export default Home;
