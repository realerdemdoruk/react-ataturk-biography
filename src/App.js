import GetNavbar from './components/GetNavbar';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import GetCard from './components/GetCard';
import FamilyPage from './components/FamilyPage';

// import data from './components/FamilyMembers.json';
const App = () => {
  return (
    <div>
      <Container>
        <GetNavbar />
        <Main />
        <GetCard />
        <FamilyPage />
      </Container>
    </div>
  );
};

export default App;

// render(<AlertDismissibleExample />);
