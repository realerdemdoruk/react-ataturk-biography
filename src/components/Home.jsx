import GetNavbar from './GetNavbar';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import GetCard from './GetCard';
import FamilyPage from './FamilyPage';
import GetFooter from './GetFooter';
import data from './FamilyMembers.json';
import BooksPage from './BooksPage';

const Home = () => {
  return (
    <div>
      <Container>
        <GetNavbar />
        <Main />
        {/* <Books /> */}
        <GetCard />
        {/* <FamilyPage /> */}
        <GetFooter />
      </Container>
    </div>
  );
};

export default Home;
