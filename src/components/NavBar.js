import "../Styles/NavBar-module.css";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";

//  "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=8618b3d831e9d657b3baac2facdfe14d"
function NavBar() {
  // let type;
  // let [current, setCurrent] = useState({});
  // let [location, setLocation] = useState({});
  // let [Temp, setTemp] = useState();

  //c9f8ac3eb82f05a77a780df0ac9761db0287f8c1e74033771c301a0499a1581c
  // 16ffac033d1144a5947130937213010 (WEATHER API NEW)
  // http://api.weatherapi.com/v1/current.json?key=70969e9c908149eb960131625213010&q=London&aqi=no
  //www.timeapi.io/api/Time/current/zone?timeZone=Asia/riyadh
  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://api.weatherapi.com/v1/current.json?key=70969e9c908149eb960131625213010&q=London&aqi=no"
  //     )
  //     .then((data) => {
  //       console.log(data.data);
  //       setTemp(data.data.current.temp_c);
  //       setCurrent(data.data.current);
  //       setLocation(data.data.location);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [type]);

  return (
    <div>
      <Navbar className="NavBar">
        <Container>
          <Navbar.Brand href="/">
            Social media <kbd>Beta</kbd>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default NavBar;
