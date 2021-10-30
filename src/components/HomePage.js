import "../Styles/HomePage-module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
function HomePage() {
  let cities = ["Riyadh", "Dammam", "Jeddah", "London", "New York"];
  let [type, setType] = useState("riyadh");
  let [current, setCurrent] = useState({});
  let [location, setLocation] = useState({});
  let [Temp, setTemp] = useState();
  const [value, setValue] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=70969e9c908149eb960131625213010&q=" +
          type +
          "&aqi=no"
      )
      .then((data) => {
        console.log(data.data);
        setTemp(data.data.current.temp_c);
        setLocation(data.data.location);
        setCurrent(data.data.current);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type]);

  return (
    <div className="text-center">
      <h1 className="py-3"> Weather&Time API </h1>
      <DropdownButton key="Secondary" title="Change city ">
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
          value={value}
        />
        <Dropdown.Divider />
        {cities
          .filter((e) => {
            if (value === "") return e;
            else {
              let flag = true;
              for (let x = 0; x < value.length; x++) {
                if (value[x].toLowerCase() !== e[x].toLowerCase()) flag = false;
              }
              if (flag === true) return e;
            }
          })
          .map((e) => (
            <Dropdown.Item
              eventKey="1"
              onClick={() => {
                setType(e);
              }}
            >
              {e}
            </Dropdown.Item>
          ))}
      </DropdownButton>
      <button
        className="btn m-1 btn-secondary"
        onClick={() => {
          setTemp(current.temp_f);
        }}
      >
        F
      </button>
      <button
        className="btn m-1 btn-secondary"
        onClick={() => {
          setTemp(current.temp_c);
        }}
      >
        C
      </button>

      <div className="weatherCard">
        <div>
          <h5>
            {location.country} ,{location.name}{" "}
          </h5>
        </div>
        <div>
          <h5>{location.localtime} </h5>
        </div>
        <div>
          <h3>{Temp}°</h3>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
