import GetNavbar from './GetNavbar';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import GetCard from './GetCard';
import FamilyPage from './FamilyPage';
import GetFooter from './GetFooter';
import data from './FamilyMembers.json';

const Home = () => {
  return (
    <div>
      <Container>
        <GetNavbar />
        <Main />
        <GetCard />
        {/* <FamilyPage /> */}
        <GetFooter />
      </Container>
    </div>
  );
};

export default Home;
