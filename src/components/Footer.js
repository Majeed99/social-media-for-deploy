import Navbar from "react-bootstrap/Navbar";
import "../Styles/Footer-module.css";
import Container from "react-bootstrap/Container";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { CgComponents } from "react-icons/cg";

//  "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=8618b3d831e9d657b3baac2facdfe14d"
function Footer() {
  return (
    <div>
      <Navbar className="footer">
        <Container>
          <Navbar.Brand href="/">
            <AiFillHome />
          </Navbar.Brand>
          <Navbar.Brand href="/Posts">
            <CgComponents />
          </Navbar.Brand>
          <Navbar.Brand href="/AboutUs">
            <BsFillInfoCircleFill />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Footer;
