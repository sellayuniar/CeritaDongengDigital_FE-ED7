import TentangAkun from '../../components/Akun/tentangAkun';
import WelcomeText from '../../components/Akun/WelcomeText';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './index.css';
import Footer from '../../components/Footer';
import NavbarHome from '../../components/Navbar';
import { Link } from 'react-router-dom';

const Profil = () => {
  return (
    <>
      <NavbarHome />
      <div className="profil-section">
        <Container>
          <Row>
            <Col md="4">
              <TentangAkun />
            </Col>
            <Col md="8">
              <WelcomeText />
              <div className="edit-akun">
                <hr />
                <Link to="/daftar-bacaan">
                  <Button variant="link">Disukai oleh Anda</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Profil;
