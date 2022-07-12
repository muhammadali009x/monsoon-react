import React, { useState } from "react";
import DateTime from "../Components/DateTime";
import { IoIosCloud } from 'react-icons/io';
import { GiHeatHaze } from 'react-icons/gi';
import "../css/weather.css";
import WEATHER_API from "../env"

document.title = "MONsoon | Weather Updates";
export default function Weather() {
    const apiKey = WEATHER_API;
    const [searchText, setSearchText] = useState("");
    const [city_name, setCity_name] = useState("Get Output Here");
    const [tempVal, setTempVal] = useState(0);
    const [tempResultVisiblity, setTempResultVisiblity] = useState("hidden");
    const [tempStatus, setTempStatus] = useState("");

    const changeHandler = (e) => {
        setSearchText(e.target.value)
    }
    const searchCity = (e) => {
        e.preventDefault();
        if (searchText === "") {
            setCity_name("Please enter valid city name.")
        }
        else {
            setCity_name("Loading ...")
            let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=metric&APPID=${apiKey}`
            let temperature;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    setCity_name(searchText)
                    temperature = Math.floor(data.main.temp)
                    setTempVal(temperature)
                    setTempStatus(data.weather[0].main)

                    if(data.weather[0].main === "Clouds"){
                        setTempStatus(<><IoIosCloud className="tempStatus tmStatus"/>{data.weather[0].main}</> );
                    }
                    else if(data.weather[0].main === "Rain"){
                        setTempStatus(
                        <>
                            <img src="https://media.giphy.com/media/3ov9jCEFMBtCy54q6Q/giphy.gif"
                            className="fa fa-cloud-rain tmStatus" color="grey"/>
                            {data.weather[0].main}
                        </>
                        )
                    }
                    else if(data.weather[0].main === "Haze"){
                        setTempStatus(<><GiHeatHaze className="tempStatus"/> {data.weather[0].main}</>);
                    }
                    else{
                        setTempStatus(data.weather[0].main)
                    }
                })
                .catch((error) => {
                    console.log(error)
                    setCity_name("Please enter valid text")
                })
        }
    }
    React.useEffect(() => {
        if (tempVal === 0) {
            setTempResultVisiblity("hidden")
        }
        else {
            setTempResultVisiblity("visible")
        }
    }, [tempVal])
    return (
        <div className="container-fluid main_header" >
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <div className="">
                        <div className="main_content">
                            <form onSubmit={searchCity} className="temp_form">
                                <input
                                    type="text"
                                    id="cityName"
                                    placeholder="Enter your city Name: "
                                    autocomplete="off"
                                    onChange={changeHandler}
                                />
                                <input type="submit" value="Search" id="btnSearch" />
                            </form>
                        </div>
                        <div className="tempInfo">
                            <div className="TopLayer">
                                <DateTime />
                            </div>
                            <div className="main_Layer">
                                <p id="city_name">{city_name}</p>
                                <div className="midLayer data_hide" style={{ visibility: tempResultVisiblity }}>
                                    <p id="temp"><span id="tempVal">{tempVal}</span><sup>o</sup><span>C</span></p>
                                    <p id="temp_status">{tempStatus}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}